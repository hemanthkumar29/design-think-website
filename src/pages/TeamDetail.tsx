
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { teamsData } from '@/data/teamsData';
import ProgressBar from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft } from 'lucide-react';

const TeamDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Find the team data based on the id parameter
  const team = teamsData.find(t => t.id.toString() === id);
  
  useEffect(() => {
    // Simulate loading to show animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Redirect to Teams page if team not found
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
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        {/* Hero Section */}
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
                  <img 
                    src={team.leader.image} 
                    alt={team.leader.name} 
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white font-bold text-xl">{team.leader.name}</h3>
                    <p className="text-white/80">{team.leader.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Description */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-fade-in">Project Overview</h2>
            <div className="prose prose-lg max-w-none animate-fade-in">
              <p className="leading-relaxed text-muted-foreground">{team.longDescription}</p>
            </div>
          </div>
        </section>
        
        {/* Team Members */}
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
              {[team.leader, ...team.members].map((member, index) => (
                <div 
                  key={member.id} 
                  className="glass-card rounded-lg overflow-hidden hover-scale opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
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
        
        {/* Project Images */}
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
                  className="overflow-hidden rounded-lg shadow-lg hover-scale opacity-0"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <img 
                    src={image} 
                    alt={`Project image ${index + 1}`} 
                    className="w-full h-auto aspect-video object-cover"
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
