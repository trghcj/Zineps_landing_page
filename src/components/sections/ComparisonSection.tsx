import React, { useState } from 'react';
import { useLang } from '@/App';
import { comparisonTable } from '@/data/features';
import { 
  X, 
  Check, 
  Sparkles, 
  Layers, 
  Zap, 
  TrendingDown, 
  Globe2, 
  RotateCcw, 
  FileText, 
  Users,
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';

interface WorkflowDetail {
  icon: any;
  category: 'speed' | 'cost' | 'experience';
  badge: string;
  badgeNL: string;
  impactScore: string;
}

const WORKFLOW_EXTRAS: Record<string, WorkflowDetail> = {
  'Carrier Onboarding': {
    icon: Zap,
    category: 'speed',
    badge: '1-Click Unified API',
    badgeNL: '1-Klik Universele API',
    impactScore: '99% Faster Setup',
  },
  'Rate Selection': {
    icon: TrendingDown,
    category: 'cost',
    badge: 'Algorithmic Arbitrage',
    badgeNL: 'Automatische Tariefkiezer',
    impactScore: '-28% Average Cost',
  },
  'Tracking Experience': {
    icon: Globe2,
    category: 'experience',
    badge: '100% White-Label',
    badgeNL: '100% Eigen Huisstijl',
    impactScore: '+42% Repeat Visits',
  },
  'Returns Processing': {
    icon: RotateCcw,
    category: 'speed',
    badge: 'Instant QR Drop-off',
    badgeNL: 'Directe QR Retourcode',
    impactScore: '3x Faster Returns',
  },
  'Data & Invoicing': {
    icon: FileText,
    category: 'cost',
    badge: 'Real-Time Audit Telemetry',
    badgeNL: 'Realtime Factuur Audit',
    impactScore: 'Zero Hidden Fees',
  },
  'Network Scale': {
    icon: Users,
    category: 'experience',
    badge: '10,000+ Pooled Volume',
    badgeNL: '10.000+ Collectief Volume',
    impactScore: 'Tier-1 Enterprise Rates',
  },
};

const ComparisonSection: React.FC = () => {
  const { lang, t } = useLang();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'speed' | 'cost' | 'experience'>('all');
  const [activeRow, setActiveRow] = useState<number | null>(0);

  const filterTabs = [
    { id: 'all', label: 'All Workflows', labelNL: 'Alle Onderdelen', count: 6 },
    { id: 'speed', label: 'Speed & Automation', labelNL: 'Snelheid & Automatisering', count: 2 },
    { id: 'cost', label: 'Cost & Margins', labelNL: 'Kosten & Marges', count: 2 },
    { id: 'experience', label: 'Customer Experience', labelNL: 'Klantervaring', count: 2 },
  ];

  const filteredRows = comparisonTable.filter((row) => {
    if (selectedFilter === 'all') return true;
    const extra = WORKFLOW_EXTRAS[row.feature];
    return extra ? extra.category === selectedFilter : true;
  });

  return (
    <section id="comparison" className="w-full py-16 md:py-24 relative bg-gradient-to-b from-white via-zinc-50/50 to-white overflow-hidden border-t border-gray-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#17332A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#48C293]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#48C293]" />
            <span>{lang === 'en' ? 'VALUE COMPARISON' : 'WAAROM ZINEPS'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#161D1A] tracking-tight leading-tight mb-4">
            {lang === 'en'
              ? "Shipping shouldn't require five different systems."
              : 'Verzending hoort geen 5 verschillende systemen te kosten.'}
          </h2>

          <p className="text-base sm:text-lg text-[#52605B] leading-relaxed max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Compare the friction of managing fragmented carrier portals versus deploying Zineps unified logistics operating system.'
              : 'Vergelijk de dagelijkse frictie van losse vervoerdersportalen met de geïntegreerde logistieke software van Zineps.'}
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {filterTabs.map((tab) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id as any)}
                  style={
                    isSelected
                      ? { backgroundColor: '#17332A', color: '#ffffff', borderColor: '#17332A' }
                      : { backgroundColor: '#ffffff', color: '#475569', borderColor: '#e2e8f0' }
                  }
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center gap-2 ${
                    isSelected ? 'shadow-md scale-105' : 'hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <span>{lang === 'en' ? tab.label : tab.labelNL}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isSelected ? 'bg-white/20 text-[#70CAB9]' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modern Interactive Comparison Container */}
        <div className="w-full max-w-5xl mx-auto space-y-3">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-500">
            <div className="col-span-4">
              {lang === 'en' ? 'Core Logistics Workflow' : 'Logistiek Onderdeel'}
            </div>
            <div className="col-span-4 text-slate-500">
              {lang === 'en' ? 'Traditional Multi-Portal Stack' : 'Traditionele Losse Portalen'}
            </div>
            <div className="col-span-4 text-[#17332A] flex items-center gap-1.5 font-black">
              <span className="w-2 h-2 rounded-full bg-[#48C293]" />
              <span>{lang === 'en' ? 'Zineps Unified OS' : 'Zineps Geïntegreerd OS'}</span>
            </div>
          </div>

          {/* Interactive Row Cards */}
          {filteredRows.map((row, idx) => {
            const extra = WORKFLOW_EXTRAS[row.feature] || {
              icon: Cpu,
              category: 'speed',
              badge: 'Modern Logistics',
              badgeNL: 'Moderne Logistiek',
              impactScore: 'High Efficiency',
            };
            const IconComponent = extra.icon;
            const isHovered = activeRow === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveRow(idx)}
                className={`w-full rounded-2xl border transition-all duration-200 p-4 sm:p-5 ${
                  isHovered
                    ? 'bg-white border-[#48C293] shadow-lg scale-[1.008]'
                    : 'bg-[#FAFCFB] border-slate-200/90 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Column 1: Feature Title & Tag (4 cols) */}
                  <div className="md:col-span-4 flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isHovered
                          ? 'bg-[#17332A] text-[#70CAB9] shadow-sm'
                          : 'bg-white border border-slate-200 text-[#17332A]'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#161D1A] leading-tight">
                        {lang === 'en' ? row.feature : row.featureNL}
                      </h4>
                      <span className="text-[11px] font-bold text-[#48C293] block mt-0.5">
                        {extra.impactScore}
                      </span>
                    </div>
                  </div>

                  {/* Column 2: Traditional Friction (4 cols) */}
                  <div className="md:col-span-4 p-3 sm:p-3.5 rounded-xl bg-rose-50/60 border border-rose-100 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                    <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-rose-600" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 block mb-0.5 md:hidden">
                        {lang === 'en' ? 'Traditional' : 'Traditioneel'}
                      </span>
                      <span>{lang === 'en' ? row.traditional : row.traditionalNL}</span>
                    </div>
                  </div>

                  {/* Column 3: Zineps Modern Advantage (4 cols) */}
                  <div className="md:col-span-4 p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-[#E9F8F2] to-[#F3FBF7] border border-[#48C293]/40 flex items-start justify-between gap-2.5 text-xs sm:text-sm text-[#17332A] leading-snug shadow-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#48C293] flex items-center justify-center shrink-0 mt-0.5 text-white">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#17332A] block mb-0.5 md:hidden">
                          {lang === 'en' ? 'With Zineps' : 'Met Zineps'}
                        </span>
                        <span className="font-semibold">{lang === 'en' ? row.zineps : row.zinepsNL}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive ROI Benchmark Callout */}
        <div className="w-full max-w-5xl mx-auto mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#17332A] to-[#0F231D] text-white shadow-xl border border-[#70CAB9]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#70CAB9] border border-white/15 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {lang === 'en' ? 'Average Merchant ROI with Zineps' : 'Gemiddelde ROI van Webshops met Zineps'}
              </h4>
              <p className="text-xs sm:text-sm text-white/75 mt-1 max-w-xl">
                {lang === 'en'
                  ? 'Eliminate 14 hours of manual fulfillment per week and cut outbound postage by 28% from day one.'
                  : 'Bespaar wekelijks 14 uur aan handmatig pakbonnenbeheer en verlaag je verzendkosten direct met gemiddeld 28%.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://app.zineps.com/Account/Register"
              style={{
                background: 'linear-gradient(135deg, #70CAB9 0%, #48C293 100%)',
                color: '#0F231D',
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              <span>{lang === 'en' ? 'Get Started Free' : 'Start Gratis'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
