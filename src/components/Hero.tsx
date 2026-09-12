import { ArrowRight, Utensils, CalendarRange, Truck, HeartPulse } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { REAL_IMAGES_BY_ID, RealBusinessImage } from '../data/realImages';
import RealImage from './RealImage';

interface HeroProps {
  onOpenEnquiryModal?: () => void;
  onZoomImage?: (image: RealBusinessImage) => void;
}

export default function Hero({ onOpenEnquiryModal, onZoomImage }: HeroProps) {
  const heroImage = REAL_IMAGES_BY_ID['thali-royal-hero'];

  const handleCtaClick = () => {
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
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Decorative subtle dot matrix */}
      <div 
        className="absolute top-6 left-6 w-32 h-32 opacity-25 pointer-events-none hidden md:block"
        style={{
          backgroundImage: 'radial-gradient(#161616 1.5px, transparent 1.5px)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Eyebrow, Giant Bold Headline, Paragraph, CTAs, Feature Row */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Eyebrow text */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#BE2325]" />
              <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#BE2325] uppercase font-display">
                HEALTHY MEALS • CUSTOMIZED PLANS • FRESH DELIVERY
              </p>
            </div>

            {/* Giant Bold Headline */}
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#161616] uppercase tracking-tight leading-[0.95] mb-5">
              HOME-STYLE FOOD, <br />
              <span className="text-[#BE2325]">BETTER TIMES!</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-[#4A4742] text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
              Wholesome seasonal sabzis, slow-simmered comfort dals, and soft warm phulkas — made fresh daily with care in South Extension I, New Delhi for busy professionals and families.
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10">
              <a
                href="#plans"
                onClick={(e) => {
                  e.preventDefault();
                  handleCtaClick();
                }}
                className="px-7 sm:px-8 py-3.5 rounded-full bg-[#BE2325] hover:bg-[#9F191B] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform active:scale-95"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#menu"
                className="px-7 sm:px-8 py-3.5 rounded-full bg-transparent border-2 border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>VIEW MENU</span>
              </a>
            </div>

            {/* Feature row */}
            <div className="pt-6 border-t border-[#E8E2D7] grid grid-cols-3 sm:grid-cols-4 gap-4 max-w-xl">
              <div className="flex flex-col items-start gap-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#F2ECE2] flex items-center justify-center text-[#BE2325]">
                  <Utensils className="w-4 h-4 text-[#BE2325]" />
                </div>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#161616] leading-tight">
                  FRESHLY<br />PREPARED
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#F2ECE2] flex items-center justify-center text-[#BE2325]">
                  <CalendarRange className="w-4 h-4 text-[#BE2325]" />
                </div>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#161616] leading-tight">
                  CUSTOMIZED<br />PLANS
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#F2ECE2] flex items-center justify-center text-[#BE2325]">
                  <HeartPulse className="w-4 h-4 text-[#BE2325]" />
                </div>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#161616] leading-tight">
                  HEALTHY<br />MEALS
                </span>
              </div>

              <div className="hidden sm:flex flex-col items-start gap-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#F2ECE2] flex items-center justify-center text-[#BE2325]">
                  <Truck className="w-4 h-4 text-[#BE2325]" />
                </div>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#161616] leading-tight">
                  DOORSTEP<br />DELIVERY
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Real Hero Image Showcase with Red Splash & Stamp */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              
              {/* Dynamic red splash / paint stroke background */}
              <div 
                className="absolute -top-6 -right-6 w-72 h-72 sm:w-96 sm:h-96 bg-[#BE2325]/15 rounded-full blur-2xl pointer-events-none -z-0"
              />

              {/* Large Image Card */}
              <div className="relative z-10 rounded-3xl p-3 sm:p-4 bg-white border border-[#E8E2D7] shadow-xl">
                
                <div className="relative aspect-4/3 sm:aspect-square w-full rounded-2xl overflow-hidden group">
                  {heroImage && (
                    <RealImage
                      image={heroImage}
                      aspectRatio="square"
                      className="w-full h-full rounded-2xl"
                      showBadge={false}
                      allowZoom={true}
                      onZoom={onZoomImage}
                    />
                  )}

                  {/* Stamp Badge on Top-Right */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 pointer-events-none">
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-2 border-dashed border-[#BE2325] bg-white/95 p-1 flex flex-col items-center justify-center text-center shadow-md rotate-[-8deg]">
                      <span className="font-display font-bold text-xs sm:text-sm text-[#BE2325] uppercase leading-none">
                        100%
                      </span>
                      <span className="font-display text-[9px] sm:text-[10px] font-bold text-[#161616] uppercase leading-tight mt-0.5">
                        AUTHENTIC<br />HOMESTYLE
                      </span>
                    </div>
                  </div>

                  {/* Top-Left Category Tag */}
                  <div className="absolute top-3 left-3 z-20 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md bg-[#161616]/90 backdrop-blur-xs text-white text-[9px] font-extrabold uppercase tracking-widest shadow-xs">
                      SOUTH EXTENSION I • SERVICE HUB
                    </span>
                  </div>
                </div>

                {/* Bottom Floating Info Pill */}
                <div className="mt-3 pt-2.5 border-t border-[#F0EBE1] flex items-center justify-between text-xs px-1">
                  <span className="font-display font-bold text-[#161616] uppercase tracking-wide">
                    South Extension I • New Delhi
                  </span>
                  <span className="font-bold text-[#BE2325]">
                    {BUSINESS_INFO.priceIndicator}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
