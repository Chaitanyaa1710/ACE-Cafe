import React from 'react';
import { Coffee, UtensilsCrossed, Sparkles, MapPin } from 'lucide-react';
import { FEATURES } from '../data/cafeData';

export const WhyAce: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#d4a373]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#d4a373]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#d4a373]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#d4a373]" />;
      default:
        return <Coffee className="w-5 h-5 text-[#d4a373]" />;
    }
  };

  return (
    <section id="why-ace" className="py-24 px-6 sm:px-10 relative z-10 bg-[#0f0d0c] border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#d4a373] block mb-3">
            The ACE Difference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight">
            More Than Just a Café.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed font-light">
            The ACE Cafe is where good food meets good company. Whether you're catching up with friends,
            grabbing a quick bite between lectures, working over coffee, or looking for a relaxed evening
            spot, ACE is made for moments worth staying for.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              id={`feature-card-${index + 1}`}
              className="group relative rounded-2xl p-7 bg-[#1a1614] border border-white/5 hover:border-[#d4a373]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:border-[#d4a373]/40 group-hover:bg-[#d4a373]/10 transition-all duration-300">
                  {getIcon(feature.iconName)}
                </div>

                {/* Subtitle tag */}
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4a373] block mb-1.5">
                  {feature.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#d4a373] transition-colors mb-2.5">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Index Marker */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/30 group-hover:text-[#d4a373] transition-colors font-mono-price">
                <span>0{index + 1}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity uppercase text-[10px] tracking-widest">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

