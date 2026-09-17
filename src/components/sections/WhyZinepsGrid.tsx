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
  Package,
  Check,
  Store
} from 'lucide-react';

const WhyZinepsGrid: React.FC = () => {
  const { lang, t } = useLang();

  return (
    <section id="why-zineps" className="w-full py-16 md:py-24 relative bg-white overflow-hidden scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

          <p className="text-base sm:text-lg text-[#52605B] leading-relaxed">
            {lang === 'en'
              ? 'Consolidate multi-carrier fulfillment, rate intelligence, branded tracking, and returns into one clean platform.'
              : 'Van multi-carrier verzending tot retouren, live analytics en partnerbeheer — samengebracht in één betrouwbare infrastructuur.'}
          </p>
        </div>

        {/* 4 Clean Human-Made Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">
          {/* Card 1: One platform for everything */}
          <div className="w-full rounded-3xl p-6 sm:p-8 bg-[#FAFCFB] border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider">
                  01 • Central Hub
                </span>
                <span className="text-xs font-medium text-slate-400">All-in-one</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#161D1A] mb-3">
                {lang === 'en' ? 'One platform for everything.' : 'Eén platform voor al je logistiek.'}
              </h3>

              <p className="text-sm sm:text-base text-[#52605B] leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Manage all your orders, carrier accounts, tracking notifications, and reverse logistics in one place. No more switching between separate carrier portals.'
                  : 'Beheer al je bestellingen, vervoerderscontracten, tracking-e-mails en retouren in één overzichtelijke omgeving. Nooit meer inloggen bij losse vervoerders.'}
              </p>

              {/* Clean Human Workflow Timeline */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs mb-6 space-y-3">
                <div className="flex items-center gap-3 text-xs">
                  <div className="w-6 h-6 rounded-full bg-[#E9F8F2] text-[#17332A] flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="font-semibold text-slate-800">Order imported from webshop</span>
                    <span className="text-[11px] font-mono text-slate-400">Shopify #4829</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <div className="w-6 h-6 rounded-full bg-[#E9F8F2] text-[#17332A] flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="font-semibold text-slate-800">Cheapest carrier matched</span>
                    <span className="text-[11px] font-bold text-[#17332A] bg-[#E9F8F2] px-2 py-0.5 rounded">DHL Parcel · €2.84</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <div className="w-6 h-6 rounded-full bg-[#E9F8F2] text-[#17332A] flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="font-semibold text-slate-800">Label printed & tracking dispatched</span>
                    <span className="text-[11px] text-emerald-600 font-semibold">100% Automated</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#17332A]">
              <span>Zero fragmented portal logins</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#17332A] transition-colors" />
            </div>
          </div>

          {/* Card 2: Fast integrations with your tools */}
          <div className="w-full rounded-3xl p-6 sm:p-8 bg-[#FAFCFB] border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider">
                  02 • Integrations
                </span>
                <span className="text-xs font-medium text-slate-400">&lt;5 min setup</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#161D1A] mb-3">
                {lang === 'en' ? 'Fast integrations with your tools.' : 'Koppel direct met jouw webshop.'}
              </h3>

              <p className="text-sm sm:text-base text-[#52605B] leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Connect your online stores, marketplaces, and ERP systems seamlessly. Orders and tracking numbers sync automatically in real time.'
                  : 'Koppel je shops en marktplaatsen naadloos. Orders worden automatisch realtime gesynchroniseerd zonder handmatig overtypen.'}
              </p>

              {/* Clean Human Neutral Brand Badges (No Neon Rainbow) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
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
                    className="p-3 rounded-xl bg-white border border-slate-200 flex flex-col justify-center shadow-2xs hover:border-slate-300 transition"
                  >
                    <span className="font-bold text-xs text-slate-900">{item.name}</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#17332A]">
              <span>50+ Pre-built connectors</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#17332A] transition-colors" />
            </div>
          </div>

          {/* Card 3: Real-time analytics & billing */}
          <div className="w-full rounded-3xl p-6 sm:p-8 bg-[#FAFCFB] border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider">
                  03 • Cost Control
                </span>
                <span className="text-xs font-bold text-emerald-600">-28% avg spend</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#161D1A] mb-3">
                {lang === 'en' ? 'Real-time cost transparency.' : 'Volledig inzicht in verzendkosten.'}
              </h3>

              <p className="text-sm sm:text-base text-[#52605B] leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Audit fuel surcharges, peak surcharges, and carrier performance per parcel with consolidated monthly statements.'
                  : 'Volledige transparantie over brandstoftoeslagen, piekkosten en vervoerdersprestaties per individueel pakket.'}
              </p>

              {/* Clean Human Statement Metrics */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs mb-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500">
                  <span>Monthly Fulfillment Audit</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">All invoices reconciled</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-3">
                  <div>
                    <span className="text-xs text-slate-400 block">Avg Cost / Parcel</span>
                    <span className="text-xl font-bold text-slate-900">€2.41</span>
                    <span className="text-[11px] text-emerald-600 block mt-0.5">↓ €0.84 saved vs list rate</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">On-Time Performance</span>
                    <span className="text-xl font-bold text-slate-900">99.4%</span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">Across all connected carriers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#17332A]">
              <span>Consolidated monthly billing</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#17332A] transition-colors" />
            </div>
          </div>

          {/* Card 4: Global scale & redundancy */}
          <div className="w-full rounded-3xl p-6 sm:p-8 bg-[#FAFCFB] border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E9F8F2] text-[#17332A] uppercase tracking-wider">
                  04 • Global Scale
                </span>
                <span className="text-xs font-bold text-slate-500">99.9% Uptime</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#161D1A] mb-3">
                {lang === 'en' ? 'Global coverage you can depend on.' : 'Wereldwijde dekking waarop je bouwt.'}
              </h3>

              <p className="text-sm sm:text-base text-[#52605B] leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Ship locally or internationally across 200+ countries with automatic carrier failover and unified customs paperwork.'
                  : 'Verzend lokaal of cross-border naar 200+ landen met meer dan 1.000 verzendopties en automatische douanedocumenten.'}
              </p>

              {/* Clean Key Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center">
                  <span className="text-xl font-bold text-slate-900 block">200+</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">Countries</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center">
                  <span className="text-xl font-bold text-slate-900 block">50+</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">Carriers</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center">
                  <span className="text-xl font-bold text-[#17332A] block">99.9%</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">SLA Uptime</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#17332A]">
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
