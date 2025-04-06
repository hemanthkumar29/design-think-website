
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { Separator } from '@/components/ui/separator';
import { teamsData } from '@/data/teamsData';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Save } from 'lucide-react';

const AdminDashboard = () => {
  const [teams, setTeams] = useState(teamsData);
  const [progressValues, setProgressValues] = useState({});
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
    
    // Update team progress in local state
    const updatedTeams = teams.map(team => 
      team.id === teamId ? { ...team, progress: progressValues[teamId] } : team
    );
    
    // In a real application, this would make an API call to update the database
    setTimeout(() => {
      setTeams(updatedTeams);
      setIsLoading(false);
      toast({
        title: 'Progress updated',
        description: `Team ${teamId}'s progress has been updated to ${progressValues[teamId]}%`,
        variant: 'default',
      });
      
      // Save to localStorage to persist between page refreshes
      localStorage.setItem('teamsData', JSON.stringify(updatedTeams));
    }, 500);
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
                Welcome to the admin dashboard. Here you can update the progress of each team's project.
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
                </TableRow>
              </TableHeader>
              <TableBody>
                {teams.map((team) => (
                  <TableRow key={team.id}>
                    <TableCell className="font-medium">{team.id}</TableCell>
                    <TableCell>{team.name}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <Award size={16} className="text-yellow-500" />
                      {team.leader.name}
                    </TableCell>
                    <TableCell>{team.progress}%</TableCell>
                    <TableCell className="w-64">
                      <Slider
                        defaultValue={[team.progress]}
                        value={[progressValues[team.id]]} 
                        max={100}
                        step={1}
                        onValueChange={(value) => handleProgressChange(team.id, value)}
                      />
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
                  </TableRow>
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
