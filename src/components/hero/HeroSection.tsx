import React, { useState } from 'react';
import { useLang } from '@/App';
import {
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Store,
  Building2,
} from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const { lang, t } = useLang();
  const [activeProductTab, setActiveProductTab] = useState<'merchant' | 'partner'>('merchant');

  return (
    <section className="relative w-full overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 bg-gradient-to-b from-white via-[#F3FBF7]/50 to-white">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#48C293]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Centered Header & Headline */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtitle Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E9F8F2] text-[#17332A] text-xs font-bold uppercase tracking-wider mb-6 border border-[#48C293]/30 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#48C293]" />
            <span>
              {lang === 'en'
                ? 'THE INTELLIGENT LAYER FOR GLOBAL LOGISTICS'
                : 'DE INTELLIGENTE LAAG VOOR WERELDWIJDE LOGISTIEK'}
            </span>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#161D1A] leading-[1.12] mb-6"
          >
            {lang === 'en' ? (
              <>
                For businesses that ship,<br className="hidden sm:inline" />
                {' '}and the <span className="text-[#17332A]">logistics partners</span> that move their goods.
              </>
            ) : (
              <>
                Voor bedrijven die verzenden,<br className="hidden sm:inline" />
                {' '}en de <span className="text-[#17332A]">logistieke partners</span> die hen vooruithelpen.
              </>
            )}
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-[#52605B] max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
          >
            {lang === 'en'
              ? 'One unified platform connecting webshops with freight forwarders, carriers, and 3PLs worldwide. Automate routing, label printing, and tracking at scale.'
              : 'Eén uniform platform dat webshops verbindt met expediteurs, vervoerders en 3PLs. Automatiseer routering, labels en tracking op schaal.'}
          </motion.p>

          {/* CTA Buttons - Matching Image 2 Signature Mint Glow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a
              href="https://app.zineps.com/Account/Register"
              className="zineps-cta-btn w-full sm:w-auto h-12 px-8 rounded-xl font-bold text-sm sm:text-base transition-all"
            >
              <span>{lang === 'en' ? 'Start shipping' : 'Start met verzenden'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#two-sided-network"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl text-sm sm:text-base font-bold text-[#10241E] border border-slate-200 bg-white hover:bg-[#F3FBF7] hover:border-[#70CAB9] hover:shadow-md transition-all shadow-xs"
            >
              <span>{lang === 'en' ? "I'm a logistics partner" : 'Ik ben logistiek partner'}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </motion.div>

          {/* 4 Trust Checkmarks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-[#52605B]"
          >
            {[
              { en: 'No setup fees', nl: 'Geen opstartkosten' },
              { en: '1,000+ shipping methods', nl: '1.000+ methodes' },
              { en: 'Your contracts or rates', nl: 'Eigen contract of partnertarief' },
              { en: 'Go live in minutes', nl: 'Live in minuten' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#E9F8F2] text-[#17332A] flex items-center justify-center text-[10px] font-bold shrink-0">
                  ✓
                </span>
                <span>{lang === 'en' ? item.en : item.nl}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Authentic Zineps Software Showcase (Replacing AI faux-mockup) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-6xl mx-auto mt-14 sm:mt-16"
        >
          {/* Authentic Product Switcher Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <button
              onClick={() => setActiveProductTab('merchant')}
              style={
                activeProductTab === 'merchant'
                  ? { backgroundColor: '#17332A', color: '#ffffff', borderColor: '#17332A' }
                  : { backgroundColor: '#ffffff', color: '#475569', borderColor: '#e2e8f0' }
              }
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs ${
                activeProductTab === 'merchant'
                  ? 'shadow-md scale-105'
                  : 'hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <Store className="w-4 h-4 text-[#70CAB9]" />
              <span>
                {lang === 'en' ? 'E-Commerce Shipping & Fulfillment' : 'E-Commerce Verzending & Fulfillment'}
              </span>
            </button>

            <button
              onClick={() => setActiveProductTab('partner')}
              style={
                activeProductTab === 'partner'
                  ? { backgroundColor: '#17332A', color: '#ffffff', borderColor: '#17332A' }
                  : { backgroundColor: '#ffffff', color: '#475569', borderColor: '#e2e8f0' }
              }
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs ${
                activeProductTab === 'partner'
                  ? 'shadow-md scale-105'
                  : 'hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <Building2 className="w-4 h-4 text-[#70CAB9]" />
              <span>
                {lang === 'en' ? 'Logistics Providers & Freight OS' : 'Logistieke Dienstverleners & Freight OS'}
              </span>
            </button>
          </div>

          {/* Hardware Enclosure with Real High-Res Zineps Software SVG */}
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-200/80 overflow-hidden">
            {/* macOS-style Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-50/90 border-b border-slate-200/80 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                <div className="hidden sm:flex items-center gap-2 ml-4 px-3 py-1 bg-white rounded-md border border-slate-200 text-[11px] font-mono text-slate-600 shadow-xs">
                  <span>
                    {activeProductTab === 'merchant'
                      ? 'app.zineps.com/dashboard/fulfillment'
                      : 'app.zineps.com/partner-portal/carriers'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E9F8F2] text-[#17332A] border border-[#48C293]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#48C293] animate-pulse" />
                  Live Platform
                </span>
                <span className="text-[11px] font-mono font-bold text-slate-400">Production v2.4</span>
              </div>
            </div>

            {/* Authentic Vector Dashboard Graphic Display */}
            <div className="relative w-full bg-slate-50 overflow-hidden p-2 sm:p-4 flex items-center justify-center">
              {activeProductTab === 'merchant' ? (
                <img
                  src="/zineps-dashboard.svg"
                  alt="Zineps E-Commerce Fulfillment Dashboard"
                  className="w-full h-auto object-contain rounded-xl shadow-xs"
                  loading="eager"
                />
              ) : (
                <img
                  src="/carrier-broker-mockup.svg"
                  alt="Zineps Logistics Provider OS"
                  className="w-full h-auto object-contain rounded-xl shadow-xs"
                  loading="eager"
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
