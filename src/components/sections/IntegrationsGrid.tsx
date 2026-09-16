import React, { useState } from 'react';
import { useLang } from '@/App';
import { integrationCategories } from '@/data/features';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import FloatingPhysicsNetwork, { PhysicsItemData } from '@/components/ui/FloatingPhysicsNetwork';

const IntegrationsGrid: React.FC = () => {
  const { lang, t } = useLang();
  const [activeTab, setActiveTab] = useState(0);

  // Convert current category items into Physics items for floating box interaction
  const currentCategory = integrationCategories[activeTab] || integrationCategories[0]!;
  const physicsItems: PhysicsItemData[] = currentCategory.items.map((item, idx) => ({
    id: `${item.name}-${idx}`,
    name: item.name,
    src: item.logo,
    initialYOffset: idx % 2 === 0 ? -12 : 12,
  }));

  return (
    <section id="integrations" className="w-full py-16 md:py-24 relative bg-gradient-to-b from-white via-zinc-50/60 to-white overflow-hidden border-t border-gray-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#17332A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#48C293]/30">
            {lang === 'en' ? 'ECOSYSTEM COMPATIBILITY' : 'UNIVERSELE CONNECTIVITEIT'}
          </span>
          <h2 className="section-title mx-auto font-extrabold text-[#161D1A] tracking-tight mb-6">
            {lang === 'en' ? 'Connect once. Ship everywhere.' : 'Eén keer koppelen. Overal verzenden.'}
          </h2>
          <p className="text-base sm:text-lg text-[#52605B] leading-relaxed">
            {lang === 'en'
              ? 'Plug Zineps into your existing e-commerce stack, ERP, WMS, and favorite couriers without custom development.'
              : 'Verbind Zineps direct met je webshop, ERP, WMS en favoriete vervoerders zonder langdurige IT-trajecten.'}
          </p>
        </div>

        {/* 3 Categories Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {integrationCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === idx
                  ? 'bg-[#17332A] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {lang === 'en' ? cat.category : cat.categoryNL}
            </button>
          ))}
        </div>

        {/* Interactive Physics Boxes Representation for Current Category */}
        <div className="mb-14 p-4 rounded-3xl bg-white/70 border border-[#70CAB9]/25 shadow-sm">
          <FloatingPhysicsNetwork items={physicsItems} />
        </div>

        {/* Bottom Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#E6FAF5]/60 via-white to-[#E6FAF5]/60 border border-[#70CAB9]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-lg font-bold text-[#424242]">
              {lang === 'en' ? 'Need a custom ERP or WMS integration?' : 'Maatwerk ERP of WMS koppeling nodig?'}
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {lang === 'en'
                ? 'Our REST and GraphQL APIs offer full programmatic control over label generation, tracking webhooks, and rate quotes.'
                : 'Onze robuuste REST & GraphQL APIs geven je volledige controle over labels, webhooks en tarieven.'}
            </p>
          </div>
          <a
            href="#faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-white border border-gray-300 text-gray-800 hover:border-[#155e57] transition shrink-0"
          >
            <span>{lang === 'en' ? 'Explore Developer Docs' : 'Bekijk API Documentatie'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsGrid;
