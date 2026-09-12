import { ArrowRight, Sparkles } from 'lucide-react';
import { REAL_IMAGES_BY_ID, RealBusinessImage } from '../data/realImages';
import RealImage from './RealImage';

interface PromotionalBannerProps {
  onOpenEnquiry?: (planName?: string) => void;
  onZoomImage?: (image: RealBusinessImage) => void;
}

export default function PromotionalBanner({ onOpenEnquiry, onZoomImage }: PromotionalBannerProps) {
  const comboImage = REAL_IMAGES_BY_ID['paneer-combo-special'];

  const handleUpgradeClick = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry('Monthly Plan (Complete Dual-Meal Combo)');
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-8 md:py-12 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Wide Red Promotional Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#BE2325] via-[#A81B1D] to-[#8E1416] text-white p-6 sm:p-8 lg:p-10 overflow-hidden shadow-xl border border-[#9A1618]">
          
          {/* Subtle background radial glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-black/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Real Image for Combo Meal */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[320px] rounded-2xl overflow-hidden shadow-xl border-2 border-white/40">
                {comboImage && (
                  <RealImage
                    image={comboImage}
                    aspectRatio="4/3"
                    className="w-full h-full"
                    showBadge={false}
                    allowZoom={true}
                    onZoom={onZoomImage}
                  />
                )}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#161616] text-white text-[9px] font-extrabold uppercase tracking-widest z-20">
                  COMBO PACK
                </div>
              </div>
            </div>

            {/* Center Column: Text & CTA */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/90 mb-2 font-display">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>MAKE IT A</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-none mb-3 text-white">
                PERFECT COMBO!
              </h2>

              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-md mb-6 font-normal">
                Pair freshly prepared seasonal lunch with light, wholesome dinner. Daily doorstep delivery in South Extension I with zero kitchen chores.
              </p>

              <button
                type="button"
                onClick={handleUpgradeClick}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#BE2325] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform active:scale-95"
              >
                <span>UPGRADE NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column: Distressed Circular Stamp Badge */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-white/80 bg-white/10 backdrop-blur-xs p-2 flex flex-col items-center justify-center text-center rotate-6 transform hover:rotate-0 transition-transform">
                <span className="font-display text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wider leading-none">
                  PUBLIC LISTING
                </span>
                <span className="font-display font-bold text-2xl sm:text-3xl text-white uppercase leading-none my-1">
                  ₹800
                </span>
                <span className="font-display text-[10px] sm:text-[11px] font-extrabold text-white uppercase tracking-widest leading-tight">
                  FOR TWO
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
