import React from 'react';
import { Sparkles, Star, Eye } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  onViewItem: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onViewItem }) => {
  return (
    <div
      id={`menu-card-${item.id}`}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#1a1614] border border-white/5 hover:border-[#d4a373]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/80 overflow-hidden"
    >
      {/* Top Image Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#241c18]">
        <img
          src={item.image}
          alt={item.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
        />
        
        {/* Dark Gradient at bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1614] via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          {/* Dietary Indicator */}
          <div className="flex items-center gap-1.5 bg-[#0f0d0c]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
            <div
              className={`w-3 h-3 rounded-sm border flex items-center justify-center ${
                item.dietary === 'veg'
                  ? 'border-emerald-500'
                  : 'border-amber-600'
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  item.dietary === 'veg'
                    ? 'bg-emerald-500'
                    : 'bg-amber-600'
                }`}
              />
            </div>
            <span className="text-[9px] uppercase font-bold tracking-wider text-white/80">
              {item.dietary === 'veg' ? 'Veg' : 'Non-Veg'}
            </span>
          </div>

          {/* Special Tag if any */}
          {item.tag && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-wider bg-[#d4a373] text-[#0f0d0c] shadow-md">
              <Sparkles className="w-2.5 h-2.5" />
              {item.tag}
            </span>
          )}
        </div>

        {/* Price & Rating Overlay in Image Bottom */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
          <span className="text-base font-mono-price font-bold text-[#d4a373] bg-[#0f0d0c]/90 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10">
            {item.price}
          </span>

          {item.rating && (
            <div className="flex items-center gap-1 bg-[#0f0d0c]/90 backdrop-blur-md px-2 py-0.5 rounded-md text-xs text-amber-400 border border-white/5">
              <Star className="w-3 h-3 fill-amber-400" />
              <span className="font-semibold text-white">{item.rating}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#d4a373] block mb-1">
            {item.category}
          </span>
          <h3 className="text-base font-serif font-bold text-white group-hover:text-[#d4a373] transition-colors leading-snug line-clamp-1">
            {item.name}
          </h3>
          <p className="mt-2 text-xs text-white/60 line-clamp-2 leading-relaxed font-light">
            {item.description}
          </p>
        </div>

        {/* View Item Button Action */}
        <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
          <button
            type="button"
            id={`view-item-btn-${item.id}`}
            onClick={() => onViewItem(item)}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white/5 hover:bg-[#d4a373] hover:text-[#0f0d0c] border border-white/5 hover:border-[#d4a373] text-xs font-semibold uppercase tracking-wider text-white/80 transition-all duration-200 active:scale-98"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

