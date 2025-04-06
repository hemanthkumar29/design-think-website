
import { Team, teamsData as initialTeamsData } from '@/data/teamsData';

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
  return updatedTeams;
};

// Get a single team by ID
export const getTeamById = (id: number | string): Team | undefined => {
  const teams = getTeams();
  return teams.find(team => team.id.toString() === id.toString());
};
