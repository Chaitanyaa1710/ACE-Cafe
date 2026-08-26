import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyAce } from './components/WhyAce';
import { MenuSection } from './components/MenuSection';
import { FoodExperience } from './components/FoodExperience';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { QuickBookModal } from './components/QuickBookModal';
import { Phone, MapPin, Calendar, Utensils } from 'lucide-react';
import { CAFE_INFO } from './data/cafeData';

export default function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0d0c] text-[#fdfaf6] relative selection:bg-[#d4a373] selection:text-[#0f0d0c]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenBookModal={() => setIsBookModalOpen(true)} />

      {/* Main Page Flow */}
      <main id="main-content">
        {/* Full-Screen Cinematic Hero */}
        <Hero />

        {/* Why ACE Section (Editorial & 4 Feature Cards) */}
        <WhyAce />

        {/* Signature Menu Section with Filters & Interactive View Item Modal */}
        <MenuSection />

        {/* Food Experience Showcase (Come Hungry. Leave Happy.) */}
        <FoodExperience />

        {/* Gallery Section with Masonry & Lightbox */}
        <GallerySection />

        {/* Customer Reviews Section (Loved by the ACE Crowd) */}
        <ReviewsSection />

        {/* About Section (Your New Favourite Spot + Stats Row) */}
        <AboutSection />

        {/* Location & Map Section (Find Your Way to ACE) */}
        <LocationSection />

        {/* Final High-Impact CTA Banner */}
        <CTASection onOpenBookModal={() => setIsBookModalOpen(true)} />
      </main>

      {/* Dark Cinematic Footer */}
      <Footer />

      {/* Quick Booking / Table Inquiry Modal */}
      <QuickBookModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />

      {/* Mobile Floating Quick Bar (Fixed at bottom for easy one-hand thumb access) */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
        <div className="bg-[#141110]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/90 flex items-center justify-around gap-1.5">
          <a
            href="#menu"
            className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-xl text-[10px] font-medium text-white/70 hover:text-white hover:bg-white/5 active:scale-95 transition-all"
          >
            <Utensils className="w-4 h-4 text-[#d4a373] mb-0.5" />
            <span>Menu</span>
          </a>

          <a
            href={`tel:${CAFE_INFO.phoneRaw}`}
            className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-xl text-[10px] font-medium text-white/70 hover:text-white hover:bg-white/5 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-[#d4a373] mb-0.5" />
            <span>Call</span>
          </a>

          <a
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-xl text-[10px] font-bold text-[#0f0d0c] bg-white hover:bg-[#d4a373] shadow-md active:scale-95 transition-all uppercase tracking-wider"
          >
            <MapPin className="w-4 h-4 text-[#0f0d0c] mb-0.5" />
            <span>Map</span>
          </a>

          <button
            type="button"
            onClick={() => setIsBookModalOpen(true)}
            className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-xl text-[10px] font-medium text-white/70 hover:text-white hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#d4a373] mb-0.5" />
            <span>Table</span>
          </button>
        </div>
      </div>
    </div>
  );
}
