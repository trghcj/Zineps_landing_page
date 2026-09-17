import React, { useState, createContext, useContext, useEffect, useRef } from 'react';
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

/**
 * RevealSection: Gracefully animates sections into view with a millisecond delay
 * when the user scrolls them into the viewport.
 */
interface RevealSectionProps {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}

const RevealSection: React.FC<RevealSectionProps> = ({ children, delayMs = 120, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => {
              setIsVisible(true);
            }, delayMs);
            observer.unobserve(entry.target);
            return () => clearTimeout(timer);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`zineps-section-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState<Lang>('en');

  const t = (en: string, nl: string) => (lang === 'en' ? en : nl);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div className="w-full min-h-screen font-sans bg-white text-[#161D1A] selection:bg-[#70CAB9]/30 selection:text-[#0F231D]">
        {/* 1. Announcement Banner (Immediate) */}
        <AnnouncementBanner />

        {/* 2. Glassmorphic Navigation Header (Immediate) */}
        <Header />

        {/* 3. Hero Section with 3D Orders Dashboard (Immediate above-the-fold) */}
        <HeroSection />

        {/* 4. Interactive Physics Carrier Badges */}
        <RevealSection delayMs={100} className="w-full -mt-6 mb-12 overflow-hidden">
          <FloatingIcons />
        </RevealSection>

        {/* 5. Trusted by Enterprise Brands Marquee */}
        <RevealSection delayMs={120}>
          <TrustedByMarquee />
        </RevealSection>

        {/* 6. Live Partner Rates Calculator */}
        <RevealSection delayMs={140}>
          <PartnerRatesSection />
        </RevealSection>

        {/* 7. Dual-Sided Platform Architecture (Merchants vs Logistics Partners) */}
        <RevealSection delayMs={140}>
          <TwoSidedNetwork />
        </RevealSection>

        {/* 8. End-to-End Fulfillment Pipeline */}
        <RevealSection delayMs={150}>
          <ProductShowcase />
        </RevealSection>

        {/* 9. AI Copilot Decisioning Engine */}
        <RevealSection delayMs={150}>
          <ShippingAIBanner />
        </RevealSection>

        {/* 10. Why Zineps Fintech Modular Bento Grid */}
        <RevealSection delayMs={150}>
          <WhyZinepsGrid />
        </RevealSection>

        {/* 11. Cross-Border Global Network & 3D Interactive WebGL Globe */}
        <RevealSection delayMs={160}>
          <GlobalNetworkSection />
        </RevealSection>

        {/* 12. Enterprise Uptime & Reliability */}
        <RevealSection delayMs={150}>
          <ReliabilitySection />
        </RevealSection>

        {/* 13. Universal Ecosystem Integrations */}
        <RevealSection delayMs={150}>
          <IntegrationsGrid />
        </RevealSection>

        {/* 14. Dedicated Logistics Partner OS */}
        <RevealSection delayMs={150}>
          <LogisticsPartnerSection />
        </RevealSection>

        {/* 15. Value Comparison: Traditional vs Zineps */}
        <RevealSection delayMs={140}>
          <ComparisonSection />
        </RevealSection>

        {/* 16. Newsroom & Press Highlights */}
        <RevealSection delayMs={140}>
          <NewsSection />
        </RevealSection>

        {/* 17. Frequently Asked Questions */}
        <RevealSection delayMs={140}>
          <FAQSection />
        </RevealSection>

        {/* 18. High-Impact Dark Forest Call-to-Action with Live Counters */}
        <RevealSection delayMs={150}>
          <GetStartedCTA />
        </RevealSection>

        {/* 19. Comprehensive Brand Footer */}
        <RevealSection delayMs={120}>
          <Footer />
        </RevealSection>

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
