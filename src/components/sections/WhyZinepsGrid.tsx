import React from 'react';
import { useLang } from '@/App';
import { ArrowUpRight } from 'lucide-react';

const WhyZinepsGrid: React.FC = () => {
  const { lang } = useLang();

  return (
    <section id="why-zineps" className="w-full py-16 md:py-24 relative bg-white overflow-hidden scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3FBF7] border border-[#48C293]/30 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#48C293]" />
            <span className="text-xs font-semibold text-[#17332A] uppercase tracking-wider">
              {lang === 'en' ? 'MODULAR INFRASTRUCTURE' : 'MODULAIRE INFRASTRUCTUUR'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#161D1A] tracking-tight leading-tight mb-4">
            {lang === 'en'
              ? 'Everything you need for successful shipping.'
              : 'Alles wat je nodig hebt voor succesvolle verzending.'}
          </h2>

          <p className="text-base sm:text-lg text-[#52605B] leading-relaxed max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Consolidate multi-carrier fulfillment, rate intelligence, branded tracking, and returns into one clean platform.'
              : 'Van multi-carrier verzending tot retouren, live analytics en partnerbeheer — samengebracht in één betrouwbare infrastructuur.'}
          </p>
        </div>

        {/* 4 Clean Human-Made Bento Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">
          
          {/* CARD 01 — CENTRAL HUB (Primary Focus: Workflow / Process) */}
          <div className="w-full rounded-3xl p-6 sm:p-8 bg-[#FAFCFB] border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Header: Exact Same Eyebrow Row & Baseline */}
              <div className="h-6 flex items-center justify-between mb-4 sm:mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider">
                  01 • Central Hub
                </span>
                <span className="text-xs font-semibold text-slate-500">All-in-one</span>
              </div>

              {/* Title with Strict Min-Height for Baseline Alignment */}
              <h3 className="text-2xl sm:text-[28px] font-bold text-[#161D1A] tracking-tight leading-snug mb-2 sm:mb-3 min-h-[3.75rem] flex items-start">
                {lang === 'en' ? 'One platform for everything.' : 'Eén platform voor al je logistiek.'}
              </h3>

              {/* Subtitle with Strict Min-Height */}
              <p className="text-sm sm:text-base text-[#52605B] leading-relaxed mb-6 min-h-[4.5rem] flex items-start">
                {lang === 'en'
                  ? 'Manage all your orders, carrier accounts, tracking notifications, and reverse logistics in one place. No more switching between separate carrier portals.'
                  : 'Beheer al je bestellingen, vervoerderscontracten, tracking-e-mails en retouren in één overzichtelijke omgeving. Nooit meer inloggen bij losse vervoerders.'}
              </p>

              {/* Workflow Process: Primary Visual Focal Point with Connected Sequence & Aligned Columns */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs mb-6">
                <div className="relative space-y-4 sm:space-y-5">
                  {/* Subtle connecting vertical process line */}
                  <div className="absolute left-3.5 top-3.5 bottom-3.5 w-px bg-slate-200 z-0" />

                  {/* Step 1 */}
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#E9F8F2] text-[#17332A] border border-[#70CAB9]/40 flex items-center justify-center text-xs font-bold shrink-0 shadow-2xs">
                        1
                      </div>
                      <span className="font-semibold text-xs sm:text-sm text-slate-800">
                        Order imported from webshop
                      </span>
                    </div>
                    <span className="w-36 font-mono text-[11px] text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-100 shrink-0 text-right">
                      Shopify #4829
                    </span>
                  </div>

                  {/* Step 2 */}
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#E9F8F2] text-[#17332A] border border-[#70CAB9]/40 flex items-center justify-center text-xs font-bold shrink-0 shadow-2xs">
                        2
                      </div>
                      <span className="font-semibold text-xs sm:text-sm text-slate-800">
                        Cheapest carrier matched
                      </span>
                    </div>
                    <span className="w-36 font-bold text-[11px] text-[#17332A] bg-[#E9F8F2] px-2.5 py-1 rounded border border-[#70CAB9]/30 shrink-0 text-right">
                      DHL Parcel · €2.84
                    </span>
                  </div>

                  {/* Step 3 */}
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#E9F8F2] text-[#17332A] border border-[#70CAB9]/40 flex items-center justify-center text-xs font-bold shrink-0 shadow-2xs">
                        3
                      </div>
                      <span className="font-semibold text-xs sm:text-sm text-slate-800">
                        Label printed & tracking dispatched
                      </span>
                    </div>
                    <span className="w-36 font-semibold text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 shrink-0 text-right">
                      100% Automated
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Consistently Aligned Footer */}
            <div className="mt-auto pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#17332A]">
              <span>Zero fragmented portal logins</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#17332A] transition-colors" />
            </div>
          </div>

          {/* CARD 02 — INTEGRATIONS (Primary Focus: Integration Matrix) */}
          <div className="w-full rounded-3xl p-6 sm:p-8 bg-[#FAFCFB] border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="h-6 flex items-center justify-between mb-4 sm:mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider">
                  02 • Integrations
                </span>
                <span className="text-xs font-semibold text-slate-500">&lt;5 min setup</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-[28px] font-bold text-[#161D1A] tracking-tight leading-snug mb-2 sm:mb-3 min-h-[3.75rem] flex items-start">
                {lang === 'en' ? 'Fast integrations with your tools.' : 'Koppel direct met jouw webshop.'}
              </h3>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#52605B] leading-relaxed mb-6 min-h-[4.5rem] flex items-start">
                {lang === 'en'
                  ? 'Connect your online stores, marketplaces, and ERP systems seamlessly. Orders and tracking numbers sync automatically in real time.'
                  : 'Koppel je shops en marktplaatsen naadloos. Orders worden automatisch realtime gesynchroniseerd zonder handmatig overtypen.'}
              </p>

              {/* 3×2 Integration Matrix with Identical Tile Dimensions & Refined Hierarchy */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {[
                  { name: 'Shopify', desc: 'Direct Store Sync' },
                  { name: 'WooCommerce', desc: 'Plugin Connected' },
                  { name: 'Bol.com', desc: 'Partner API' },
                  { name: 'Amazon', desc: 'FBA & FBM' },
                  { name: 'Exact Online', desc: 'Accounting Sync' },
                  { name: 'REST & GraphQL', desc: 'Custom API' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="h-[76px] p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col justify-center shadow-2xs hover:border-slate-300 transition-all"
                  >
                    <span className="font-bold text-xs text-slate-900 leading-tight block">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-slate-500 mt-1 font-medium leading-tight block">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Consistently Aligned Footer */}
            <div className="mt-auto pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#17332A]">
              <span>50+ Pre-built connectors</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#17332A] transition-colors" />
            </div>
          </div>

          {/* CARD 03 — COST CONTROL (Primary Focus: Analytics / KPI Dominance) */}
          <div className="w-full rounded-3xl p-6 sm:p-8 bg-[#FAFCFB] border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="h-6 flex items-center justify-between mb-4 sm:mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider">
                  03 • Cost Control
                </span>
                <span className="text-xs font-bold text-emerald-600">-28% avg spend</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-[28px] font-bold text-[#161D1A] tracking-tight leading-snug mb-2 sm:mb-3 min-h-[3.75rem] flex items-start">
                {lang === 'en' ? 'Real-time cost transparency.' : 'Volledig inzicht in verzendkosten.'}
              </h3>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#52605B] leading-relaxed mb-6 min-h-[4.5rem] flex items-start">
                {lang === 'en'
                  ? 'Audit fuel surcharges, peak surcharges, and carrier performance per parcel with consolidated monthly statements.'
                  : 'Volledige transparantie over brandstoftoeslagen, piekkosten en vervoerdersprestaties per individueel pakket.'}
              </p>

              {/* Two Prominent KPIs + Complete Full-Width Monthly Fulfillment Audit Graph */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs mb-6">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Monthly Fulfillment Audit</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 text-[11px]">
                    All invoices reconciled
                  </span>
                </div>

                {/* 2 Primary KPI Highlights */}
                <div className="grid grid-cols-2 gap-4 pt-4 pb-3 items-start">
                  {/* KPI 1: Cost */}
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Avg Cost / Parcel</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block mt-1">
                      €2.41
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 block mt-1">
                      ↓ €0.84 saved vs list rate
                    </span>
                  </div>

                  {/* KPI 2: On-Time Performance */}
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">On-Time Performance</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block mt-1">
                      99.4%
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      Across all connected carriers
                    </span>
                  </div>
                </div>

                {/* Full-Width Monthly Cost Reduction Audit Graph */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      6-Month Cost Trajectory
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700">
                      -25.8% Optimization
                    </span>
                  </div>

                  {/* Complete, Full-Width Area & Line Graph */}
                  <div className="w-full h-20 sm:h-24 relative mt-1">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 340 70" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="costAuditGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#48C293" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#48C293" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>
                      {/* Grid guide lines */}
                      <line x1="10" y1="15" x2="330" y2="15" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="10" y1="40" x2="330" y2="40" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Area Fill */}
                      <path
                        d="M 10 16 L 74 24 L 138 34 L 202 44 L 266 52 L 330 60 L 330 70 L 10 70 Z"
                        fill="url(#costAuditGrad)"
                      />
                      
                      {/* Trend Line */}
                      <path
                        d="M 10 16 L 74 24 L 138 34 L 202 44 L 266 52 L 330 60"
                        fill="none"
                        stroke="#48C293"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      
                      {/* Data points */}
                      <circle cx="10" cy="16" r="3" fill="#FFFFFF" stroke="#48C293" strokeWidth="2" />
                      <circle cx="74" cy="24" r="3" fill="#FFFFFF" stroke="#48C293" strokeWidth="2" />
                      <circle cx="138" cy="34" r="3" fill="#FFFFFF" stroke="#48C293" strokeWidth="2" />
                      <circle cx="202" cy="44" r="3" fill="#FFFFFF" stroke="#48C293" strokeWidth="2" />
                      <circle cx="266" cy="52" r="3" fill="#FFFFFF" stroke="#48C293" strokeWidth="2" />
                      <circle cx="330" cy="60" r="4.5" fill="#17332A" stroke="#48C293" strokeWidth="2" />
                    </svg>
                  </div>

                  {/* Month axis labels */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-2 px-1">
                    <span>Jan (€3.25)</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span className="font-bold text-[#17332A]">Jun (€2.41)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Consistently Aligned Footer */}
            <div className="mt-auto pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#17332A]">
              <span>Consolidated monthly billing</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#17332A] transition-colors" />
            </div>
          </div>

          {/* CARD 04 — GLOBAL SCALE (Primary Focus: Network Reach / Prominent Metrics) */}
          <div className="w-full rounded-3xl p-6 sm:p-8 bg-[#FAFCFB] border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="h-6 flex items-center justify-between mb-4 sm:mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider">
                  04 • Global Scale
                </span>
                <span className="text-xs font-bold text-slate-600">99.9% Uptime</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-[28px] font-bold text-[#161D1A] tracking-tight leading-snug mb-2 sm:mb-3 min-h-[3.75rem] flex items-start">
                {lang === 'en' ? 'Global coverage you can depend on.' : 'Wereldwijde dekking waarop je bouwt.'}
              </h3>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#52605B] leading-relaxed mb-6 min-h-[4.5rem] flex items-start">
                {lang === 'en'
                  ? 'Ship locally or internationally across 200+ countries with automatic carrier failover and unified customs paperwork.'
                  : 'Verzend lokaal of cross-border naar 200+ landen met meer dan 1.000 verzendopties en automatische douanedocumenten.'}
              </p>

              {/* Effective Space Use: 3 Strong Metrics with Subtle Integrated Global Network Graphic */}
              <div className="relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs mb-6 overflow-hidden">
                {/* Subtle abstract network connecting lines */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 360 90"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M30 45 Q110 15 180 45 T330 45" stroke="#70CAB9" strokeWidth="1.2" strokeDasharray="4 4" />
                  <path d="M50 65 Q140 75 220 50 T310 35" stroke="#70CAB9" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="50" cy="45" r="3.5" fill="#48C293" />
                  <circle cx="180" cy="45" r="3.5" fill="#48C293" />
                  <circle cx="310" cy="35" r="3.5" fill="#48C293" />
                </svg>

                <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block">
                      200+
                    </span>
                    <span className="text-xs font-semibold text-slate-600 mt-1 block">
                      Countries
                    </span>
                  </div>
                  <div className="border-x border-slate-100">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block">
                      50+
                    </span>
                    <span className="text-xs font-semibold text-slate-600 mt-1 block">
                      Carriers
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#17332A] tracking-tight block">
                      99.9%
                    </span>
                    <span className="text-xs font-semibold text-slate-600 mt-1 block">
                      SLA Uptime
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Consistently Aligned Footer */}
            <div className="mt-auto pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#17332A]">
              <span>Multi-carrier failover protection</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#17332A] transition-colors" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyZinepsGrid;
