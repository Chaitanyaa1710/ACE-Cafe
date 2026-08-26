import React, { useState } from 'react';
import { MapPin, Phone, Clock, Copy, Check, Navigation, ArrowUpRight, MessageCircle, Share2, Compass } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello The ACE Cafe! I'm planning to visit your café in New Panvel today.");
    window.open(`https://wa.me/917738000479?text=${text}`, '_blank');
  };

  return (
    <section
      id="location"
      className="py-24 px-6 sm:px-10 relative z-10 bg-[#0f0d0c] border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#d4a373] block mb-3">
            Come On Over
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight">
            Find Your Way to ACE.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed font-light">
            Conveniently nestled in Sector 16, New Panvel East, right behind Swad Hotel and just minutes from Pillai's College campus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Phone, Hours, and Action Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="p-7 rounded-2xl bg-[#1a1614] border border-white/5 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4a373] flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4a373]">
                    Address & Landmark
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white">
                    {CAFE_INFO.name}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed font-light">
                    Near Pillai's College, behind Swad Hotel<br />
                    Triveni Society, Sector 16<br />
                    New Panvel East, Panvel<br />
                    Maharashtra 410206
                  </p>
                </div>
              </div>

              {/* Copy Address Button */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  id="copy-address-btn"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4a373] hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Address Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>

                <span className="text-[10px] uppercase tracking-wider text-white/40">New Panvel East</span>
              </div>
            </div>

            {/* Hours & Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-[#1a1614] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] text-[#d4a373] font-bold uppercase tracking-widest mb-2">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Us</span>
                  </div>
                  <a
                    href={`tel:${CAFE_INFO.phoneRaw}`}
                    className="text-base sm:text-lg font-serif font-bold text-white hover:text-[#d4a373] transition-colors block"
                  >
                    077380 00479
                  </a>
                  <span className="text-[11px] text-white/40 block mt-0.5 font-light">
                    +91 77380 00479
                  </span>
                </div>
                <a
                  href={`tel:${CAFE_INFO.phoneRaw}`}
                  id="location-call-btn"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/90 border border-white/5 transition-all"
                >
                  <Phone className="w-3 h-3 text-[#d4a373]" />
                  <span>Tap to Call</span>
                </a>
              </div>

              {/* Timings Card */}
              <div className="p-5 rounded-2xl bg-[#1a1614] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] text-[#d4a373] font-bold uppercase tracking-widest mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Open Daily</span>
                  </div>
                  <span className="text-base sm:text-lg font-serif font-bold text-white block">
                    11:00 AM – 11:00 PM
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open · Closes 11 PM</span>
                  </div>
                </div>
                <div className="mt-4 text-[10px] text-white/40 border-t border-white/5 pt-2 uppercase tracking-wider">
                  Mon – Sun (All 7 Days)
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                id="get-directions-btn"
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-sm bg-white text-black hover:bg-[#d4a373] hover:text-[#0f0d0c] font-bold text-xs uppercase tracking-widest transition-all"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>Get Directions</span>
              </a>

              <button
                type="button"
                onClick={handleWhatsApp}
                id="whatsapp-chat-btn"
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-sm bg-[#142318] hover:bg-[#1a2d1f] border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Message</span>
              </button>
            </div>
          </div>

          {/* Right Column: Styled Interactive Map Display */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/90 bg-[#1a1614] flex flex-col">
              {/* Interactive OpenStreetMap Embed tailored to New Panvel Sector 16 */}
              <iframe
                title="The ACE Cafe Location Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=73.1180%2C18.9840%2C73.1360%2C18.9960&layer=mapnik&marker=18.9902%2C73.1277"
                className="w-full flex-1 border-0 filter grayscale contrast-125 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />

              {/* Floating Custom Map Pin Card Overlay */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-2xl bg-[#0f0d0c]/90 backdrop-blur-md border border-white/10 shadow-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#d4a373] flex items-center justify-center text-[#0f0d0c] font-serif font-black text-xs">
                    ACE
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-white">
                      The ACE Cafe
                    </h4>
                    <p className="text-[11px] text-[#d4a373]">
                      Sector 16, New Panvel East
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/60">★ 4.5 (84 reviews)</span>
                  <a
                    href={CAFE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#d4a373] font-semibold hover:underline"
                  >
                    <span>Open in Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Bottom Quick Directions Strip on Map */}
              <div className="p-4 bg-[#141110] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="flex items-center gap-2 text-xs text-white/60 font-light">
                  <Compass className="w-4 h-4 text-[#d4a373]" />
                  <span>Landmark: <strong className="text-white font-semibold">Behind Swad Hotel, Near Pillai's College</strong></span>
                </div>

                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#d4a373] hover:text-white flex items-center gap-1 transition-colors uppercase tracking-wider"
                >
                  <span>Launch Google Navigation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
