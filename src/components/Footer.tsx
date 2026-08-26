import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Instagram, Facebook, Globe, Star } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why ACE', href: '#why-ace' },
    { name: 'Signature Menu', href: '#menu' },
    { name: 'Food Experience', href: '#food-experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Our Story', href: '#about' },
    { name: 'Location & Map', href: '#location' },
  ];

  return (
    <footer className="bg-[#0f0d0c] text-white/70 border-t border-white/5 relative z-10">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#d4a373]/40 flex items-center justify-center bg-[#1a1614]">
                <span className="font-serif font-bold text-sm text-[#d4a373]">A</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-[0.25em] text-white">
                  THE ACE CAFE
                </h3>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#d4a373] font-medium block">
                  New Panvel East
                </span>
              </div>
            </div>

            <p className="text-sm text-white/60 font-light leading-relaxed max-w-sm">
              “Good Food. Great Coffee. Better Moments.”<br />
              Your neighborhood cozy haven in New Panvel for handcrafted burgers, loaded fries, oriental starters, and memorable conversations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                id="footer-social-instagram"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4a373] border border-white/5 hover:border-[#d4a373] flex items-center justify-center text-white/70 hover:text-[#0f0d0c] transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-facebook"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4a373] border border-white/5 hover:border-[#d4a373] flex items-center justify-center text-white/70 hover:text-[#0f0d0c] transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                id="footer-social-google"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4a373] border border-white/5 hover:border-[#d4a373] flex items-center justify-center text-white/70 hover:text-[#0f0d0c] transition-all duration-200"
                aria-label="Google Profile & Reviews"
              >
                <Globe className="w-4 h-4" />
              </a>

              <div className="ml-2 flex items-center gap-1.5 text-xs text-amber-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 font-mono-price">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-bold text-white">4.5 / 5</span>
                <span className="text-white/40 text-[10px]">(84)</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#d4a373]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Timings Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#d4a373]">
              Find & Contact Us
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/60 font-light">
                <MapPin className="w-4 h-4 text-[#d4a373] flex-shrink-0 mt-1" />
                <span>
                  Near Pillai's College, behind Swad Hotel, Triveni Society, Sector 16, New Panvel East, Panvel, Maharashtra 410206
                </span>
              </div>

              <div className="flex items-center gap-3 text-white/60 font-light">
                <Phone className="w-4 h-4 text-[#d4a373] flex-shrink-0" />
                <a
                  href={`tel:${CAFE_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors font-medium text-white/90"
                >
                  {CAFE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3 text-white/60 font-light">
                <Clock className="w-4 h-4 text-[#d4a373] flex-shrink-0" />
                <span>Open Daily: 11:00 AM – 11:00 PM</span>
              </div>
            </div>

            {/* Google Maps quick launch */}
            <div className="pt-1">
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4a373] hover:text-white transition-colors uppercase tracking-wider"
              >
                <span>Get Driving Directions on Google Maps</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-white/5 py-6 bg-[#0a0908]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 The ACE Cafe. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span>New Panvel East, Maharashtra</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#d4a373] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

