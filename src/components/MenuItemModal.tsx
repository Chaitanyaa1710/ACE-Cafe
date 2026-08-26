import React from 'react';
import { X, Star, Flame, Sparkles, MessageCircle, Utensils, CheckCircle2 } from 'lucide-react';
import { MenuItem } from '../types';
import { CAFE_INFO } from '../data/cafeData';

interface MenuItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const MenuItemModal: React.FC<MenuItemModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello The ACE Cafe! I am checking your menu online and interested in trying "${item.name}" (${item.price}). Could you tell me more about table availability or takeaway?`
    );
    window.open(`https://wa.me/917738000479?text=${text}`, '_blank');
  };

  return (
    <div
      id="menu-item-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl transition-opacity animate-fade-in"
      onClick={onClose}
    >
      <div
        id="menu-item-modal-content"
        className="relative w-full max-w-2xl bg-[#141110] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/90 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-menu-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#d4a373] text-white hover:text-[#0f0d0c] border border-white/10 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Container */}
        <div className="overflow-y-auto custom-scrollbar">
          {/* Item Image Header */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1a1614]">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141110] via-transparent to-black/30" />

            {/* Badges on top */}
            <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {/* Dietary badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                    item.dietary === 'veg'
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
                      : 'bg-amber-950/80 text-amber-300 border-amber-500/30'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.dietary === 'veg' ? 'bg-emerald-400' : 'bg-amber-500'
                    }`}
                  />
                  {item.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                </span>

                {item.tag && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#d4a373] text-[#0f0d0c] shadow-md uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Price badge */}
              <div className="text-right bg-[#0f0d0c]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/50 block -mb-0.5">Price</span>
                <span className="text-xl font-bold font-serif text-white font-mono-price">{item.price}</span>
              </div>
            </div>
          </div>

          {/* Modal Body Details */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#d4a373]">
                  {item.category}
                </span>
                {item.rating && (
                  <div className="flex items-center gap-1 text-xs text-amber-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5 font-mono-price">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span className="font-bold">{item.rating}</span>
                  </div>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif italic text-white">
                {item.name}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                {item.description}
              </p>
            </div>

            {/* Grid of specifications */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#1a1614] border border-white/5">
              {item.spiceLevel && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/40 uppercase tracking-wider font-medium">Spice Level</span>
                  <div className="flex items-center gap-1 mt-1 text-sm font-semibold text-white">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    <span>{item.spiceLevel}</span>
                  </div>
                </div>
              )}

              {item.servingSize && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/40 uppercase tracking-wider font-medium">Portion</span>
                  <div className="flex items-center gap-1 mt-1 text-sm font-semibold text-white">
                    <Utensils className="w-3.5 h-3.5 text-[#d4a373]" />
                    <span>{item.servingSize}</span>
                  </div>
                </div>
              )}

              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="text-[10px] text-white/40 uppercase tracking-wider font-medium">Preparation</span>
                <span className="text-sm font-semibold text-emerald-400 mt-1">Freshly Made</span>
              </div>
            </div>

            {/* Ingredients / Highlights */}
            {item.ingredients && item.ingredients.length > 0 && (
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-white/50 mb-3">
                  Key Ingredients & Flavour Profile
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-[#1a1614] text-white/80 border border-white/5 font-light"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#d4a373]" />
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Pairing recommendation */}
            {item.pairingSuggestion && (
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4a373] block mb-1">
                  Chef's Pairing Suggestion
                </span>
                <p className="text-xs sm:text-sm text-white/70 font-light">
                  {item.pairingSuggestion}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm bg-white text-black hover:bg-[#d4a373] hover:text-[#0f0d0c] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </button>

              <a
                href="#location"
                onClick={() => {
                  onClose();
                  const loc = document.getElementById('location');
                  if (loc) loc.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm bg-[#1a1614] hover:bg-white/10 text-white/80 hover:text-white border border-white/10 font-bold text-xs uppercase tracking-widest transition-all"
              >
                <span>Visit ACE to Order</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
