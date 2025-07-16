
import { useState, useEffect, useCallback } from 'react';
import { 
  AdminTeamData, 
  fetchTeamsForAdmin, 
  subscribeToAdminUpdates, 
  updateTeamProgressInDB, 
  updateMemberRatingInDB 
} from '@/services/adminRealtimeService';
import { RealtimeChannel } from '@supabase/supabase-js';

export const useAdminRealtime = () => {
  const [teams, setTeams] = useState<AdminTeamData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load initial data
  const loadTeams = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const teamsData = await fetchTeamsForAdmin();
      setTeams(teamsData);
    } catch (err) {
      console.error('Error loading teams:', err);
      setError('Failed to load teams');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle real-time team progress updates
  const handleTeamUpdate = useCallback((teamId: number, progress: number) => {
    setTeams(prevTeams => 
      prevTeams.map(team => 
        team.id === teamId ? { ...team, progress } : team
      )
    );
  }, []);

  // Handle real-time member rating updates
  const handleMemberUpdate = useCallback((memberId: string, rating: number) => {
    setTeams(prevTeams => 
      prevTeams.map(team => ({
        ...team,
        members: team.members.map(member => 
          member.id === memberId ? { ...member, rating } : member
        )
      }))
    );
  }, []);

  // Update team progress
  const updateTeamProgress = useCallback(async (teamId: number, progress: number): Promise<boolean> => {
    const success = await updateTeamProgressInDB(teamId, progress);
    if (!success) {
      setError('Failed to update team progress');
    }
    return success;
  }, []);

  // Update member rating
  const updateMemberRating = useCallback(async (memberId: string, rating: number): Promise<boolean> => {
    const success = await updateMemberRatingInDB(memberId, rating);
    if (!success) {
      setError('Failed to update member rating');
    }
    return success;
  }, []);

  useEffect(() => {
    loadTeams();

    // Set up real-time subscription
    const channel: RealtimeChannel = subscribeToAdminUpdates(
      handleTeamUpdate,
      handleMemberUpdate
    );

    return () => {
      channel.unsubscribe();
    };
  }, [loadTeams, handleTeamUpdate, handleMemberUpdate]);

  return {
    teams,
    isLoading,
    error,
    updateTeamProgress,
    updateMemberRating,
    refreshTeams: loadTeams
  };
};
