import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function TopBar() {
  return (
    <div className="bg-[#0F251B] text-[#E5E0D5] text-xs border-b border-[#214332] py-2 px-4 sm:px-8 tracking-wide transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left items */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 font-medium text-[#FAF7F2]">
            <MapPin className="w-3.5 h-3.5 text-[#E26D2D] shrink-0" />
            <span>South Extension I, New Delhi</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-[#C7C0B3]">
            <Clock className="w-3.5 h-3.5 text-[#E26D2D] shrink-0" />
            <span>Mon–Sun • 7:00 AM – 8:30 PM</span>
          </div>

          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 font-semibold text-[#FAF7F2] hover:text-[#E26D2D] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#E26D2D] shrink-0" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Right items */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#1A3E2F] text-[#E0D8C3] font-medium border border-[#2B5E47]">
            Listing Indicator: {BUSINESS_INFO.priceIndicator}
          </span>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1 text-[#E26D2D] hover:text-[#FFA066] font-semibold transition-colors"
          >
            <span>WhatsApp Kitchen Desk</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
