import React from 'react';
import { useLang } from '@/App';
import { Globe, MapPin, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const GlobalNetworkSection: React.FC = () => {
  const { lang, t } = useLang();

  const globalHighlights = [
    { value: '200+', label: 'Countries reached', labelNL: 'Landen bereikbaar', desc: 'Customs cleared DDP/DDU' },
    { value: '1,000+', label: 'Shipping methods', labelNL: 'Verzendmethodes', desc: 'Standard, Express & Freight' },
    { value: '50+', label: 'Tier-1 logistics partners', labelNL: 'Logistieke partners', desc: 'High-volume contracted lanes' },
    { value: '300M+', label: 'Annual parcels', labelNL: 'Pakketten per jaar', desc: 'Enterprise network volume' },
  ];

  return (
    <section id="network" className="w-full py-16 md:py-24 relative bg-gradient-to-b from-white via-[#E6FAF5]/30 to-white overflow-hidden border-t border-gray-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#155e57] text-xs font-bold uppercase tracking-wider mb-4 border border-[#70CAB9]/30">
            {lang === 'en' ? 'GLOBAL NETWORK SCALE' : 'WERELDWIJDE INFRASTRUCTUUR'}
          </span>
          <h2 className="section-title mx-auto font-extrabold text-[#424242] tracking-tight mb-6">
            {lang === 'en'
              ? 'One infrastructure for global logistics.'
              : 'Eén infrastructuur voor wereldwijde logistiek.'}
          </h2>
          <p className="text-base sm:text-lg text-[#525151] leading-relaxed">
            {lang === 'en'
              ? 'Connect once and reach carriers, logistics providers, marketplaces, and shipping methods across European and worldwide corridors.'
              : 'Koppel één keer en bereik direct vervoerders, logistieke partners en marketplaces in alle Europese en wereldwijde corridors.'}
          </p>
        </div>

        {/* Global Network Map Card */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Stylized Node Grid Background */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: 4 Large Metrics */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6">
              {globalHighlights.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#E6FAF5]/40 border border-[#70CAB9]/30">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#155e57] block mb-1">
                    {item.value}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-gray-800 block">
                    {lang === 'en' ? item.label : item.labelNL}
                  </span>
                  <span className="text-[11px] text-gray-500 block mt-1">{item.desc}</span>
                </div>
              ))}
            </div>

            {/* Right: Network Route Graphic */}
            <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-[#f8fcfb] to-[#E6FAF5]/60 border border-[#70CAB9]/40 p-6 sm:p-8 flex flex-col justify-between min-h-[300px]">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200/80 text-xs font-bold text-gray-500">
                <span className="flex items-center gap-1.5 text-[#155e57]">
                  <Globe className="w-4 h-4 text-[#70CAB9]" /> ACTIVE INTERNATIONAL CORRIDORS
                </span>
                <span className="px-2 py-0.5 rounded bg-white text-emerald-700 font-extrabold shadow-sm">
                  ONLINE 24/7
                </span>
              </div>

              {/* Connected Route Visual */}
              <div className="space-y-4 my-6">
                {[
                  { from: 'Amsterdam Hub', to: 'Berlin Depot', carrier: 'DHL Express', latency: '22h transit', status: 'Optimal' },
                  { from: 'Rotterdam Port', to: 'Paris Express Hub', carrier: 'DPD Priority', latency: '24h transit', status: 'Optimal' },
                  { from: 'Antwerp Gateway', to: 'London Heathrow', carrier: 'UPS Worldwide', latency: '36h customs cleared', status: 'Cleared' },
                ].map((route, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-gray-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="font-bold text-gray-800">{route.from}</span>
                      <span className="text-gray-400">→</span>
                      <span className="font-bold text-gray-800">{route.to}</span>
                    </div>
                    <div className="flex items-center gap-3 font-medium">
                      <span className="px-2 py-0.5 rounded bg-gray-100 font-semibold">{route.carrier}</span>
                      <span className="text-gray-500">{route.latency}</span>
                      <span className="text-emerald-700 font-bold">{route.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between text-xs text-gray-500">
                <span>Multi-region fault tolerance with dynamic customs paperwork</span>
                <span className="font-bold text-[#155e57]">Cross-Border Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetworkSection;
