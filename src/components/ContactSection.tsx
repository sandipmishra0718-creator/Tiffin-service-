import { useState, useEffect, FormEvent } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Navigation, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { EnquiryFormData } from '../types';

interface ContactSectionProps {
  initialPlan?: string;
}

export default function ContactSection({ initialPlan }: ContactSectionProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    plan: initialPlan || 'Weekly Plan (Most Popular)',
    mealPreference: 'Lunch & Dinner (Both)',
    startDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState<string>('');

  useEffect(() => {
    if (initialPlan) {
      setFormData(prev => ({ ...prev, plan: initialPlan }));
    }
  }, [initialPlan]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formattedMessage = 
      `*New Tiffin Service Enquiry*\n` +
      `--------------------------------\n` +
      `*Name:* ${formData.name || 'Not specified'}\n` +
      `*Phone:* ${formData.phone || 'Not specified'}\n` +
      `*Interested Plan:* ${formData.plan}\n` +
      `*Meal Preference:* ${formData.mealPreference}\n` +
      `*Preferred Start Date:* ${formData.startDate || 'As soon as possible'}\n` +
      (formData.message ? `*Notes / Dietary Needs:* ${formData.message}\n` : '') +
      `--------------------------------\n` +
      `Sent from website enquiry form - The Tiffin Service (PDSB Enterprise), South Extension I`;

    const waUrl = `https://wa.me/919560339117?text=${encodeURIComponent(formattedMessage)}`;
    setGeneratedWhatsAppUrl(waUrl);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      plan: 'Weekly Plan (Most Popular)',
      mealPreference: 'Lunch & Dinner (Both)',
      startDate: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[#BE2325] text-lg font-bold">→</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#161616]">
              ORDER &amp; ENQUIRE
            </h2>
            <span className="text-[#BE2325] text-lg font-bold">←</span>
          </div>

          <p className="font-display uppercase text-xs sm:text-sm font-semibold tracking-wider text-[#BE2325] mb-2">
            Direct Kitchen Connection
          </p>

          <p className="text-xs sm:text-sm text-[#5E584E] max-w-2xl mx-auto leading-relaxed">
            Have questions about delivery slots in South Delhi, custom menu adjustments, or meal pricing? 
            Send an instant enquiry below or connect with our kitchen desk directly.
          </p>
        </div>

        {/* Two-Column Layout: Business Details & Map (Left) + Enquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Business Verification Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Contact Card */}
            <div className="bg-[#161616] text-white p-7 sm:p-8 rounded-3xl shadow-xl border border-[#2D2D2D]">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF4C50] block mb-1 font-display">
                VERIFIED BUSINESS PROFILE
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-0.5 text-white">
                {BUSINESS_INFO.name}
              </h3>

              <div className="text-xs font-bold text-[#BE2325] uppercase tracking-wider mb-6 font-display">
                {BUSINESS_INFO.enterprise} • South Delhi
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-xs sm:text-sm border-t border-[#2D2D2D] pt-5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#222222] flex items-center justify-center shrink-0 mt-0.5 text-[#BE2325]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#8E877D] text-[10px] block uppercase font-bold tracking-wider">Kitchen Location</span>
                    <p className="text-white font-medium leading-relaxed mt-0.5">
                      {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2},<br />
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#222222] flex items-center justify-center shrink-0 mt-0.5 text-[#BE2325]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#8E877D] text-[10px] block uppercase font-bold tracking-wider">Direct Phone</span>
                    <a 
                      href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-white font-bold text-base hover:text-[#BE2325] transition-colors"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#222222] flex items-center justify-center shrink-0 mt-0.5 text-[#BE2325]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#8E877D] text-[10px] block uppercase font-bold tracking-wider">Operating Hours</span>
                    <p className="text-white font-medium mt-0.5">
                      {BUSINESS_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Main Action Buttons as mandated */}
              <div className="mt-8 pt-6 border-t border-[#2D2D2D] flex flex-col gap-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full py-3 px-4 rounded-full bg-white text-[#161616] hover:bg-[#FAF8F5] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#BE2325]" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-[#BE2325] hover:bg-[#9F191B] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WHATSAPP / ENQUIRE</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-[#202020] hover:bg-[#2A2A2A] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors border border-[#333333]"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#BE2325]" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed / Location Preview */}
            <div className="bg-white p-4 rounded-3xl border border-[#E8E2D7] shadow-sm">
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#BE2325]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#161616] font-display">Location Navigation</span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#BE2325] hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Map */}
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-[#E8E2D7] relative bg-[#EDE8E0]">
                <iframe
                  title="The Tiffin Service Location Map"
                  src="https://maps.google.com/maps?q=J-5,%20South%20Extension%20I,%20Block%20J,%20New%20Delhi,%20Delhi%20110049&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Premium High-Conversion Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-10 rounded-3xl border border-[#E8E2D7] shadow-xl">
              
              {!submitted ? (
                <div>
                  <div className="border-b border-[#F0EBE1] pb-5 mb-7">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#BE2325] block mb-1 font-display">
                      QUICK RESPONSE FORM
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#161616]">
                      Request Plan Details &amp; Pricing
                    </h3>
                    <p className="text-xs text-[#5E584E] mt-1 leading-relaxed">
                      Fill out your meal requirements and preferred start date. We will reply via WhatsApp or phone call promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#161616] mb-1.5 font-display">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD3C2] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BE2325] focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#161616] mb-1.5 font-display">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD3C2] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BE2325] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Plan Interested In & Meal Preference */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="plan" className="block text-xs font-bold uppercase tracking-wider text-[#161616] mb-1.5 font-display">
                          Plan Interested In
                        </label>
                        <select
                          id="plan"
                          value={formData.plan}
                          onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD3C2] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BE2325] focus:border-transparent transition-all"
                        >
                          <option value="Daily Plan (Trial / On-demand)">Daily Plan (Trial / On-demand)</option>
                          <option value="Weekly Plan (Most Popular)">Weekly Plan (6-Day Subscription)</option>
                          <option value="Monthly Plan (Best Regular Value)">Monthly Plan (Full Month Package)</option>
                          <option value="Bulk / Party Catering Enquiry">Bulk / Party Catering Enquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="mealPreference" className="block text-xs font-bold uppercase tracking-wider text-[#161616] mb-1.5 font-display">
                          Meal Preference
                        </label>
                        <select
                          id="mealPreference"
                          value={formData.mealPreference}
                          onChange={(e) => setFormData({ ...formData, mealPreference: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD3C2] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BE2325] focus:border-transparent transition-all"
                        >
                          <option value="Lunch Only (12 PM - 2:30 PM)">Lunch Only (12 PM - 2:30 PM)</option>
                          <option value="Dinner Only (7:30 PM - 9:30 PM)">Dinner Only (7:30 PM - 9:30 PM)</option>
                          <option value="Lunch & Dinner (Both)">Both Lunch & Dinner</option>
                          <option value="Pure Vegetarian Options">Pure Vegetarian Options</option>
                          <option value="Non-Vegetarian Options (as available)">Non-Vegetarian Options (as available)</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Start Date */}
                    <div>
                      <label htmlFor="startDate" className="block text-xs font-bold uppercase tracking-wider text-[#161616] mb-1.5 font-display">
                        Preferred Start Date
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD3C2] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BE2325] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Message / Custom Requirements */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#161616] mb-1.5 font-display">
                        Special Instructions / Dietary Notes (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention any delivery address notes in South Delhi, low-spice requests, or chapati preferences..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD3C2] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BE2325] focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-full bg-[#BE2325] hover:bg-[#9F191B] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-95"
                      >
                        <Send className="w-4 h-4" />
                        <span>SEND ENQUIRY</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-[#78716A] text-center">
                      We respect your privacy. Direct kitchen confirmation within business hours (7:00 AM – 8:30 PM).
                    </p>
                  </form>
                </div>
              ) : (
                /* Post-Submission Professional Confirmation State */
                <div className="py-8 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#BE2325] text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-[#BE2325] block mb-1 font-display">
                    ENQUIRY READY
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#161616] mb-2">
                    Thank You, {formData.name || 'Friend'}!
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5E584E] max-w-md mx-auto mb-6 leading-relaxed">
                    Your enquiry for the <strong className="text-[#161616]">{formData.plan}</strong> has been prepared. 
                    Click below to open WhatsApp directly with our kitchen desk at South Extension I.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D7] max-w-md mx-auto text-left text-xs space-y-1.5 mb-6">
                    <div className="flex justify-between text-[#686258]">
                      <span>Name:</span>
                      <strong className="text-[#161616]">{formData.name}</strong>
                    </div>
                    <div className="flex justify-between text-[#686258]">
                      <span>Phone:</span>
                      <strong className="text-[#161616]">{formData.phone}</strong>
                    </div>
                    <div className="flex justify-between text-[#686258]">
                      <span>Plan:</span>
                      <strong className="text-[#161616]">{formData.plan}</strong>
                    </div>
                    <div className="flex justify-between text-[#686258]">
                      <span>Preference:</span>
                      <strong className="text-[#161616]">{formData.mealPreference}</strong>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                    <a
                      href={generatedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp Now</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-[#D5CABB] text-[#161616] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF8F5] transition-colors"
                    >
                      New Enquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
