import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MessageCircle, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface QuickBookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickBookModal: React.FC<QuickBookModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('2-4 People');
  const [occasion, setOccasion] = useState('Casual Hangout');
  const [time, setTime] = useState('7:00 PM');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello The ACE Cafe! I'd like to reserve a table/hangout spot.\n\n👤 Name: ${name || 'Guest'}\n📞 Phone: ${phone || 'Not provided'}\n👥 Party Size: ${guests}\n🎉 Occasion: ${occasion}\n⏰ Preferred Time: ${time}\n\nPlease let me know if a table is available!`
    );
    window.open(`https://wa.me/917738000479?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      id="quick-book-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl transition-opacity animate-fade-in"
      onClick={onClose}
    >
      <div
        id="quick-book-modal-content"
        className="relative w-full max-w-lg bg-[#141110] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif italic text-white">
              WhatsApp Opening!
            </h3>
            <p className="text-sm text-white/70 font-light">
              Your table request details have been prepared for The ACE Cafe team.
            </p>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#d4a373] text-[10px] font-bold uppercase tracking-[0.3em] mb-2.5">
                <Sparkles className="w-3 h-3" />
                <span>Quick Table / Party Request</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif italic text-white">
                Hangout at ACE
              </h3>
              <p className="text-xs text-white/40 mt-1 font-light">
                Near Pillai's College, New Panvel · Open till 11:00 PM
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-white/60 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Omkar or Priya"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#1a1614] border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#d4a373]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-white/60 mb-1.5">
                    Party Size
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#1a1614] border border-white/10 text-sm text-white focus:outline-none focus:border-[#d4a373]"
                  >
                    <option value="1-2 People">1-2 People (Cozy Table)</option>
                    <option value="2-4 People">2-4 People (Group Table)</option>
                    <option value="5-8 People">5-8 People (Friends Hangout)</option>
                    <option value="8+ People">8+ People (Party / Celebration)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-white/60 mb-1.5">
                    Occasion / Vibe
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#1a1614] border border-white/10 text-sm text-white focus:outline-none focus:border-[#d4a373]"
                  >
                    <option value="Casual Hangout">Casual Hangout</option>
                    <option value="Post-College Catchup">Post-College Catchup</option>
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Work / Study Over Coffee">Work / Study Over Coffee</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-white/60 mb-1.5">
                  Preferred Time (Today)
                </label>
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="e.g. 6:30 PM or 8:00 PM"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#1a1614] border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#d4a373]"
                />
              </div>

              <div className="pt-3 space-y-2.5">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm bg-white text-black hover:bg-[#d4a373] hover:text-[#0f0d0c] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Request via WhatsApp</span>
                </button>

                <a
                  href={`tel:${CAFE_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-2 text-xs text-white/50 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4a373]" />
                  <span>Or call us directly at {CAFE_INFO.phone}</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
