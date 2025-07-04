import { Team, teamsData as initialTeamsData } from '@/data/teamsData';
import { fetchAllTeams, type TeamData } from './supabaseTeamService';

// Custom event for team data updates
const TEAMS_UPDATED_EVENT = 'teamsDataUpdated';

// Convert Supabase team data to legacy format for compatibility
const convertSupabaseTeamToLegacy = (supabaseTeam: TeamData): Team => {
  // Find the team from initial data to get legacy fields
  const legacyTeam = initialTeamsData.find(t => t.id === supabaseTeam.id) || initialTeamsData[0];
  
  return {
    ...legacyTeam,
    id: supabaseTeam.id,
    name: supabaseTeam.team_name,
    description: supabaseTeam.project_title,
    longDescription: supabaseTeam.abstract || legacyTeam.longDescription
  };
};

// Get teams data from Supabase
export const getTeams = async (): Promise<Team[]> => {
  try {
    const supabaseTeams = await fetchAllTeams();
    
    if (supabaseTeams.length === 0) {
      // Fallback to initial data if no teams in database
      return initialTeamsData;
    }
    
    return supabaseTeams.map(convertSupabaseTeamToLegacy);
  } catch (error) {
    console.error('Error loading teams data:', error);
    return initialTeamsData;
  }
};

// Update a team's progress (keeping existing functionality)
export const updateTeamProgress = (teamId: number, newProgress: number): Team[] => {
  // This function maintains localStorage compatibility for progress tracking
  // In a full implementation, this would also be stored in Supabase
  const currentTeams = initialTeamsData;
  const updatedTeams = currentTeams.map(team => 
    team.id === teamId ? { ...team, progress: newProgress } : team
  );
  
  localStorage.setItem('teamsData', JSON.stringify(updatedTeams));
  window.dispatchEvent(new CustomEvent(TEAMS_UPDATED_EVENT));
  
  return updatedTeams;
};

// Update a team member's rating (keeping existing functionality)
export const updateMemberRating = (teamId: number, memberId: number, rating: number): Team[] => {
  // This function maintains localStorage compatibility for rating tracking
  const currentTeams = initialTeamsData;
  
  const updatedTeams = currentTeams.map(team => {
    if (team.id === teamId) {
      if (team.leader.id === memberId) {
        return {
          ...team,
          leader: {
            ...team.leader,
            rating
          }
        };
      }
      
      const updatedMembers = team.members.map(member => 
        member.id === memberId ? { ...member, rating } : member
      );
      
      return {
        ...team,
        members: updatedMembers
      };
    }
    
    return team;
  });
  
  localStorage.setItem('teamsData', JSON.stringify(updatedTeams));
  window.dispatchEvent(new CustomEvent(TEAMS_UPDATED_EVENT));
  
  return updatedTeams;
};

// Get a single team by ID from Supabase
export const getTeamById = async (id: number | string): Promise<Team | undefined> => {
  try {
    const teams = await getTeams();
    return teams.find(team => team.id.toString() === id.toString());
  } catch (error) {
    console.error('Error getting team by ID:', error);
    return initialTeamsData.find(team => team.id.toString() === id.toString());
  }
};

// Subscribe to teams data updates
export const subscribeToTeamsUpdates = (callback: () => void): () => void => {
  const handler = () => callback();
  window.addEventListener(TEAMS_UPDATED_EVENT, handler);
  
  return () => window.removeEventListener(TEAMS_UPDATED_EVENT, handler);
};

// Trigger updates when dashboard data changes
window.addEventListener('dashboardDataUpdated', () => {
  window.dispatchEvent(new CustomEvent(TEAMS_UPDATED_EVENT));
});
