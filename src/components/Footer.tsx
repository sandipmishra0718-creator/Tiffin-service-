import { MapPin, Phone, Clock, ArrowUp, UtensilsCrossed, Shield, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-[#D0CCC5] border-t border-[#252525] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Grid (Ref: Burger Bite footer columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 pb-12 border-b border-[#252525]">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#BE2325] text-white flex items-center justify-center shadow-xs">
                <UtensilsCrossed className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white tracking-tight uppercase">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-[10px] font-extrabold text-[#BE2325] uppercase tracking-widest">
                  {BUSINESS_INFO.enterprise}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#9E978E] leading-relaxed max-w-sm mb-6">
              Wholesome, home-style everyday meal service and catering designed for busy professionals and families.
              Freshly prepared with care in South Extension I, New Delhi.
            </p>

            {/* Social link icons (Ref: circular social buttons) */}
            <div className="flex items-center gap-3 mb-6">
              <a 
                href={BUSINESS_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#202020] hover:bg-[#BE2325] text-white flex items-center justify-center transition-colors text-xs"
                aria-label="WhatsApp"
              >
                <span>WA</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#202020] hover:bg-[#BE2325] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#202020] hover:bg-[#BE2325] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1C1C1C] border border-[#2D2D2D] text-xs text-[#D0CCC5]">
              <span className="w-2 h-2 rounded-full bg-[#BE2325]" />
              <span>Listing Indicator: <strong className="text-white">{BUSINESS_INFO.priceIndicator}</strong></span>
            </div>
          </div>

          {/* Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9E978E]">
              <li>
                <a href="#home" className="hover:text-[#BE2325] transition-colors">Home</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[#BE2325] transition-colors">Meal Plans</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#BE2325] transition-colors">Daily Menu</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#BE2325] transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#BE2325] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#BE2325] transition-colors">Kitchen Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#BE2325] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Meal Plans (Cols 7-8) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              MEAL PLANS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9E978E]">
              <li>
                <a href="#plans" className="hover:text-[#BE2325] transition-colors">Daily Plan</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[#BE2325] transition-colors">Weekly Plan</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[#BE2325] transition-colors">Monthly Plan</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[#BE2325] transition-colors">Weight Loss</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[#BE2325] transition-colors">Weight Maintenance</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[#BE2325] transition-colors">Customized Plans</a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Hours (Cols 9-12) */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              CONTACT &amp; LOCATION
            </h4>
            <div className="space-y-3.5 text-xs text-[#9E978E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BE2325] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2},<br />
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BE2325] shrink-0" />
                <a 
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-bold text-white hover:text-[#BE2325] transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#BE2325] shrink-0" />
                <span>Hours: {BUSINESS_INFO.hours}</span>
              </div>

              {/* Newsletter / Enquiry input (Ref: STAY IN THE LOOP card in reference) */}
              <div className="pt-2">
                <p className="font-display text-xs font-bold uppercase text-white mb-2">
                  STAY IN TOUCH
                </p>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(BUSINESS_INFO.whatsappUrl, '_blank');
                  }}
                  className="flex items-center"
                >
                  <input
                    type="text"
                    placeholder="Enter phone or query..."
                    className="bg-[#202020] text-xs text-white px-3.5 py-2.5 rounded-l-full border border-[#333333] focus:outline-none focus:border-[#BE2325] w-full"
                  />
                  <button
                    type="submit"
                    className="bg-[#BE2325] hover:bg-[#9F191B] text-white text-xs font-bold uppercase px-4 py-2.5 rounded-r-full transition-colors flex items-center justify-center shrink-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#78716A]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Shield className="w-3.5 h-3.5 text-[#BE2325]" />
            <span>
              © {new Date().getFullYear()} {BUSINESS_INFO.name} ({BUSINESS_INFO.enterprise}). All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>South Extension I, New Delhi 110049</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#202020] hover:bg-[#BE2325] text-white transition-colors"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
