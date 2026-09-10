import type { ReactNode } from 'react';
import { Utensils, CalendarRange, PhoneCall, HeartHandshake } from 'lucide-react';
import { BENEFIT_ITEMS } from '../data/businessData';

export default function TrustStrip() {
  const iconMap: Record<string, ReactNode> = {
    Utensils: <Utensils className="w-5 h-5 text-[#E26D2D]" />,
    CalendarRange: <CalendarRange className="w-5 h-5 text-[#E26D2D]" />,
    PhoneCall: <PhoneCall className="w-5 h-5 text-[#E26D2D]" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#E26D2D]" />,
  };

  return (
    <section className="py-12 bg-white/70 border-y border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {BENEFIT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-2xl bg-[#FAF7F2] border border-[#E7E0D3] hover:border-[#D5C6B1] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E2D8] flex items-center justify-center mb-4 group-hover:bg-[#163B2B] transition-colors shadow-xs">
                  <span className="group-hover:text-white transition-colors">
                    {iconMap[item.iconName] || <Utensils className="w-5 h-5 text-[#E26D2D]" />}
                  </span>
                </div>

                <div className="text-[10px] font-bold uppercase tracking-widest text-[#E26D2D] mb-1">
                  {item.subtitle}
                </div>

                <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#0F251B] mb-2 tracking-wide">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555E54] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8E2D8]/60 flex items-center justify-between text-[11px] text-[#7E887E]">
                <span>South Extension Service</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#163B2B]/40 group-hover:bg-[#E26D2D] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
