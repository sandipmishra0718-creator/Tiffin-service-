import { useState } from 'react';
import { Check, Info, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { TIFFIN_PLANS, BUSINESS_INFO } from '../data/businessData';
import { REAL_IMAGES_BY_ID, RealBusinessImage } from '../data/realImages';
import RealImage from './RealImage';

interface PlansSectionProps {
  onSelectPlan?: (planName: string) => void;
  onOpenClientEditor?: () => void;
  onZoomImage?: (image: RealBusinessImage) => void;
}

export default function PlansSection({ onSelectPlan, onOpenClientEditor, onZoomImage }: PlansSectionProps) {
  const [expandedPlanId, setExpandedPlanId] = useState<string | null>(null);

  // Map each plan to its verified real business photo
  const planImages: Record<string, string> = {
    'daily-plan': 'mowgli-daily-spread',
    'weekly-plan': 'tiffin-bento-box',
    'monthly-plan': 'four-tier-leakproof-set',
  };

  const handleEnquirePlan = (planName: string, planTypeKey: 'Daily' | 'Weekly' | 'Monthly') => {
    const waText = `Hi, I want to enquire about the ${planTypeKey} Tiffin Plan.`;
    const waUrl = `https://wa.me/919560339117?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
    if (onSelectPlan) {
      onSelectPlan(planName);
    }
  };

  return (
    <section id="plans" className="py-16 md:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading: "CHOOSE YOUR MEAL PLAN" */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[#BE2325] text-lg font-bold">→</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#161616]">
              CHOOSE YOUR MEAL PLAN
            </h2>
            <span className="text-[#BE2325] text-lg font-bold">←</span>
          </div>

          <p className="font-display uppercase text-xs sm:text-sm font-semibold tracking-wider text-[#BE2325] mb-2">
            Tailored Everyday Subscriptions
          </p>

          <p className="text-xs sm:text-sm text-[#5E584E] max-w-xl mx-auto leading-relaxed">
            Thoughtfully balanced homestyle meals prepared fresh in South Extension I, New Delhi. 
            Flexible daily, weekly, and monthly meal services crafted around your routine.
          </p>

          {/* Pricing Verification Pill */}
          <div className="mt-4 inline-flex items-center gap-2 text-[11px] text-[#6E675D] bg-white border border-[#E2DDD5] px-4 py-1.5 rounded-full shadow-2xs">
            <Info className="w-3.5 h-3.5 text-[#BE2325] shrink-0" />
            <span>
              Pricing is provided on enquiry based on your meal slot and dietary choices.
            </span>
          </div>
        </div>

        {/* 3 Meal Plan Cards Grid (Daily, Weekly, Monthly) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TIFFIN_PLANS.map((plan, index) => {
            // Plan type key for WhatsApp message: 'Daily' | 'Weekly' | 'Monthly'
            const planTypeKey: 'Daily' | 'Weekly' | 'Monthly' = 
              index === 0 ? 'Daily' : index === 1 ? 'Weekly' : 'Monthly';

            // Highlight Monthly as POPULAR (design label only)
            const isMonthlyPopular = planTypeKey === 'Monthly';
            const badgeLabel = isMonthlyPopular ? 'POPULAR' : index === 0 ? 'FLEXIBLE TRIAL' : 'REGULAR CHOICE';

            const isExpanded = expandedPlanId === plan.id;
            const imageId = planImages[plan.id];
            const realImg = REAL_IMAGES_BY_ID[imageId];

            return (
              <div
                key={plan.id}
                className={`group relative rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl ${
                  isMonthlyPopular
                    ? 'border-[#BE2325] ring-2 ring-[#BE2325]/20'
                    : 'border-[#E8E2D7] hover:border-[#D5CABB]'
                }`}
              >
                {/* Popular Pill on top edge if Monthly */}
                {isMonthlyPopular && (
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-[#BE2325] z-30" />
                )}

                {/* Top Real Image Showcase */}
                <div className="relative aspect-4/3 sm:aspect-16/11 w-full bg-[#FAF8F5] border-b border-[#E8E2D7] overflow-hidden">
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

                  {/* Top-Left Badge (POPULAR on Monthly) */}
                  <div className="absolute top-3.5 left-3.5 z-20">
                    <span className={`px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest shadow-xs ${
                      isMonthlyPopular 
                        ? 'bg-[#BE2325] text-white ring-1 ring-white/50' 
                        : 'bg-[#161616] text-white'
                    }`}>
                      {badgeLabel}
                    </span>
                  </div>

                  {/* Photo Title Overlay on bottom of image */}
                  <div className="absolute bottom-2 right-2 z-20">
                    <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-xs text-white text-[9px] font-mono">
                      {realImg?.title || 'Real Food Photo'}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Plan Name */}
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#161616]">
                        {plan.name}
                      </h3>
                      {isMonthlyPopular && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#BE2325] bg-[#FAF1F1] px-2 py-0.5 rounded-full">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>Recommended</span>
                        </span>
                      )}
                    </div>

                    {/* Tagline */}
                    <p className="text-xs text-[#5E584E] leading-relaxed mb-4">
                      {plan.tagline}
                    </p>

                    {/* Meal Inclusions Summary */}
                    <div className="space-y-1.5 mb-4 text-xs text-[#4A453C]">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#BE2325] shrink-0" />
                        <span>{plan.mealsIncluded}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#BE2325] shrink-0" />
                        <span>{plan.preference}</span>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-[#F0EBE1] text-xs text-[#524B40] space-y-1.5 animate-in fade-in duration-200">
                        <p><strong>Timing:</strong> {plan.timing}</p>
                        <p><strong>Delivery:</strong> {plan.delivery}</p>
                        <p><strong>Customisation:</strong> {plan.customisation}</p>
                        <p><strong>Ordering:</strong> {plan.orderingInfo}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Price on enquiry indicator */}
                    <div className="pt-4 border-t border-[#F0EBE1] flex items-center justify-between mb-4">
                      <div>
                        <span className="font-display text-lg sm:text-xl font-bold text-[#BE2325]">
                          Price on enquiry
                        </span>
                        <p className="text-[10px] text-[#7A7266] uppercase tracking-wider">
                          Contact us for pricing
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setExpandedPlanId(isExpanded ? null : plan.id)}
                        className="text-[11px] font-bold text-[#7A7266] hover:text-[#BE2325] uppercase tracking-wider px-2 py-1"
                      >
                        {isExpanded ? 'Less' : 'Details'}
                      </button>
                    </div>

                    {/* Mandatory "ENQUIRE NOW" Button */}
                    <button
                      type="button"
                      onClick={() => handleEnquirePlan(plan.name, planTypeKey)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs transform active:scale-95 ${
                        isMonthlyPopular
                          ? 'bg-[#BE2325] hover:bg-[#9F191B] text-white shadow-md'
                          : 'bg-[#161616] hover:bg-[#BE2325] text-white'
                      }`}
                      aria-label={`Enquire now about ${plan.name}`}
                    >
                      <MessageSquare className="w-4 h-4 text-[#25D366]" />
                      <span>ENQUIRE NOW</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Menu CTA below plans */}
        <div className="mt-12 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#BE2325] hover:bg-[#9F191B] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform active:scale-95"
          >
            <span>VIEW FULL MENU</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
