import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, MessageSquare, UtensilsCrossed } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenEnquiryModal?: (planName?: string) => void;
}

export default function Navbar({ onOpenEnquiryModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link tracker
      const sections = ['home', 'plans', 'menu', 'why-us', 'about', 'gallery', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'OUR PLANS', href: '#plans', id: 'plans' },
    { label: 'MENU', href: '#menu', id: 'menu' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'GALLERY', href: '#gallery', id: 'gallery' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D8] py-3' 
          : 'bg-[#FAF7F2] border-b border-[#E8E2D8]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Left: Elegant Text Logo */}
        <a 
          href="#home" 
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="The Tiffin Service Home"
        >
          <div className="w-10 h-10 rounded-full bg-[#163B2B] text-[#FAF7F2] flex items-center justify-center shadow-xs border border-[#23573F] group-hover:scale-105 transition-transform">
            <UtensilsCrossed className="w-5 h-5 text-[#E26D2D]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif-display font-extrabold text-lg sm:text-xl tracking-wider text-[#0F251B] leading-none uppercase">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[10px] font-bold tracking-widest text-[#E26D2D] uppercase">
                {BUSINESS_INFO.enterprise}
              </span>
              <span className="text-[9px] font-medium tracking-wider text-[#6B726A] uppercase hidden sm:inline">
                • HOME-STYLE MEALS • SOUTH DELHI
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs font-bold tracking-widest uppercase transition-all py-1 relative ${
                  isActive 
                    ? 'text-[#E26D2D]' 
                    : 'text-[#2D332D] hover:text-[#E26D2D]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E26D2D] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action CTA (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
            className="px-3.5 py-2.5 rounded-lg border border-[#D5CDC0] text-[#163B2B] text-xs font-bold tracking-wide hover:bg-[#F2ECE1] transition-colors flex items-center gap-1.5"
            title="Call Kitchen Now"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#E26D2D]" />
            <span className="hidden xl:inline">Call Desk</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenEnquiryModal) {
                e.preventDefault();
                onOpenEnquiryModal();
              }
            }}
            className="px-5 py-2.5 rounded-lg bg-[#E26D2D] hover:bg-[#CF5F21] text-white text-xs font-bold tracking-wider shadow-sm transition-all transform active:scale-95 uppercase flex items-center gap-2"
          >
            <span>ORDER / ENQUIRE NOW</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
            className="p-2 rounded-lg text-[#163B2B] bg-[#F2ECE1] hover:bg-[#E7E0D3]"
            aria-label="Call directly"
          >
            <PhoneCall className="w-4 h-4 text-[#E26D2D]" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#0F251B] hover:bg-[#F2ECE1] focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8E2D8] px-6 py-5 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="text-[11px] font-bold text-[#6F776F] uppercase tracking-widest mb-3 border-b border-[#E8E2D8] pb-1">
            HOME-STYLE MEALS • SOUTH DELHI
          </div>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold tracking-wider text-[#1F261F] hover:text-[#E26D2D] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#E8E2D8] flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquiryModal) onOpenEnquiryModal();
              }}
              className="w-full py-3 text-center rounded-lg bg-[#E26D2D] text-white text-xs font-bold tracking-wider shadow-sm"
            >
              ORDER / ENQUIRE NOW
            </a>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="py-2.5 text-center rounded-lg border border-[#D5CDC0] text-[#163B2B] text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#E26D2D]" />
                <span>Call Now</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 text-center rounded-lg bg-[#163B2B] text-white text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
