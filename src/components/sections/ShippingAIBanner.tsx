import React, { useState } from 'react';
import { useLang } from '@/App';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, SlidersHorizontal, Zap, Clock } from 'lucide-react';

const ShippingAIBanner: React.FC = () => {
  const { lang, t } = useLang();
  const [activeRule, setActiveRule] = useState<'cost' | 'speed' | 'coverage'>('cost');

  return (
    <section id="ai" className="w-full py-16 md:py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          style={{
            background: 'linear-gradient(135deg, #17332A 0%, #10241E 50%, #0A1813 100%)',
            color: '#ffffff',
          }}
          className="w-full rounded-3xl p-8 lg:p-14 shadow-2xl border border-[#70CAB9]/25 relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#70CAB9]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Human Rule-Based Decisioning */}
            <div className="lg:col-span-5 w-full flex flex-col">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md mb-6 w-max border border-white/15 text-[#70CAB9] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#70CAB9]" />
                <span>{lang === 'en' ? 'SMART SHIPPING RULES' : 'SLIMME VERZENDREGELS'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] mb-6 text-white">
                {lang === 'en'
                  ? 'Predict delays. Pick better routes. Spend less.'
                  : 'Voorkom vertraging. Kies slimmere routes. Bespaar direct.'}
              </h2>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 font-normal">
                {lang === 'en'
                  ? 'Automate your carrier selection based on your business rules. Route domestic orders with PostNL, express deliveries with DHL, and international parcels with DPD—all without manual sorting.'
                  : 'Automatiseer je vervoerderskeuze op basis van jouw regels. Stuur standaard pakketten via PostNL, express via DHL en export via DPD — zonder handmatig sorteerwerk.'}
              </p>

              {/* 3 Human Shipping Rules */}
              <div className="space-y-3 mb-8">
                <button
                  type="button"
                  onClick={() => setActiveRule('cost')}
                  className={`w-full p-3.5 rounded-xl border text-left transition flex items-center justify-between ${
                    activeRule === 'cost'
                      ? 'bg-white/20 border-[#70CAB9]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#70CAB9]/20 text-[#70CAB9] flex items-center justify-center font-bold text-xs">
                      01
                    </span>
                    <div>
                      <span className="text-sm font-bold text-white block">Cheapest Rate Rule</span>
                      <span className="text-xs text-white/70">Automatically picks lowest rate among all carriers</span>
                    </div>
                  </div>
                  <CheckCircle2 className={`w-4 h-4 ${activeRule === 'cost' ? 'text-[#70CAB9]' : 'text-white/30'}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveRule('speed')}
                  className={`w-full p-3.5 rounded-xl border text-left transition flex items-center justify-between ${
                    activeRule === 'speed'
                      ? 'bg-white/20 border-[#70CAB9]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#70CAB9]/20 text-[#70CAB9] flex items-center justify-center font-bold text-xs">
                      02
                    </span>
                    <div>
                      <span className="text-sm font-bold text-white block">Next-Day Guarantee Rule</span>
                      <span className="text-xs text-white/70">Routes urgent orders to fastest express courier</span>
                    </div>
                  </div>
                  <CheckCircle2 className={`w-4 h-4 ${activeRule === 'speed' ? 'text-[#70CAB9]' : 'text-white/30'}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveRule('coverage')}
                  className={`w-full p-3.5 rounded-xl border text-left transition flex items-center justify-between ${
                    activeRule === 'coverage'
                      ? 'bg-white/20 border-[#70CAB9]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#70CAB9]/20 text-[#70CAB9] flex items-center justify-center font-bold text-xs">
                      03
                    </span>
                    <div>
                      <span className="text-sm font-bold text-white block">Depot Delay Avoidance</span>
                      <span className="text-xs text-white/70">Proactively avoids congested regional sorting depots</span>
                    </div>
                  </div>
                  <CheckCircle2 className={`w-4 h-4 ${activeRule === 'coverage' ? 'text-[#70CAB9]' : 'text-white/30'}`} />
                </button>
              </div>

              <div>
                <a
                  href="#integrations"
                  className="zineps-cta-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all"
                >
                  <span>{lang === 'en' ? 'Explore Shipping AI' : 'Ontdek Shipping AI'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Clean, Realistic Shipping Comparison Card */}
            <div className="lg:col-span-7 w-full bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    AUTOMATED CARRIER DISPATCH
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                    Order #48291 · Amsterdam (NL) → Berlin (DE) · 2.4 kg
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] border border-[#48C293]/30">
                  Rule Matched
                </span>
              </div>

              {/* Best Matched Carrier */}
              <div className="p-5 rounded-2xl bg-[#F3FBF7] border-2 border-[#48C293] mb-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img src="/hero-dhl.svg" alt="DHL" className="h-7 w-auto object-contain" />
                    <div>
                      <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                        SELECTED CARRIER
                      </span>
                      <h5 className="font-bold text-base text-[#161D1A]">DHL Parcel Connect</h5>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#17332A]">€3.82</span>
                    <span className="text-[11px] font-bold text-emerald-700 block">Best price matched</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600 pt-3 border-t border-[#48C293]/20">
                  <span>Transit: 1–2 business days</span>
                  <span className="font-semibold text-emerald-800">99.1% on-time delivery record</span>
                </div>
              </div>

              {/* Evaluated Carrier Options */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Other Evaluated Carrier Lanes
                </span>

                <div className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs hover:bg-slate-50 transition">
                  <div className="flex items-center gap-3">
                    <img src="/hero-postnl.svg" alt="PostNL" className="h-5 w-auto object-contain" />
                    <span className="font-semibold text-slate-800">PostNL Standard</span>
                    <span className="text-slate-400">• 2 business days</span>
                  </div>
                  <span className="font-bold text-slate-700">€4.15</span>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs hover:bg-slate-50 transition">
                  <div className="flex items-center gap-3">
                    <img src="/hero-dpd.svg" alt="DPD" className="h-5 w-auto object-contain" />
                    <span className="font-semibold text-slate-800">DPD Classic</span>
                    <span className="text-slate-400">• 2 business days</span>
                  </div>
                  <span className="font-bold text-slate-700">€4.40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingAIBanner;
