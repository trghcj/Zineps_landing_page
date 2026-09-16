import React, { useState } from 'react';
import { useLang } from '@/App';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, Gauge } from 'lucide-react';

const ShippingAIBanner: React.FC = () => {
  const { lang, t } = useLang();
  const [activeFactor, setActiveFactor] = useState<'cost' | 'speed' | 'reliability'>('cost');

  return (
    <section id="ai" className="w-full py-16 md:py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-Scale Feature Banner in Deep Forest #17332A */}
        <div className="w-full rounded-3xl bg-[#17332A] text-white p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#70CAB9]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Headline & AI Vision (5 cols) */}
            <div className="lg:col-span-5 w-full flex flex-col">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md mb-6 w-max border border-white/20">
                <Sparkles className="w-4 h-4 text-[#70CAB9]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-white">
                  {lang === 'en' ? 'ARTIFICIAL INTELLIGENCE' : 'KUNSTMATIGE INTELLIGENTIE'}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                {lang === 'en' ? 'Your logistics copilot.' : 'Jouw logistieke co-piloot.'}
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                {lang === 'en'
                  ? 'Zineps continuously evaluates carriers, routes, rates, delivery performance, and shipment history to recommend the best option for every shipment.'
                  : 'Zineps analyseert voortdurend vervoerders, routes, actuele tarieven, afleverprestaties en historische vertragingen om per bestelling de ideale verzendkeuze aan te bevelen.'}
              </p>

              {/* 3 Decision Factors */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-white/70 block mb-2">
                  {lang === 'en' ? 'WHY THIS RECOMMENDATION?' : 'WAAROM DEZE AANBEVELING?'}
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setActiveFactor('cost')}
                    className={`p-3 rounded-xl border text-left transition ${
                      activeFactor === 'cost'
                        ? 'bg-white/25 border-[#70CAB9]'
                        : 'bg-white/10 border-white/10 hover:bg-white/15'
                    }`}
                  >
                    <span className="text-xs font-bold block mb-0.5">1. Cost Vector</span>
                    <span className="text-[11px] text-white/80">Save 12% vs standard</span>
                  </button>

                  <button
                    onClick={() => setActiveFactor('speed')}
                    className={`p-3 rounded-xl border text-left transition ${
                      activeFactor === 'speed'
                        ? 'bg-white/25 border-[#70CAB9]'
                        : 'bg-white/10 border-white/10 hover:bg-white/15'
                    }`}
                  >
                    <span className="text-xs font-bold block mb-0.5">2. Transit Speed</span>
                    <span className="text-[11px] text-white/80">Guaranteed 2–3 days</span>
                  </button>

                  <button
                    onClick={() => setActiveFactor('reliability')}
                    className={`p-3 rounded-xl border text-left transition ${
                      activeFactor === 'reliability'
                        ? 'bg-white/25 border-[#70CAB9]'
                        : 'bg-white/10 border-white/10 hover:bg-white/15'
                    }`}
                  >
                    <span className="text-xs font-bold block mb-0.5">3. Reliability</span>
                    <span className="text-[11px] text-white/80">98.7% SLA accuracy</span>
                  </button>
                </div>
              </div>

              <div>
                <a
                  href="#integrations"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-white text-[#2f4a42] hover:bg-[#E6FAF5] shadow-lg transition hover:scale-105"
                >
                  <span>{lang === 'en' ? 'Explore Shipping AI' : 'Ontdek Shipping AI'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Sophisticated AI Recommendation Interface Card (7 cols) */}
            <div className="lg:col-span-7 w-full bg-white text-slate-900 rounded-xl p-6 shadow-md">
              <div className="w-full">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#70CAB9] animate-pulse" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-gray-500">
                      LIVE ROUTING ENGINE
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800">
                    Confidence: 98.7%
                  </span>
                </div>

                {/* Primary Recommendation Card */}
                <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-[#E6FAF5] via-white to-[#E6FAF5]/40 border-2 border-[#70CAB9] shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img src="/hero-dhl.svg" alt="DHL" className="h-8 w-auto object-contain" />
                      <div>
                        <span className="text-xs font-bold text-gray-400 block uppercase">PRIMARY RECOMMENDATION</span>
                        <h4 className="text-lg font-extrabold text-[#424242]">Use DHL for this shipment</h4>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-[#155e57]">€3.82</span>
                      <span className="text-[11px] font-bold text-emerald-600 block">12% cheaper</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#70CAB9]/30 text-xs">
                    <div>
                      <span className="text-gray-400 block">Delivery window</span>
                      <span className="font-bold text-gray-800">2–3 days</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block">Predicted reliability</span>
                      <span className="font-bold text-emerald-700">98.7% on-time</span>
                    </div>
                  </div>

                  <div className="mt-3 p-2.5 rounded-lg bg-white/80 border border-[#70CAB9]/40 text-xs text-[#155e57] font-medium">
                    ✨ Reason: "Best balance of cost, speed, and carrier transit reliability for destination."
                  </div>
                </div>

                {/* Alternative Carrier Options */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                    EVALUATED ALTERNATIVES
                  </span>

                  <div className="p-3 rounded-xl border border-gray-200 flex items-center justify-between text-xs hover:bg-gray-50 transition">
                    <div className="flex items-center gap-2.5">
                      <img src="/hero-postnl.svg" alt="PostNL" className="h-5 w-auto object-contain" />
                      <span className="font-semibold text-gray-800">PostNL Standard</span>
                      <span className="text-gray-400">• 1–2 days</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-700">€4.15</span>
                      <span className="text-[11px] text-gray-400">+€0.33</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl border border-gray-200 flex items-center justify-between text-xs hover:bg-gray-50 transition">
                    <div className="flex items-center gap-2.5">
                      <img src="/hero-dpd.svg" alt="DPD" className="h-5 w-auto object-contain" />
                      <span className="font-semibold text-gray-800">DPD Classic</span>
                      <span className="text-gray-400">• 2 days</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-700">€4.40</span>
                      <span className="text-[11px] text-gray-400">+€0.58</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingAIBanner;
