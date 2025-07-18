
import { supabase } from '@/integrations/supabase/client';

export interface MemberRating {
  id: string;
  team_id: number;
  name: string;
  rating: number;
  photo_url?: string;
}

export interface TeamRatings {
  teamId: number;
  leaderRating: number;
  members: MemberRating[];
}

// Fetch all ratings for a specific team
export const fetchTeamRatings = async (teamId: number): Promise<TeamRatings> => {
  try {
    // Fetch team leader rating
    const { data: teamData, error: teamError } = await supabase
      .from('teams')
      .select('leader_rating')
      .eq('id', teamId)
      .single();

    if (teamError && teamError.code !== 'PGRST116') {
      console.error('Error fetching team data:', teamError);
    }

    // Fetch team members and their ratings
    const { data: membersData, error: membersError } = await supabase
      .from('team_members')
      .select('*')
      .eq('team_id', teamId)
      .order('name');

    if (membersError) {
      console.error('Error fetching team members:', membersError);
    }

    return {
      teamId,
      leaderRating: teamData?.leader_rating || 0,
      members: membersData || []
    };
  } catch (error) {
    console.error('Error in fetchTeamRatings:', error);
    return {
      teamId,
      leaderRating: 0,
      members: []
    };
  }
};

// Update team leader rating
export const updateLeaderRating = async (teamId: number, rating: number): Promise<boolean> => {
  try {
    console.log(`Updating leader rating for team ${teamId} to ${rating} stars`);
    
    const { error } = await supabase
      .from('teams')
      .update({ leader_rating: rating })
      .eq('id', teamId);

    if (error) {
      console.error('Error updating leader rating:', error);
      return false;
    }

    console.log(`Successfully updated leader rating for team ${teamId}`);
    return true;
  } catch (error) {
    console.error('Error in updateLeaderRating:', error);
    return false;
  }
};

// Update member rating
export const updateMemberRating = async (memberId: string, rating: number): Promise<boolean> => {
  try {
    console.log(`Updating member rating for ${memberId} to ${rating} stars`);
    
    const { error } = await supabase
      .from('team_members')
      .update({ rating })
      .eq('id', memberId);

    if (error) {
      console.error('Error updating member rating:', error);
      return false;
    }

    console.log(`Successfully updated member rating for ${memberId}`);
    return true;
  } catch (error) {
    console.error('Error in updateMemberRating:', error);
    return false;
  }
};

// Create or update a member rating (for cases where member doesn't exist)
export const upsertMemberRating = async (
  teamId: number, 
  memberName: string, 
  rating: number,
  memberId?: string
): Promise<boolean> => {
  try {
    if (memberId) {
      // Update existing member
      return await updateMemberRating(memberId, rating);
    } else {
      // Create new member record
      const { error } = await supabase
        .from('team_members')
        .insert({
          team_id: teamId,
          name: memberName,
          rating: rating
        });

      if (error) {
        console.error('Error creating member rating:', error);
        return false;
      }

      console.log(`Successfully created member rating for ${memberName}`);
      return true;
    }
  } catch (error) {
    console.error('Error in upsertMemberRating:', error);
    return false;
  }
};

// Subscribe to real-time rating updates
export const subscribeToRatingUpdates = (
  teamId: number,
  onUpdate: (ratings: TeamRatings) => void
) => {
  const channel = supabase
    .channel(`team-ratings-${teamId}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'teams',
        filter: `id=eq.${teamId}`
      },
      async () => {
        const ratings = await fetchTeamRatings(teamId);
        onUpdate(ratings);
      }
    )
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'team_members',
        filter: `team_id=eq.${teamId}`
      },
      async () => {
        const ratings = await fetchTeamRatings(teamId);
        onUpdate(ratings);
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
};
