
import { supabase } from '@/integrations/supabase/client';
import { RealtimeChannel } from '@supabase/supabase-js';

export interface AdminTeamData {
  id: number;
  team_name: string;
  project_title: string;
  progress: number;
  leader_username: string;
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

// Update member rating in Supabase
export const updateMemberRatingInDB = async (memberId: string, rating: number): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('team_members')
      .update({ rating })
      .eq('id', memberId);

    if (error) {
      console.error('Error updating member rating:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error updating member rating:', error);
    return false;
  }
};

// Fetch teams with members for admin dashboard
export const fetchTeamsForAdmin = async (): Promise<AdminTeamData[]> => {
  try {
    const { data: teams, error: teamsError } = await supabase
      .from('teams')
      .select('*')
      .order('id');

    if (teamsError) {
      console.error('Error fetching teams:', teamsError);
      return [];
    }

    const { data: members, error: membersError } = await supabase
      .from('team_members')
      .select('*');

    if (membersError) {
      console.error('Error fetching members:', membersError);
      return [];
    }

    // Group members by team_id
    const membersMap = new Map<number, Array<{ id: string; name: string; rating: number }>>();
    members?.forEach(member => {
      if (!membersMap.has(member.team_id!)) {
        membersMap.set(member.team_id!, []);
      }
      membersMap.get(member.team_id!)!.push({
        id: member.id,
        name: member.name,
        rating: member.rating || 0
      });
    });

    return teams.map(team => ({
      id: team.id,
      team_name: team.team_name,
      project_title: team.project_title,
      progress: team.progress || 0,
      leader_username: team.leader_username,
      members: membersMap.get(team.id) || []
    }));
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
        if (payload.new && payload.new.id && payload.new.rating !== undefined) {
          onMemberUpdate(payload.new.id, payload.new.rating);
        }
      }
    )
    .subscribe();

  return channel;
};
