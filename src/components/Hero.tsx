import React from 'react';
import { ChevronDown, MapPin, Sparkles, Utensils, ArrowUpRight, Clock, Coffee, Star } from 'lucide-react';
import { CAFE_INFO, MENU_ITEMS } from '../data/cafeData';
import heroBgImg from '../assets/images/ace_cafe_hero_1787746065408.jpg';
import chickenImg from '../assets/images/crispy_chicken_1787746080722.jpg';
import burgerImg from '../assets/images/burger_mayo_fries_1787746095234.jpg';
import friesImg from '../assets/images/cheese_fries_dish_1787746111274.jpg';

export const Hero: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const menu = document.getElementById('menu');
    if (menu) menu.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLocation = (e: React.MouseEvent) => {
    e.preventDefault();
    const loc = document.getElementById('location');
    if (loc) loc.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhyAce = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('why-ace');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // 3 Signature items for Immersive aside panel
  const asideSignatures = [
    {
      name: 'Chicken Crispy',
      subtitle: 'Perfect for sharing',
      price: '₹240',
      image: chickenImg,
    },
    {
      name: 'Cheese Fries',
      subtitle: 'Loaded & cheesy',
      price: '₹180',
      image: friesImg,
    },
    {
      name: 'Paneer Pockets',
      subtitle: 'Indulgent & crispy',
      price: '₹210',
      image: burgerImg,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:h-[calc(100vh-72px)] mt-[72px] flex flex-col lg:flex-row overflow-hidden bg-[#0f0d0c] text-[#fdfaf6] border-b border-white/5"
    >
      {/* Main Experience Showcase (60% on desktop) */}
      <div className="w-full lg:w-[60%] relative overflow-hidden group min-h-[580px] lg:min-h-full flex flex-col justify-between p-6 sm:p-10 lg:p-14">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={heroBgImg}
            alt="The ACE Cafe Interior Ambience"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 group-hover:scale-100"
          />
          {/* Multi-layered cinematic gradient overlays matching Immersive UI */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0c] via-transparent to-black/40 z-10" />
          <div className="absolute inset-0 subtle-grain opacity-40 pointer-events-none z-10" />
        </div>

        {/* Top Kicker Bar */}
        <div className="relative z-20 flex flex-wrap items-center gap-3 animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="text-[#d4a373] text-sm tracking-wider">★ ★ ★ ★ ★</span>
            <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold">
              4.5 / 5 · 84 Reviews
            </span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#d4a373] font-medium bg-[#1a1614]/80 px-2.5 py-1 rounded-full border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open till 11:00 PM</span>
          </div>
        </div>

        {/* Central / Bottom Hero Content */}
        <div className="relative z-20 max-w-xl my-auto lg:my-0 lg:mt-auto pb-6 sm:pb-8">
          <h1
            id="hero-headline"
            className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-serif italic leading-[1.1] mb-6 text-white tracking-tight drop-shadow-md"
          >
            Good Food.<br />
            Great Coffee.<br />
            <span className="gold-gradient-text not-italic">Better Moments.</span>
          </h1>

          <p
            id="hero-subtext"
            className="text-base sm:text-lg text-white/75 mb-8 font-light leading-relaxed max-w-lg"
          >
            Your cozy corner in New Panvel for coffee, conversations, comfort food and unforgettable evenings.
          </p>

          {/* Action Buttons matching Immersive UI Design Spec */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href="#menu"
              id="hero-cta-explore-menu"
              onClick={scrollToMenu}
              className="bg-white text-black hover:bg-[#d4a373] hover:text-[#0f0d0c] px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest text-center transition-all duration-200 shadow-xl"
            >
              Explore Menu
            </a>

            <a
              href="#location"
              id="hero-cta-get-directions"
              onClick={scrollToLocation}
              className="border border-white/30 hover:border-[#d4a373] text-white hover:text-[#d4a373] px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest text-center backdrop-blur-sm transition-all duration-200"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#why-ace"
          id="hero-scroll-indicator"
          onClick={scrollToWhyAce}
          className="relative z-20 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer self-center lg:self-start mt-4"
          aria-label="Scroll to discover"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] mb-2 text-white/80">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent" />
        </a>
      </div>

      {/* Signature Aside Showcase (40% on desktop) */}
      <aside className="w-full lg:w-[40%] bg-[#1a1614] border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col p-6 sm:p-8 lg:p-10 justify-between overflow-hidden">
        {/* Top: Signature Menu Teaser */}
        <section className="mb-6 lg:mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#d4a373] font-semibold">
              Signature Menu
            </h2>
            <span className="text-[10px] text-white/40 uppercase tracking-widest">
              Freshly Made
            </span>
          </div>

          <div className="space-y-3 sm:space-y-3.5">
            {asideSignatures.map((item, idx) => (
              <a
                key={idx}
                href="#menu"
                onClick={scrollToMenu}
                className="group/item flex items-center gap-4 p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 hover:border-[#d4a373]/30 transition-all duration-200 cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2a2420] rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white group-hover/item:text-[#d4a373] transition-colors truncate">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-white/50 truncate">
                    {item.subtitle}
                  </p>
                </div>
                <span className="text-[#d4a373] font-mono-price font-semibold text-sm flex-shrink-0">
                  {item.price}
                </span>
              </a>
            ))}
          </div>

          <a
            href="#menu"
            onClick={scrollToMenu}
            className="block w-full mt-5 py-3 text-center border border-[#d4a373]/30 hover:border-[#d4a373] hover:bg-[#d4a373]/10 text-[#d4a373] text-[10px] uppercase tracking-widest font-bold transition-all duration-200"
          >
            View Full Menu →
          </a>
        </section>

        {/* Bottom: Latest Reviews Highlights */}
        <section className="pt-6 border-t border-white/5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#d4a373] font-semibold">
              Latest Reviews
            </h2>
            <div className="flex items-center gap-1 text-[10px] text-amber-400">
              <span>★ 4.5</span>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-black/20 border border-white/5">
            <p className="text-xs sm:text-sm italic font-serif leading-relaxed text-white/80">
              “Best food in the town and service is too good. White chicken pepper is a must try!”
            </p>
            <p className="text-[10px] uppercase tracking-wider mt-2 text-white/40 font-medium">
              — Omkar Padwal · Local Guide
            </p>
          </div>
        </section>
      </aside>
    </section>
  );
};

