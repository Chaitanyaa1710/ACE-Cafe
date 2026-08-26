import React from 'react';
import { Star } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface RatingBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'glass' | 'solid' | 'gold';
  className?: string;
  showReviewCount?: boolean;
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({
  size = 'md',
  variant = 'glass',
  className = '',
  showReviewCount = true,
}) => {
  const sizeClasses = {
    sm: 'text-xs py-1 px-2.5 gap-1.5',
    md: 'text-sm py-1.5 px-3.5 gap-2',
    lg: 'text-base py-2 px-4 gap-2.5',
  };

  const variantClasses = {
    glass: 'bg-[#1E1713]/80 backdrop-blur-md border border-[#D4A373]/30 text-[#F5EBE1] shadow-lg shadow-black/40',
    solid: 'bg-[#2A201A] border border-[#D4A373]/40 text-[#F5EBE1]',
    gold: 'bg-gradient-to-r from-[#D4A373]/20 to-[#FAEDCD]/20 border border-[#D4A373]/50 text-[#FAEDCD]',
  };

  return (
    <div
      id="cafe-rating-badge"
      className={`inline-flex items-center rounded-full font-medium transition-all duration-300 hover:border-[#D4A373]/70 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <div className="flex items-center gap-0.5 text-[#E6B87D]">
        <Star className="w-3.5 h-3.5 fill-[#E6B87D] text-[#E6B87D]" />
        <span className="font-semibold text-white tracking-wide ml-0.5">{CAFE_INFO.rating}</span>
        <span className="text-[#D4A373]/80 text-xs">/5</span>
      </div>

      {showReviewCount && (
        <>
          <span className="w-1 h-1 rounded-full bg-[#D4A373]/50" />
          <span className="text-[#D4C4B5] text-xs font-normal tracking-wide">
            {CAFE_INFO.reviewCount} Google Reviews
          </span>
        </>
      )}
    </div>
  );
};
