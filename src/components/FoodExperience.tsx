import React from 'react';
import { Sparkles, Utensils, Heart, Flame } from 'lucide-react';
import chickenImg from '../assets/images/crispy_chicken_1787746080722.jpg';
import burgerImg from '../assets/images/burger_mayo_fries_1787746095234.jpg';
import friesImg from '../assets/images/cheese_fries_dish_1787746111274.jpg';

export const FoodExperience: React.FC = () => {
  return (
    <section
      id="food-experience"
      className="py-24 px-6 sm:px-10 relative overflow-hidden bg-[#0f0d0c] border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Dramatic Copy & Story */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#d4a373] block">
              The ACE Craving Experience
            </span>

            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white leading-[1.05] tracking-tight">
                Come Hungry.<br />
                <span className="gold-gradient-text not-italic">
                  Leave Happy.
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
              From crispy bites to cheesy comfort food, every plate is made for that moment when you just want something really good.
            </p>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#1a1614] border border-white/5">
                <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
                  <Utensils className="w-4 h-4 text-[#d4a373]" />
                  <span>Sizzling Hot</span>
                </div>
                <p className="text-xs text-white/60 mt-1 font-light">
                  Cooked to order with crisp textures & oriental aromas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#1a1614] border border-white/5">
                <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
                  <Heart className="w-4 h-4 text-[#d4a373]" />
                  <span>Pure Comfort</span>
                </div>
                <p className="text-xs text-white/60 mt-1 font-light">
                  Generous portions made for sharing and good laughs.
                </p>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4a373] hover:text-white transition-colors"
              >
                <span>Browse Signature Starters & Shakes</span>
                <span className="text-base">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Overlapping Visual Mosaic */}
          <div className="lg:col-span-7 relative">
            <div className="relative grid grid-cols-12 gap-4 items-center">
              {/* Main Primary Image */}
              <div className="col-span-8 relative z-20 rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1614]">
                  <img
                    src={chickenImg}
                    alt="Signature Chicken Crispy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#d4a373] block">
                      Signature Favorite
                    </span>
                    <span className="text-lg font-serif font-bold text-white">
                      Chicken Crispy Sizzler Plate
                    </span>
                  </div>
                </div>
              </div>

              {/* Overlapping Floating Secondary Image */}
              <div className="col-span-6 -ml-12 sm:-ml-16 -mt-16 sm:-mt-20 z-30 rounded-3xl overflow-hidden shadow-2xl shadow-black/90 border border-white/10 group">
                <div className="relative aspect-square overflow-hidden bg-[#1a1614]">
                  <img
                    src={burgerImg}
                    alt="Aloo Tikki Burger with Mayo Fries"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#d4a373] block">
                      Comfort Classic
                    </span>
                    <span className="text-sm font-serif font-bold text-white leading-tight">
                      Aloo Burger & Mayo Fries
                    </span>
                  </div>
                </div>
              </div>

              {/* Overlapping Floating Third Image */}
              <div className="col-span-6 sm:col-span-5 -mt-12 sm:-mt-16 -ml-4 sm:-ml-8 z-30 rounded-2xl overflow-hidden shadow-2xl shadow-black/90 border border-white/10 group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1614]">
                  <img
                    src={friesImg}
                    alt="Loaded Cheese Fries"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-serif font-bold text-white">
                      Molten Cheese Fries
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Accent Badge */}
              <div className="absolute -top-4 right-4 sm:right-12 z-30 p-3.5 sm:p-4 rounded-2xl bg-[#1a1614]/95 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#d4a373]/20 flex items-center justify-center text-[#d4a373]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block font-serif">
                    100% Freshly Tossed
                  </span>
                  <span className="text-[10px] text-white/50">No Pre-made Patties</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

