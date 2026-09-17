import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/App';
import { ArrowRight, Sparkles, Check, Package, Zap, ChevronRight, ShieldCheck } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export interface SampleProduct {
  id: string;
  name: string;
  nameNL: string;
  weight: string;
  multiplier: number;
  icon: string;
}

const sampleProducts: SampleProduct[] = [
  { id: 'tshirt', name: 'T-Shirt', nameNL: 'T-Shirt', weight: '0.3 kg', multiplier: 0.72, icon: '👕' },
  { id: 'sneakers', name: 'Sneakers', nameNL: 'Sneakers', weight: '1.2 kg', multiplier: 0.92, icon: '👟' },
  { id: 'standard', name: 'Standard Parcel', nameNL: 'Standaard Pakket', weight: '1.5 kg', multiplier: 1.0, icon: '📦' },
  { id: 'coffeemaker', name: 'Coffee Machine', nameNL: 'Koffiezetapparaat', weight: '4.5 kg', multiplier: 1.48, icon: '☕' },
  { id: 'pallet', name: 'Half Pallet', nameNL: 'Halve Pallet', weight: '120 kg', multiplier: 7.8, icon: '🪵' },
];

interface CarrierQuote {
  carrierName: string;
  baseCost: number;
  transitTime: string;
  reliabilityScore: number;
  isRecommended: boolean;
  logo: string;
  serviceName: string;
}

const baseQuotes: CarrierQuote[] = [
  {
    carrierName: 'DPD Express',
    serviceName: 'Next-Day Guaranteed',
    baseCost: 5.10,
    transitTime: '1 day',
    reliabilityScore: 99.2,
    isRecommended: true,
    logo: '/hero-dpd.svg',
  },
  {
    carrierName: 'DHL Express',
    serviceName: 'Priority Air & Ground',
    baseCost: 4.82,
    transitTime: '1–2 days',
    reliabilityScore: 98.4,
    isRecommended: false,
    logo: '/hero-dhl.svg',
  },
  {
    carrierName: 'PostNL Global',
    serviceName: 'Standard Parcel Network',
    baseCost: 4.35,
    transitTime: '2–3 days',
    reliabilityScore: 96.8,
    isRecommended: false,
    logo: '/hero-postnl.svg',
  },
];

const PartnerRatesSection: React.FC = () => {
  const { lang, t } = useLang();
  const [selectedProduct, setSelectedProduct] = useState<SampleProduct>(sampleProducts[2]!); // Default: Standard Parcel
  const [selectedCarrier, setSelectedCarrier] = useState<string>('DPD Express');
  const [activeRoute, setActiveRoute] = useState<'AMS-BER' | 'PAR-LON'>('AMS-BER');

  return (
    <section id="rates" className="w-full py-16 md:py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-Scale Feature Banner in Deep Forest #17332A */}
        <div className="w-full rounded-3xl bg-[#17332A] text-white p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Emerald Radial Glow */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#48C293]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-10 w-[400px] h-[400px] bg-[#55C99F]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Context & Metrics (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col text-white">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#48C293] text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/10 mb-6 w-max">
                <Sparkles className="w-3.5 h-3.5 text-[#48C293]" />
                <span>{lang === 'en' ? 'AI RATE BENCHMARK & ROUTER' : 'SLIMME TARIEVENENGINE'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.12] tracking-tight mb-6">
                {lang === 'en'
                  ? 'Bring the power of a logistics network to every shipment.'
                  : 'Breng de kracht van een heel netwerk naar elke zending.'}
              </h2>

              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed font-normal">
                {lang === 'en'
                  ? 'Use Zineps partner rates, your own carrier contracts, or both. Our intelligent matching layer automatically finds the right combination of price, speed, coverage, and reliability.'
                  : 'Gebruik Zineps partnertarieven, je eigen vervoerderscontracten, of combineer beide. Onze intelligente matchinglaag vindt per zending de perfecte balans in prijs, levertijd en betrouwbaarheid.'}
              </p>

              {/* 3 Animated Metrics */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/15 pt-6 mb-8">
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-white block mb-1">
                    <AnimatedCounter value={20} prefix="+" duration={1.5} />
                  </span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide">
                    {lang === 'en' ? 'Shipping Partners' : 'Partners'}
                  </span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-white block mb-1">
                    <AnimatedCounter value={200} prefix="+" duration={1.8} />
                  </span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide">
                    {lang === 'en' ? 'Countries' : 'Landen'}
                  </span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-white block mb-1">
                    <AnimatedCounter value={1000} prefix="+" duration={2.0} />
                  </span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide">
                    {lang === 'en' ? 'Methods' : 'Methodes'}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://app.zineps.com/Account/Register"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full font-bold text-sm bg-[#48C293] hover:bg-[#3bb182] text-white shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <span>{lang === 'en' ? 'Start shipping' : 'Start gratis'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#workflow"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-full font-semibold text-sm border border-white/25 text-white hover:bg-white/10 transition-all"
                >
                  {lang === 'en' ? 'See how rates work' : 'Bekijk werking'}
                </a>
              </div>
            </div>

            {/* Right Column: Interactive AI Rate Benchmark Card (lg:col-span-7) */}
            <div className="lg:col-span-7 w-full bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              {/* Lane Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider">
                      LIVE LANE BENCHMARK
                    </span>
                    <span className="text-xs text-slate-400 font-mono">14ms latency</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#161D1A] tracking-tight leading-tight">
                    SHIPMENT:{' '}
                    <span className="text-[#17332A]">
                      {activeRoute === 'AMS-BER' ? 'Amsterdam (NL) → Berlin (DE)' : 'Paris (FR) → London (UK)'}
                    </span>
                  </h3>
                </div>

                {/* Route Toggle Buttons */}
                <div className="flex items-center bg-slate-100 p-1 rounded-full text-xs font-bold shrink-0 self-start sm:self-auto">
                  <button
                    onClick={() => setActiveRoute('AMS-BER')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      activeRoute === 'AMS-BER' ? 'bg-white text-[#161D1A] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    AMS → BER
                  </button>
                  <button
                    onClick={() => setActiveRoute('PAR-LON')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      activeRoute === 'PAR-LON' ? 'bg-white text-[#161D1A] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    PAR → LON
                  </button>
                </div>
              </div>

              {/* Sample Product Recalculation Toggle */}
              <div className="my-5">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Select sample parcel type:
                  </span>
                  <span className="text-xs font-medium text-[#48C293]">
                    {lang === 'en' ? 'Instant dynamic quote update' : 'Directe live herberekening'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {sampleProducts.map((p) => {
                    const isSelected = selectedProduct.id === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setSelectedProduct(p)}
                        className={`flex flex-col justify-between p-3 rounded-2xl border transition-all text-left min-h-[82px] cursor-pointer ${
                          isSelected
                            ? 'border-2 border-[#48C293] bg-[#F3FBF7] shadow-xs scale-[1.01] ring-2 ring-[#48C293]/20'
                            : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span className="text-xl leading-none">{p.icon}</span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-[#48C293]" />
                          )}
                        </div>
                        <div>
                          <div className="text-xs font-extrabold text-[#161D1A] leading-snug line-clamp-1">
                            {lang === 'en' ? p.name : p.nameNL}
                          </div>
                          <div className="text-[11px] font-medium text-slate-400 mt-0.5">
                            {p.weight}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Live Quotes Comparison */}
              <div className="space-y-3">
                {baseQuotes.map((quote) => {
                  const calculatedRate = (
                    quote.baseCost *
                    selectedProduct.multiplier *
                    (activeRoute === 'PAR-LON' ? 1.25 : 1.0)
                  ).toFixed(2);
                  const isSelected = selectedCarrier === quote.carrierName;

                  return (
                    <div
                      key={quote.carrierName}
                      onClick={() => setSelectedCarrier(quote.carrierName)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-2 border-[#17332A] bg-[#F3FBF7]/50 shadow-md ring-1 ring-[#17332A]/10'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-2">
                          <img src={quote.logo} alt={quote.carrierName} className="h-6 w-auto object-contain" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm sm:text-base text-slate-900">
                              {quote.carrierName}
                            </span>
                            {quote.isRecommended && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E9F8F2] text-[#17332A] border border-[#48C293]/40">
                                RECOMMENDED
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500">
                            {quote.serviceName} • {quote.transitTime} • {quote.reliabilityScore}% SLA
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                        <div className="text-right">
                          <div className="text-xl sm:text-2xl font-black text-[#161D1A]">
                            €{calculatedRate}
                          </div>
                          <span className="text-[10px] font-medium text-slate-500">per parcel (ex. VAT)</span>
                        </div>

                        <button
                          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                            isSelected
                              ? 'bg-[#17332A] text-white shadow-xs'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {isSelected ? (
                            <span className="flex items-center gap-1">
                              <Check className="w-3.5 h-3.5 text-[#48C293]" /> Selected
                            </span>
                          ) : (
                            'Select'
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quote Guarantee */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                <span className="flex items-center gap-1 font-medium text-[#17332A]">
                  <ShieldCheck className="w-4 h-4 text-[#48C293]" />
                  Rates dynamically aggregated from 100+ logistics contracts
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Auto-Switching Active • Zero Minimum Commitment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerRatesSection;
