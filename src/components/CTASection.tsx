import React from 'react';
import { Phone, MapPin, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import heroBgImg from '../assets/images/ace_cafe_hero_1787746065408.jpg';

interface CTASectionProps {
  onOpenBookModal?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBookModal }) => {
  return (
    <section
      id="cta-section"
      className="relative py-28 px-6 sm:px-10 overflow-hidden bg-[#0f0d0c]"
    >
      {/* Background Image with Cinematic Darkness */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBgImg}
          alt="The ACE Cafe Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0c] via-[#0f0d0c]/90 to-[#0f0d0c]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0c] via-transparent to-[#0f0d0c]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#d4a373] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>New Panvel's Favorite Hangout</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-[1.1]">
          Your Table Is{' '}
          <span className="italic text-[#d4a373]">Waiting.</span>
        </h2>

        {/* Subheading */}
        <p className="mt-5 text-lg sm:text-xl text-white/60 max-w-xl mx-auto font-light leading-relaxed">
          Bring your people. We'll take care of the rest.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            id="final-cta-directions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#0f0d0c] bg-white hover:bg-[#d4a373] transition-all duration-200 cursor-pointer rounded-sm"
          >
            <MapPin className="w-4 h-4" />
            <span>Get Directions</span>
          </a>

          <a
            href={`tel:${CAFE_INFO.phoneRaw}`}
            id="final-cta-call"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white/90 bg-[#1a1614] hover:bg-white/10 border border-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-200 rounded-sm"
          >
            <Phone className="w-4 h-4 text-[#d4a373]" />
            <span>Call: 077380 00479</span>
          </a>
        </div>

        {/* Micro reassurance info */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/40">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Open Daily until 11:00 PM
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]" />
            Pocket-Friendly (₹200–₹400 / person)
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]" />
            Dine-In & Takeaway Available
          </span>
        </div>
      </div>
    </section>
  );
};

