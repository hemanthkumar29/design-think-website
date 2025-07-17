
import React, { useState, useEffect, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ProgressBar from './ProgressBar';
import { Button } from '@/components/ui/button';
import { getTeamById, subscribeToSupabaseUpdates } from '@/services/teamService';
import { Award, Users } from 'lucide-react';
import StarRating from './StarRating';
import { supabase } from '@/integrations/supabase/client';

interface TeamCardProps {
  id: number;
  name: string;
  progress: number;
  className?: string;
}

// Memoize the TeamCard component to prevent unnecessary re-renders
const TeamCard: React.FC<TeamCardProps> = memo(({ id, name, progress: initialProgress, className }) => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(initialProgress);
  const [team, setTeam] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Subscribe to team updates and load team data
  useEffect(() => {
    let isMounted = true;
    
    const loadTeamData = async () => {
      try {
        const teamData = await getTeamById(id);
        if (teamData && isMounted) {
          // Fetch ratings from database
          const { data: dbTeam } = await supabase
            .from('teams')
            .select('leader_rating')
            .eq('id', id)
            .single();

          const { data: dbMembers } = await supabase
            .from('team_members')
            .select('*')
            .eq('team_id', id);

          // Create member ratings map
          const memberRatingsMap = new Map<string, number>();
          dbMembers?.forEach(member => {
            memberRatingsMap.set(member.id, member.rating || 0);
          });
          
          // Update team data with ratings from database
          const updatedTeam = {
            ...teamData,
            leader: {
              ...teamData.leader,
              rating: dbTeam?.leader_rating || 0
            },
            members: teamData.members.map((member, index) => {
              const memberId = `team_${id}_member_${index + 1}`;
              return {
                ...member,
                rating: memberRatingsMap.get(memberId) || 0
              };
            })
          };
          
          setTeam(updatedTeam);
          setProgress(teamData.progress);
        }
      } catch (error) {
        console.error('Error loading team data:', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    const updateTeam = async () => {
      if (!isMounted) return;
      try {
        const updatedTeam = await getTeamById(id);
        if (updatedTeam && isMounted) {
          // Fetch updated ratings from database
          const { data: dbTeam } = await supabase
            .from('teams')
            .select('leader_rating')
            .eq('id', id)
            .single();

          const { data: dbMembers } = await supabase
            .from('team_members')
            .select('*')
            .eq('team_id', id);

          // Create member ratings map
          const memberRatingsMap = new Map<string, number>();
          dbMembers?.forEach(member => {
            memberRatingsMap.set(member.id, member.rating || 0);
          });
          
          // Update team data with ratings from database
          const teamWithRatings = {
            ...updatedTeam,
            leader: {
              ...updatedTeam.leader,
              rating: dbTeam?.leader_rating || 0
            },
            members: updatedTeam.members.map((member, index) => {
              const memberId = `team_${id}_member_${index + 1}`;
              return {
                ...member,
                rating: memberRatingsMap.get(memberId) || 0
              };
            })
          };
          
          setTeam(teamWithRatings);
          setProgress(updatedTeam.progress);
        }
      } catch (error) {
        console.error('Error updating team data:', error);
      }
    };
    
    // Load initial team data
    loadTeamData();
    
    // Subscribe to real-time updates from Supabase
    const unsubscribe = subscribeToSupabaseUpdates(updateTeam);
    
    // Listen for rating updates from admin dashboard
    const handleRatingUpdate = () => {
      updateTeam();
    };
    
    const handleLeaderRatingUpdate = (event: CustomEvent) => {
      if (event.detail?.teamId === id) {
        updateTeam();
      }
    };
    
    window.addEventListener('adminRatingUpdated', handleRatingUpdate);
    window.addEventListener('leaderRatingUpdated', handleLeaderRatingUpdate as EventListener);
    
    return () => {
      isMounted = false;
      unsubscribe();
      window.removeEventListener('adminRatingUpdated', handleRatingUpdate);
      window.removeEventListener('leaderRatingUpdated', handleLeaderRatingUpdate as EventListener);
    };
  }, [id]);

  // Optimize click handler to prevent unnecessary re-renders
  const handleCardClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    // Save current scroll position before navigation
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    sessionStorage.setItem('scroll-teams-page', scrollPosition.toString());
    navigate(`/team/${id}`);
  }, [navigate, id]);

  if (isLoading) {
    return (
      <div 
        className={cn(
          'bg-white p-6 rounded-xl shadow-md border border-gray-200',
          className
        )}
      >
        <div className="space-y-4">
          <div className="min-h-[40px] flex items-start">
            <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
          </div>
          <div className="h-2 bg-gray-200 rounded w-full animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded w-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={cn(
        'bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg cursor-pointer transition-all duration-200 hover:scale-[1.02]',
        className
      )}
      onClick={handleCardClick}
    >
      <div className="space-y-4">
        <div className="min-h-[40px] flex items-start">
          <h3 className="text-lg font-medium leading-tight">Team {id}: {name}</h3>
        </div>
        
        {team && (
          <div className="text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Award size={14} className="text-yellow-500" />
              <span className="font-medium">{team.leader.name}</span>
              <span className="text-xs opacity-70">({team.leader.role})</span>
            </div>
            {team.leader.rating && team.leader.rating > 0 && (
              <div className="ml-5 mt-1">
                <StarRating rating={team.leader.rating} size="sm" interactive={false} />
              </div>
            )}
            
            {team.members.length > 0 && (
              <div className="mt-2">
                <div className="flex items-center gap-1 mb-1">
                  <Users size={14} className="text-blue-500" />
                  <span className="text-xs font-medium">Team Members:</span>
                </div>
                <ul className="text-xs opacity-70 space-y-0.5 pl-4">
                  {team.members.slice(0, 3).map((member) => (
                    <li key={member.id} className="truncate flex items-center justify-between">
                      <span>{member.name}</span>
                      {member.rating && member.rating > 0 && (
                        <StarRating rating={member.rating} size="sm" interactive={false} />
                      )}
                    </li>
                  ))}
                  {team.members.length > 3 && (
                    <li className="text-xs opacity-50">+{team.members.length - 3} more</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}
        
        <ProgressBar 
          progress={progress} 
          size="sm" 
          color={progress > 75 ? 'success' : progress > 25 ? 'default' : 'warning'} 
        />
        
        <Button 
          className="w-full mt-2 opacity-90 hover:opacity-100 transition-opacity"
          size="sm"
          onClick={(e) => e.stopPropagation()}
        >
          View Project
        </Button>
      </div>
    </div>
  );
});

TeamCard.displayName = 'TeamCard';

export default TeamCard;
