
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ProgressBar from './ProgressBar';
import { Button } from '@/components/ui/button';
import { getTeamById } from '@/services/teamService';
import { Award } from 'lucide-react';

interface TeamCardProps {
  id: number;
  name: string;
  progress: number;
  className?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ id, name, progress, className }) => {
  const navigate = useNavigate();
  const team = getTeamById(id);

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
            <div className="mt-1 text-xs opacity-70">
              {team.members.length} team members
            </div>
          </div>
        )}
        
        <ProgressBar 
          progress={team?.progress || progress} 
          size="sm" 
          color={team?.progress > 75 ? 'success' : team?.progress > 25 ? 'default' : 'warning'} 
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
