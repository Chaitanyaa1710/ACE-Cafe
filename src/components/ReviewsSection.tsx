import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, ArrowUpRight, MessageSquareHeart } from 'lucide-react';
import { REVIEWS, CAFE_INFO } from '../data/cafeData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (index < 0) index = 0;
    if (index >= REVIEWS.length) index = REVIEWS.length - 1;
    setCurrentIndex(index);

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('div')?.clientWidth || 340;
      container.scrollTo({
        left: index * (cardWidth + 24),
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < REVIEWS.length - 1) {
      scrollToIndex(currentIndex + 1);
    } else {
      scrollToIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    } else {
      scrollToIndex(REVIEWS.length - 1);
    }
  };

  return (
    <section
      id="reviews"
      className="py-24 px-6 sm:px-10 relative z-10 bg-[#0f0d0c] border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Big Rating Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#d4a373] block mb-3">
              Community Love
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight">
              Loved by the ACE Crowd.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-light">
              Real reviews from college students, local foodies, and evening hangout regulars in New Panvel.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-5 p-6 rounded-2xl bg-[#1a1614] border border-white/10 shadow-2xl self-start md:self-auto">
            <div className="flex flex-col items-center justify-center border-r border-white/10 pr-5">
              <span className="text-4xl font-serif font-bold text-white">4.5</span>
              <div className="flex items-center gap-0.5 text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-white block">
                {CAFE_INFO.reviewCount} Google Reviews
              </span>
              <span className="text-xs text-white/50 block mt-0.5 font-light">
                ★ 4.5 out of 5 stars
              </span>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#d4a373] hover:text-white mt-1.5 transition-colors"
              >
                <span>Google Verified</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <MessageSquareHeart className="w-4 h-4 text-[#d4a373]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-white/60">
              Browse Customer Stories
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              id="prev-review-btn"
              className="p-2.5 rounded-full bg-[#1a1614] border border-white/10 hover:border-[#d4a373] text-white/80 hover:text-white transition-all cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              id="next-review-btn"
              className="p-2.5 rounded-full bg-[#1a1614] border border-white/10 hover:border-[#d4a373] text-white/80 hover:text-white transition-all cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reviews Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory"
        >
          {REVIEWS.map((rev, index) => (
            <div
              key={rev.id}
              id={`review-card-${index + 1}`}
              className="min-w-[300px] sm:min-w-[360px] md:min-w-[390px] flex-shrink-0 snap-start p-7 rounded-2xl bg-[#1a1614] border border-white/5 hover:border-[#d4a373]/40 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/70 hover:-translate-y-1"
            >
              <div>
                {/* Top Row: Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(rev.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-amber-400/40'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[10px] text-white/40 font-mono-price font-medium">
                    {rev.date}
                  </span>
                </div>

                {/* Quote symbol & text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#d4a373]/15 absolute -top-3 -left-2 pointer-events-none" />
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light relative z-10 pl-2">
                    “{rev.text}”
                  </p>
                </div>
              </div>

              {/* Bottom Author & Favorite Dish */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                {rev.favoriteDish && (
                  <div className="flex items-center gap-1.5 text-xs text-[#d4a373]">
                    <span className="text-[10px] uppercase font-bold text-white/40">Favorite:</span>
                    <span className="font-semibold bg-white/5 px-2 py-0.5 rounded-md border border-white/5 text-xs text-[#d4a373]">
                      {rev.favoriteDish}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#2a2420] border border-[#d4a373]/40 flex items-center justify-center font-bold text-xs text-[#d4a373]">
                      {rev.avatarText}
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-bold text-white">
                        {rev.author}
                      </h4>
                      <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified Diner</span>
                      </div>
                    </div>
                  </div>

                  {rev.visitType && (
                    <span className="text-[9px] uppercase tracking-wider text-white/40 font-medium bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {rev.visitType}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? 'w-8 bg-[#d4a373]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Link to Google Reviews */}
        <div className="mt-14 text-center">
          <a
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            id="google-reviews-external-link"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest text-[#d4a373] hover:text-[#0f0d0c] hover:bg-[#d4a373] border border-[#d4a373]/40 shadow-xl transition-all duration-200"
          >
            <span>See all 84+ reviews on Google</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
