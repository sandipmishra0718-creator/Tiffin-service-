import { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import WhyChooseUs from './components/WhyChooseUs';
import PlansSection from './components/PlansSection';
import MenuSection from './components/MenuSection';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import ClientEditorModal from './components/ClientEditorModal';
import { Sliders } from 'lucide-react';

export default function App() {
  const [selectedPlanForEnquiry, setSelectedPlanForEnquiry] = useState<string>('Weekly Plan (Most Popular)');
  const [isEditorModalOpen, setIsEditorModalOpen] = useState<boolean>(false);

  // Editable price tags state for client demonstration
  const [customDailyPrice, setCustomDailyPrice] = useState<string>('₹[PRICE]');
  const [customWeeklyPrice, setCustomWeeklyPrice] = useState<string>('₹[PRICE]');
  const [customMonthlyPrice, setCustomMonthlyPrice] = useState<string>('₹[PRICE]');

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

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#202620] selection:bg-[#E26D2D] selection:text-white pb-16 md:pb-0">
      {/* Top Thin Information Bar */}
      <TopBar />

      {/* Sticky Navigation Header */}
      <Navbar onOpenEnquiryModal={handleOpenGeneralEnquiry} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenEnquiryModal={handleOpenGeneralEnquiry} />

        {/* 4 Benefit Trust Strip */}
        <TrustStrip />

        {/* Split Section: Why Choose Us */}
        <WhyChooseUs onOpenEnquiryModal={handleOpenGeneralEnquiry} />

        {/* Our Tiffin Plans (Daily, Weekly, Monthly) */}
        <PlansSection 
          onSelectPlan={handleSelectPlan}
          onOpenClientEditor={() => setIsEditorModalOpen(true)}
        />

        {/* Menu Section ("What's Cooking Today?") */}
        <MenuSection 
          onOpenClientEditor={() => setIsEditorModalOpen(true)}
        />

        {/* 3-Step Process: How It Works */}
        <HowItWorks onOpenEnquiryModal={handleOpenGeneralEnquiry} />

        {/* About Section: Story of The Tiffin Service (PDSB Enterprise) */}
        <AboutSection />

        {/* Editorial Photo Gallery */}
        <GallerySection />

        {/* High-Conversion Order & Contact Section + Enquiry Form */}
        <ContactSection initialPlan={selectedPlanForEnquiry} />
      </main>

      {/* Premium Dark Green Footer */}
      <Footer />

      {/* Sticky Mobile Action Bar (Call, WhatsApp, Enquire) */}
      <MobileActionBar onOpenEnquiry={handleOpenGeneralEnquiry} />

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
        className="fixed bottom-20 md:bottom-6 right-4 z-40 bg-[#0F251B]/90 hover:bg-[#0F251B] backdrop-blur-md text-white text-[11px] font-bold px-3 py-2 rounded-full shadow-lg border border-[#2D5A44] flex items-center gap-2 hover:scale-105 transition-all"
        title="View Verified Facts & Editable Placeholders"
      >
        <Sliders className="w-3.5 h-3.5 text-[#FFA066]" />
        <span className="hidden sm:inline">Client Preview Note</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#78E2A0] animate-pulse" />
      </button>
    </div>
  );
}
