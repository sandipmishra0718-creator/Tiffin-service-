import { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import PlansSection from './components/PlansSection';
import PromotionalBanner from './components/PromotionalBanner';
import MenuSection from './components/MenuSection';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import FinalCtaSection from './components/FinalCtaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import ClientEditorModal from './components/ClientEditorModal';
import LightboxModal from './components/LightboxModal';
import { Sliders } from 'lucide-react';
import { RealBusinessImage } from './data/realImages';

export default function App() {
  const [selectedPlanForEnquiry, setSelectedPlanForEnquiry] = useState<string>('Weekly Plan (Most Popular)');
  const [isEditorModalOpen, setIsEditorModalOpen] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<RealBusinessImage | null>(null);

  // Editable price tags state for client demonstration
  const [customDailyPrice, setCustomDailyPrice] = useState<string>('Price on enquiry');
  const [customWeeklyPrice, setCustomWeeklyPrice] = useState<string>('Price on enquiry');
  const [customMonthlyPrice, setCustomMonthlyPrice] = useState<string>('Price on enquiry');

  const handleSelectPlan = (planName: string) => {
    setSelectedPlanForEnquiry(planName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGeneralEnquiry = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleZoomImage = (image: RealBusinessImage) => {
    setLightboxImage(image);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#161616] selection:bg-[#BE2325] selection:text-white pb-16 md:pb-0">
      {/* Top Thin Information Bar */}
      <TopBar />

      {/* Sticky Navigation Header with "START YOUR PLAN →" CTA */}
      <Navbar onOpenEnquiryModal={handleOpenGeneralEnquiry} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Real Showcase Thali */}
        <Hero 
          onOpenEnquiryModal={handleOpenGeneralEnquiry} 
          onZoomImage={handleZoomImage}
        />

        {/* 2. Compact Feature Row (Trust / Benefits) */}
        <TrustStrip />

        {/* 3. Meal Plans ("CHOOSE YOUR MEAL PLAN" with Daily, Weekly, Monthly & Real Photos) */}
        <PlansSection 
          onSelectPlan={handleSelectPlan}
          onOpenClientEditor={() => setIsEditorModalOpen(true)}
          onZoomImage={handleZoomImage}
        />

        {/* 4. Wide Red Promotional Banner ("PERFECT COMBO!" with real meal combo photo & ₹800 stamp) */}
        <PromotionalBanner 
          onOpenEnquiry={handleSelectPlan} 
          onZoomImage={handleZoomImage}
        />

        {/* 5. Daily Menu Section with Real Food Photos */}
        <MenuSection 
          onOpenClientEditor={() => setIsEditorModalOpen(true)}
          onZoomImage={handleZoomImage}
        />

        {/* 6. 3-Step Process: How It Works with Real Stainless Tiffins & Dispatch Photos */}
        <HowItWorks 
          onOpenEnquiryModal={handleOpenGeneralEnquiry} 
          onZoomImage={handleZoomImage}
        />

        {/* 7. About Section with Real Kitchen & Prep Station Photos */}
        <AboutSection 
          onOpenEnquiryModal={handleOpenGeneralEnquiry} 
          onZoomImage={handleZoomImage}
        />

        {/* 8. Why Choose Us with Fresh Hand-rolled Phulkas & Commercial Facility Photos */}
        <WhyChooseUs 
          onOpenEnquiryModal={handleOpenGeneralEnquiry} 
          onZoomImage={handleZoomImage}
        />

        {/* 9. Visual Gallery (All 22 Real Business Photos with Category Filters & Lightbox) */}
        <GallerySection 
          onZoomImage={handleZoomImage}
        />

        {/* 10. Full-Width Strong Final CTA Section */}
        <FinalCtaSection 
          onOpenEnquiryModal={handleOpenGeneralEnquiry} 
        />

        {/* 11. Order & Contact Section + Embedded Map */}
        <ContactSection 
          initialPlan={selectedPlanForEnquiry} 
        />
      </main>

      {/* 12. Structured Dark Footer Matching Reference Layout */}
      <Footer />

      {/* Sticky Mobile Action Bar (Call, WhatsApp, Enquire) */}
      <MobileActionBar onOpenEnquiry={handleOpenGeneralEnquiry} />

      {/* Image Lightbox Modal with Full-Screen Zoom & WhatsApp Inquire */}
      {lightboxImage && (
        <LightboxModal
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
          onSelectImage={(img) => setLightboxImage(img)}
        />
      )}

      {/* Client Verification & Placeholder Assistant Modal */}
      <ClientEditorModal 
        isOpen={isEditorModalOpen}
        onClose={() => setIsEditorModalOpen(false)}
        customDailyPrice={customDailyPrice}
        setCustomDailyPrice={setCustomDailyPrice}
        customWeeklyPrice={customWeeklyPrice}
        setCustomWeeklyPrice={setCustomWeeklyPrice}
        customMonthlyPrice={customMonthlyPrice}
        setCustomMonthlyPrice={setCustomMonthlyPrice}
      />

      {/* Floating Client Mode Quick Pill */}
      <button
        type="button"
        onClick={() => setIsEditorModalOpen(true)}
        className="fixed bottom-20 md:bottom-6 right-4 z-40 bg-[#161616]/90 hover:bg-[#161616] backdrop-blur-md text-white text-[11px] font-bold px-3 py-2 rounded-full shadow-lg border border-[#333333] flex items-center gap-2 hover:scale-105 transition-all"
        title="View Verified Facts & Pricing"
      >
        <Sliders className="w-3.5 h-3.5 text-[#BE2325]" />
        <span className="hidden sm:inline font-display uppercase tracking-wider">Client Verification</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
      </button>
    </div>
  );
}
