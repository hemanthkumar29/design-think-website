import React, { useState, useEffect, lazy, Suspense } from 'react';
import { getTeams, subscribeToTeamsUpdates } from '@/services/teamService';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/SEO/PageSEO';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load components that aren't immediately visible
const TeamCardComponent = lazy(() => import('@/components/ui/TeamCard'));

const Teams = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgress, setSelectedProgress] = useState<string>('all');
  const [animationComplete, setAnimationComplete] = useState(false);
  const [teams, setTeams] = useState(() => getTeams());
  const [loading, setLoading] = useState(true);
  
  const progressOptions = [
    { value: 'all', label: 'All Progress' },
    { value: 'low', label: 'Early Stage (0-30%)' },
    { value: 'medium', label: 'Developing (31-70%)' },
    { value: 'high', label: 'Advanced (71-100%)' },
  ];
  
  useEffect(() => {
    // Set initial teams data
    const initialTeams = getTeams();
    setTeams(initialTeams);
    setLoading(false);
    
    // Subscribe to teams data updates
    const unsubscribe = subscribeToTeamsUpdates(() => {
      const updatedTeams = getTeams();
      setTeams(updatedTeams);
    });
    
    return () => unsubscribe();
  }, []);
  
  // Filter teams based on search query and progress - memoize for performance
  const filteredTeams = React.useMemo(() => {
    return teams.filter(team => {
      const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            team.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            team.leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            team.members.some(member => member.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            team.leader.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            team.members.some(member => member.role.toLowerCase().includes(searchQuery.toLowerCase()));
      
      let matchesProgress = true;
      if (selectedProgress === 'low') {
        matchesProgress = team.progress <= 30;
      } else if (selectedProgress === 'medium') {
        matchesProgress = team.progress > 30 && team.progress <= 70;
      } else if (selectedProgress === 'high') {
        matchesProgress = team.progress > 70;
      }
      
      return matchesSearch && matchesProgress;
    });
  }, [teams, searchQuery, selectedProgress]);
  
  useEffect(() => {
    // Use requestAnimationFrame for smoother animations
    if (!loading) {
      requestAnimationFrame(() => {
        // Staggered animation for cards using the more performant will-change property
        const cards = document.querySelectorAll('.team-card');
        
        cards.forEach((card, index) => {
          // Add will-change before animation starts
          card.classList.add('will-change-transform', 'will-change-opacity');
          
          setTimeout(() => {
            card.classList.add('animate-scale-in');
            card.classList.remove('opacity-0');
            
            // Set animation complete when last card is animated
            if (index === cards.length - 1) {
              setTimeout(() => {
                setAnimationComplete(true);
                // Remove will-change after animation to free up resources
                cards.forEach(c => {
                  c.classList.remove('will-change-transform', 'will-change-opacity');
                });
              }, 300);
            }
          }, 50 * index); // Reduced delay for faster rendering
        });
      });
    }
  }, [filteredTeams, loading]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <PageSEO 
        title="Teams"
        description="Explore innovative teams and their projects from the Design Thinking & Innovation program at Lendi Institute of Engineering and Technology."
        keywords="engineering teams, student projects, design thinking, innovation projects, EEE department, Lendi Institute"
      />
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-slide-down">
            <span className="inline-block py-1 px-3 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
              Projects
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">Design Thinking & Innovation Teams</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the diverse projects which our teams are developing, from concept to implementation.
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-10 max-w-3xl mx-auto animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Search teams, members, or roll numbers..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="min-w-[200px]">
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none bg-white"
                  value={selectedProgress}
                  onChange={(e) => setSelectedProgress(e.target.value)}
                >
                  {progressOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Teams Grid - with loading skeletons and optimized rendering */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              // Show skeleton loaders during initial load
              Array(6).fill(0).map((_, i) => (
                <div key={`skeleton-${i}`} className="animate-pulse">
                  <Skeleton className="h-[280px] w-full rounded-xl" />
                </div>
              ))
            ) : filteredTeams.length > 0 ? (
              filteredTeams.map(team => (
                <div key={team.id} className="team-card opacity-0">
                  <Suspense fallback={<Skeleton className="h-[280px] w-full rounded-xl" />}>
                    <TeamCardComponent
                      id={team.id}
                      name={team.name}
                      progress={team.progress}
                    />
                  </Suspense>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-xl text-muted-foreground">
                  No teams match your search criteria.
                </p>
              </div>
            )}
          </div>
          
          {/* Team Count */}
          <div className="mt-8 text-center text-sm text-muted-foreground animate-fade-in">
            Showing {filteredTeams.length} of {teams.length} teams
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Teams;
