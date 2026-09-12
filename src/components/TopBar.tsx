import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function TopBar() {
  return (
    <div className="bg-[#121212] text-[#E0DDD8] text-xs border-b border-[#252525] py-2 px-4 sm:px-8 tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left items */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 font-medium text-white">
            <MapPin className="w-3.5 h-3.5 text-[#BE2325] shrink-0" />
            <span>South Extension I, New Delhi 110049</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-[#B8B4AE]">
            <Clock className="w-3.5 h-3.5 text-[#BE2325] shrink-0" />
            <span>Mon–Sun • 7:00 AM – 8:30 PM</span>
          </div>

          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 font-semibold text-white hover:text-[#BE2325] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#BE2325] shrink-0" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Right items */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#202020] text-[#D8D4CE] font-medium border border-[#333333]">
            Listing Indicator: <strong className="ml-1 text-white">{BUSINESS_INFO.priceIndicator}</strong>
          </span>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1 text-[#FF5A5D] hover:text-white font-semibold transition-colors"
          >
            <span>WhatsApp Kitchen Desk</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
