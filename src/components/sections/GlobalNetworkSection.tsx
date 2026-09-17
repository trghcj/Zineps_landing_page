import React from 'react';
import { useLang } from '@/App';
import InteractiveGlobe from './InteractiveGlobe';
import { Globe2 } from 'lucide-react';

const GlobalNetworkSection: React.FC = () => {
  const { lang } = useLang();

  const globalHighlights = [
    { value: '200+', label: 'Countries reached', labelNL: 'Landen bereikbaar', desc: 'Pre-cleared DDP and DDU corridors' },
    { value: '1,000+', label: 'Shipping methods', labelNL: 'Verzendmethodes', desc: 'Standard, express, cargo & parcel lockers' },
    { value: '50+', label: 'Carrier networks', labelNL: 'Aangesloten vervoerders', desc: 'Direct tier-1 integrations across Europe' },
    { value: '300M+', label: 'Annual parcel capacity', labelNL: 'Pakketcapaciteit / jaar', desc: 'Built for high-volume enterprise scale' },
  ];

  return (
    <section id="network" className="w-full py-16 md:py-24 relative bg-gradient-to-b from-white via-[#F4FAF8] to-white overflow-hidden border-t border-slate-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E6FAF5] text-[#134e48] text-xs font-bold uppercase tracking-wider mb-4 border border-[#70CAB9]/30">
            <Globe2 className="w-3.5 h-3.5 text-[#0d9488]" />
            <span>{lang === 'en' ? 'GLOBAL NETWORK SCALE' : 'WERELDWIJDE INFRASTRUCTUUR'}</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-4">
            {lang === 'en'
              ? 'One infrastructure for European and global logistics.'
              : 'Eén infrastructuur voor Europese en wereldwijde logistiek.'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Connect once to reach European national carriers, regional express specialists, and international customs corridors on a single unified platform.'
              : 'Koppel één keer en bereik direct Europese nationale vervoerders, express-specialisten en douanecorridors via één geïntegreerd platform.'}
          </p>
        </div>

        {/* Cohesive Editorial Metric Ribbon - replaces the 4 floating generic AI boxes */}
        <div className="w-full max-w-5xl mx-auto mb-10 rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {globalHighlights.map((item, idx) => (
              <div key={idx} className="p-6 text-center sm:text-left flex flex-col justify-between hover:bg-slate-50/40 transition-colors">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#17332A] tracking-tight block">
                    {item.value}
                  </span>
                  <span className="text-sm font-bold text-slate-900 block mt-1.5">
                    {lang === 'en' ? item.label : item.labelNL}
                  </span>
                </div>
                <span className="text-xs text-slate-500 mt-2 font-medium leading-relaxed block">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Shipping Network & Interactive Visualizer */}
        <InteractiveGlobe />
      </div>
    </section>
  );
};

export default GlobalNetworkSection;
