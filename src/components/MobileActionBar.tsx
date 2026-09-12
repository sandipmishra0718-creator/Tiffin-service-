import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface MobileActionBarProps {
  onOpenEnquiry?: () => void;
}

export default function MobileActionBar({ onOpenEnquiry }: MobileActionBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E0D7CA] p-3 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Now */}
        <a
          href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white border border-[#E0DCD4] text-[#161616] active:bg-[#FAF8F5] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#BE2325] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider font-display">Call</span>
        </a>

        {/* WhatsApp Kitchen */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white active:bg-[#1EBE5D] transition-colors shadow-xs"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider font-display">WhatsApp</span>
        </a>

        {/* Enquire Plan */}
        <a
          href="#contact"
          onClick={(e) => {
            if (onOpenEnquiry) {
              e.preventDefault();
              onOpenEnquiry();
            }
          }}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#BE2325] text-white active:bg-[#9F191B] transition-colors shadow-xs"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider font-display">Enquire</span>
        </a>

      </div>
    </div>
  );
}
