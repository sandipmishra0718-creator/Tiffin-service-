import { ArrowRight, Phone, MessageSquare, Clock, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FinalCtaSectionProps {
  onOpenEnquiryModal?: () => void;
}

export default function FinalCtaSection({ onOpenEnquiryModal }: FinalCtaSectionProps) {
  const handleStartPlan = () => {
    if (onOpenEnquiryModal) {
      onOpenEnquiryModal();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#121212] text-white relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#BE2325]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#BE2325]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative dot grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#FFFFFF 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#222222] border border-[#333333] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#FF4C50]" />
          <span className="font-display uppercase text-xs font-bold tracking-widest text-[#E0DDD8]">
            FRESH HOMESTYLE MEALS • ZERO COOKING FATIGUE
          </span>
        </div>

        {/* Large Bold Headline (Ref: Bold condensed poster style) */}
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-6 max-w-4xl mx-auto">
          READY TO EAT BETTER <br className="hidden sm:inline" />
          <span className="text-[#FF4C50]">EVERY SINGLE DAY?</span>
        </h2>

        {/* Supporting paragraph */}
        <p className="text-sm sm:text-base text-[#B3AEA6] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Join working professionals, students, and families in South Extension I who enjoy nutritious, wholesome meals without the hassle of grocery shopping, kitchen prep, and dirty dishes.
        </p>

        {/* Action Buttons (Ref: Pill buttons with high contrast) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-[#BE2325] hover:bg-[#9F191B] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2.5 transform active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>START YOUR PLAN ON WHATSAPP</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
            className="px-8 py-4 rounded-full bg-[#202020] hover:bg-[#2A2A2A] border border-[#3D3D3D] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-[#FF4C50]" />
            <span>CALL US: {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Trust verification pills below buttons */}
        <div className="pt-8 border-t border-[#252525] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#9E988F]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#FF4C50] shrink-0" />
            <span>South Extension I, Block J, New Delhi 110049</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#FF4C50] shrink-0" />
            <span>Open Mon–Sun: 7:00 AM – 8:30 PM</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            <span>Direct Kitchen Desk Response</span>
          </div>
        </div>

      </div>
    </section>
  );
}
