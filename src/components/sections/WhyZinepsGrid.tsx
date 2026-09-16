import React, { useState } from 'react';
import { useLang } from '@/App';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  TrendingDown,
  Globe2,
  CheckCircle2,
  ArrowUpRight,
  Code2,
  ShieldCheck,
  BarChart2,
} from 'lucide-react';

const WhyZinepsGrid: React.FC = () => {
  const { lang, t } = useLang();
  const [activeTooltip, setActiveTooltip] = useState<number | null>(4);

  const analyticsPoints = [
    { month: 'Jul', cost: 3.42, volume: '18k' },
    { month: 'Aug', cost: 3.18, volume: '24k' },
    { month: 'Sep', cost: 2.94, volume: '32k' },
    { month: 'Oct', cost: 2.65, volume: '41k' },
    { month: 'Nov', cost: 2.41, volume: '58k' },
    { month: 'Dec', cost: 2.38, volume: '65k' },
  ];

  return (
    <section id="why-zineps" className="w-full py-16 md:py-24 relative bg-white overflow-hidden scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3FBF7] border border-[#48C293]/30 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#48C293]" />
            <span className="text-xs font-semibold text-[#17332A] uppercase tracking-wider">
              {lang === 'en' ? 'MODULAR INFRASTRUCTURE' : 'MODULAIRE LOGISTIEKE INFRASTRUCTUUR'}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#161D1A] tracking-tight leading-[1.12] mb-6">
            {lang === 'en'
              ? 'Why Zineps is the operating system for modern shipping.'
              : 'Waarom Zineps hét besturingssysteem is voor e-commerce.'}
          </h2>

          <p className="text-base sm:text-lg text-[#52605B] leading-relaxed">
            {lang === 'en'
              ? 'Everything from multi-carrier fulfillment to returns, analytics, and partner management — engineered as an ultra-fast, connected infrastructure.'
              : 'Van multi-carrier verzending tot retouren, live analytics en partnerbeheer — samengebracht in één razendsnelle, betrouwbare infrastructuur.'}
          </p>
        </div>

        {/* 4-Card Bento Grid Layout (Fintech / Linear Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">
          {/* Card 1: One platform for everything */}
          <div className="w-full h-auto min-h-[220px] rounded-3xl p-6 sm:p-8 bg-[#FAFCFB] border border-slate-200/80 hover:border-[#48C293]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider">
                  01 • Centralized Logistics Hub
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">All-in-one</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#161D1A] mb-3 group-hover:text-[#17332A] transition-colors">
                {lang === 'en' ? 'One platform for everything.' : 'Eén platform voor al je logistiek.'}
              </h3>

              <p className="text-sm sm:text-base text-[#52605B] leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Consolidate orders, labels, carrier selection rules, branded tracking, and reverse logistics into a single high-performance control plane. Eliminate fragmented portal logins and siloed carrier contracts.'
                  : 'Centraliseer bestellingen, labels, routeringsregels, branded tracking en retouren in één centrale cockpit. Nooit meer los inloggen in tientallen vervoerdersportalen.'}
              </p>

              {/* Interactive Mini UI: Unified Pipeline Rules */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs mb-6 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold pb-2 border-b border-slate-100 text-slate-500">
                  <span>Automated Routing Rule #104</span>
                  <span className="text-[#48C293] font-bold">Active in Production</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">Condition</span>
                    <span className="font-bold text-slate-800">Destination: EU Zone 1</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">AI Evaluation</span>
                    <span className="font-bold text-slate-800">Lowest SLA latency</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F3FBF7] border border-[#48C293]/30">
                    <span className="text-[10px] text-[#17332A] block">Matched Carrier</span>
                    <span className="font-bold text-[#17332A]">DHL Express (€2.84)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-xs font-bold text-[#17332A]">
                100% Unified Control • Zero Fragmented Logins
              </span>
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#48C293] group-hover:border-[#48C293] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 2: Fast integrations */}
          <div className="w-full h-auto min-h-[220px] rounded-3xl p-6 sm:p-8 bg-[#FAFCFB] border border-slate-200/80 hover:border-[#48C293]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider shrink-0">
                  02 • Plug & Play Ecosystem
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">&lt;5 min</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#161D1A] mb-3 group-hover:text-[#17332A] transition-colors">
                {lang === 'en' ? 'Fast integrations.' : 'Koppel in enkele minuten.'}
              </h3>

              <p className="text-sm text-[#52605B] leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Connect your shops, marketplaces, and ERPs seamlessly. Orders sync automatically with zero code required.'
                  : 'Koppel je shops en marktplaatsen naadloos. Orders worden automatisch realtime gesynchroniseerd.'}
              </p>

              {/* Visual Ecosystem Chips: Shopify, WooCommerce, Amazon, Bol.com, Exact */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {[
                  { name: 'Shopify', desc: 'Auto order sync', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
                  { name: 'WooCommerce', desc: 'Direct plugin', color: 'text-purple-700 bg-purple-50 border-purple-200' },
                  { name: 'Bol.com', desc: 'LVB & Partner API', color: 'text-blue-700 bg-blue-50 border-blue-200' },
                  { name: 'Amazon', desc: 'FBA & FBM sync', color: 'text-amber-700 bg-amber-50 border-amber-200' },
                  { name: 'Exact Online', desc: 'ERP accounting', color: 'text-rose-700 bg-rose-50 border-rose-200' },
                  { name: 'REST & Webhooks', desc: 'Developer first', color: 'text-slate-800 bg-slate-100 border-slate-200' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-xl border flex flex-col justify-center ${item.color}`}
                  >
                    <span className="font-bold text-xs">{item.name}</span>
                    <span className="text-[10px] opacity-80">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-xs font-bold text-[#17332A]">
                50+ Pre-built Apps & Connectors
              </span>
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#48C293] group-hover:border-[#48C293] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 3: Real-time analytics with sparkline */}
          <div className="w-full h-auto min-h-[220px] rounded-3xl p-6 sm:p-8 bg-[#FAFCFB] border border-slate-200/80 hover:border-[#48C293]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider">
                  03 • Cost Intelligence
                </span>
                <span className="text-xs font-mono font-bold text-emerald-600">-28% cost</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#161D1A] mb-3 group-hover:text-[#17332A] transition-colors">
                {lang === 'en' ? 'Real-time analytics.' : 'Real-time kosteninzicht.'}
              </h3>

              <p className="text-sm text-[#52605B] leading-relaxed mb-5">
                {lang === 'en'
                  ? 'Audit fuel surcharges, peak fees, and carrier performance with interactive telemetry and automated invoice checks.'
                  : 'Volledige transparantie over brandstoftoeslagen, piekkosten en vervoerdersprestaties per individueel pakket.'}
              </p>

              {/* Interactive SVG Sparkline / Area Chart */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs mb-6">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-slate-500">Avg Cost / Parcel (EUR)</span>
                  <span className="text-xs font-extrabold text-[#48C293] bg-[#E9F8F2] px-2 py-0.5 rounded-full">
                    ↓ €1.04 saved/p
                  </span>
                </div>

                <div className="relative h-28 w-full flex items-end justify-between gap-2 pt-4">
                  {/* SVG Line & Gradient */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                    <defs>
                      <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#48C293" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#48C293" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 15 10 Q 70 30, 130 45 T 250 65 T 380 85 T 480 92 L 480 110 L 15 110 Z"
                      fill="url(#sparklineGrad)"
                    />
                    <path
                      d="M 15 10 Q 70 30, 130 45 T 250 65 T 380 85 T 480 92"
                      fill="none"
                      stroke="#48C293"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Interactive Points */}
                  {analyticsPoints.map((pt, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveTooltip(idx)}
                      className="relative z-10 flex flex-col items-center cursor-pointer group/bar flex-1"
                    >
                      {activeTooltip === idx && (
                        <div className="absolute -top-8 px-2 py-0.5 rounded bg-[#17332A] text-white text-[10px] font-bold whitespace-nowrap shadow-md">
                          €{pt.cost} ({pt.volume})
                        </div>
                      )}
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          activeTooltip === idx
                            ? 'bg-[#17332A] ring-4 ring-[#48C293]/30 scale-125'
                            : 'bg-[#48C293] opacity-80'
                        }`}
                      />
                      <span className="text-[10px] text-slate-400 mt-2 font-mono">{pt.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-xs font-bold text-[#17332A]">
                100% Invoice Transparency • No Hidden Fees
              </span>
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#48C293] group-hover:border-[#48C293] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 4: Global coverage */}
          <div className="w-full h-auto min-h-[220px] rounded-3xl p-6 sm:p-8 bg-[#FAFCFB] border border-slate-200/80 hover:border-[#48C293]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider shrink-0">
                  04 • Global Scale & Redundancy
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">99.9% Uptime</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#161D1A] mb-3 group-hover:text-[#17332A] transition-colors">
                {lang === 'en' ? 'Global coverage you can depend on.' : 'Wereldwijde dekking waarop je bouwt.'}
              </h3>

              <p className="text-sm sm:text-base text-[#52605B] leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Ship locally or cross-border across 200+ countries with 1,000+ shipping methods. Our multi-carrier mesh provides automated failover if any carrier experiences regional delays.'
                  : 'Verzend lokaal of cross-border naar 200+ landen met meer dan 1.000 verzendopties en automatische failover bij storingen of piekcongestie.'}
              </p>

              {/* Live Corridors Telemetry */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-800">200+</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <span className="text-xs font-semibold text-[#17332A] block">Destination Countries</span>
                  <span className="text-[10px] text-slate-400">Domestic & Cross-Border</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-800">1,000+</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-semibold text-[#17332A] block">Shipping Methods</span>
                  <span className="text-[10px] text-slate-400">Express, Postal & Cargo</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F3FBF7] border border-[#48C293]/30 shadow-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#17332A]">99.9%</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#48C293]" />
                  </div>
                  <span className="text-xs font-semibold text-[#17332A] block">Platform Uptime</span>
                  <span className="text-[10px] text-slate-500">Multi-Cloud Cluster</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-xs font-bold text-[#17332A]">
                300M+ Parcels Annually Routed Across Europe & Beyond
              </span>
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#48C293] group-hover:border-[#48C293] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZinepsGrid;
