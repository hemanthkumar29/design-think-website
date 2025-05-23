
import React, { useState, useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ProgressBar from './ProgressBar';
import { Button } from '@/components/ui/button';
import { getTeamById, subscribeToTeamsUpdates } from '@/services/teamService';
import { Award, Users } from 'lucide-react';
import StarRating from './StarRating';

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
  const [team, setTeam] = useState(() => getTeamById(id));
  
  // Subscribe to team updates
  useEffect(() => {
    const updateTeam = () => {
      const updatedTeam = getTeamById(id);
      if (updatedTeam) {
        setTeam(updatedTeam);
        setProgress(updatedTeam.progress);
      }
    };
    
    // Subscribe to updates
    const unsubscribe = subscribeToTeamsUpdates(updateTeam);
    
    return () => {
      unsubscribe();
    };
  }, [id]);

  // Optimize click handler to prevent unnecessary re-renders
  const handleCardClick = React.useCallback(() => {
    navigate(`/team/${id}`);
  }, [navigate, id]);

  return (
    <div 
      className={cn(
        'glass-card p-6 rounded-xl hover-scale group cursor-pointer transform-gpu',
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
                  {team.members.map((member) => (
                    <li key={member.id} className="truncate flex items-center justify-between">
                      <span>{member.name}</span>
                      {member.rating && member.rating > 0 && (
                        <StarRating rating={member.rating} size="sm" interactive={false} />
                      )}
                    </li>
                  ))}
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
          className="w-full transition-all duration-300 mt-2 opacity-90 group-hover:opacity-100"
          size="sm"
        >
          View Project
        </Button>
      </div>
    </div>
  );
});

TeamCard.displayName = 'TeamCard';

export default TeamCard;
