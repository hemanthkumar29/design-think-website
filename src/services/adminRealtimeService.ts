
import { supabase } from '@/integrations/supabase/client';
import { RealtimeChannel } from '@supabase/supabase-js';

export interface AdminTeamData {
  id: number;
  team_name: string;
  project_title: string;
  progress: number;
  leader_username: string;
  leader_rating?: number;
  members: Array<{
    id: string;
    name: string;
    rating: number;
  }>;
}

// Update team progress in Supabase
export const updateTeamProgressInDB = async (teamId: number, progress: number): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('teams')
      .update({ progress })
      .eq('id', teamId);

    if (error) {
      console.error('Error updating team progress:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error updating team progress:', error);
    return false;
  }
};

// Update member rating (stored in localStorage for static data)
export const updateMemberRatingInDB = async (memberId: string, rating: number): Promise<boolean> => {
  try {
    // Since we're using static data, store ratings in localStorage
    const ratingsKey = 'admin_member_ratings';
    const existingRatings = JSON.parse(localStorage.getItem(ratingsKey) || '{}');
    
    existingRatings[memberId] = rating;
    localStorage.setItem(ratingsKey, JSON.stringify(existingRatings));
    
    console.log(`Member rating updated: ${memberId} = ${rating} stars`);
    return true;
  } catch (error) {
    console.error('Error updating member rating:', error);
    return false;
  }
};

// Update team leader rating (stored in localStorage for static data)
export const updateLeaderRatingInDB = async (teamId: number, rating: number): Promise<boolean> => {
  try {
    // Store leader ratings in localStorage
    const ratingsKey = 'admin_leader_ratings';
    const existingRatings = JSON.parse(localStorage.getItem(ratingsKey) || '{}');
    
    existingRatings[`leader_${teamId}`] = rating;
    localStorage.setItem(ratingsKey, JSON.stringify(existingRatings));
    
    console.log(`Leader rating updated: team ${teamId} = ${rating} stars`);
    return true;
  } catch (error) {
    console.error('Error updating leader rating:', error);
    return false;
  }
};

// Fetch teams with members for admin dashboard
export const fetchTeamsForAdmin = async (): Promise<AdminTeamData[]> => {
  try {
    console.log('Fetching teams for admin...');
    
    // Import the actual team data
    const { teamsData } = await import('@/data/teamsData');
    
    // Fetch team progress from database
    const { data: teams, error: teamsError } = await supabase
      .from('teams')
      .select('id, progress')
      .order('id');

    if (teamsError) {
      console.error('Error fetching teams:', teamsError);
      return [];
    }

    console.log('Fetched teams from DB:', teams);

    // Create a map of team progress from database
    const progressMap = new Map<number, number>();
    teams?.forEach(team => {
      progressMap.set(team.id, team.progress || 0);
    });

    // Get stored ratings from localStorage
    const memberRatings = JSON.parse(localStorage.getItem('admin_member_ratings') || '{}');
    const leaderRatings = JSON.parse(localStorage.getItem('admin_leader_ratings') || '{}');

    // Map static team data to admin format
    const result = teamsData.map(team => {
      // Generate unique IDs for members for rating functionality
      const membersWithIds = team.members.map((member, index) => {
        const memberId = `team_${team.id}_member_${index + 1}`;
        return {
          id: memberId,
          name: member.name,
          rating: memberRatings[memberId] || 0 // Get stored rating or default to 0
        };
      });

      return {
        id: team.id,
        team_name: team.name,
        project_title: team.description, // Using description as project title
        progress: progressMap.get(team.id) || team.progress || 0,
        leader_username: team.leader.name,
        leader_rating: leaderRatings[`leader_${team.id}`] || 0, // Get stored rating or default to 0
        members: membersWithIds
      };
    });

    console.log('Final admin teams data:', result);
    console.log('Total teams:', result.length);
    
    result.forEach(team => {
      console.log(`Team ${team.id}: ${team.members.length} members + 1 leader = ${team.members.length + 1} total`);
    });
    
    return result;
  } catch (error) {
    console.error('Error fetching teams for admin:', error);
    return [];
  }
};

// Subscribe to real-time updates
export const subscribeToAdminUpdates = (
  onTeamUpdate: (teamId: number, progress: number) => void,
  onMemberUpdate: (memberId: string, rating: number) => void
): RealtimeChannel => {
  const channel = supabase
    .channel('admin-updates')
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'teams',
        filter: 'progress=neq.null'
      },
      (payload: any) => {
        console.log('Team update received:', payload);
        if (payload.new && payload.new.id && payload.new.progress !== undefined) {
          onTeamUpdate(payload.new.id, payload.new.progress);
        }
      }
    )
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'team_members',
        filter: 'rating=neq.null'
      },
      (payload: any) => {
        console.log('Member update received:', payload);
        if (payload.new && payload.new.id && payload.new.rating !== undefined) {
          onMemberUpdate(payload.new.id, payload.new.rating);
        }
      }
    )
    .subscribe();

  return channel;
};
