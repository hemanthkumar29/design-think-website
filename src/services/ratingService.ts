import { supabase } from '@/integrations/supabase/client';

export interface MemberRating {
  id: string;
  team_id: number;
  name: string;
  rating: number;
}

export interface TeamRating {
  id: number;
  leader_rating: number;
}

// Create or update member rating
export const updateMemberRating = async (
  teamId: number, 
  memberName: string, 
  rating: number
): Promise<boolean> => {
  try {
    console.log(`Updating rating for ${memberName} in team ${teamId} to ${rating} stars`);
    
    // First, check if member exists
    const { data: existingMember, error: fetchError } = await supabase
      .from('team_members')
      .select('id')
      .eq('team_id', teamId)
      .eq('name', memberName)
      .maybeSingle();

    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error('Error fetching member:', fetchError);
      return false;
    }

    if (existingMember) {
      // Update existing member
      const { error } = await supabase
        .from('team_members')
        .update({ rating })
        .eq('id', existingMember.id);

      if (error) {
        console.error('Error updating member rating:', error);
        return false;
      }
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
    }

    console.log(`Successfully updated rating for ${memberName} to ${rating} stars`);
    return true;
  } catch (error) {
    console.error('Error in updateMemberRating:', error);
    return false;
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

    console.log(`Successfully updated leader rating for team ${teamId} to ${rating} stars`);
    return true;
  } catch (error) {
    console.error('Error in updateLeaderRating:', error);
    return false;
  }
};

// Fetch all ratings for a specific team
export const getTeamRatings = async (teamId: number) => {
  try {
    // Get team leader rating
    const { data: teamData, error: teamError } = await supabase
      .from('teams')
      .select('leader_rating')
      .eq('id', teamId)
      .maybeSingle();

    if (teamError) {
      console.error('Error fetching team data:', teamError);
    }

    // Get member ratings
    const { data: memberData, error: memberError } = await supabase
      .from('team_members')
      .select('*')
      .eq('team_id', teamId)
      .order('name');

    if (memberError) {
      console.error('Error fetching member data:', memberError);
    }

    return {
      leaderRating: teamData?.leader_rating || 0,
      memberRatings: memberData || []
    };
  } catch (error) {
    console.error('Error in getTeamRatings:', error);
    return {
      leaderRating: 0,
      memberRatings: []
    };
  }
};

// Fetch all teams with ratings
export const getAllTeamsWithRatings = async (): Promise<{
  teams: any[];
  members: any[];
}> => {
  try {
    // Get all teams
    const { data: teams, error: teamsError } = await supabase
      .from('teams')
      .select('*')
      .order('id');

    if (teamsError) {
      console.error('Error fetching teams:', teamsError);
      return {
        teams: [],
        members: []
      };
    }

    // Get all member ratings
    const { data: members, error: membersError } = await supabase
      .from('team_members')
      .select('*')
      .order('team_id, name');

    if (membersError) {
      console.error('Error fetching members:', membersError);
    }

    return {
      teams: teams || [],
      members: members || []
    };
  } catch (error) {
    console.error('Error in getAllTeamsWithRatings:', error);
    return {
      teams: [],
      members: []
    };
  }
};