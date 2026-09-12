import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS, BUSINESS_INFO } from '../data/businessData';
import { REAL_IMAGES_BY_ID, RealBusinessImage } from '../data/realImages';
import RealImage from './RealImage';

interface WhyChooseUsProps {
  onOpenEnquiryModal?: () => void;
  onZoomImage?: (image: RealBusinessImage) => void;
}

export default function WhyChooseUs({ onOpenEnquiryModal, onZoomImage }: WhyChooseUsProps) {
  const rotisImage = REAL_IMAGES_BY_ID['fresh-tawa-rotis-stack'];
  const kitchenImage = REAL_IMAGES_BY_ID['commercial-kitchen-setup'];

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
    <section id="why-us" className="py-16 md:py-24 bg-[#FAF8F5] overflow-hidden border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Real Food & Kitchen Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8E2D7] bg-white p-3 sm:p-4">
              
              <div className="relative aspect-4/3 sm:aspect-square w-full rounded-2xl overflow-hidden group">
                {rotisImage && (
                  <RealImage
                    image={rotisImage}
                    aspectRatio="square"
                    className="w-full h-full rounded-2xl"
                    showBadge={false}
                    allowZoom={true}
                    onZoom={onZoomImage}
                  />
                )}

                {/* Top Location Badge */}
                <div className="absolute top-3 left-3 z-20 pointer-events-none">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BE2325] text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    <MapPin className="w-3 h-3 text-white" />
                    <span>South Extension I</span>
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-xs border border-[#E5DDD0] text-left z-20">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#BE2325] font-display">
                    AUTHENTIC HOMESTYLE PREPARATION
                  </p>
                  <p className="font-display text-sm font-bold text-[#161616] uppercase leading-tight mt-0.5">
                    Fresh whole wheat rotis & balanced vegetables cooked daily.
                  </p>
                </div>
              </div>

            </div>

            {/* Floating Kitchen Setup Stamp Badge */}
            <div className="absolute -bottom-4 -right-2 sm:bottom-4 sm:-right-4 bg-[#161616] text-white p-3 sm:p-4 rounded-2xl shadow-xl border border-[#333333] flex items-center gap-3 z-30 max-w-[240px]">
              {kitchenImage && (
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#444444]">
                  <RealImage
                    image={kitchenImage}
                    aspectRatio="square"
                    className="w-full h-full rounded-xl border-none"
                    showBadge={false}
                    allowZoom={true}
                    onZoom={onZoomImage}
                  />
                </div>
              )}
              <div>
                <span className="font-display text-xs font-bold leading-none text-[#BE2325] uppercase block">
                  DELHI SOUTH EXT. I
                </span>
                <span className="font-display text-[10px] font-bold uppercase tracking-wider text-white block mt-0.5">
                  Verified Facility
                </span>
                <span className="text-[9px] text-[#A69F94] leading-tight block">
                  Commercial Gas & Storage
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Why Choose Us Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#BE2325]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BE2325] font-display">
                WHY THE TIFFIN SERVICE?
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#161616] leading-none mb-4">
              GOOD FOOD, <br />
              <span className="text-[#BE2325]">EASY ROUTINE!</span>
            </h2>

            <p className="text-sm text-[#524B40] mb-6 leading-relaxed">
              At <strong className="font-bold text-[#161616]">{BUSINESS_INFO.name} ({BUSINESS_INFO.enterprise})</strong>, 
              we solve everyday meal fatigue for working professionals, students, and families in South Delhi with reliable, wholesome lunches and dinners.
            </p>

            {/* Concise Benefits List */}
            <div className="space-y-4 mb-8">
              {WHY_CHOOSE_US_POINTS.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#BE2325] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#161616]">
                      {point.title}
                    </h3>
                    <p className="text-xs text-[#5E584E] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-[#E8E2D7] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-display font-bold uppercase text-lg text-[#161616] block leading-none">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[10px] uppercase font-bold text-[#7A7266] tracking-wider mt-0.5 block">
                  {BUSINESS_INFO.enterprise} • Verified Kitchen
                </span>
              </div>

              <button
                type="button"
                onClick={handleStartPlan}
                className="px-6 py-3 rounded-full bg-[#BE2325] hover:bg-[#9F191B] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center gap-2 transform active:scale-95"
              >
                <span>CHOOSE YOUR PLAN</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
