import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, UtensilsCrossed, PhoneCall } from 'lucide-react';
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

      const sections = ['home', 'plans', 'menu', 'how-it-works', 'about', 'gallery', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
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
    { label: 'MEAL PLANS', href: '#plans', id: 'plans' },
    { label: 'MENU', href: '#menu', id: 'menu' },
    { label: 'HOW IT WORKS', href: '#how-it-works', id: 'how-it-works' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'GALLERY', href: '#gallery', id: 'gallery' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleCtaClick = () => {
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D7] py-3.5'
          : 'bg-[#FAF8F5] border-b border-[#E8E2D7]/70 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* LEFT: Business Logo / Brand Name (Ref: 2-line bold logo) */}
        <a
          href="#home"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="The Tiffin Service Home"
        >
          <div className="w-11 h-11 rounded-full bg-[#BE2325] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <UtensilsCrossed className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#161616] leading-none">
                The Tiffin{' '}
                <span className="text-[#BE2325]">Service</span>
              </span>
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#78716A] mt-0.5">
              {BUSINESS_INFO.enterprise} • South Delhi
            </span>
          </div>
        </a>

        {/* CENTER: Navigation Links (Ref: clean center menu with red underline on active item) */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-wider py-1 relative transition-colors duration-200 ${
                  isActive
                    ? 'text-[#BE2325]'
                    : 'text-[#2D2D2D] hover:text-[#BE2325]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#BE2325] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Primary CTA Button (Ref: Pill shaped red button "START YOUR PLAN →") */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#plans"
            onClick={(e) => {
              e.preventDefault();
              handleCtaClick();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#BE2325] hover:bg-[#9F191B] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all transform active:scale-95"
          >
            <span>START YOUR PLAN</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl text-[#161616] hover:bg-[#EFE9DF] transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Polished Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#E8E2D7] bg-[#FAF8F5] px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-wider px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#EFE8DC] text-[#BE2325]'
                      : 'text-[#2D2D2D] hover:bg-[#EFE8DC]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#BE2325]" />}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-[#E8E2D7] space-y-2.5">
            <a
              href="#plans"
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#BE2325] text-white text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <span>START YOUR PLAN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-full border border-[#D5CDBC] text-[#161616] text-xs font-bold uppercase tracking-wider hover:bg-[#EFE8DC]"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#BE2325]" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
