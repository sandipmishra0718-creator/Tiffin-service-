import { CheckCircle2, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS, BUSINESS_INFO } from '../data/businessData';

interface WhyChooseUsProps {
  onOpenEnquiryModal?: () => void;
}

export default function WhyChooseUs({ onOpenEnquiryModal }: WhyChooseUsProps) {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Indian Food Image with Floating Accent Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EFE9DF] group">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85"
                alt="Fresh home-style Indian meal prepared in South Delhi"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

              {/* Bottom Image Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-[#FFA066] mb-1">
                  AUTHENTIC KITCHEN CRAFT
                </p>
                <p className="font-serif-display text-lg sm:text-xl font-bold leading-snug">
                  Balanced meals made for your daily peace of mind.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge (Inspired by reference's "10+ Years of Experience" orange badge) */}
            <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:right-6 bg-[#E26D2D] text-white p-5 sm:p-6 rounded-2xl shadow-xl border-2 border-white flex flex-col items-center justify-center text-center max-w-[160px] sm:max-w-[180px] transform hover:translate-y-[-4px] transition-transform">
              <span className="font-serif-display text-2xl sm:text-3xl font-extrabold leading-none">
                DELHI
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider mt-1">
                South Ext. I
              </span>
              <span className="text-[9px] text-white/80 mt-1 leading-tight">
                Everyday Homestyle Comfort
              </span>
            </div>
          </div>

          {/* Right Column: Why Choose Us Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Header pill */}
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#E26D2D] mb-2">
              WHY THE TIFFIN SERVICE?
            </div>

            {/* Headline with script accent */}
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F251B] leading-tight mb-4">
              Good Food,<br />
              <span className="font-script-accent text-[#E26D2D] font-normal text-4xl sm:text-5xl lg:text-6xl lowercase italic pl-1">
                Easy Routine.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#525B51] mb-6 leading-relaxed">
              At <strong className="font-bold text-[#0F251B]">{BUSINESS_INFO.name} ({BUSINESS_INFO.enterprise})</strong>, 
              we solve everyday meal fatigue for working professionals, students, and families in South Delhi with reliable, home-style lunches and dinners.
            </p>

            {/* Concise Benefits List */}
            <div className="space-y-4 mb-8">
              {WHY_CHOOSE_US_POINTS.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#163B2B] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFA066]" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F251B]">
                      {point.title}
                    </h3>
                    <p className="text-xs text-[#5D665C] leading-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature & CTA Section */}
            <div className="pt-6 border-t border-[#E8E2D8] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-script-accent text-3xl text-[#163B2B] block">
                  The Tiffin Service
                </span>
                <span className="text-[10px] uppercase font-bold text-[#869085] tracking-wider">
                  PDSB Enterprise • Verified Kitchen
                </span>
              </div>

              <a
                href="#plans"
                className="px-6 py-3 rounded-lg bg-[#163B2B] hover:bg-[#0D2218] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <span>CHOOSE YOUR PLAN</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFA066]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
