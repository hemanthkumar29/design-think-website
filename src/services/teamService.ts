import { Team, teamsData as initialTeamsData } from '@/data/teamsData';
import { fetchAllTeams, type TeamData } from './supabaseTeamService';

// Custom event for team data updates
const TEAMS_UPDATED_EVENT = 'teamsDataUpdated';

// Cache for teams data
let teamsCache: Team[] | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 30000; // 30 seconds

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

// Get teams data from Supabase with caching
export const getTeams = async (): Promise<Team[]> => {
  try {
    const now = Date.now();
    
    // Return cached data if still fresh
    if (teamsCache && (now - cacheTimestamp) < CACHE_DURATION) {
      return teamsCache;
    }
    
    const supabaseTeams = await fetchAllTeams();
    
    let result: Team[];
    if (supabaseTeams.length === 0) {
      // Fallback to initial data if no teams in database
      result = initialTeamsData;
    } else {
      result = supabaseTeams.map(convertSupabaseTeamToLegacy);
    }
    
    // Update cache
    teamsCache = result;
    cacheTimestamp = now;
    
    return result;
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
  
  // Clear cache to force refresh
  teamsCache = null;
  
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
  
  // Clear cache to force refresh
  teamsCache = null;
  
  window.dispatchEvent(new CustomEvent(TEAMS_UPDATED_EVENT));
  
  return updatedTeams;
};

// Get a single team by ID from cache or fetch
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
  const handler = () => {
    // Clear cache when updates happen
    teamsCache = null;
    callback();
  };
  
  window.addEventListener(TEAMS_UPDATED_EVENT, handler);
  
  return () => window.removeEventListener(TEAMS_UPDATED_EVENT, handler);
};

// Trigger updates when dashboard data changes
window.addEventListener('dashboardDataUpdated', () => {
  // Clear cache when dashboard updates
  teamsCache = null;
  window.dispatchEvent(new CustomEvent(TEAMS_UPDATED_EVENT));
});
