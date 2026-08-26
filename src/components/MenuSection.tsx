import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, ArrowRight, Utensils, AlertCircle } from 'lucide-react';
import { MenuCategory, MenuItem, DietaryType } from '../types';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuCard } from './MenuCard';
import { MenuItemModal } from './MenuItemModal';

const CATEGORIES: MenuCategory[] = [
  'All',
  'Burgers',
  'Starters',
  'Fries',
  'Chinese',
  'Chicken',
  'Vegetarian',
  'Beverages',
];

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showAllItems, setShowAllItems] = useState(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      // Dietary check
      const matchesDietary =
        dietaryFilter === 'all' || item.dietary === dietaryFilter;

      // Search query check
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.ingredients?.some((ing) => ing.toLowerCase().includes(q));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  // Display subset or all
  const displayedItems = showAllItems ? filteredItems : filteredItems.slice(0, 8);

  return (
    <section
      id="menu"
      className="py-24 px-6 sm:px-10 relative z-10 bg-[#0f0d0c] border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#d4a373] block mb-3">
            Crafted for Cravings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight">
            What Are You Having?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed font-light">
            From piping hot crispy starters and loaded cheesy fries to comforting wok noodles and handcrafted espresso frappes.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="space-y-5 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar justify-start sm:justify-center">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`filter-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#d4a373] text-[#0f0d0c] shadow-lg shadow-[#d4a373]/20'
                      : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search & Dietary Toggle Sub-bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 max-w-4xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                id="menu-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search burger, noodles, coffee..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1a1614] border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#d4a373] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter (All / Pure Veg / Non-Veg) */}
            <div className="flex items-center gap-1 bg-[#1a1614] p-1 rounded-xl border border-white/5 w-full sm:w-auto justify-center">
              <button
                type="button"
                onClick={() => setDietaryFilter('all')}
                className={`px-4 py-1.5 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                  dietaryFilter === 'all'
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                All Dishes
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter('veg')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                    : 'text-white/50 hover:text-emerald-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Pure Veg
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter('non-veg')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-amber-950/80 text-amber-300 border border-amber-500/40'
                    : 'text-white/50 hover:text-amber-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Non-Veg
              </button>
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onViewItem={(selected) => setSelectedItem(selected)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#1a1614] rounded-2xl border border-white/5 max-w-md mx-auto">
            <AlertCircle className="w-10 h-10 text-[#d4a373] mx-auto mb-3 opacity-70" />
            <h3 className="text-lg font-serif font-bold text-white">No matching items found</h3>
            <p className="text-xs text-white/50 mt-1 font-light">
              Try adjusting your search query or switching the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-sm bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#d4a373] hover:bg-[#d4a373] hover:text-[#0f0d0c] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View Full Menu CTA Button */}
        {filteredItems.length > 8 && (
          <div className="mt-14 text-center">
            <button
              type="button"
              id="view-full-menu-btn"
              onClick={() => setShowAllItems(!showAllItems)}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest text-[#d4a373] hover:text-[#0f0d0c] hover:bg-[#d4a373] border border-[#d4a373]/40 transition-all duration-200 cursor-pointer active:scale-98"
            >
              <span>{showAllItems ? 'Show Less Menu Items' : 'View Full Menu'}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${showAllItems ? 'rotate-[-90deg]' : ''}`} />
            </button>
          </div>
        )}

        {/* Bottom Menu Notes */}
        <div className="mt-16 p-7 rounded-2xl bg-[#1a1614] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-base text-white">
              Customizations & Special Requests?
            </h4>
            <p className="text-xs text-white/60 mt-1 font-light">
              Let our staff know about your spice preference, cheese add-ons, or dietary requirements.
            </p>
          </div>
          <a
            href="tel:07738000479"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-wider text-[#d4a373] border border-white/10 whitespace-nowrap transition-colors"
          >
            <span>Call to Order: +91 77380 00479</span>
          </a>
        </div>
      </div>

      {/* Menu Item Detail Modal */}
      <MenuItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};
