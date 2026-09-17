import React, { useState } from 'react';
import { useLang } from '@/App';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const ShippingAIBanner: React.FC = () => {
  const { lang } = useLang();
  const [activeRule, setActiveRule] = useState<'cost' | 'speed' | 'delay'>('cost');

  const rules = [
    {
      id: 'cost' as const,
      number: '01',
      title: 'Cheapest Rate Rule',
      titleNL: 'Laagste Tarief Regel',
      desc: 'Automatically picks lowest rate among all carriers',
      descNL: 'Kiest automatisch het voordeligste tarief over alle vervoerders',
    },
    {
      id: 'speed' as const,
      number: '02',
      title: 'Next-Day Guarantee Rule',
      titleNL: 'Next-Day Garantie Regel',
      desc: 'Routes urgent orders to fastest express courier',
      descNL: 'Routeert spoedorders direct naar de snelste express koerier',
    },
    {
      id: 'delay' as const,
      number: '03',
      title: 'Depot Delay Avoidance',
      titleNL: 'Depot Vertragingspreventie',
      desc: 'Proactively avoids congested regional sorting depots',
      descNL: 'Ontwijkt proactief overbelaste regionale sorteercentra',
    },
  ];

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

          {/* Vertically Aligned Two-Column Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Rules with Clear Typography Hierarchy */}
            <div className="lg:col-span-5 w-full flex flex-col">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md mb-6 w-max border border-white/15 text-[#70CAB9] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#70CAB9]" />
                <span>{lang === 'en' ? 'SMART SHIPPING RULES' : 'SLIMME VERZENDREGELS'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] mb-5 text-white">
                {lang === 'en'
                  ? 'Predict delays. Pick better routes. Spend less.'
                  : 'Voorkom vertraging. Kies slimmere routes. Bespaar direct.'}
              </h2>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 font-normal">
                {lang === 'en'
                  ? 'Automate your carrier selection based on your business rules. Route domestic orders with PostNL, express deliveries with DHL, and international parcels with DPD—all without manual sorting.'
                  : 'Automatiseer je vervoerderskeuze op basis van jouw regels. Stuur standaard pakketten via PostNL, express via DHL en export via DPD — zonder handmatig sorteerwerk.'}
              </p>

              {/* 3 Interactive Rule Cards with Distinct Hierarchy */}
              <div className="space-y-3 mb-7">
                {rules.map((rule) => {
                  const isSelected = activeRule === rule.id;
                  return (
                    <button
                      key={rule.id}
                      type="button"
                      onClick={() => setActiveRule(rule.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-white/20 border-[#70CAB9] shadow-sm ring-1 ring-[#70CAB9]/30'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected
                            ? 'bg-[#70CAB9] text-[#0F231D]'
                            : 'bg-[#70CAB9]/20 text-[#70CAB9]'
                        }`}>
                          {rule.number}
                        </span>
                        <div>
                          <span className="text-sm font-bold text-white block leading-tight">
                            {lang === 'en' ? rule.title : rule.titleNL}
                          </span>
                          <span className="text-xs text-white/70 block mt-0.5 leading-snug">
                            {lang === 'en' ? rule.desc : rule.descNL}
                          </span>
                        </div>
                      </div>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#70CAB9]' : 'text-white/25'}`} />
                    </button>
                  );
                })}
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

            {/* Right Column: Interactive Carrier Dispatch Demonstration Mockup */}
            <div className="lg:col-span-7 w-full bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 flex flex-col justify-between">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    AUTOMATED CARRIER DISPATCH
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                    Order #48291 · Amsterdam (NL) → Berlin (DE) · 2.4 kg
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] border border-[#48C293]/30">
                  Rule Active
                </span>
              </div>

              {/* Coordinated Interactive State Demonstration (150-250ms smooth transition) */}
              <div className="transition-opacity duration-200 ease-in-out">
                
                {/* STATE 1: Cheapest Rate Rule */}
                {activeRule === 'cost' && (
                  <div className="space-y-4">
                    {/* Selected Carrier */}
                    <div className="p-5 rounded-2xl bg-[#F3FBF7] border-2 border-[#48C293] shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <img src="/hero-dhl.svg" alt="DHL" className="h-7 w-auto object-contain" />
                          <div>
                            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                              SELECTED BY LEAST-COST RULE
                            </span>
                            <h5 className="font-bold text-base text-[#161D1A]">DHL Parcel Connect</h5>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-black text-[#17332A]">€3.82</span>
                          <span className="text-[11px] font-bold text-emerald-700 block">Lowest rate (-€0.58)</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-600 pt-3 border-t border-[#48C293]/20">
                        <span>Transit: 1–2 business days</span>
                        <span className="font-semibold text-emerald-800">99.1% on-time delivery record</span>
                      </div>
                    </div>

                    {/* Evaluated Options */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Other Evaluated Carrier Lanes
                      </span>
                      <div className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs opacity-75">
                        <div className="flex items-center gap-3">
                          <img src="/hero-postnl.svg" alt="PostNL" className="h-5 w-auto object-contain" />
                          <span className="font-semibold text-slate-800">PostNL Standard</span>
                          <span className="text-slate-400">• 2 business days</span>
                        </div>
                        <span className="font-bold text-slate-700">€4.15</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs opacity-75">
                        <div className="flex items-center gap-3">
                          <img src="/hero-dpd.svg" alt="DPD" className="h-5 w-auto object-contain" />
                          <span className="font-semibold text-slate-800">DPD Classic</span>
                          <span className="text-slate-400">• 2 business days</span>
                        </div>
                        <span className="font-bold text-slate-700">€4.40</span>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100">
                      <span>Optimization goal: Minimum shipping spend</span>
                      <span className="font-bold text-emerald-700">Saving €0.58 on this lane</span>
                    </div>
                  </div>
                )}

                {/* STATE 2: Next-Day Guarantee Rule */}
                {activeRule === 'speed' && (
                  <div className="space-y-4">
                    {/* Selected Carrier */}
                    <div className="p-5 rounded-2xl bg-[#F3FBF7] border-2 border-[#48C293] shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <img src="/hero-dpd.svg" alt="DPD" className="h-7 w-auto object-contain" />
                          <div>
                            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                              SELECTED BY DELIVERY SPEED RULE
                            </span>
                            <h5 className="font-bold text-base text-[#161D1A]">DPD Express Priority</h5>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-black text-[#17332A]">€4.40</span>
                          <span className="text-[11px] font-bold text-emerald-700 block">Fastest Transit (18h)</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-600 pt-3 border-t border-[#48C293]/20">
                        <span>Guaranteed Next-Day before 12:00</span>
                        <span className="font-semibold text-emerald-800">99.8% on-time delivery record</span>
                      </div>
                    </div>

                    {/* Evaluated Options */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Other Evaluated Carrier Lanes
                      </span>
                      <div className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs opacity-75">
                        <div className="flex items-center gap-3">
                          <img src="/hero-dhl.svg" alt="DHL" className="h-5 w-auto object-contain" />
                          <span className="font-semibold text-slate-800">DHL Parcel Connect</span>
                          <span className="text-slate-400">• 1–2 business days</span>
                        </div>
                        <span className="font-bold text-slate-700">€3.82</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs opacity-75">
                        <div className="flex items-center gap-3">
                          <img src="/hero-postnl.svg" alt="PostNL" className="h-5 w-auto object-contain" />
                          <span className="font-semibold text-slate-800">PostNL Standard</span>
                          <span className="text-slate-400">• 2 business days</span>
                        </div>
                        <span className="font-bold text-slate-700">€4.15</span>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100">
                      <span>Optimization goal: Urgent delivery SLA guarantee</span>
                      <span className="font-bold text-emerald-700">Dispatched via air express</span>
                    </div>
                  </div>
                )}

                {/* STATE 3: Depot Delay Avoidance */}
                {activeRule === 'delay' && (
                  <div className="space-y-4">
                    {/* Selected Carrier */}
                    <div className="p-5 rounded-2xl bg-[#F3FBF7] border-2 border-[#48C293] shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <img src="/hero-postnl.svg" alt="PostNL" className="h-7 w-auto object-contain" />
                          <div>
                            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                              SELECTED BY CONGESTION BYPASS
                            </span>
                            <h5 className="font-bold text-base text-[#161D1A]">PostNL Priority Direct</h5>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-black text-[#17332A]">€4.15</span>
                          <span className="text-[11px] font-bold text-emerald-700 block">Zero Hub Congestion</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-600 pt-3 border-t border-[#48C293]/20">
                        <span>Direct linehaul via Arnhem bypass</span>
                        <span className="font-semibold text-emerald-800">99.6% on-time delivery record</span>
                      </div>
                    </div>

                    {/* Evaluated Options */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Other Evaluated Carrier Lanes
                      </span>
                      <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/40 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <img src="/hero-dhl.svg" alt="DHL" className="h-5 w-auto object-contain" />
                          <span className="font-semibold text-slate-800">DHL Parcel Connect</span>
                          <span className="text-rose-600 font-medium">• Cologne depot alert (+24h)</span>
                        </div>
                        <span className="font-bold text-slate-700">€3.82</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs opacity-75">
                        <div className="flex items-center gap-3">
                          <img src="/hero-dpd.svg" alt="DPD" className="h-5 w-auto object-contain" />
                          <span className="font-semibold text-slate-800">DPD Classic</span>
                          <span className="text-slate-400">• 2 business days</span>
                        </div>
                        <span className="font-bold text-slate-700">€4.40</span>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100">
                      <span>Optimization goal: Proactive sorting hub congestion avoidance</span>
                      <span className="font-bold text-emerald-700">Prevented 24h regional delay</span>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingAIBanner;
