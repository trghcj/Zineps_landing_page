import React from 'react';
import { useLang } from '@/App';
import { ArrowRight, Store, Truck, ShieldCheck, Zap, Layers, RefreshCw, CheckCircle2 } from 'lucide-react';

const TwoSidedNetwork: React.FC = () => {
  const { lang, t } = useLang();

  return (
    <section id="two-sided-network" className="w-full py-16 md:py-24 relative bg-[#FAFCFB] border-t border-b border-slate-100 overflow-hidden scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3FBF7] border border-[#48C293]/30 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#48C293]" />
            <span className="text-xs font-semibold text-[#17332A] uppercase tracking-wider">
              {lang === 'en' ? 'DUAL-SIDED NETWORK ARCHITECTURE' : 'HET ZAKELIJK MODEL'}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#161D1A] tracking-tight leading-[1.12] mb-6">
            {lang === 'en'
              ? 'One platform. Two sides of the logistics network.'
              : 'Eén platform. Twee kanten van het logistieke netwerk.'}
          </h2>

          <p className="text-base sm:text-lg text-[#52605B] leading-relaxed">
            {lang === 'en'
              ? 'Zineps orchestrates supply and demand in logistics. We bridge businesses that need reliable, low-cost fulfillment with logistics partners who have spare capacity and enterprise volume deals.'
              : 'Zineps brengt vraag en aanbod in balans. We koppelen verzenders die betrouwbaarheid en scherpe tarieven zoeken aan logistieke partners met volumedeals en overcapaciteit.'}
          </p>
        </div>

        {/* Two Connected Equal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-stretch">
          {/* LEFT CARD: FOR BUSINESSES THAT SHIP */}
          <div className="w-full h-auto min-h-[260px] rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#48C293]/60 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1.5 rounded-full bg-[#E9F8F2] text-[#17332A] text-xs font-extrabold tracking-wide uppercase shrink-0">
                  {lang === 'en' ? 'FOR BUSINESSES THAT SHIP' : 'VOOR VERZENDENDE BEDRIJVEN'}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-[#E9F8F2] text-[#17332A] flex items-center justify-center">
                  <Store className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#161D1A] mb-3 leading-snug group-hover:text-[#17332A] transition-colors">
                {lang === 'en' ? 'Access the entire shipping network.' : 'Krijg toegang tot het complete verzendnetwerk.'}
              </h3>

              <p className="text-sm sm:text-base text-[#52605B] leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Pool collective parcel volume to unlock tier-1 carrier discounts from day one. Connect your store once and seamlessly blend Zineps rates with your own negotiated contracts.'
                  : 'Bundel je verzendvolume met duizenden andere verzenders voor directe toegang tot tier-1 vervoerderskortingen, zonder minimumquotum of langlopende contractverplichtingen.'}
              </p>

              {/* Feature bullets */}
              <ul className="space-y-3 mb-8">
                {[
                  { en: 'Pre-negotiated volume rates across DHL, PostNL, DPD', nl: 'Volumekortingen bij DHL, PostNL en DPD' },
                  { en: 'Bring your own carrier contracts (hybrid rate engine)', nl: 'Koppel eigen contracten (hybride model)' },
                  { en: 'Automated AI routing based on SLA & cutoff times', nl: 'AI-routering op basis van SLA en cut-off' },
                  { en: 'One-click bulk label creation & packing slip printer', nl: 'Bulk-labels en pakbonnen in één klik' },
                  { en: 'Self-service branded return portal with QR drop-off', nl: 'Branded retourportaal met QR-codes' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#161D1A]">
                    <CheckCircle2 className="w-4 h-4 text-[#48C293] shrink-0 mt-0.5" />
                    <span>{lang === 'en' ? item.en : item.nl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <a href="https://app.zineps.com/Account/Register" className="zineps-cta-btn px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm"
              >
                <span>{lang === 'en' ? 'Start shipping free' : 'Start gratis met verzenden'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-400 font-medium">Setup in 5 min</span>
            </div>
          </div>

          {/* RIGHT CARD: FOR LOGISTICS PARTNERS & 3PLS */}
          <div className="w-full h-auto min-h-[260px] rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#48C293]/60 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1.5 rounded-full bg-[#17332A] text-white text-xs font-extrabold tracking-wide uppercase shrink-0">
                  {lang === 'en' ? 'FOR LOGISTICS PARTNERS & 3PLS' : 'VOOR LOGISTIEK PARTNERS & 3PLS'}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-[#F3FBF7] text-[#17332A] flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#161D1A] mb-3 leading-snug group-hover:text-[#17332A] transition-colors">
                {lang === 'en' ? 'Turn your logistics network into growth.' : 'Maak van je logistiek een groeikanaal.'}
              </h3>

              <p className="text-sm sm:text-base text-[#52605B] leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Monetize spare capacity, publish negotiated carrier rates, and onboard new e-commerce clients in minutes through our white-label logistics portal.'
                  : 'Benut overcapaciteit in jouw netwerk, bied eigen contracten aan via het platform en onboard nieuwe e-commerce klanten binnen enkele minuten.'}
              </p>

              {/* Feature bullets */}
              <ul className="space-y-3 mb-8">
                {[
                  { en: 'Monetize high-volume freight & carrier lane deals', nl: 'Verzilver scherpe volumetarieven en lane deals' },
                  { en: 'Automated merchant onboarding without custom code', nl: 'Onboard webshops zonder custom programmeerwerk' },
                  { en: 'Multi-tenant client billing & automated invoicing', nl: 'Multi-tenant facturatie en geautomatiseerde incasso' },
                  { en: 'Real-time lane density & capacity utilization telemetry', nl: 'Realtime inzicht in netwerkbelasting en volumes' },
                  { en: 'Custom carrier integrations via open webhook API', nl: 'Koppel eigen routes via onze open carrier API' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#161D1A]">
                    <CheckCircle2 className="w-4 h-4 text-[#17332A] shrink-0 mt-0.5" />
                    <span>{lang === 'en' ? item.en : item.nl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <a href="#partners" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm border border-slate-200 bg-white hover:bg-[#F3FBF7] hover:border-[#70CAB9] text-[#10241E] transition-all shadow-xs"
              >
                <span>{lang === 'en' ? 'Become a partner' : 'Word logistiek partner'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-400 font-medium">Partner API & SDK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoSidedNetwork;
