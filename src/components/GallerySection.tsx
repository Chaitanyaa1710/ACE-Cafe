import React, { useState } from 'react';
import { Sparkles, Maximize2, Camera, Instagram } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

type GalleryCategory = 'All' | 'Ambience' | 'Food' | 'Coffee & Drinks' | 'Vibes';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories: GalleryCategory[] = ['All', 'Ambience', 'Food', 'Coffee & Drinks', 'Vibes'];

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section
      id="gallery"
      className="py-24 px-6 sm:px-10 relative z-10 bg-[#0f0d0c] border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#d4a373] block mb-3">
            Visual Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight">
            Inside ACE
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed font-light">
            Good food. Great company. Plenty of moments worth capturing.
          </p>

          {/* Gallery Category Filter */}
          <div className="flex items-center justify-center gap-2 mt-8 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#d4a373] text-[#0f0d0c] shadow-md shadow-[#d4a373]/20'
                      : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredGallery.map((item, index) => {
            const isSpan2 = index === 0 || index === 3;
            return (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => setActiveLightboxItem(item)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#1a1614] border border-white/5 hover:border-[#d4a373]/50 shadow-xl shadow-black/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  isSpan2 ? 'sm:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Image */}
                <div className={`relative w-full ${isSpan2 ? 'h-64 sm:h-80' : 'h-64 sm:h-72'} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  
                  {/* Subtle Dark Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0c] via-[#0f0d0c]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Top Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-white/90 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom icon in center */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-[#1a1614]/90 backdrop-blur-md border border-[#d4a373]/50 flex items-center justify-center text-[#d4a373] shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Title & Caption on card */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-[#d4a373] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/60 line-clamp-1 mt-1 font-light">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Instagram & Visit Callout */}
        <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="inline-flex items-center gap-2 text-xs text-white/60 bg-[#1a1614] px-6 py-3 rounded-full border border-white/5">
            <Camera className="w-4 h-4 text-[#d4a373]" />
            <span>Tag your photos with <strong className="text-white font-semibold">#TheACECafePanvel</strong> to be featured!</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        items={filteredGallery}
        onClose={() => setActiveLightboxItem(null)}
        onSelect={(item) => setActiveLightboxItem(item)}
      />
    </section>
  );
};
