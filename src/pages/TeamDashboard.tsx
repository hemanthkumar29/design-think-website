
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LogOut, Save, Upload, Eye } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/SEO/PageSEO';
import { getTeamDashboardData, updateTeamDashboardData, isValidTeamLeader, TeamDashboardData } from '@/services/dashboardService';

const TeamDashboard = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const navigate = useNavigate();
  const [teamData, setTeamData] = useState<TeamDashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    const currentTeamLeader = localStorage.getItem('currentTeamLeader');
    const currentTeamId = localStorage.getItem('currentTeamId');

    if (!currentTeamLeader || !teamId || currentTeamId !== teamId?.replace('team', '')) {
      navigate('/student-login');
      return;
    }

    if (!isValidTeamLeader(currentTeamLeader, teamId)) {
      navigate('/student-login');
      return;
    }

    const data = getTeamDashboardData(teamId);
    if (data) {
      setTeamData(data);
    }
    setIsLoading(false);
  }, [teamId, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentTeamLeader');
    localStorage.removeItem('currentTeamId');
    navigate('/student-login');
  };

  const handleSave = () => {
    if (teamData && teamId) {
      updateTeamDashboardData(teamId, teamData);
      setSaveMessage('Changes saved successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  const handleInputChange = (field: keyof TeamDashboardData, value: any) => {
    if (teamData) {
      setTeamData({ ...teamData, [field]: value });
    }
  };

  const handleMemberChange = (index: number, field: 'name' | 'photo', value: string) => {
    if (teamData) {
      const updatedMembers = [...teamData.members];
      updatedMembers[index] = { ...updatedMembers[index], [field]: value };
      setTeamData({ ...teamData, members: updatedMembers });
    }
  };

  const handleProjectPhotoChange = (index: number, value: string) => {
    if (teamData) {
      const updatedPhotos = [...teamData.projectPhotos];
      updatedPhotos[index] = value;
      setTeamData({ ...teamData, projectPhotos: updatedPhotos });
    }
  };

  const viewTeamPage = () => {
    const teamNumber = teamId?.replace('team', '');
    navigate(`/team/${teamNumber}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!teamData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p>Team data not found. Please try logging in again.</p>
            <Button onClick={() => navigate('/student-login')} className="mt-4">
              Back to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageSEO 
        title={`Dashboard - ${teamData.teamName}`}
        description="Team leader dashboard for managing project content"
        keywords="team dashboard, project management, team leader"
      />
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Team Dashboard</h1>
              <p className="text-muted-foreground">Manage your team's project content</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={viewTeamPage}>
                <Eye className="w-4 h-4 mr-2" />
                View Team Page
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {saveMessage && (
            <Alert className="border-green-200 bg-green-50">
              <AlertDescription className="text-green-700">
                {saveMessage}
              </AlertDescription>
            </Alert>
          )}

          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="teamName">Team Name</Label>
                <Input
                  id="teamName"
                  value={teamData.teamName}
                  onChange={(e) => handleInputChange('teamName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="projectTitle">Project Title</Label>
                <Input
                  id="projectTitle"
                  value={teamData.projectTitle}
                  onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="abstract">Project Abstract</Label>
                <Textarea
                  id="abstract"
                  value={teamData.abstract}
                  onChange={(e) => handleInputChange('abstract', e.target.value)}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Team Members */}
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {teamData.members.map((member, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
                  <div>
                    <Label htmlFor={`member-name-${index}`}>Member {index + 1} Name</Label>
                    <Input
                      id={`member-name-${index}`}
                      value={member.name}
                      onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`member-photo-${index}`}>Photo URL</Label>
                    <Input
                      id={`member-photo-${index}`}
                      value={member.photo}
                      onChange={(e) => handleMemberChange(index, 'photo', e.target.value)}
                      placeholder="Enter photo URL"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Project Photos */}
          <Card>
            <CardHeader>
              <CardTitle>Project Photos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {teamData.projectPhotos.map((photo, index) => (
                <div key={index}>
                  <Label htmlFor={`project-photo-${index}`}>Project Photo {index + 1} URL</Label>
                  <Input
                    id={`project-photo-${index}`}
                    value={photo}
                    onChange={(e) => handleProjectPhotoChange(index, e.target.value)}
                    placeholder="Enter photo URL"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-center">
            <Button onClick={handleSave} size="lg" className="px-8">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamDashboard;
