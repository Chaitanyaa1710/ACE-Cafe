import React from 'react';
import { Sparkles, MapPin, Coffee } from 'lucide-react';
import { CAFE_INFO, CAFE_STATS } from '../data/cafeData';
import vibeImg from '../assets/images/cafe_evening_vibe_1787746130235.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-10 relative z-10 bg-[#0f0d0c] border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atmospheric Image & Floating Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/90 border border-white/10 group">
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#1a1614]">
                <img
                  src={vibeImg}
                  alt="Atmosphere at The ACE Cafe New Panvel"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              </div>

              {/* Bottom Image Callout */}
              <div className="absolute bottom-4 left-5 right-5 p-4 rounded-2xl bg-[#0f0d0c]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4a373]/20 flex items-center justify-center text-[#d4a373]">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-white">
                      Crafted for Conversations
                    </h4>
                    <p className="text-[11px] text-white/50">
                      Behind Swad Hotel, Sector 16, New Panvel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#d4a373] block">
              Our Story & Vibe
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white leading-tight tracking-tight">
              Your New <span className="gold-gradient-text not-italic">Favourite Spot.</span>
            </h2>

            <div className="space-y-4 text-base text-white/70 font-light leading-relaxed">
              <p>
                Tucked into the vibrant neighborhood of Sector 16, New Panvel East—right near Pillai's College and behind Swad Hotel—The ACE Cafe was built around a simple idea: that a café should be a genuine sanctuary of comfort.
              </p>
              <p>
                Whether it's celebrating after an exam, diving into deep evening conversations over loaded cheese fries and chicken crispy, or unwinding with a freshly brewed cold coffee, ACE has become the go-to gathering place for students, friends, and families across Panvel.
              </p>
              <p>
                We believe in uncompromising freshness, friendly hospitality, and warm ambiance that stays open till 11 PM so you never have to rush your best moments.
              </p>
            </div>

            {/* Stat Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4">
              {CAFE_STATS.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-[#1a1614] border border-white/5 flex flex-col items-center text-center"
                >
                  <span className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#d4a373] mt-1">
                    {stat.label}
                  </span>
                  <span className="text-[10px] text-white/40 mt-1 leading-tight font-light">
                    {stat.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Location CTA button */}
            <div className="pt-2">
              <a
                href="#location"
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-[#d4a373] hover:text-[#0f0d0c] px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest text-center transition-all duration-200"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit Us in New Panvel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

