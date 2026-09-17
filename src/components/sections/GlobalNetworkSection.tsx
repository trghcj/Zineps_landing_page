import React from 'react';
import { useLang } from '@/App';
import InteractiveGlobe from './InteractiveGlobe';

const GlobalNetworkSection: React.FC = () => {
  const { lang } = useLang();

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

        {/* 4 Large Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {globalHighlights.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:border-[#70CAB9]/60 hover:shadow-md transition-all">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#17332A] block mb-1">
                {item.value}
              </span>
              <span className="text-sm font-bold text-gray-800 block">
                {lang === 'en' ? item.label : item.labelNL}
              </span>
              <span className="text-xs text-gray-500 block mt-1">{item.desc}</span>
            </div>
          ))}
        </div>

        {/* Interactive 3D WebGL Cobe Globe with live corridor telemetry */}
        <InteractiveGlobe />
      </div>
    </section>
  );
};

export default GlobalNetworkSection;
