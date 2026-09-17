import React, { useState } from 'react';
import { useLang } from '@/App';
import { 
  Printer, 
  RotateCcw, 
  Compass, 
  ArrowRight,
  Sliders,
  CheckCircle2,
  Package,
  QrCode,
  Truck,
  Check
} from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const { lang } = useLang();
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
    <section id="workflow" className="w-full py-16 md:py-20 relative bg-zinc-50/60 overflow-hidden border-t border-slate-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Reduced Vertical Whitespace */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#17332A] text-xs font-bold uppercase tracking-wider mb-3.5 border border-[#48C293]/30">
            {lang === 'en' ? 'HOW IT WORKS' : 'HOE HET WERKT'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#161D1A] tracking-tight leading-tight mb-3">
            {lang === 'en'
              ? 'Smart shipping from label to return.'
              : 'Slimme verzending van label tot retour.'}
          </h2>
          <p className="text-base sm:text-lg text-[#52605B] leading-relaxed max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Less manual work, lower postage spend, faster fulfillment, and happier customers. Everything you need to scale your dispatch operations.'
              : 'Minder handmatig werk, lagere verzendkosten, snellere orderverwerking en tevreden klanten.'}
          </p>
        </div>

        {/* 38% / 62% Coordinated Interactive Showcase Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Feature List Stack (38% width, compact, perfectly aligned) */}
          <div className="w-full lg:w-[38%] shrink-0 flex flex-col space-y-3">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#17332A] shadow-sm ring-1 ring-[#17332A]/10'
                      : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#17332A] text-[#70CAB9]'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#161D1A] leading-tight">
                        {lang === 'en' ? cap.title : cap.titleNL}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-snug">
                        {lang === 'en' ? cap.desc : cap.descNL}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* CTA Button Naturally Aligned Below the Stack */}
            <div className="pt-2">
              <a
                href="https://app.zineps.com/Account/Register"
                className="zineps-cta-btn w-full sm:w-auto h-11 px-6 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>{lang === 'en' ? 'Start automated shipping' : 'Start met automatiseren'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Product Mockup Showcase (62% width, +15% visual prominence) */}
          <div className="w-full lg:w-[62%] min-w-0 rounded-3xl border border-slate-200 bg-white p-3 sm:p-5 shadow-lg overflow-hidden">
            {/* macOS Chrome Header */}
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-[11px] font-mono text-slate-500 font-medium">
                  app.zineps.com / {
                    activeTab === 0 ? 'orders / bulk-print' :
                    activeTab === 1 ? 'routing-rules / lane-optimizer' :
                    activeTab === 2 ? 'branded-tracking / customer-view' :
                    'returns-portal / qr-dropoff'
                  }
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-semibold text-slate-600">Production Live</span>
              </div>
            </div>

            {/* Coordinated Interactive Product Mockup States (150-250ms smooth transition) */}
            <div className="relative min-h-[380px] sm:min-h-[420px] rounded-2xl bg-[#FAFCFB] border border-slate-200/80 p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
              
              {/* STATE 0: Bulk Label Generation */}
              {activeTab === 0 && (
                <div className="transition-opacity duration-200 ease-in-out flex flex-col h-full justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                          BATCH FULFILLMENT QUEUE
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                          48 Orders Selected for Label Print
                        </h4>
                      </div>
                      <span className="px-3 py-1.5 rounded-lg bg-[#17332A] text-white text-xs font-bold shadow-xs">
                        Print 48 Labels (PDF/ZPL)
                      </span>
                    </div>

                    <div className="mt-4 space-y-2">
                      {[
                        { id: '#ORD-9842', buyer: 'Emma Laurent · Paris (FR)', weight: '1.4 kg', carrier: 'DHL Parcel Connect', badge: 'Label Ready' },
                        { id: '#ORD-9843', buyer: 'Jan de Vries · Amsterdam (NL)', weight: '2.8 kg', carrier: 'PostNL Standard', badge: 'Label Ready' },
                        { id: '#ORD-9844', buyer: 'Sophie Becker · Frankfurt (DE)', weight: '0.9 kg', carrier: 'DPD Classic', badge: 'Label Ready' },
                        { id: '#ORD-9845', buyer: 'Liam Murphy · Dublin (IE)', weight: '3.1 kg', carrier: 'UPS Standard', badge: 'Label Ready' },
                      ].map((row, i) => (
                        <div key={i} className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3">
                            <span className="w-4 h-4 rounded bg-[#17332A] text-white flex items-center justify-center text-[10px] font-bold">
                              ✓
                            </span>
                            <div>
                              <span className="font-bold text-slate-900">{row.id}</span>
                              <span className="text-slate-500 ml-2">{row.buyer}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-medium text-slate-600 hidden sm:inline">{row.weight}</span>
                            <span className="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-[11px]">{row.carrier}</span>
                            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold text-[10px]">{row.badge}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-medium">All international customs declarations (CN22/IOSS) automatically attached</span>
                    <span className="font-bold text-emerald-700">Ready in 0.4s</span>
                  </div>
                </div>
              )}

              {/* STATE 1: Smart Carrier Routing */}
              {activeTab === 1 && (
                <div className="transition-opacity duration-200 ease-in-out flex flex-col h-full justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                          LEAST-COST CARRIER ENGINE
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                          Amsterdam Hub ➔ Berlin Depot · 2.4 kg Parcel
                        </h4>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                        Auto-Routing Rule #104 Active
                      </span>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      {/* Selected option */}
                      <div className="p-3 sm:p-3.5 rounded-xl bg-white border-2 border-[#17332A] flex items-center justify-between text-xs shadow-xs">
                        <div className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#17332A] text-[#70CAB9] flex items-center justify-center font-bold text-xs">
                            ✓
                          </span>
                          <div>
                            <span className="font-bold text-slate-900 text-sm">DHL Parcel Connect</span>
                            <span className="text-slate-500 block text-[11px]">Guaranteed Next-Day · 99.4% SLA</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-extrabold text-[#17332A]">€2.84</span>
                          <span className="text-[10px] text-emerald-700 font-bold block">Lowest Rate (-€0.61)</span>
                        </div>
                      </div>

                      {/* Alternatives */}
                      <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs opacity-75">
                        <div className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-xs">
                            —
                          </span>
                          <div>
                            <span className="font-bold text-slate-800">DPD Classic</span>
                            <span className="text-slate-400 block text-[11px]">24-48h Delivery</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-slate-800">€3.10</span>
                          <span className="text-[10px] text-slate-400 block">Negotiated contract</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs opacity-75">
                        <div className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-xs">
                            —
                          </span>
                          <div>
                            <span className="font-bold text-slate-800">PostNL Priority</span>
                            <span className="text-slate-400 block text-[11px]">48h Delivery</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-slate-800">€3.45</span>
                          <span className="text-[10px] text-slate-400 block">List rate</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-medium">Rule criteria: Lowest contracted cost with next-day handover SLA</span>
                    <span className="font-bold text-[#17332A]">18ms latency</span>
                  </div>
                </div>
              )}

              {/* STATE 2: Branded Tracking */}
              {activeTab === 2 && (
                <div className="transition-opacity duration-200 ease-in-out flex flex-col h-full justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                          CUSTOMER BRANDED TRACKING
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                          tracking.yourstore.com / #ZN-94821
                        </h4>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                        Out for Delivery Today
                      </span>
                    </div>

                    {/* Timeline box */}
                    <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800">Estimated Delivery: Today 14:15 – 15:45</span>
                        <span className="text-slate-500 font-mono">Driver: Marco (Stop 28)</span>
                      </div>

                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#48C293] h-full w-3/4 rounded-full" />
                      </div>

                      <div className="grid grid-cols-3 text-[11px] text-slate-500 pt-1">
                        <div>
                          <span className="font-bold text-slate-800 block">08:15</span>
                          <span>Sorted at Depot</span>
                        </div>
                        <div className="text-center">
                          <span className="font-bold text-slate-800 block">11:30</span>
                          <span>Loaded on van</span>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-emerald-700 block">14:15</span>
                          <span>Doorstep delivery</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-medium">100% white-labeled tracking domain with SMS status webhooks</span>
                    <span className="font-bold text-emerald-700">+42% Repeat Visits</span>
                  </div>
                </div>
              )}

              {/* STATE 3: Automated Returns Portal */}
              {activeTab === 3 && (
                <div className="transition-opacity duration-200 ease-in-out flex flex-col h-full justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                          SELF-SERVICE RETURNS PORTAL
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                          Instant Digital Return Pass #RET-4819
                        </h4>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                        Instant QR Drop-off Active
                      </span>
                    </div>

                    <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-4">
                      <div>
                        <span className="font-bold text-sm text-slate-900 block">Return Item: Merino Wool Overshirt</span>
                        <span className="text-xs text-slate-500 mt-0.5 block">Reason: Exchange for Size Large · Approved</span>
                        <span className="text-xs font-semibold text-emerald-700 mt-2 block">
                          No printer required — scan QR code at nearest parcel point
                        </span>
                      </div>

                      <div className="w-18 h-18 rounded-xl bg-slate-900 text-white flex flex-col items-center justify-center shrink-0 p-2 shadow-xs">
                        <QrCode className="w-9 h-9 text-[#70CAB9]" />
                        <span className="text-[9px] font-mono mt-0.5 font-bold">QR PASS</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-medium">3,800+ PostNL & DPD drop-off points with automated inventory restock sync</span>
                    <span className="font-bold text-[#17332A]">3x Faster Returns</span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
