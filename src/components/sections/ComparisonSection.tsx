import React from 'react';
import { useLang } from '@/App';
import { comparisonTable } from '@/data/features';
import { X, Check, Sparkles } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const { lang, t } = useLang();

  return (
    <section id="comparison" className="w-full py-16 md:py-24 relative bg-gradient-to-b from-white via-zinc-50/50 to-white overflow-hidden border-t border-gray-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#155e57] text-xs font-bold uppercase tracking-wider mb-4 border border-[#70CAB9]/30">
            {lang === 'en' ? 'VALUE COMPARISON' : 'WAAROM ZINEPS'}
          </span>
          <h2 className="section-title mx-auto font-extrabold text-[#424242] tracking-tight mb-6">
            {lang === 'en'
              ? "Shipping shouldn't require five different systems."
              : 'Verzending hoort geen 5 verschillende systemen te kosten.'}
          </h2>
          <p className="text-base sm:text-lg text-[#525151] leading-relaxed">
            {lang === 'en'
              ? 'Compare the friction of managing fragmented carrier portals versus deploying Zineps unified logistics operating system.'
              : 'Vergelijk de dagelijkse frictie van losse vervoerdersportalen met de geïntegreerde logistieke software van Zineps.'}
          </p>
        </div>

        {/* Clean Comparison Table */}
        <div className="w-full max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="w-full overflow-x-auto">
          {/* Table Header with Equal 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-200 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="py-4 px-6 bg-slate-50 text-slate-600 flex items-center">
              {lang === 'en' ? 'Core Logistics Workflow' : 'Logistiek Onderdeel'}
            </div>
            <div className="py-4 px-6 bg-slate-100/70 text-slate-700 border-t md:border-t-0 md:border-l border-slate-200 flex items-center">
              {lang === 'en' ? 'Traditional Shipping Setup' : 'Traditionele Verzendopzet'}
            </div>
            <div className="py-4 px-6 bg-gradient-to-r from-[#E6FAF5] to-[#d7f0ea]/70 text-[#155e57] border-t md:border-t-0 md:border-l border-[#70CAB9]/40 flex items-center justify-between">
              <span>{lang === 'en' ? 'With Zineps Platform' : 'Met Zineps Platform'}</span>
              <Sparkles className="w-4 h-4 text-[#155e57] shrink-0" />
            </div>
          </div>

          {/* Table Rows with Alternating Background */}
          <div className="divide-y divide-slate-100">
            {comparisonTable.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-3 text-sm lg:text-base items-center even:bg-slate-50/60 transition-colors border-b border-slate-100 last:border-b-0"
              >
                {/* Feature Name */}
                <div className="py-4 px-6 font-bold text-gray-800 flex items-center">
                  {lang === 'en' ? row.feature : row.featureNL}
                </div>

                {/* Traditional Method */}
                <div className="py-4 px-6 text-slate-600 flex items-center gap-3 border-t md:border-t-0 md:border-l border-slate-100 leading-relaxed text-xs sm:text-sm">
                  <span className="w-5 h-5 rounded-full bg-rose-50 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <X className="w-3.5 h-3.5 text-rose-500" />
                  </span>
                  <span className="leading-relaxed">{lang === 'en' ? row.traditional : row.traditionalNL}</span>
                </div>

                {/* Zineps Advantage */}
                <div className="py-4 px-6 font-semibold text-[#155e57] flex items-center gap-3 border-t md:border-t-0 md:border-l border-[#70CAB9]/30 bg-emerald-50/25 leading-relaxed text-xs sm:text-sm">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                  </span>
                  <span className="leading-relaxed">{lang === 'en' ? row.zineps : row.zinepsNL}</span>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
