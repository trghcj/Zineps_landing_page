import React, { useState } from 'react';
import { useLang } from '@/App';
import { ArrowRight, Sparkles, Check, Package, Box, ShieldCheck, Truck, Layers } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export interface SampleTier {
  id: string;
  name: string;
  nameNL: string;
  weight: string;
  multiplier: number;
}

const packageTiers: SampleTier[] = [
  { id: 'mailbox', name: 'Letterbox Parcel', nameNL: 'Brievenbuspakje', weight: '0 – 2 kg', multiplier: 0.72 },
  { id: 'standard', name: 'Standard Parcel', nameNL: 'Standaard Pakket', weight: '2 – 5 kg', multiplier: 1.0 },
  { id: 'heavy', name: 'Heavy Package', nameNL: 'Zwaar Pakket', weight: '5 – 20 kg', multiplier: 1.45 },
  { id: 'pallet', name: 'Pallet Freight', nameNL: 'Palletzending', weight: '20+ kg', multiplier: 6.8 },
];

interface CarrierQuote {
  carrierName: string;
  serviceName: string;
  baseCost: number;
  transitTime: string;
  reliabilityScore: number;
  isRecommended: boolean;
  logo: string;
}

const baseQuotes: CarrierQuote[] = [
  {
    carrierName: 'DPD Express',
    serviceName: 'DPD Classic Europe',
    baseCost: 4.65,
    transitTime: 'Next-day delivery',
    reliabilityScore: 99.2,
    isRecommended: true,
    logo: '/hero-dpd.svg',
  },
  {
    carrierName: 'DHL Express',
    serviceName: 'DHL Parcel Connect',
    baseCost: 4.82,
    transitTime: '1–2 business days',
    reliabilityScore: 98.4,
    isRecommended: false,
    logo: '/hero-dhl.svg',
  },
  {
    carrierName: 'PostNL Global',
    serviceName: 'PostNL Standard Parcel',
    baseCost: 4.35,
    transitTime: '1–2 business days',
    reliabilityScore: 97.6,
    isRecommended: false,
    logo: '/hero-postnl.svg',
  },
];

const PartnerRatesSection: React.FC = () => {
  const { lang, t } = useLang();
  const [selectedTier, setSelectedTier] = useState<SampleTier>(packageTiers[1]!); // Standard
  const [selectedCarrier, setSelectedCarrier] = useState<string>('DPD Express');

  return (
    <section id="rates" className="w-full py-16 md:py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          style={{
            background: 'linear-gradient(135deg, #17332A 0%, #10241E 50%, #0A1813 100%)',
            color: '#ffffff',
          }}
          className="w-full rounded-3xl p-8 lg:p-14 shadow-2xl border border-[#70CAB9]/25 relative overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#48C293]/12 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Authentic Human Copy & Benefits */}
            <div className="lg:col-span-5 flex flex-col text-white">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#70CAB9] text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/15 mb-6 w-max">
                <Sparkles className="w-3.5 h-3.5 text-[#70CAB9]" />
                <span>{lang === 'en' ? 'PARTNER RATES' : 'PARTNER TARIEVEN'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.12] tracking-tight mb-6 text-white">
                {lang === 'en' ? 'Their buying power becomes yours.' : 'Hun inkoopkracht wordt jouw voordeel.'}
              </h2>

              <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed font-normal">
                {lang === 'en'
                  ? 'Logistics partners on Zineps already hold high-volume deals with DHL, PostNL, DPD, and dozens more. Connect your shop to ship with pre-negotiated tier-1 rates, use your own carrier contracts, or combine both in one place.'
                  : 'Logistieke partners op Zineps beschikken over scherpe bulkafspraken bij DHL, PostNL, DPD en meer. Koppel je shop en verzend direct tegen voordelige partnertarieven, gebruik je eigen contracten of combineer beide.'}
              </p>

              {/* 3 Real Metrics */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/15 pt-6 mb-8">
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-[#70CAB9] block mb-1">20+</span>
                  <span className="text-xs text-white/70 font-medium">
                    {lang === 'en' ? 'Shipping Partners' : 'Partners'}
                  </span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-[#70CAB9] block mb-1">200+</span>
                  <span className="text-xs text-white/70 font-medium">
                    {lang === 'en' ? 'Countries' : 'Landen'}
                  </span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-[#70CAB9] block mb-1">1,000+</span>
                  <span className="text-xs text-white/70 font-medium">
                    {lang === 'en' ? 'Methods' : 'Methodes'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://app.zineps.com/Account/Register"
                  className="zineps-cta-btn h-12 px-7 rounded-xl font-bold text-sm transition-all"
                >
                  <span>{lang === 'en' ? 'Start shipping' : 'Start gratis'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#workflow"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl font-bold text-sm border border-white/25 text-white hover:bg-white/10 transition-all"
                >
                  {lang === 'en' ? 'How partner rates work' : 'Hoe het werkt'}
                </a>
              </div>
            </div>

            {/* Right Column: Clean Sample Live Rates Benchmark */}
            <div className="lg:col-span-7 w-full bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    SAMPLE LIVE RATE COMPARISON
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#161D1A]">
                    {lang === 'en' ? 'Netherlands → Germany (Domestic & Cross-Border)' : 'Nederland → Duitsland (Binnenland & Export)'}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E9F8F2] text-[#17332A] border border-[#48C293]/30 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#48C293]" />
                  {lang === 'en' ? 'Contracted Tier-1 Rates' : 'Gecertificeerde Tarieven'}
                </span>
              </div>

              {/* Package Weight Tiers */}
              <div className="my-6">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
                  {lang === 'en' ? 'Select parcel category:' : 'Kies pakketcategorie:'}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {packageTiers.map((tier) => {
                    const isSelected = selectedTier.id === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTier(tier)}
                        className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between min-h-[72px] ${
                          isSelected
                            ? 'border-2 border-[#17332A] bg-[#F3FBF7] shadow-xs'
                            : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <span className="text-xs font-bold text-slate-800 leading-tight">
                          {lang === 'en' ? tier.name : tier.nameNL}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono mt-1">
                          {tier.weight}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Real Carrier Quotes */}
              <div className="space-y-3">
                {baseQuotes.map((quote) => {
                  const calculatedRate = (quote.baseCost * selectedTier.multiplier).toFixed(2);
                  const isSelected = selectedCarrier === quote.carrierName;

                  return (
                    <div
                      key={quote.carrierName}
                      onClick={() => setSelectedCarrier(quote.carrierName)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-2 border-[#17332A] bg-[#F3FBF7]/60 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
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
                                LOWEST RATE
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {quote.serviceName} • {quote.transitTime}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                        <div className="text-right">
                          <div className="text-xl sm:text-2xl font-black text-[#161D1A]">
                            €{calculatedRate}
                          </div>
                          <span className="text-[10px] font-medium text-slate-400">excl. VAT</span>
                        </div>
                        <button
                          type="button"
                          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                            isSelected
                              ? 'bg-[#17332A] text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {isSelected ? 'Selected' : 'Select'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                <span className="flex items-center gap-1.5 font-medium text-[#17332A]">
                  <ShieldCheck className="w-4 h-4 text-[#48C293]" />
                  No subscription lock-in • Print labels immediately
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Pre-negotiated volume discount applied
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
