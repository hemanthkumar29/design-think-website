import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  onChange?: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  interactive?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  maxStars = 5,
  onChange,
  size = 'md',
  className,
  interactive = true,
  disabled = false,
  isLoading = false
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  const starSizes = {
    sm: { size: 14, className: 'space-x-0.5' },
    md: { size: 18, className: 'space-x-1' },
    lg: { size: 24, className: 'space-x-2' },
  };

  const { size: starSize, className: starSpacing } = starSizes[size];

  const handleClick = (starValue: number) => {
    if (!interactive || disabled || isLoading || !onChange) return;
    
    // Allow clicking the same star to clear rating
    const newRating = rating === starValue ? 0 : starValue;
    onChange(newRating);
  };

  const handleMouseEnter = (starValue: number) => {
    if (!interactive || disabled || isLoading) return;
    setHoverRating(starValue);
  };

  const handleMouseLeave = () => {
    if (!interactive || disabled || isLoading) return;
    setHoverRating(0);
  };

  const getStarColor = (starValue: number) => {
    const isFilled = hoverRating ? starValue <= hoverRating : starValue <= rating;
    
    if (disabled) {
      return isFilled ? 'text-yellow-300 fill-yellow-300' : 'text-gray-200';
    }
    
    if (isLoading) {
      return 'text-gray-300 animate-pulse';
    }
    
    return isFilled ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300';
  };

  const getCursor = () => {
    if (!interactive || disabled || isLoading) return 'cursor-default';
    return 'cursor-pointer';
  };

  return (
    <div 
      className={cn('flex items-center', starSpacing, className)}
      onMouseLeave={handleMouseLeave}
    >
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        
        return (
          <Star
            key={index}
            size={starSize}
            className={cn(
              'transition-all duration-200',
              getStarColor(starValue),
              getCursor(),
              interactive && !disabled && !isLoading && 'hover:scale-110',
              isLoading && 'animate-pulse'
            )}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
          />
        );
      })}
      
      {/* Optional loading indicator */}
      {isLoading && (
        <span className="ml-2 text-xs text-muted-foreground">
          Saving...
        </span>
      )}
    </div>
  );
};

export default StarRating;