import { CalendarCheck, UtensilsCrossed, Smile, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/businessData';

interface HowItWorksProps {
  onOpenEnquiryModal?: () => void;
}

export default function HowItWorks({ onOpenEnquiryModal }: HowItWorksProps) {
  const iconList = [
    <CalendarCheck key="1" className="w-6 h-6 text-[#E26D2D]" />,
    <UtensilsCrossed key="2" className="w-6 h-6 text-[#E26D2D]" />,
    <Smile key="3" className="w-6 h-6 text-[#E26D2D]" />,
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#E26D2D] mb-2">
            SEAMLESS EXPERIENCE
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-extrabold text-[#0F251B] tracking-tight mb-3">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm text-[#555E54] leading-relaxed">
            Starting your homestyle meal plan in South Delhi takes less than two minutes.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="group relative bg-[#FAF7F2] p-8 rounded-3xl border border-[#E7DFD2] hover:border-[#D4C7B4] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif-display text-4xl sm:text-5xl font-extrabold text-[#E26D2D]/30 group-hover:text-[#E26D2D] transition-colors">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8E2D8] flex items-center justify-center shadow-xs">
                  {iconList[index]}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#163B2B] mb-1.5">
                  {item.subtitle}
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[#0F251B] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#586157] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#EAE3D7] flex items-center justify-between text-xs font-semibold text-[#163B2B]">
                <span>Step {index + 1} of 3</span>
                <span className="text-[#E26D2D] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Ready <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenEnquiryModal) {
                e.preventDefault();
                onOpenEnquiryModal();
              }
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#E26D2D] hover:bg-[#CF5F21] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <span>GET STARTED WITH YOUR TIFFIN PLAN</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
