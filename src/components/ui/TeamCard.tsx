
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ProgressBar from './ProgressBar';
import { Button } from '@/components/ui/button';
import { getTeamById, subscribeToTeamsUpdates } from '@/services/teamService';
import { Award, Users } from 'lucide-react';

interface TeamCardProps {
  id: number;
  name: string;
  progress: number;
  className?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ id, name, progress: initialProgress, className }) => {
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

  return (
    <div 
      className={cn(
        'glass-card p-6 rounded-xl hover-scale group cursor-pointer',
        className
      )}
      onClick={() => navigate(`/team/${id}`)}
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
            
            {team.members.length > 0 && (
              <div className="mt-2">
                <div className="flex items-center gap-1 mb-1">
                  <Users size={14} className="text-blue-500" />
                  <span className="text-xs font-medium">Team Members:</span>
                </div>
                <ul className="text-xs opacity-70 space-y-0.5 pl-4">
                  {team.members.map((member, index) => (
                    <li key={member.id} className="truncate">
                      {member.name}
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
};

export default TeamCard;
