
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { getTeams, updateTeamProgress, updateMemberRating } from '@/services/teamService';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Save, Percent, Star, ChevronDown, ChevronUp } from 'lucide-react';
import StarRating from '@/components/ui/StarRating';

const AdminDashboard = () => {
  const [teams, setTeams] = useState(() => getTeams());
  const [progressValues, setProgressValues] = useState({});
  const [expandedTeams, setExpandedTeams] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if admin is authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    if (!isAuthenticated) {
      toast({
        title: 'Access denied',
        description: 'You need to login to access this page',
        variant: 'destructive',
      });
      navigate('/admin');
    }
  }, [navigate, toast]);

  // Initialize progress values
  useEffect(() => {
    const initialValues = {};
    teams.forEach(team => {
      initialValues[team.id] = team.progress;
    });
    setProgressValues(initialValues);
  }, [teams]);

  const handleProgressChange = (teamId, newValue) => {
    setProgressValues(prev => ({
      ...prev,
      [teamId]: newValue[0]
    }));
  };

  const handleSave = (teamId) => {
    setIsLoading(true);
    
    // Use the team service to update progress
    const updatedTeams = updateTeamProgress(teamId, progressValues[teamId]);
    
    setTimeout(() => {
      setTeams(updatedTeams);
      setIsLoading(false);
      toast({
        title: 'Progress updated',
        description: `Team ${teamId}'s progress has been updated to ${progressValues[teamId]}%`,
        variant: 'default',
      });
    }, 300);
  };

  const handleRatingChange = (teamId, memberId, rating) => {
    setIsLoading(true);
    
    // Update member rating
    const updatedTeams = updateMemberRating(teamId, memberId, rating);
    
    setTimeout(() => {
      setTeams(updatedTeams);
      setIsLoading(false);
      toast({
        title: 'Rating updated',
        description: `Member rating has been updated to ${rating} stars`,
        variant: 'default',
      });
    }, 300);
  };

  const toggleTeamExpand = (teamId) => {
    setExpandedTeams(prev => ({
      ...prev,
      [teamId]: !prev[teamId]
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    toast({
      title: 'Logged out',
      description: 'You have been logged out successfully',
      variant: 'default',
    });
    navigate('/admin');
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | DT&I EEE A</title>
        <meta name="description" content="Admin dashboard for managing team progress" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">Admin Dashboard</CardTitle>
                <Button onClick={handleLogout} variant="outline">Logout</Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Welcome to the admin dashboard. Here you can update the progress of each team's project and rate individual team members.
              </p>
            </CardContent>
          </Card>
          
          <div className="bg-card shadow-lg rounded-lg border border-border overflow-hidden">
            <Table>
              <TableCaption>Teams and their project progress</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Team Name</TableHead>
                  <TableHead>Leader</TableHead>
                  <TableHead>Current Progress</TableHead>
                  <TableHead>New Progress</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Members</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teams.map((team) => (
                  <React.Fragment key={team.id}>
                    <TableRow className="group">
                      <TableCell className="font-medium">{team.id}</TableCell>
                      <TableCell>{team.name}</TableCell>
                      <TableCell className="flex items-center gap-2">
                        <Award size={16} className="text-yellow-500" />
                        {team.leader.name}
                      </TableCell>
                      <TableCell>{team.progress}%</TableCell>
                      <TableCell className="w-64">
                        <div className="flex flex-col space-y-1">
                          <div className="flex w-full justify-between items-center text-xs text-muted-foreground">
                            <span>0%</span>
                            <span>50%</span>
                            <span>100%</span>
                          </div>
                          <Slider
                            defaultValue={[team.progress]}
                            value={[progressValues[team.id]]}
                            max={100}
                            step={1}
                            onValueChange={(value) => handleProgressChange(team.id, value)}
                          />
                          <div className="flex items-center justify-center mt-1">
                            <Percent size={14} className="mr-1" />
                            <span className="text-sm font-medium">{progressValues[team.id]}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => handleSave(team.id)}
                          size="sm" 
                          disabled={team.progress === progressValues[team.id] || isLoading}
                        >
                          <Save className="mr-2 h-4 w-4" />
                          Save
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => toggleTeamExpand(team.id)}
                          className="flex items-center gap-1"
                        >
                          {expandedTeams[team.id] ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                          Rate Members
                        </Button>
                      </TableCell>
                    </TableRow>
                    {expandedTeams[team.id] && (
                      <TableRow>
                        <TableCell colSpan={7} className="bg-muted/30">
                          <div className="py-2">
                            <h4 className="text-sm font-medium mb-3 px-2 flex items-center gap-2">
                              <Star className="h-4 w-4 text-yellow-500" />
                              Team Member Ratings
                            </h4>
                            <div className="space-y-3">
                              {/* Leader rating */}
                              <div className="flex items-center justify-between px-2 py-1 hover:bg-muted/50 rounded-md">
                                <div className="flex items-center gap-2">
                                  <Award className="h-4 w-4 text-yellow-500" />
                                  <span className="font-medium">{team.leader.name}</span>
                                  <span className="text-xs text-muted-foreground">({team.leader.role})</span>
                                </div>
                                <StarRating 
                                  rating={team.leader.rating || 0} 
                                  onChange={(newRating) => handleRatingChange(team.id, team.leader.id, newRating)}
                                />
                              </div>
                              
                              {/* Members ratings */}
                              {team.members.map(member => (
                                <div 
                                  key={member.id}
                                  className="flex items-center justify-between px-2 py-1 hover:bg-muted/50 rounded-md"
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">{member.name}</span>
                                    <span className="text-xs text-muted-foreground">({member.role})</span>
                                  </div>
                                  <StarRating 
                                    rating={member.rating || 0}
                                    onChange={(newRating) => handleRatingChange(team.id, member.id, newRating)}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AdminDashboard;
