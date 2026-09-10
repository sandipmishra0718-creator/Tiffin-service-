import { MapPin, Clock, ShieldCheck, HeartHandshake, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Kitchen & Packaging Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EDE7DD]">
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80"
                alt="The Tiffin Service packaging and preparation in South Delhi"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F251B]/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FFA066] uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>South Extension I, Block J</span>
                </div>
                <p className="font-serif-display text-lg font-bold">
                  {BUSINESS_INFO.name}
                </p>
                <p className="text-xs text-white/80">
                  {BUSINESS_INFO.enterprise}
                </p>
              </div>
            </div>

            {/* Small accent card */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-[#E5DDD0] hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#163B2B] flex items-center justify-center text-white">
                <Clock className="w-4 h-4 text-[#FFA066]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#163B2B]">Service Hours</p>
                <p className="text-xs font-semibold text-[#3F473E]">{BUSINESS_INFO.hours}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="text-xs font-bold uppercase tracking-widest text-[#E26D2D] mb-2">
              ABOUT OUR SERVICE
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F251B] leading-tight mb-5">
              Good Food.<br />
              <span className="font-script-accent text-[#E26D2D] font-normal text-4xl sm:text-5xl lg:text-6xl lowercase italic pl-1">
                Easy Routine.
              </span>
            </h2>

            <div className="space-y-4 text-[#4E564D] text-sm sm:text-base leading-relaxed mb-8">
              <p>
                <strong className="text-[#0F251B]">{BUSINESS_INFO.name} ({BUSINESS_INFO.enterprise})</strong> was established with a singular focus: providing reliable, comforting everyday meals without the culinary stress and daily exhaustion of grocery shopping and kitchen chores.
              </p>

              <p>
                Based at <span className="font-semibold text-[#0F251B]">{BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2}, New Delhi</span>, we cater specifically to the lifestyle of South Delhi working professionals, students, and busy families. We believe everyday food should feel like home—warm, balanced, cleanly prepared, and never overpowering.
              </p>

              <p>
                By keeping ordering simple—direct phone calls and swift WhatsApp coordination—we remove unnecessary app markups and delivery headaches. Whether you need a single meal during a busy workday or a continuous monthly subscription, our team is dedicated to your everyday comfort.
              </p>
            </div>

            {/* Core Values / Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E8E2D8] mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFE8DC] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#163B2B]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F251B]">Everyday Food</h4>
                  <p className="text-xs text-[#636C62]">Wholesome recipes suited for daily consumption without digestive fatigue.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFE8DC] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4 text-[#163B2B]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F251B]">Customer Convenience</h4>
                  <p className="text-xs text-[#636C62]">Flexible pause policies and responsive personal attention for every tiffin.</p>
                </div>
              </div>
            </div>

            {/* Direct Phone / Contact Action */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="px-6 py-3 rounded-lg bg-[#163B2B] hover:bg-[#0F251B] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFA066]" />
                <span>Call Us: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-[#D5CDC0] text-[#163B2B] text-xs font-bold uppercase tracking-wider hover:bg-[#F2ECE1] transition-colors"
              >
                Kitchen Location & Hours
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
