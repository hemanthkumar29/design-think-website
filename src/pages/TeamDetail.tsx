
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProgressBar from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Award } from 'lucide-react';
import PageSEO from '@/components/SEO/PageSEO';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getTeamById } from '@/services/teamService';

const TeamDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [team, setTeam] = useState(null);
  
  useEffect(() => {
    if (id) {
      const teamData = getTeamById(id);
      if (teamData) {
        setTeam(teamData);
      }
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [id]);
  
  useEffect(() => {
    if (!team && !isLoading) {
      navigate('/teams');
    }
  }, [team, isLoading, navigate]);
  
  if (isLoading || !team) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-muted-foreground">Loading team details...</p>
        </div>
      </div>
    );
  }
  
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  // Video URL based on team ID
  const videoUrl = `/team_videos/team_${team.id}.mp4`;
  
  return (
    <div className="flex flex-col min-h-screen">
      <PageSEO
        title={`Team ${team.name}`} 
        description={`Learn about Team ${team.name} and their innovative project: ${team.description}. See team members and project progress.`}
        keywords={`${team.name}, design thinking project, engineering innovation, student team, Lendi Institute, ${team.leader.name}`}
      />
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <section className="relative px-6 py-20 overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <Button
              variant="ghost"
              className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-foreground"
              onClick={() => navigate('/teams')}
            >
              <ArrowLeft size={16} />
              Back to Teams
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-right">
                <div>
                  <span className="inline-block py-1 px-3 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium mb-2">
                    Team {team.id}
                  </span>
                  <h1 className="text-3xl md:text-5xl font-bold">{team.name}</h1>
                </div>
                
                <p className="text-xl text-muted-foreground">{team.description}</p>
                
                <div className="pt-4">
                  <ProgressBar 
                    progress={team.progress} 
                    label="Project Completion" 
                    size="lg" 
                    color={team.progress > 75 ? 'success' : team.progress > 25 ? 'default' : 'warning'} 
                  />
                </div>
              </div>
              
              <div className="relative group animate-slide-left">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Avatar className="w-full h-auto object-cover aspect-[4/3]">
                    <AvatarImage 
                      src={team.leader.image} 
                      alt={team.leader.name}
                      className="w-full h-auto aspect-[4/3] object-cover"
                    />
                    <AvatarFallback className="w-full h-auto aspect-[4/3] text-5xl bg-gradient-to-r from-blue-100 to-indigo-100">
                      {getInitials(team.leader.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="text-yellow-400" size={18} />
                      <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-600 border-yellow-400/30">
                        Team Leader
                      </Badge>
                    </div>
                    <h3 className="text-white font-bold text-xl">{team.leader.name}</h3>
                    <p className="text-white/80">{team.leader.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-fade-in">Project Overview</h2>
            <div className="prose prose-lg max-w-none animate-fade-in">
              <p className="leading-relaxed text-muted-foreground">{team.longDescription}</p>
            </div>
            
            {/* Project Video Section */}
            <div className="mt-12">
              <h3 className="text-xl md:text-2xl font-bold mb-6 animate-fade-in">Project Presentation</h3>
              <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-black aspect-video animate-fade-in">
                <video 
                  controls
                  className="w-full h-full object-contain"
                  poster={team.projectImages[0]}
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.onerror = null; 
                    // Set fallback content
                    el.parentElement.innerHTML = `
                      <div class="flex flex-col items-center justify-center w-full h-full text-white p-8 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-4 opacity-60"><path d="M2 16V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/><path d="m10 9 5 3-5 3z"/></svg>
                        <p class="text-lg font-medium opacity-80">Video presentation coming soon</p>
                        <p class="text-sm opacity-60 mt-2">The team is currently preparing their video presentation</p>
                      </div>
                    `;
                  }}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-in">
              <span className="inline-block py-1 px-3 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium mb-2">
                Our Team
              </span>
              <br />
              Meet the Members
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-yellow-400 animate-fade-in"
              >
                <div className="aspect-square overflow-hidden relative">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src={team.leader.image} 
                      alt={team.leader.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <AvatarFallback className="w-full h-full text-3xl bg-gradient-to-r from-yellow-100 to-amber-100">
                      {getInitials(team.leader.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-yellow-400 text-yellow-900">
                      <Award className="mr-1 h-3 w-3" /> Leader
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{team.leader.name}</h3>
                  <p className="text-sm text-muted-foreground">{team.leader.role}</p>
                </div>
              </div>
              
              {team.members.map((member, index) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-100 animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <Avatar className="w-full h-full">
                      <AvatarImage 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <AvatarFallback className="w-full h-full text-3xl bg-gradient-to-r from-blue-100 to-indigo-100">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-in">
              <span className="inline-block py-1 px-3 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium mb-2">
                Gallery
              </span>
              <br />
              Project Showcase
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.projectImages.map((image, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 opacity-100 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <img 
                    src={image} 
                    alt={`Project image ${index + 1}`} 
                    className="w-full h-auto aspect-video object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const placeholders = [
                        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                        "https://images.unsplash.com/photo-1581056771107-24247a734e15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                      ];
                      e.currentTarget.src = placeholders[index % placeholders.length];
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamDetail;
