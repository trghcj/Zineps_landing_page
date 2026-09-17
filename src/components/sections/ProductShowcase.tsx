import React, { useState } from 'react';
import { useLang } from '@/App';
import { 
  Printer, 
  Sparkles, 
  RotateCcw, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  Sliders,
  ShieldCheck,
  FileCheck
} from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const { lang, t } = useLang();
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      icon: Printer,
      title: 'Bulk Label Generation',
      titleNL: 'Bulk Labelprinten',
      desc: 'Print hundreds of carrier-compliant shipping labels, customs documents, and pick lists with one click.',
      descNL: 'Print honderden verzendlabels, douanedocumenten en pakbonnen tegelijk in één klik.',
    },
    {
      icon: Sliders,
      title: 'Smart Carrier Routing',
      titleNL: 'Slimme Vervoerderkeuze',
      desc: 'Automatically assigns the cheapest or fastest carrier for every order based on your preset rules.',
      descNL: 'Wijst per bestelling automatisch de goedkoopste of snelste vervoerder toe volgens jouw eigen regels.',
    },
    {
      icon: Compass,
      title: 'Branded Tracking',
      titleNL: 'Branded Track & Trace',
      desc: 'Keep customers informed with proactive shipment status notifications in your own branding and domain.',
      descNL: 'Houd klanten realtime op de hoogte via automatische statusupdates in je eigen huisstijl.',
    },
    {
      icon: RotateCcw,
      title: 'Automated Returns Portal',
      titleNL: 'Zelfservice Retourportaal',
      desc: 'Give buyers an effortless return experience with instant paperless QR drop-off codes.',
      descNL: 'Bied kopers een moeiteloze retourervaring met directe papierenloze QR-inlevercodes.',
    },
  ];

  return (
    <section id="workflow" className="w-full py-16 md:py-24 relative bg-zinc-50/60 overflow-hidden border-t border-slate-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#17332A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#48C293]/30">
            {lang === 'en' ? 'HOW IT WORKS' : 'HOE HET WERKT'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#161D1A] tracking-tight leading-tight mb-4">
            {lang === 'en'
              ? 'Smart shipping from label to return.'
              : 'Slimme verzending van label tot retour.'}
          </h2>
          <p className="text-base sm:text-lg text-[#52605B] leading-relaxed">
            {lang === 'en'
              ? 'Less manual work, lower postage spend, faster fulfillment, and happier customers. Everything you need to scale your dispatch operations.'
              : 'Minder handmatig werk, lagere verzendkosten, snellere orderverwerking en tevreden klanten.'}
          </p>
        </div>

        {/* 50/50 Human Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 4 Human Capabilities (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              const isSelected = activeTab === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#17332A] shadow-md ring-1 ring-[#17332A]/10'
                      : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-[#17332A] text-[#70CAB9]'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#161D1A]">
                        {lang === 'en' ? cap.title : cap.titleNL}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {lang === 'en' ? cap.desc : cap.descNL}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <a
                href="https://app.zineps.com/Account/Register"
                className="zineps-cta-btn h-12 px-7 rounded-xl font-bold text-sm transition-all"
              >
                <span>{lang === 'en' ? 'Start automated shipping' : 'Start met automatiseren'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Real Software Showcase Graphic (7 cols) */}
          <div className="lg:col-span-7 w-full rounded-3xl overflow-hidden border border-slate-200 bg-white p-3 sm:p-5 shadow-xl">
            <div className="rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
              <img
                src="/shippng-zineps.svg"
                alt="Zineps Shipping Dashboard"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
