
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { File, Download, Search, PresentationIcon } from 'lucide-react';
import { Input } from "@/components/ui/input";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/SEO/PageSEO';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getTeams } from '@/services/teamService';

const Presentations = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const teams = getTeams();
  
  // Filter teams based on search query
  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <PageSEO 
        title="Team Presentations"
        description="Access and download presentations from all Design Thinking & Innovation teams at Lendi Institute of Engineering and Technology."
        keywords="engineering presentations, student projects, design thinking, innovation presentations, EEE department, Lendi Institute"
      />
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <section className="relative px-6 py-20 overflow-hidden bg-gradient-to-r from-blue-900/90 to-indigo-900/90">
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://lendi.edu.in/assets/img/lendi-institute.jpg" 
              alt="Lendi Institute" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fade-in">
              <span className="inline-block py-1 px-3 bg-blue-100/20 text-blue-100 rounded-lg text-sm font-medium mb-2">
                Resources
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Team Presentations</h1>
              <p className="text-lg text-blue-100/90 max-w-2xl mx-auto">
                Access and download presentations from all Design Thinking & Innovation teams
              </p>
            </div>
            
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text"
                  placeholder="Search presentations by team name or project..."
                  className="pl-10 pr-4 py-2 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeams.length > 0 ? (
                filteredTeams.map((team) => (
                  <Card key={team.id} className="hover-scale overflow-hidden border border-gray-200">
                    <div className="h-40 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
                      <PresentationIcon size={64} className="text-blue-400" />
                    </div>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{team.name}</h3>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          Team {team.id}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground line-clamp-2">{team.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex items-center gap-1"
                        onClick={() => navigate(`/team/${team.id}`)}
                      >
                        <File size={16} />
                        <span>View Details</span>
                      </Button>
                      <Button 
                        variant="default" 
                        size="sm"
                        className="flex items-center gap-1"
                        onClick={() => window.open(`/presentations/team_${team.id}.pptx`, '_blank')}
                      >
                        <Download size={16} />
                        <span>Download</span>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <File size={48} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-xl text-muted-foreground">No presentations match your search criteria</p>
                </div>
              )}
            </div>
            
            {/* Team Count */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              Showing {filteredTeams.length} of {teams.length} presentations
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Presentations;
