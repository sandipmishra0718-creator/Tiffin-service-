import { useState } from 'react';
import { Sparkles, Info, MessageSquare, Utensils, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { MENU_CATEGORIES, MENU_PLACEHOLDERS, BUSINESS_INFO } from '../data/businessData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onOpenClientEditor?: () => void;
}

export default function MenuSection({ onOpenClientEditor }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [menuItems] = useState<MenuItem[]>(MENU_PLACEHOLDERS);

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const handleAskMenuWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello The Tiffin Service (PDSB Enterprise), please share today's active lunch and dinner menu rotation for South Extension.`
    );
    window.open(`https://wa.me/919560339117?text=${message}`, '_blank');
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE8DC] border border-[#DDD3C2] text-[#163B2B] text-xs font-bold uppercase tracking-widest mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#E26D2D]" />
            <span>DAILY HOMESTYLE SPECIALS</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F251B] mb-4 tracking-tight">
            What's Cooking Today?
          </h2>

          <p className="text-sm sm:text-base text-[#555E54] max-w-2xl mx-auto leading-relaxed">
            Our kitchen prepares fresh, authentic meals every morning and evening. 
            Because we prepare food in controlled everyday batches, our menu rotates daily with seasonal vegetables and comforting lentil preparations.
          </p>

          {/* Prominent Required Client Placeholder Notice */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white border-2 border-dashed border-[#D6CAB8] shadow-xs text-center max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-[#E26D2D] font-bold text-sm sm:text-base mb-1">
              <Clock className="w-4 h-4" />
              <span>“Today's menu will be updated here.”</span>
            </div>
            <p className="text-xs text-[#6B756A] leading-relaxed">
              Exact daily preparations change morning and night. Connect directly with our kitchen desk on WhatsApp for today's live menu card.
            </p>
            <div className="mt-3 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleAskMenuWhatsApp}
                className="px-4 py-2 rounded-lg bg-[#163B2B] hover:bg-[#0D2218] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Check Today's Menu On WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#E26D2D] text-white shadow-sm'
                    : 'bg-white text-[#4A5449] border border-[#E3DCD0] hover:border-[#C4B7A4] hover:text-[#0F251B]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid (Clean typographic presentation without random stock food clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E6DFD2] shadow-xs hover:shadow-md hover:border-[#D0C4B1] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-[#F2ECE1] text-[#163B2B]">
                    {item.category.toUpperCase()}
                  </span>
                  
                  {item.dietaryNote && (
                    <span className="text-[11px] font-semibold text-[#828C81] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#163B2B]" />
                      {item.dietaryNote}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#0F251B] leading-snug">
                    {item.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#E26D2D] whitespace-nowrap">
                    Included in Plan
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5D665B] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EFE9DF] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#869085] italic">
                  * Rotating daily recipe • Homestyle freshness
                </span>
                <button
                  type="button"
                  onClick={handleAskMenuWhatsApp}
                  className="text-xs font-bold text-[#163B2B] hover:text-[#E26D2D] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Enquire</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Action Banner */}
        <div className="mt-12 bg-[#163B2B] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFA066] block mb-1">
              CUSTOM DIETARY REQUESTS?
            </span>
            <h4 className="font-serif-display text-xl sm:text-2xl font-bold">
              Looking for Jain meals, low-spice, or extra chapatis?
            </h4>
            <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-xl">
              We cater to individual taste profiles for our regular monthly subscribers. Speak to our team at South Extension I.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="px-5 py-3 rounded-xl bg-white text-[#0F251B] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF7F2] transition-colors"
            >
              Call Kitchen Desk
            </a>
            <button
              type="button"
              onClick={handleAskMenuWhatsApp}
              className="px-5 py-3 rounded-xl bg-[#E26D2D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#CF5F21] transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
