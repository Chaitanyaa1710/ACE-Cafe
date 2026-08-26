import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Coffee, Utensils, Star, Image as GalleryIcon, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface NavbarProps {
  onOpenBookModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['home', 'menu', 'why-ace', 'food-experience', 'gallery', 'reviews', 'about', 'location'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Why ACE', href: '#why-ace', id: 'why-ace' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Location', href: '#location', id: 'location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f0d0c]/95 backdrop-blur-md py-3.5 border-b border-white/5 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#0f0d0c]/90 via-[#0f0d0c]/50 to-transparent py-4 sm:py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="h-[48px] sm:h-[52px] flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-3 focus:outline-none"
              id="nav-brand-logo"
            >
              <div className="w-9 h-9 rounded-full bg-[#1a1614] border border-[#d4a373]/40 flex items-center justify-center shadow-md shadow-black/50 transition-transform duration-300 group-hover:scale-105">
                <span className="font-serif font-bold text-xs tracking-wider text-[#d4a373]">ACE</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter text-[#d4a373] group-hover:brightness-125 transition-all">
                  THE ACE CAFE
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 -mt-1 font-medium hidden sm:block">
                  New Panvel East
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    id={`desktop-nav-${link.id}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`transition-all duration-200 py-1 ${
                      isActive
                        ? 'text-[#d4a373] border-b border-[#d4a373] font-semibold'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${CAFE_INFO.phoneRaw}`}
                id="navbar-call-btn"
                className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-[#d4a373] transition-colors"
                title="Call The ACE Cafe"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4a373]" />
                <span className="font-mono-price text-xs font-medium">{CAFE_INFO.phone}</span>
              </a>

              <a
                href="#location"
                id="navbar-visit-btn"
                onClick={(e) => handleNavClick(e, '#location')}
                className="bg-[#d4a373] text-[#0f0d0c] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#d4a373]/20"
              >
                Visit Us
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <a
                href={`tel:${CAFE_INFO.phoneRaw}`}
                id="mobile-quick-call"
                className="p-2 rounded-full bg-[#1a1614] border border-white/10 text-[#d4a373]"
                aria-label="Call Cafe"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#1a1614] border border-white/10 text-white/90 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-drawer-backdrop"
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          id="mobile-drawer-content"
          className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#181310] border-l border-[#D4A373]/20 p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Top Brand info */}
            <div className="flex items-center justify-between pb-6 border-b border-[#2D231C]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4A373]/20 border border-[#D4A373]/40 flex items-center justify-center">
                  <span className="font-serif font-bold text-sm text-[#EAD8C7]">ACE</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-white tracking-widest">THE ACE CAFE</h3>
                  <p className="text-xs text-[#9E8E81]">New Panvel · Sector 16</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full bg-[#221A15] text-[#C7B9AD] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="mt-6 flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    id={`mobile-nav-${link.id}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[#291F18] text-[#F3E2CF] border border-[#D4A373]/30 font-semibold'
                        : 'text-[#C7B9AD] hover:bg-[#201813] hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#D4A373]">→</span>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Bottom Drawer Actions */}
          <div className="pt-6 border-t border-[#2D231C] space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#A8988B] px-1">
              <Clock className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Open Daily: 11:00 AM – 11:00 PM</span>
            </div>

            <a
              href={`tel:${CAFE_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#241C16] border border-[#D4A373]/30 text-[#EAD8C7] font-semibold text-sm hover:bg-[#2F241E] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D4A373]" />
              <span>Call +91 77380 00479</span>
            </a>

            <a
              href="#location"
              onClick={(e) => handleNavClick(e, '#location')}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#D4A373] to-[#B07D4F] text-[#120F0D] font-bold text-sm shadow-md hover:brightness-110 transition-all"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
