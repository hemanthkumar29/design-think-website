import { Team, teamsData as initialTeamsData } from '@/data/teamsData';

// Custom event for team data updates
const TEAMS_UPDATED_EVENT = 'teamsDataUpdated';

// Get teams data with localStorage fallback
export const getTeams = (): Team[] => {
  try {
    const storedTeamsData = localStorage.getItem('teamsData');
    return storedTeamsData ? JSON.parse(storedTeamsData) : initialTeamsData;
  } catch (error) {
    console.error('Error loading teams data:', error);
    return initialTeamsData;
  }
};

// Update a team's progress
export const updateTeamProgress = (teamId: number, newProgress: number): Team[] => {
  const currentTeams = getTeams();
  const updatedTeams = currentTeams.map(team => 
    team.id === teamId ? { ...team, progress: newProgress } : team
  );
  
  // Persist to localStorage
  localStorage.setItem('teamsData', JSON.stringify(updatedTeams));
  
  // Dispatch custom event to notify components about the update
  window.dispatchEvent(new CustomEvent(TEAMS_UPDATED_EVENT));
  
  return updatedTeams;
};

// Update a team member's rating
export const updateMemberRating = (teamId: number, memberId: number, rating: number): Team[] => {
  const currentTeams = getTeams();
  
  const updatedTeams = currentTeams.map(team => {
    if (team.id === teamId) {
      // Check if the member is the team leader
      if (team.leader.id === memberId) {
        return {
          ...team,
          leader: {
            ...team.leader,
            rating
          }
        };
      }
      
      // Otherwise, update the member in the members array
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
  
  // Persist to localStorage
  localStorage.setItem('teamsData', JSON.stringify(updatedTeams));
  
  // Dispatch custom event to notify components about the update
  window.dispatchEvent(new CustomEvent(TEAMS_UPDATED_EVENT));
  
  return updatedTeams;
};

// Get a single team by ID
export const getTeamById = (id: number | string): Team | undefined => {
  const teams = getTeams();
  return teams.find(team => team.id.toString() === id.toString());
};

// Subscribe to teams data updates
export const subscribeToTeamsUpdates = (callback: () => void): () => void => {
  const handler = () => callback();
  window.addEventListener(TEAMS_UPDATED_EVENT, handler);
  
  // Return unsubscribe function
  return () => window.removeEventListener(TEAMS_UPDATED_EVENT, handler);
};
