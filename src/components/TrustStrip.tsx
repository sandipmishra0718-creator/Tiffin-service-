import type { ReactNode } from 'react';
import { Utensils, CalendarRange, HeartHandshake, Truck } from 'lucide-react';
import { BENEFIT_ITEMS } from '../data/businessData';

export default function TrustStrip() {
  const iconMap: Record<string, ReactNode> = {
    Utensils: <Utensils className="w-5 h-5 text-[#BE2325]" />,
    CalendarRange: <CalendarRange className="w-5 h-5 text-[#BE2325]" />,
    PhoneCall: <Truck className="w-5 h-5 text-[#BE2325]" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#BE2325]" />,
  };

  return (
    <section className="py-10 md:py-14 bg-white border-y border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {BENEFIT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D7] hover:border-[#BE2325]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E0DDD5] flex items-center justify-center mb-4 group-hover:bg-[#BE2325] transition-colors shadow-xs">
                  <span className="group-hover:text-white transition-colors">
                    {iconMap[item.iconName] || <Utensils className="w-5 h-5 text-[#BE2325]" />}
                  </span>
                </div>

                <div className="text-[10px] font-bold uppercase tracking-widest text-[#BE2325] mb-1 font-display">
                  {item.subtitle}
                </div>

                <h3 className="font-display text-lg font-bold text-[#161616] mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>

                <p className="text-xs text-[#524E48] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8E2D7] flex items-center justify-between text-[11px] text-[#7A746C]">
                <span>South Extension Service</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE2325]/50 group-hover:bg-[#BE2325] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
