import { useState, useEffect, useCallback } from 'react';
import { 
  updateMemberRating, 
  updateLeaderRating, 
  getTeamRatings,
  getAllTeamsWithRatings 
} from '@/services/ratingService';
import { supabase } from '@/integrations/supabase/client';

export const useRatings = (teamId?: number) => {
  const [ratings, setRatings] = useState<{
    leaderRating: number;
    memberRatings: Array<{ id: string; name: string; rating: number; team_id: number; }>;
  }>({
    leaderRating: 0,
    memberRatings: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load ratings for a specific team
  const loadTeamRatings = useCallback(async () => {
    if (!teamId) return;
    
    try {
      setIsLoading(true);
      setError(null);
      const data = await getTeamRatings(teamId);
      setRatings(data);
    } catch (err) {
      console.error('Error loading team ratings:', err);
      setError('Failed to load ratings');
    } finally {
      setIsLoading(false);
    }
  }, [teamId]);

  // Update member rating
  const rateMember = useCallback(async (memberName: string, rating: number): Promise<boolean> => {
    if (!teamId) return false;
    
    try {
      const success = await updateMemberRating(teamId, memberName, rating);
      if (success) {
        // Update local state
        setRatings(prev => ({
          ...prev,
          memberRatings: prev.memberRatings.map(member => 
            member.name === memberName 
              ? { ...member, rating }
              : member
          )
        }));
        
        // Refresh to get latest data
        await loadTeamRatings();
      }
      return success;
    } catch (error) {
      console.error('Error rating member:', error);
      return false;
    }
  }, [teamId, loadTeamRatings]);

  // Update leader rating
  const rateLeader = useCallback(async (rating: number): Promise<boolean> => {
    if (!teamId) return false;
    
    try {
      const success = await updateLeaderRating(teamId, rating);
      if (success) {
        // Update local state
        setRatings(prev => ({
          ...prev,
          leaderRating: rating
        }));
      }
      return success;
    } catch (error) {
      console.error('Error rating leader:', error);
      return false;
    }
  }, [teamId]);

  // Get member rating by name
  const getMemberRating = useCallback((memberName: string): number => {
    const member = ratings.memberRatings.find(m => m.name === memberName);
    return member?.rating || 0;
  }, [ratings.memberRatings]);

  // Set up real-time subscriptions
  useEffect(() => {
    if (!teamId) return;

    loadTeamRatings();

    // Subscribe to real-time updates
    const channel = supabase
      .channel(`ratings-${teamId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'team_members',
          filter: `team_id=eq.${teamId}`
        },
        () => {
          console.log('Member rating updated, refreshing...');
          loadTeamRatings();
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'teams',
          filter: `id=eq.${teamId}`
        },
        () => {
          console.log('Team rating updated, refreshing...');
          loadTeamRatings();
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [teamId, loadTeamRatings]);

  return {
    ratings,
    isLoading,
    error,
    rateMember,
    rateLeader,
    getMemberRating,
    refresh: loadTeamRatings
  };
};

// Hook for admin dashboard that loads all teams
export const useAllRatings = () => {
  const [allData, setAllData] = useState<{
    teams: Array<any>;
    members: Array<any>;
  }>({
    teams: [],
    members: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAllRatings = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getAllTeamsWithRatings();
      setAllData(data);
    } catch (err) {
      console.error('Error loading all ratings:', err);
      setError('Failed to load ratings');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAllRatings();

    // Subscribe to all rating changes
    const channel = supabase
      .channel('all-ratings')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'team_members'
        },
        () => {
          console.log('Member ratings updated, refreshing all...');
          loadAllRatings();
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'teams'
        },
        () => {
          console.log('Team ratings updated, refreshing all...');
          loadAllRatings();
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [loadAllRatings]);

  return {
    allData,
    isLoading,
    error,
    refresh: loadAllRatings
  };
};