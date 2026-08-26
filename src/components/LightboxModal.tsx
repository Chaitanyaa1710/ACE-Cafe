import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else {
      onSelect(items[items.length - 1]);
    }
  }, [currentIndex, items, onSelect]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else {
      onSelect(items[0]);
    }
  }, [currentIndex, items, onSelect]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, handlePrev, handleNext]);

  if (!item) return null;

  return (
    <div
      id="gallery-lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/95 backdrop-blur-2xl animate-fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#1a1614] hover:bg-[#26201d] text-white/80 hover:text-white border border-white/10 hover:border-[#d4a373] transition-all duration-200 cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev Button */}
      <button
        id="lightbox-prev-btn"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-[#1a1614] hover:bg-[#26201d] text-white/80 hover:text-white border border-white/10 hover:border-[#d4a373] transition-all duration-200 cursor-pointer"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next Button */}
      <button
        id="lightbox-next-btn"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-[#1a1614] hover:bg-[#26201d] text-white/80 hover:text-white border border-white/10 hover:border-[#d4a373] transition-all duration-200 cursor-pointer"
        aria-label="Next Image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Main Lightbox Content Box */}
      <div
        id="lightbox-dialog"
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0f0d0c] flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[68vh] w-auto max-w-full object-contain rounded-t-2xl"
          />
        </div>

        {/* Caption Bar */}
        <div className="w-full mt-3 p-5 rounded-2xl bg-[#1a1614] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#d4a373] bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                {item.category}
              </span>
              <span className="text-xs text-white/40 font-mono-price">
                Photo {currentIndex + 1} of {items.length}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-serif italic text-white mt-1.5">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/60 mt-0.5 font-light">
              {item.caption}
            </p>
          </div>

          <div className="text-xs text-[#d4a373] flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The ACE Cafe, New Panvel</span>
          </div>
        </div>
      </div>
    </div>
  );
};
