import { MapPin, Phone, Clock, ArrowUp, UtensilsCrossed, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D2218] text-[#D8E2DC] border-t border-[#1C4130] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#1A3D2D]">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#163B2B] text-white flex items-center justify-center border border-[#2D6049]">
                <UtensilsCrossed className="w-5 h-5 text-[#E26D2D]" />
              </div>
              <div>
                <h3 className="font-serif-display text-xl font-bold text-white tracking-wider uppercase">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-[10px] font-extrabold text-[#FFA066] uppercase tracking-widest">
                  {BUSINESS_INFO.enterprise}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#9BB0A5] leading-relaxed max-w-sm mb-6">
              Wholesome, home-style everyday meal service and catering designed for busy professionals and families.
              Freshly prepared with care in South Extension I, New Delhi.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#143526] border border-[#24523C] text-xs text-[#D8E2DC]">
              <span className="w-2 h-2 rounded-full bg-[#78E2A0]" />
              <span>Public Listing Indicator: <strong>{BUSINESS_INFO.priceIndicator}</strong></span>
            </div>
          </div>

          {/* Quick Links (Cols 6-8) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8BEB3]">
              <li>
                <a href="#home" className="hover:text-[#FFA066] transition-colors">Home</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[#FFA066] transition-colors">Our Plans</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FFA066] transition-colors">Daily Menu</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#FFA066] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FFA066] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FFA066] transition-colors">Kitchen Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFA066] transition-colors">Order & Contact</a>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details (Cols 9-12) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Verified Location & Desk
            </h4>
            <div className="space-y-3 text-xs text-[#A8BEB3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFA066] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2},<br />
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFA066] shrink-0" />
                <a 
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-bold text-white hover:text-[#FFA066] transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FFA066] shrink-0" />
                <span>Operating Hours: {BUSINESS_INFO.hours}</span>
              </div>

              <div className="pt-3">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] font-bold text-[#FFA066] hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7E968A]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Shield className="w-3.5 h-3.5 text-[#78E2A0]" />
            <span>
              © {new Date().getFullYear()} {BUSINESS_INFO.name} ({BUSINESS_INFO.enterprise}). All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>South Extension I, New Delhi 110049</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#143526] hover:bg-[#1E4A35] text-white transition-colors"
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
