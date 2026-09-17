import React, { useState, createContext, useContext } from 'react';
import AnnouncementBanner from './components/layout/AnnouncementBanner';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/hero/HeroSection';
import FloatingIcons from './components/hero/FloatingIcons';
import TrustedByMarquee from './components/sections/TrustedByMarquee';
import PartnerRatesSection from './components/sections/PartnerRatesSection';
import TwoSidedNetwork from './components/sections/TwoSidedNetwork';
import ProductShowcase from './components/sections/ProductShowcase';
import ShippingAIBanner from './components/sections/ShippingAIBanner';
import WhyZinepsGrid from './components/sections/WhyZinepsGrid';
import GlobalNetworkSection from './components/sections/GlobalNetworkSection';
import ReliabilitySection from './components/sections/ReliabilitySection';
import NewsSection from './components/sections/NewsSection';
import ComparisonSection from './components/sections/ComparisonSection';
import IntegrationsGrid from './components/sections/IntegrationsGrid';
import LogisticsPartnerSection from './components/sections/LogisticsPartnerSection';
import FAQSection from './components/sections/FAQSection';
import GetStartedCTA from './components/sections/GetStartedCTA';

export type Lang = 'en' | 'nl';

export interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, nl: string) => string;
}

export const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: (en) => en,
});

export const useLang = () => useContext(LangContext);

export default function App() {
  const [lang, setLang] = useState<Lang>('en');

  const t = (en: string, nl: string) => (lang === 'en' ? en : nl);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div className="w-full min-h-screen font-sans bg-white text-[#161D1A] selection:bg-[#70CAB9]/30 selection:text-[#0F231D]">
        {/* 1. Announcement Banner */}
        <AnnouncementBanner />

        {/* 2. Glassmorphic Navigation Header */}
        <Header />

        {/* 3. Hero Section with 3D Orders Dashboard */}
        <HeroSection />

        {/* 4. Interactive Physics Carrier Badges */}
        <section className="w-full -mt-6 mb-12 overflow-hidden">
          <FloatingIcons />
        </section>

        {/* 5. Trusted by Enterprise Brands Marquee */}
        <TrustedByMarquee />

        {/* 6. Live Partner Rates Calculator */}
        <PartnerRatesSection />

        {/* 7. Dual-Sided Platform Architecture (Merchants vs Logistics Partners) */}
        <TwoSidedNetwork />

        {/* 8. End-to-End Fulfillment Pipeline */}
        <ProductShowcase />

        {/* 9. AI Copilot Decisioning Engine */}
        <ShippingAIBanner />

        {/* 10. Why Zineps Fintech Modular Bento Grid */}
        <WhyZinepsGrid />

        {/* 11. Cross-Border Global Network & 3D Interactive WebGL Globe */}
        <GlobalNetworkSection />

        {/* 12. Enterprise Uptime & Reliability */}
        <ReliabilitySection />

        {/* 13. Universal Ecosystem Integrations */}
        <IntegrationsGrid />

        {/* 14. Dedicated Logistics Partner OS */}
        <LogisticsPartnerSection />

        {/* 15. Value Comparison: Traditional vs Zineps */}
        <ComparisonSection />

        {/* 16. Newsroom & Press Highlights */}
        <NewsSection />

        {/* 17. Frequently Asked Questions */}
        <FAQSection />

        {/* 18. High-Impact Dark Forest Call-to-Action with Live Counters */}
        <GetStartedCTA />

        {/* 19. Comprehensive Brand Footer */}
        <Footer />

        {/* 20. Floating Mint Support Chat Launcher */}
        <aside
          id="zineps-chat-launcher"
          aria-label="Support chat launcher"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center pointer-events-auto"
        >
          <button
            type="button"
            aria-label="Open support chat"
            className="zineps-chat-launcher-btn"
            onClick={() => {
              window.open('mailto:info@zineps.com', '_self');
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#17332A"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 4.5h10.5a2 2 0 0 1 2 2v7a2 2 0 0 1-1.2 1.8" />
              <path d="M4 8.5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7l-3 3.5V10.5a2 2 0 0 1 2-2z" />
            </svg>
          </button>
        </aside>
      </div>
    </LangContext.Provider>
  );
}
