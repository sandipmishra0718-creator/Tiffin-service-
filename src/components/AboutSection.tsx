import { MapPin, Clock, ShieldCheck, HeartHandshake, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { REAL_IMAGES_BY_ID, RealBusinessImage } from '../data/realImages';
import RealImage from './RealImage';

interface AboutSectionProps {
  onOpenEnquiryModal?: () => void;
  onZoomImage?: (image: RealBusinessImage) => void;
}

export default function AboutSection({ onOpenEnquiryModal, onZoomImage }: AboutSectionProps) {
  const kitchenImage = REAL_IMAGES_BY_ID['clean-modular-kitchen'];
  const prepImage = REAL_IMAGES_BY_ID['batch-meal-assembly-station'];

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
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Real Kitchen Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8E2D7] bg-white p-3 sm:p-4">
              
              <div className="relative aspect-4/5 sm:aspect-square w-full rounded-2xl overflow-hidden group">
                {kitchenImage && (
                  <RealImage
                    image={kitchenImage}
                    aspectRatio="square"
                    className="w-full h-full rounded-2xl"
                    showBadge={false}
                    allowZoom={true}
                    onZoom={onZoomImage}
                  />
                )}

                {/* Top Location Badge */}
                <div className="absolute top-3 left-3 z-20 pointer-events-none">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161616]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    <MapPin className="w-3 h-3 text-[#BE2325]" />
                    <span>South Extension I</span>
                  </div>
                </div>

                {/* Bottom brand info tag */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-xs border border-[#E5DDD0] text-left z-20">
                  <p className="font-display font-bold text-xs uppercase text-[#161616]">
                    {BUSINESS_INFO.name}
                  </p>
                  <p className="text-[10px] text-[#7A7266] uppercase">
                    {BUSINESS_INFO.enterprise} • Spotless Kitchen Standards
                  </p>
                </div>
              </div>

            </div>

            {/* Small accent card with prep photo & operating hours */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-4 sm:-right-6 bg-white p-3 rounded-2xl shadow-xl border border-[#E8E2D7] hidden sm:flex items-center gap-3 z-30 max-w-[260px]">
              {prepImage && (
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#DDD3C2]">
                  <RealImage
                    image={prepImage}
                    aspectRatio="square"
                    className="w-full h-full rounded-xl border-none"
                    showBadge={false}
                    allowZoom={true}
                    onZoom={onZoomImage}
                  />
                </div>
              )}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#BE2325] font-display">Hygienic Prep</p>
                <p className="text-xs font-semibold text-[#161616] leading-tight mt-0.5">Daily Batch Packing</p>
                <p className="text-[10px] text-[#787168] mt-0.5">{BUSINESS_INFO.hours}</p>
              </div>
            </div>
          </div>

          {/* Right Column: About Heading, Story, Key Benefits, CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#BE2325]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BE2325] font-display">
                ABOUT OUR SERVICE
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#161616] leading-none mb-4">
              GOOD FOOD, <br />
              <span className="text-[#BE2325]">EASY ROUTINE!</span>
            </h2>

            <div className="space-y-3.5 text-[#524B40] text-sm leading-relaxed mb-6">
              <p>
                <strong className="text-[#161616]">{BUSINESS_INFO.name} ({BUSINESS_INFO.enterprise})</strong> was founded to provide reliable, wholesome everyday meal services without the stress of daily vegetable shopping, kitchen cleanup, and cooking fatigue.
              </p>

              <p>
                Centrally located at <span className="font-semibold text-[#161616]">{BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2}, New Delhi 110049</span>, we specialize in nourishing meals tailored to the schedules of working professionals, students, and families throughout South Delhi.
              </p>

              <p>
                We keep things transparent and personal — straightforward phone consultations, prompt WhatsApp ordering, and punctually delivered tiffins that feel just like home.
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-[#E8E2D7] mb-8">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E2D7] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#BE2325]" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#161616]">Everyday Comfort</h4>
                  <p className="text-xs text-[#6B6357]">Balanced homestyle recipes cooked for daily consumption with light oils and fresh spices.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E2D7] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4 text-[#BE2325]" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#161616]">Convenient Plans</h4>
                  <p className="text-xs text-[#6B6357]">Flexible weekly or monthly subscriptions with simple pause credits and direct support.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={handleStartPlan}
                className="px-7 py-3 rounded-full bg-[#BE2325] hover:bg-[#9F191B] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 transform active:scale-95"
              >
                <span>START YOUR PLAN</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="px-6 py-3 rounded-full border border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#BE2325]" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
