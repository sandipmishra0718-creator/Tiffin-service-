import { ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/businessData';
import { REAL_IMAGES_BY_ID, RealBusinessImage } from '../data/realImages';
import RealImage from './RealImage';

interface HowItWorksProps {
  onOpenEnquiryModal?: () => void;
  onZoomImage?: (image: RealBusinessImage) => void;
}

export default function HowItWorks({ onOpenEnquiryModal, onZoomImage }: HowItWorksProps) {
  const stepImages = [
    'round-dabbas-spread',
    'four-tier-carrier-open',
    'packed-meal-boxes-dispatch',
  ];

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
    <section id="how-it-works" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[#BE2325] text-lg font-bold">→</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#161616]">
              HOW IT WORKS
            </h2>
            <span className="text-[#BE2325] text-lg font-bold">←</span>
          </div>

          <p className="font-display uppercase text-xs sm:text-sm font-semibold tracking-wider text-[#BE2325] mb-2">
            Simple 3-Step Routine
          </p>

          <p className="text-xs sm:text-sm text-[#5E584E] leading-relaxed">
            Starting your homestyle tiffin meal plan in South Delhi takes less than two minutes.
          </p>
        </div>

        {/* 3 Step Cards with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const realImg = REAL_IMAGES_BY_ID[stepImages[index]];

            return (
              <div
                key={item.step}
                className="group relative bg-white rounded-3xl border border-[#E8E2D7] hover:border-[#BE2325]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Step Real Image */}
                <div className="relative aspect-4/3 w-full overflow-hidden border-b border-[#E8E2D7]">
                  {realImg && (
                    <RealImage
                      image={realImg}
                      aspectRatio="4/3"
                      className="w-full h-full rounded-none border-none"
                      showBadge={false}
                      allowZoom={true}
                      onZoom={onZoomImage}
                    />
                  )}

                  {/* Step Number floating on image */}
                  <div className="absolute top-3.5 left-3.5 z-20">
                    <span className="px-3 py-1 rounded-md bg-[#161616] text-white font-display text-xs font-bold uppercase tracking-widest shadow-md">
                      STEP {item.step}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#BE2325] mb-1 font-display">
                      {item.subtitle}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#161616] mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E584E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex items-center justify-between text-xs font-semibold text-[#161616]">
                    <span className="font-display uppercase text-xs text-[#7A7266]">Phase {index + 1} of 3</span>
                    <span className="text-[#BE2325] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-bold text-xs uppercase tracking-wider">
                      Ready <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={handleStartPlan}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#BE2325] hover:bg-[#9F191B] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform active:scale-95"
          >
            <span>START YOUR PLAN</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
