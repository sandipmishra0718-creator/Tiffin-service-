import type { SVGProps } from 'react';
import { ArrowRight, Sparkles, ChefHat, Heart, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroProps {
  onOpenEnquiryModal?: () => void;
}

export default function Hero({ onOpenEnquiryModal }: HeroProps) {
  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      {/* Subtle organic background decoration */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#E26D2D]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-[#163B2B]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#F2ECE1] border border-[#E2DBD0] text-[#163B2B] text-xs font-bold tracking-widest uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#E26D2D]" />
              <span>GOOD FOOD • EVERYDAY ROUTINE</span>
            </div>

            {/* Main Headline with Script Accent */}
            <h1 className="font-serif-display text-4xl sm:text-5xl xl:text-6xl text-[#0F251B] font-extrabold tracking-tight leading-[1.15] mb-5">
              HOME-STYLE FOOD,<br />
              MADE FOR YOUR{' '}
              <span className="font-script-accent text-[#E26D2D] font-normal text-5xl sm:text-6xl xl:text-7xl lowercase italic relative inline-block pl-1">
                Everyday.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-[#4F574E] text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
              Fresh, comforting meals made for busy days, working professionals
              and anyone who wants delicious food without the everyday hassle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10">
              <a
                href="#plans"
                className="px-6 sm:px-7 py-3.5 rounded-lg bg-[#E26D2D] hover:bg-[#CF5F21] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform active:scale-98"
              >
                <span>VIEW OUR PLANS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  if (onOpenEnquiryModal) {
                    e.preventDefault();
                    onOpenEnquiryModal();
                  }
                }}
                className="px-6 sm:px-7 py-3.5 rounded-lg bg-transparent border-2 border-[#163B2B] text-[#163B2B] hover:bg-[#163B2B] hover:text-[#FAF7F2] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <span>ORDER / ENQUIRE NOW</span>
              </a>
            </div>

            {/* Trust Badges Row (Mirrors the reference's 3 mini badges) */}
            <div className="pt-6 border-t border-[#E8E2D8] grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F2ECE1] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#163B2B]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#0F251B] uppercase tracking-wider">Freshly</p>
                  <p className="text-[10px] text-[#636C62]">Prepared Daily</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F2ECE1] flex items-center justify-center shrink-0">
                  <ChefHat className="w-4 h-4 text-[#163B2B]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#0F251B] uppercase tracking-wider">Homestyle</p>
                  <p className="text-[10px] text-[#636C62]">Comfort Meals</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F2ECE1] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-[#E26D2D]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#0F251B] uppercase tracking-wider">South Delhi</p>
                  <p className="text-[10px] text-[#636C62]">Local Kitchen</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Realistic Indian Food & Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] sm:max-w-[500px]">
              
              {/* Circular Plate Presentation (Inspired by reference plate composition) */}
              <div className="relative rounded-full aspect-square p-3 sm:p-4 bg-gradient-to-tr from-[#E8DFCF] via-[#FAF7F2] to-white shadow-2xl border border-[#DFD6C7] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=85"
                  alt="Authentic Indian Home-Style Meal Thali with dal, curry, fresh phulkas and basmati rice"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full transform hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle sheen highlight */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none" />
              </div>

              {/* Floating Circular Badge (Inspired by "30+ Signature Dishes" in reference) */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/95 backdrop-blur-md shadow-xl border border-[#E7DECF] flex flex-col items-center justify-center text-center p-2 transform hover:rotate-6 transition-transform">
                <span className="font-serif-display text-lg sm:text-xl font-extrabold text-[#0F251B] leading-none">
                  ₹800
                </span>
                <span className="text-[10px] font-bold text-[#E26D2D] uppercase tracking-wider mt-0.5">
                  For Two
                </span>
                <span className="text-[8px] text-[#7A837A] mt-0.5">
                  Listing Indicator
                </span>
              </div>

              {/* Floating Trust Card (Demanded in prompt: "EASY TO ORDER • Plans • Menu • Enquiry") */}
              <div className="absolute -bottom-5 sm:-bottom-6 left-4 sm:left-6 z-10 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-[#E8E1D5] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#163B2B] text-white flex items-center justify-center shrink-0">
                  <UtensilsCrossedIcon className="w-5 h-5 text-[#E26D2D]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F251B]">
                    EASY TO ORDER
                  </h3>
                  <p className="text-[11px] font-medium text-[#677066]">
                    Plans • Menu • Enquiry
                  </p>
                </div>
              </div>

              {/* Location Badge */}
              <div className="absolute top-6 -left-3 sm:-left-4 z-10 bg-[#0F251B] text-[#FAF7F2] text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-[#274D3B] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E26D2D] animate-pulse" />
                <span>South Extension I, New Delhi</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function UtensilsCrossedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width="20" 
      height="20" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8Z" />
      <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
      <path d="m2.1 21.8 6.4-6.3" />
      <path d="m19 5-7 7" />
    </svg>
  );
}
