import { useState } from 'react';
import { Check, ArrowRight, Phone, MessageSquare, Info, Sparkles, Edit3 } from 'lucide-react';
import { TIFFIN_PLANS, BUSINESS_INFO } from '../data/businessData';
import { TiffinPlan } from '../types';

interface PlansSectionProps {
  onSelectPlan?: (planName: string) => void;
  onOpenClientEditor?: () => void;
}

export default function PlansSection({ onSelectPlan, onOpenClientEditor }: PlansSectionProps) {
  const [plans, setPlans] = useState<TiffinPlan[]>(TIFFIN_PLANS);
  const [selectedPlanTab, setSelectedPlanTab] = useState<'all' | 'veg' | 'non-veg'>('all');

  const handleEnquirePlan = (plan: TiffinPlan) => {
    if (onSelectPlan) {
      onSelectPlan(plan.name);
    } else {
      const message = encodeURIComponent(
        `Hello The Tiffin Service (PDSB Enterprise), I would like to enquire about the ${plan.name}. Please share pricing and available meal slots for South Extension.`
      );
      window.open(`https://wa.me/919560339117?text=${message}`, '_blank');
    }
  };

  return (
    <section id="plans" className="py-16 md:py-24 bg-white border-y border-[#E8E2D8] relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-[#FAF7F2] rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2ECE1] border border-[#E3DCD0] text-[#163B2B] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E26D2D]" />
            <span>FLEXIBLE HOME-STYLE SUBSCRIPTIONS</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F251B] mb-4 tracking-tight">
            Choose Your Tiffin Plan
          </h2>

          <p className="text-sm sm:text-base text-[#525B51] max-w-2xl mx-auto leading-relaxed">
            Thoughtfully structured daily, weekly, and monthly packages designed for South Delhi. 
            All plan options are fully customizable according to your work schedule and meal preferences.
          </p>

          {/* Transparent Editorial / Placeholder Notice Pill */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#756E61] bg-[#FAF7F2] border border-[#E8E2D8] px-4 py-2 rounded-xl">
            <Info className="w-4 h-4 text-[#E26D2D] shrink-0" />
            <span>
              <strong>Client Verification Note:</strong> Official meal pricing is finalized upon your specific plan duration & customization.
            </span>
            {onOpenClientEditor && (
              <button
                onClick={onOpenClientEditor}
                className="ml-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#E26D2D] hover:underline"
              >
                <Edit3 className="w-3 h-3" />
                <span>Edit Fields</span>
              </button>
            )}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isPopular
                    ? 'bg-[#0F251B] text-white shadow-2xl border-2 border-[#E26D2D] ring-4 ring-[#E26D2D]/10 md:-translate-y-2'
                    : 'bg-[#FAF7F2] text-[#0F251B] border border-[#E4DDD0] shadow-md hover:shadow-xl hover:border-[#D0C5B3]'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="bg-[#E26D2D] text-white text-[11px] font-extrabold tracking-widest uppercase py-1.5 px-4 text-center">
                    ★ MOST POPULAR WORK-WEEK CHOICE
                  </div>
                )}

                <div className="p-7 sm:p-8 flex-1 flex flex-col">
                  {/* Plan Tag & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                        isPopular
                          ? 'bg-[#1D4B37] text-[#FFA066]'
                          : 'bg-[#EAE3D5] text-[#163B2B]'
                      }`}
                    >
                      {plan.badge || 'Standard Plan'}
                    </span>
                    <span className={`text-[11px] font-medium ${isPopular ? 'text-white/60' : 'text-[#7D877C]'}`}>
                      South Ext. I
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3 className={`font-serif-display text-2xl font-bold tracking-tight mb-2 ${
                    isPopular ? 'text-white' : 'text-[#0F251B]'
                  }`}>
                    {plan.name}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-6 ${
                    isPopular ? 'text-white/70' : 'text-[#616B60]'
                  }`}>
                    {plan.tagline}
                  </p>

                  {/* Pricing Slot with Editable Placeholder */}
                  <div className={`p-4 rounded-2xl mb-6 border ${
                    isPopular 
                      ? 'bg-[#163B2B]/60 border-[#2D6049]' 
                      : 'bg-white border-[#E7E0D3]'
                  }`}>
                    <div className="flex items-baseline gap-2">
                      <span className={`font-serif-display text-3xl sm:text-4xl font-extrabold ${
                        isPopular ? 'text-[#FFA066]' : 'text-[#E26D2D]'
                      }`}>
                        {plan.pricePlaceholder}
                      </span>
                      <span className={`text-xs font-semibold uppercase tracking-wider ${
                        isPopular ? 'text-white/80' : 'text-[#778076]'
                      }`}>
                        / {plan.name.toLowerCase().includes('daily') ? 'per day' : plan.name.toLowerCase().includes('weekly') ? 'per week' : 'per month'}
                      </span>
                    </div>
                    <p className={`text-[11px] mt-1 ${isPopular ? 'text-white/60' : 'text-[#767E75]'}`}>
                      {plan.priceSubtext}
                    </p>
                  </div>

                  {/* Structured Editable Fields (Explicitly required by prompt) */}
                  <div className="space-y-3 mb-6 text-xs">
                    <div className="flex items-start justify-between gap-2 pb-2 border-b border-current/10">
                      <span className={`font-bold ${isPopular ? 'text-white/70' : 'text-[#667065]'}`}>
                        Meals Included:
                      </span>
                      <span className="font-semibold text-right">{plan.mealsIncluded}</span>
                    </div>

                    <div className="flex items-start justify-between gap-2 pb-2 border-b border-current/10">
                      <span className={`font-bold ${isPopular ? 'text-white/70' : 'text-[#667065]'}`}>
                        Service Time:
                      </span>
                      <span className="font-semibold text-right">{plan.timing}</span>
                    </div>

                    <div className="flex items-start justify-between gap-2 pb-2 border-b border-current/10">
                      <span className={`font-bold ${isPopular ? 'text-white/70' : 'text-[#667065]'}`}>
                        Diet Option:
                      </span>
                      <span className="font-semibold text-right">{plan.preference}</span>
                    </div>

                    <div className="flex items-start justify-between gap-2 pb-2 border-b border-current/10">
                      <span className={`font-bold ${isPopular ? 'text-white/70' : 'text-[#667065]'}`}>
                        Delivery:
                      </span>
                      <span className="font-semibold text-right">{plan.delivery}</span>
                    </div>

                    <div className="flex items-start justify-between gap-2 pb-2 border-b border-current/10">
                      <span className={`font-bold ${isPopular ? 'text-white/70' : 'text-[#667065]'}`}>
                        Customisation:
                      </span>
                      <span className="font-semibold text-right">{plan.customisation}</span>
                    </div>

                    <div className="flex items-start justify-between gap-2 pb-2 border-b border-current/10">
                      <span className={`font-bold ${isPopular ? 'text-white/70' : 'text-[#667065]'}`}>
                        Ordering:
                      </span>
                      <span className="font-semibold text-right">{plan.orderingInfo}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mb-6">
                    <p className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${
                      isPopular ? 'text-[#FFA066]' : 'text-[#E26D2D]'
                    }`}>
                      What's Packed Inside:
                    </p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isPopular ? 'text-[#FFA066]' : 'text-[#163B2B]'
                          }`} />
                          <span className={isPopular ? 'text-white/90' : 'text-[#474F46]'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA Actions (WhatsApp & Call) */}
                <div className={`p-6 pt-0 border-t ${
                  isPopular ? 'border-[#26533F]' : 'border-[#EAE3D7]'
                }`}>
                  <button
                    type="button"
                    onClick={() => handleEnquirePlan(plan)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm ${
                      isPopular
                        ? 'bg-[#E26D2D] hover:bg-[#CF5F21] text-white shadow-md'
                        : 'bg-[#163B2B] hover:bg-[#0F251B] text-white'
                    }`}
                  >
                    <span>ENQUIRE ABOUT THIS PLAN</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-2 gap-2 mt-2.5 text-[11px]">
                    <a
                      href={`https://wa.me/919560339117?text=${encodeURIComponent(`Hi The Tiffin Service, I want to enquire about the ${plan.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`py-2 rounded-lg text-center font-bold flex items-center justify-center gap-1 transition-colors ${
                        isPopular
                          ? 'bg-[#194231] text-[#78E2A0] hover:bg-[#20523D]'
                          : 'bg-[#F2ECE1] text-[#163B2B] hover:bg-[#E5DDCF]'
                      }`}
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                      className={`py-2 rounded-lg text-center font-bold flex items-center justify-center gap-1 transition-colors ${
                        isPopular
                          ? 'bg-[#194231] text-white hover:bg-[#20523D]'
                          : 'bg-[#F2ECE1] text-[#163B2B] hover:bg-[#E5DDCF]'
                      }`}
                    >
                      <Phone className="w-3 h-3" />
                      <span>Direct Call</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Public Listing Price Indicator Callout */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-[#F4EFE6] border border-[#E0D7C7] p-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E26D2D] block">
                Public Listing Reference
              </span>
              <h4 className="font-serif-display text-lg font-bold text-[#0F251B]">
                Price Indicator: {BUSINESS_INFO.priceIndicator}
              </h4>
              <p className="text-xs text-[#636D62] mt-0.5">
                Exact meal subscription prices are calculated according to your delivery schedule and dietary preferences.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="shrink-0 px-5 py-2.5 rounded-lg bg-[#163B2B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0D2218] transition-colors"
            >
              Consult On Call
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
