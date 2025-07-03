export interface TeamDashboardData {
  username: string;
  teamName: string;
  projectTitle: string;
  abstract: string;
  members: Array<{
    name: string;
    photo: string;
  }>;
  projectPhotos: string[];
  projectVideos?: string[];
  presentations?: string[];
}

const DASHBOARD_DATA_KEY = 'teamDashboardData';

// Initialize default data for all teams
const initializeDefaultData = (): Record<string, TeamDashboardData> => {
  const defaultData: Record<string, TeamDashboardData> = {};
  
  const teamLeaders = [
    { id: '23KD1A0201', team: 1 },
    { id: '23KD1A0214', team: 2 },
    { id: '23KD1A0234', team: 3 },
    { id: '23KD1A0253', team: 4 },
    { id: '23KD1A0238', team: 5 },
    { id: '23KD1A0246', team: 6 },
    { id: '23KD1A0233', team: 7 },
    { id: '23KD1A0224', team: 8 },
    { id: '23KD1A0251', team: 9 },
    { id: '23KD1A0222', team: 10 },
    { id: '24KD5A0202', team: 11 },
    { id: '23KD1A0237', team: 12 },
    { id: '23KD1A0219', team: 13 },
    { id: '23KD1A0257', team: 14 },
    { id: '23KD1A0220', team: 15 },
    { id: '23KD1A0239', team: 16 },
    { id: '23KD1A0264', team: 17 }
  ];

  teamLeaders.forEach(leader => {
    defaultData[`team${leader.team}`] = {
      username: leader.id,
      teamName: `Team ${leader.team}`,
      projectTitle: `Project Title for Team ${leader.team}`,
      abstract: `Project abstract for Team ${leader.team}. This is a placeholder description that can be edited by the team leader.`,
      members: [
        { name: 'Team Member 1', photo: '/placeholder.svg' },
        { name: 'Team Member 2', photo: '/placeholder.svg' },
        { name: 'Team Member 3', photo: '/placeholder.svg' }
      ],
      projectPhotos: ['/placeholder.svg', '/placeholder.svg'],
      projectVideos: [],
      presentations: []
    };
  });

  return defaultData;
};

export const getDashboardData = (): Record<string, TeamDashboardData> => {
  try {
    const stored = localStorage.getItem(DASHBOARD_DATA_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    const defaultData = initializeDefaultData();
    localStorage.setItem(DASHBOARD_DATA_KEY, JSON.stringify(defaultData));
    return defaultData;
  } catch (error) {
    console.error('Error loading dashboard data:', error);
    return initializeDefaultData();
  }
};

export const getTeamDashboardData = (teamId: string): TeamDashboardData | null => {
  const allData = getDashboardData();
  return allData[teamId] || null;
};

export const updateTeamDashboardData = (teamId: string, data: Partial<TeamDashboardData>): void => {
  const allData = getDashboardData();
  if (allData[teamId]) {
    allData[teamId] = { ...allData[teamId], ...data };
    localStorage.setItem(DASHBOARD_DATA_KEY, JSON.stringify(allData));
    
    // Dispatch event to notify other components
    window.dispatchEvent(new CustomEvent('dashboardDataUpdated', { detail: { teamId, data } }));
  }
};

export const isValidTeamLeader = (username: string, teamId: string): boolean => {
  const data = getTeamDashboardData(teamId);
  return data?.username === username;
};
