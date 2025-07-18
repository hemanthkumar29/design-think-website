
import { useState, useEffect, useCallback } from 'react';
import { 
  fetchTeamRatings, 
  updateLeaderRating, 
  updateMemberRating, 
  subscribeToRatingUpdates,
  type TeamRatings 
} from '@/services/ratingService';
import { useToast } from '@/hooks/use-toast';

export const useTeamRatings = (teamId: number) => {
  const [ratings, setRatings] = useState<TeamRatings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  // Load initial ratings
  const loadRatings = useCallback(async () => {
    try {
      setIsLoading(true);
      const teamRatings = await fetchTeamRatings(teamId);
      setRatings(teamRatings);
    } catch (error) {
      console.error('Error loading ratings:', error);
      toast({
        title: 'Error',
        description: 'Failed to load ratings. Please refresh the page.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }, [teamId, toast]);

  // Update leader rating
  const updateLeader = useCallback(async (rating: number) => {
    const updateKey = `leader_${teamId}`;
    setIsUpdating(prev => ({ ...prev, [updateKey]: true }));
    
    try {
      const success = await updateLeaderRating(teamId, rating);
      
      if (success) {
        // Update local state immediately for better UX
        setRatings(prev => prev ? { ...prev, leaderRating: rating } : null);
        
        toast({
          title: 'Success',
          description: 'Leader rating updated successfully',
          variant: 'default',
        });
        
        return true;
      } else {
        toast({
          title: 'Error',
          description: 'Failed to update leader rating. Please try again.',
          variant: 'destructive',
        });
        return false;
      }
    } catch (error) {
      console.error('Error updating leader rating:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
      return false;
    } finally {
      setIsUpdating(prev => ({ ...prev, [updateKey]: false }));
    }
  }, [teamId, toast]);

  // Update member rating
  const updateMember = useCallback(async (memberId: string, rating: number) => {
    setIsUpdating(prev => ({ ...prev, [memberId]: true }));
    
    try {
      const success = await updateMemberRating(memberId, rating);
      
      if (success) {
        // Update local state immediately for better UX
        setRatings(prev => {
          if (!prev) return null;
          
          const updatedMembers = prev.members.map(member =>
            member.id === memberId ? { ...member, rating } : member
          );
          
          return { ...prev, members: updatedMembers };
        });
        
        toast({
          title: 'Success',
          description: 'Member rating updated successfully',
          variant: 'default',
        });
        
        return true;
      } else {
        toast({
          title: 'Error',
          description: 'Failed to update member rating. Please try again.',
          variant: 'destructive',
        });
        return false;
      }
    } catch (error) {
      console.error('Error updating member rating:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
      return false;
    } finally {
      setIsUpdating(prev => ({ ...prev, [memberId]: false }));
    }
  }, [toast]);

  // Subscribe to real-time updates
  useEffect(() => {
    loadRatings();

    const unsubscribe = subscribeToRatingUpdates(teamId, (updatedRatings) => {
      setRatings(updatedRatings);
    });

    return unsubscribe;
  }, [teamId, loadRatings]);

  return {
    ratings,
    isLoading,
    isUpdating,
    updateLeader,
    updateMember,
    refresh: loadRatings
  };
};
