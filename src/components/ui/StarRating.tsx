
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  onChange?: (rating: number) => Promise<boolean> | boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  interactive?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  showLoadingSpinner?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  maxStars = 5,
  onChange,
  size = 'md',
  className,
  interactive = true,
  disabled = false,
  isLoading = false,
  showLoadingSpinner = true
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const starSizes = {
    sm: { size: 14, className: 'space-x-0.5' },
    md: { size: 18, className: 'space-x-1' },
    lg: { size: 24, className: 'space-x-2' },
  };

  const { size: starSize, className: starSpacing } = starSizes[size];

  const handleClick = async (index: number) => {
    if (!interactive || !onChange || disabled || isLoading || isSubmitting) {
      return;
    }

    // If clicking the same star twice, clear the rating
    const newRating = rating === index ? 0 : index;
    
    setIsSubmitting(true);
    
    try {
      const result = await onChange(newRating);
      
      // If onChange returns false, the update failed
      if (result === false) {
        console.error('Rating update failed');
      }
    } catch (error) {
      console.error('Error updating rating:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isCurrentlyDisabled = disabled || isLoading || isSubmitting;

  return (
    <div 
      className={cn(
        'flex items-center relative',
        starSpacing,
        className,
        isCurrentlyDisabled && 'opacity-60'
      )}
      onMouseLeave={() => interactive && !isCurrentlyDisabled && setHoverRating(0)}
    >
      {/* Loading spinner overlay */}
      {(isLoading || isSubmitting) && showLoadingSpinner && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 border border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
      
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = hoverRating ? starValue <= hoverRating : starValue <= rating;
        
        return (
          <Star
            key={index}
            size={starSize}
            className={cn(
              'transition-all duration-200',
              isFilled ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300',
              interactive && !isCurrentlyDisabled && 'cursor-pointer hover:scale-110',
              (!interactive || isCurrentlyDisabled) && 'pointer-events-none',
              isCurrentlyDisabled && 'opacity-50'
            )}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => 
              interactive && !isCurrentlyDisabled && setHoverRating(starValue)
            }
          />
        );
      })}
      
      {/* Rating value display for debugging (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <span className="ml-2 text-xs text-gray-400">
          {rating}/{maxStars}
        </span>
      )}
    </div>
  );
};

export default StarRating;
