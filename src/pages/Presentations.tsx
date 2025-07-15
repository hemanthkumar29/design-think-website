
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/SEO/PageSEO';
import PresentationViewer from '@/components/presentations/PresentationViewer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Download, Eye, Users, FileText, Calendar } from 'lucide-react';

const Presentations = () => {
  const [selectedPresentation, setSelectedPresentation] = useState<string | null>(null);

  const presentations = [
    { id: 'team_2', title: 'Smart Irrigation System', team: 'Team 2', date: '2024-01-15', views: 245 },
    { id: 'team_3', title: 'IoT Home Automation', team: 'Team 3', date: '2024-01-16', views: 189 },
    { id: 'team_4', title: 'Renewable Energy Monitor', team: 'Team 4', date: '2024-01-17', views: 156 },
    { id: 'team_5', title: 'Smart Traffic Management', team: 'Team 5', date: '2024-01-18', views: 203 },
    { id: 'team_6', title: 'Health Monitoring Device', team: 'Team 6', date: '2024-01-19', views: 167 },
    { id: 'team_7', title: 'Agricultural Drone System', team: 'Team 7', date: '2024-01-20', views: 134 },
    { id: 'team_8', title: 'Smart Grid Optimization', team: 'Team 8', date: '2024-01-21', views: 178 },
    { id: 'team_9', title: 'Water Quality Sensor', team: 'Team 9', date: '2024-01-22', views: 145 },
    { id: 'team_10', title: 'Solar Panel Tracker', team: 'Team 10', date: '2024-01-23', views: 192 },
    { id: 'team_11', title: 'Smart Parking System', team: 'Team 11', date: '2024-01-24', views: 211 },
    { id: 'team_12', title: 'Energy Storage Solution', team: 'Team 12', date: '2024-01-25', views: 158 },
    { id: 'team_13', title: 'Wireless Power Transfer', team: 'Team 13', date: '2024-01-26', views: 174 },
    { id: 'team_14', title: 'Smart Lighting Control', team: 'Team 14', date: '2024-01-27', views: 186 },
    { id: 'team_15', title: 'EV Charging Station', team: 'Team 15', date: '2024-01-28', views: 199 },
    { id: 'team_16', title: 'Gesture Recognition System', team: 'Team 16', date: '2024-01-29', views: 165 },
    { id: 'team_17', title: 'Smart Home Security', team: 'Team 17', date: '2024-01-30', views: 188 }
  ];

  const statistics = [
    { icon: <FileText className="w-6 h-6" />, label: 'Total Presentations', value: '16' },
    { icon: <Users className="w-6 h-6" />, label: 'Teams Presented', value: '16' },
    { icon: <Eye className="w-6 h-6" />, label: 'Total Views', value: '2,890' },
    { icon: <Calendar className="w-6 h-6" />, label: 'Presentation Period', value: 'Jan 2024' }
  ];

  const handleViewPresentation = (presentationId: string) => {
    setSelectedPresentation(presentationId);
  };

  const handleDownload = (presentationId: string) => {
    const link = document.createElement('a');
    link.href = `/team_presentations/${presentationId}_presentation.pptx`;
    link.download = `${presentationId}_presentation.pptx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PageSEO 
        title="Presentations"
        description="Explore team presentations from the Design Thinking & Innovation program. View and download PowerPoint presentations showcasing innovative engineering projects."
        keywords="team presentations, design thinking presentations, innovation showcase, engineering projects, student presentations, PowerPoint, project demos"
      />
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-6">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 mb-4">
              <Play className="w-4 h-4 mr-1" />
              Project Showcase
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Team Presentations
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover innovative solutions through comprehensive project presentations from our Design Thinking & Innovation teams.
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <Card key={index} className="text-center border border-gray-200">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600">
                      {stat.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-1">{stat.value}</h3>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Presentations Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Project Presentations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse through detailed presentations showcasing the innovation journey of each team
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {presentations.map((presentation) => (
                <Card key={presentation.id} className="group hover:shadow-lg transition-all duration-200 border border-gray-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <Badge variant="outline" className="text-blue-600 border-blue-200 mb-2">
                          {presentation.team}
                        </Badge>
                        <CardTitle className="text-lg text-blue-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {presentation.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(presentation.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{presentation.views} views</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => handleViewPresentation(presentation.id)}
                      >
                        <Play className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50"
                        onClick={() => handleDownload(presentation.id)}
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Presentation Viewer Modal */}
        {selectedPresentation && (
          <PresentationViewer
            presentationId={selectedPresentation}
            onClose={() => setSelectedPresentation(null)}
          />
        )}

        {/* Call to Action */}
        <section className="py-16 px-6 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Inspired by Innovation?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Explore more about our teams and their groundbreaking projects in the design thinking program
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                Explore Teams
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Learn About Program
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Presentations;
