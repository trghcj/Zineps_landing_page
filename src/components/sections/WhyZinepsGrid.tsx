import React, { useState } from 'react';
import { useLang } from '@/App';
import { ArrowUpRight, Code2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyZinepsGrid: React.FC = () => {
  const { lang } = useLang();

  // Dynamic interactive graph state for Card 03
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const trajectoryData = [
    { month: 'Jan', cost: '€3.25', savings: 'Baseline (0%)', x: 15, y: 16 },
    { month: 'Feb', cost: '€3.08', savings: '-5.2% saved', x: 78, y: 24 },
    { month: 'Mar', cost: '€2.89', savings: '-11.1% saved', x: 141, y: 34 },
    { month: 'Apr', cost: '€2.72', savings: '-16.3% saved', x: 204, y: 44 },
    { month: 'May', cost: '€2.55', savings: '-21.5% saved', x: 267, y: 52 },
    { month: 'Jun', cost: '€2.41', savings: '-25.8% saved', x: 325, y: 60 },
  ];

  const activeData = (hoveredPoint !== null ? trajectoryData[hoveredPoint] : trajectoryData[5]) ?? trajectoryData[0]!;

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
              <div className="space-y-3.5 mb-6">
                {[
                  { step: '01', title: 'Orders Imported', val: 'Shopify #4829', status: 'Live Sync', icon: '✦' },
                  { step: '02', title: 'Best Rate Selected', val: 'DHL Parcel · €2.84', status: 'Lowest Cost', icon: '✓' },
                  { step: '03', title: 'Label & Tracking Dispatched', val: '100% Automated', status: 'Instant PDF', icon: '●' },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-[#E9F8F2] text-[#17332A] flex items-center justify-center font-bold text-xs shrink-0">
                        {row.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="font-bold text-xs sm:text-sm text-slate-900 block truncate">
                          {row.title}
                        </span>
                        <span className="text-[11px] text-slate-400 block font-medium">
                          Step {row.step} • {row.status}
                        </span>
                      </div>
                    </div>

                    {/* Razor-sharp vertically aligned right-side column */}
                    <div className="w-36 shrink-0 text-right">
                      <span className="text-xs font-mono font-bold text-slate-800 bg-slate-50 border border-slate-100 px-2 py-1 rounded block truncate">
                        {row.val}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consistently Aligned Footer */}
            <div className="mt-auto pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#17332A]">
              <span>Zero manual data entry</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#17332A] transition-colors" />
            </div>
          </div>

          {/* CARD 02 — INTEGRATIONS (With Official Company Logos) */}
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

              {/* 3×2 Integration Matrix With Official Company Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {[
                  { name: 'Shopify', desc: 'Direct Store Sync', logo: '/hero-shopify.svg' },
                  { name: 'WooCommerce', desc: 'Plugin Connected', logo: '/hero-woo.svg' },
                  { name: 'Bol.com', desc: 'Partner API', logo: '/hero-bol.svg' },
                  { name: 'Amazon', desc: 'FBA & FBM', logo: '/hero-amazon.svg' },
                  { name: 'Exact Online', desc: 'Accounting Sync', logo: '/exact-logo.svg' },
                  { name: 'REST & GraphQL', desc: 'Custom API', isCode: true },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="h-[76px] p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-2xs hover:border-[#48C293]/60 hover:shadow-xs transition-all cursor-pointer"
                  >
                    {/* Official Company Logo */}
                    <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-1">
                      {item.isCode ? (
                        <div className="w-full h-full rounded bg-[#E9F8F2] flex items-center justify-center">
                          <Code2 className="w-4 h-4 text-[#17332A]" />
                        </div>
                      ) : (
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="font-bold text-xs text-slate-900 leading-tight block truncate">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-slate-500 mt-0.5 font-medium leading-tight block truncate">
                        {item.desc}
                      </span>
                    </div>
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

          {/* CARD 03 — COST CONTROL (Dynamic Graph with Cursor Hover Interactivity) */}
          <div className="w-full rounded-3xl p-6 sm:p-8 bg-[#FAFCFB] border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="h-6 flex items-center justify-between mb-4 sm:mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider">
                  03 • Cost Control
                </span>
                <span className="text-xs font-bold text-emerald-600">
                  {hoveredPoint !== null ? activeData.savings : '-28% avg spend'}
                </span>
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

              {/* Two Prominent KPIs + Complete Dynamic Hover Graph */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs mb-6">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Monthly Fulfillment Audit</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 text-[11px]">
                    All invoices reconciled
                  </span>
                </div>

                {/* 2 Primary KPI Highlights (Responds dynamically to hovered month) */}
                <div className="grid grid-cols-2 gap-4 pt-4 pb-3 items-start">
                  {/* KPI 1: Cost */}
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">
                      {hoveredPoint !== null ? `Cost in ${activeData.month}` : 'Avg Cost / Parcel'}
                    </span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block mt-1">
                      {activeData.cost}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 block mt-1">
                      {hoveredPoint !== null ? activeData.savings : '↓ €0.84 saved vs list rate'}
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

                {/* Full-Width Dynamic Interactive Graph */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      6-Month Cost Trajectory
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      {activeData.month}: {activeData.cost} ({activeData.savings})
                    </span>
                  </div>

                  {/* Complete, Full-Width Area & Line Graph with Interactive Hover Points */}
                  <div className="w-full h-24 sm:h-28 relative mt-1">
                    <svg
                      className="w-full h-full overflow-visible"
                      viewBox="0 0 340 70"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="costAuditGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#48C293" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#48C293" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>
                      {/* Grid guide lines */}
                      <line x1="10" y1="16" x2="330" y2="16" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="10" y1="40" x2="330" y2="40" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Dynamic vertical indicator line for active hover */}
                      <line
                        x1={activeData.x}
                        y1="10"
                        x2={activeData.x}
                        y2="66"
                        stroke="#70CAB9"
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                        className="transition-all duration-150"
                      />

                      {/* Area Fill */}
                      <path
                        d="M 15 16 L 78 24 L 141 34 L 204 44 L 267 52 L 325 60 L 325 70 L 15 70 Z"
                        fill="url(#costAuditGrad)"
                      />
                      
                      {/* Trend Line */}
                      <path
                        d="M 15 16 L 78 24 L 141 34 L 204 44 L 267 52 L 325 60"
                        fill="none"
                        stroke="#48C293"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      
                      {/* Interactive Data dots */}
                      {trajectoryData.map((pt, i) => {
                        const isHovered = hoveredPoint === i;
                        const isCurrent = i === 5 && hoveredPoint === null;
                        const isActive = isHovered || isCurrent;
                        return (
                          <g
                            key={i}
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredPoint(i)}
                            onMouseLeave={() => setHoveredPoint(null)}
                          >
                            {/* Larger invisible hit zone for smooth mouse interaction */}
                            <circle cx={pt.x} cy={pt.y} r="14" fill="transparent" />
                            
                            {/* Outer glow ring on active */}
                            {isActive && (
                              <circle cx={pt.x} cy={pt.y} r="8" fill="#48C293" fillOpacity="0.25" />
                            )}
                            
                            {/* Data circle */}
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r={isActive ? 5 : 3}
                              fill={isActive ? '#17332A' : '#FFFFFF'}
                              stroke="#48C293"
                              strokeWidth={isActive ? 2.5 : 2}
                              className="transition-all duration-150"
                            />
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  {/* Month axis buttons: Clickable / Hoverable */}
                  <div className="flex items-center justify-between text-[11px] font-mono mt-2 px-1">
                    {trajectoryData.map((pt, i) => {
                      const isActive = hoveredPoint === i || (hoveredPoint === null && i === 5);
                      return (
                        <button
                          key={i}
                          type="button"
                          onMouseEnter={() => setHoveredPoint(i)}
                          onMouseLeave={() => setHoveredPoint(null)}
                          className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                            isActive
                              ? 'text-[#17332A] font-bold bg-[#E9F8F2] border border-[#48C293]/40 shadow-2xs'
                              : 'text-slate-400 hover:text-slate-700'
                          }`}
                        >
                          {pt.month}
                        </button>
                      );
                    })}
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

          {/* CARD 04 — GLOBAL SCALE (Unified Telemetry Container matching Card 03 Height) */}
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

              {/* Unified Global Network Telemetry Container: Perfectly matches Card 03's structure and height */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs mb-6">
                
                {/* Telemetry Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-slate-700">Global Network Telemetry</span>
                  </div>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 text-[11px]">
                    Mesh Active
                  </span>
                </div>

                {/* 3 Core Metric Highlights */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center pt-4 pb-3 items-start">
                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block">
                      200+
                    </span>
                    <span className="text-xs text-slate-400 block font-medium mt-1">
                      Countries
                    </span>
                  </div>
                  <div className="border-x border-slate-100">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block">
                      50+
                    </span>
                    <span className="text-xs text-slate-400 block font-medium mt-1">
                      Carriers
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#17332A] tracking-tight block">
                      99.9%
                    </span>
                    <span className="text-xs text-slate-400 block font-medium mt-1">
                      SLA Uptime
                    </span>
                  </div>
                </div>

                {/* Active Failover Corridors Telemetry */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Active Failover Corridors
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      &lt;150ms Auto-Failover
                    </span>
                  </div>

                  {[
                    { route: 'Amsterdam ➔ Berlin Hub', carrier: 'DHL Parcel Connect · 22h', badge: 'Optimal SLA' },
                    { route: 'Rotterdam ➔ Paris CDG Depot', carrier: 'DPD Classic Europe · 24h', badge: 'Route Cleared' },
                    { route: 'London ➔ New York JFK', carrier: 'UPS Worldwide · 36h', badge: 'Customs Synced' },
                  ].map((lane, i) => (
                    <div key={i} className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
                      <div>
                        <span className="font-bold text-slate-900 block text-[11px]">{lane.route}</span>
                        <span className="text-[10px] text-slate-500">{lane.carrier}</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#17332A] bg-[#E9F8F2] px-2 py-0.5 rounded border border-[#48C293]/30">
                        {lane.badge}
                      </span>
                    </div>
                  ))}
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
