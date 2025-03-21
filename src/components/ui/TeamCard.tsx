
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ProgressBar from './ProgressBar';
import { Button } from '@/components/ui/button';

interface TeamCardProps {
  id: number;
  name: string;
  progress: number;
  className?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ id, name, progress, className }) => {
  const navigate = useNavigate();

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
