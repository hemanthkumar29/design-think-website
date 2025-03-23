
import React, { useState, useEffect } from 'react';
import { teamsData } from '@/data/teamsData';
import TeamCard from '@/components/ui/TeamCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/SEO/PageSEO';

const Teams = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgress, setSelectedProgress] = useState<string>('all');
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const progressOptions = [
    { value: 'all', label: 'All Progress' },
    { value: 'low', label: 'Early Stage (0-30%)' },
    { value: 'medium', label: 'Developing (31-70%)' },
    { value: 'high', label: 'Advanced (71-100%)' },
  ];
  
  // Filter teams based on search query and progress
  const filteredTeams = teamsData.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          team.description.toLowerCase().includes(searchQuery.toLowerCase());
    
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
  
  useEffect(() => {
    // Staggered animation for cards
    const cards = document.querySelectorAll('.team-card');
    
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-scale-in');
        card.classList.remove('opacity-0');
        
        // Set animation complete when last card is animated
        if (index === cards.length - 1) {
          setTimeout(() => setAnimationComplete(true), 300);
        }
      }, 100 * index);
    });
  }, [searchQuery, selectedProgress]);
  
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
            <h1 className="text-4xl md:text-5xl font-bold">Innovative Teams</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the diverse projects our teams are developing, from concept to implementation.
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-10 max-w-3xl mx-auto animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Search teams..."
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
          
          {/* Teams Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.length > 0 ? (
              filteredTeams.map(team => (
                <div key={team.id} className="team-card opacity-0">
                  <TeamCard
                    id={team.id}
                    name={team.name}
                    progress={team.progress}
                  />
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
            Showing {filteredTeams.length} of {teamsData.length} teams
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Teams;
