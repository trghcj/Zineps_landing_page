import React, { useState } from 'react';
import { useLang } from '@/App';
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
  ArrowRight
} from 'lucide-react';

interface ComparisonRow {
  id: string;
  category: 'speed' | 'cost' | 'experience';
  workflow: string;
  workflowNL: string;
  impactScore: string;
  traditional: string;
  traditionalNL: string;
  zineps: string;
  zinepsNL: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    id: 'onboarding',
    category: 'speed',
    workflow: 'Carrier Onboarding',
    workflowNL: 'Vervoerderkoppeling',
    impactScore: '99% Faster Setup',
    traditional: '4–6 weeks of custom developer integration and individual contract approval per carrier.',
    traditionalNL: 'Weken developerwerk en handmatige contractonderhandelingen per individuele vervoerder.',
    zineps: 'Single unified API connection unlocking 50+ tier-1 carrier networks immediately.',
    zinepsNL: 'Eén universele koppeling ontsluit direct 50+ gecertificeerde vervoerders zonder developerwerk.',
  },
  {
    id: 'rate-selection',
    category: 'cost',
    workflow: 'Rate Selection & Optimization',
    workflowNL: 'Tarieven & Routering',
    impactScore: '-28% Average Spend',
    traditional: 'Staff manually checking multiple carrier portals or locked into a single fixed carrier contract.',
    traditionalNL: 'Handmatig switchen tussen losse portals of vastzitten aan een duur mono-carrier contract.',
    zineps: 'Automated least-cost carrier routing combining your own contracts and pooled partner rates.',
    zinepsNL: 'Automatische lane-matching tussen je eigen volumedeals en scherpe Zineps partnerkortingen.',
  },
  {
    id: 'tracking',
    category: 'experience',
    workflow: 'Branded Tracking Experience',
    workflowNL: 'Tracking & Klantbeleving',
    impactScore: '+42% Repeat Visits',
    traditional: 'Redirects buyers to third-party carrier websites with generic pages and carrier ads.',
    traditionalNL: 'Consument wordt doorgestuurd naar externe vervoerderpagina vol reclame en zonder jouw merk.',
    zineps: '100% white-label tracking hosted on your domain with automated notifications and upsell banners.',
    zinepsNL: '100% eigen merkbeleving op jouw domein met proactieve statusupdates en herhaalaankopen.',
  },
  {
    id: 'returns',
    category: 'speed',
    workflow: 'Returns & Reverse Logistics',
    workflowNL: 'Retourverwerking',
    impactScore: '3x Faster Processing',
    traditional: 'Manual customer service email threads, manual PDF label generation, and untracked packages.',
    traditionalNL: 'Klantenservice mailt handmatig PDF labels; retouren blijven onoverzichtelijk en traag.',
    zineps: 'Self-service branded return portal with instant paperless QR drop-off codes and inventory sync.',
    zinepsNL: 'Zelfservice retourportaal voor klanten met papierloze QR-code en realtime voorraadkoppeling.',
  },
  {
    id: 'billing',
    category: 'cost',
    workflow: 'Invoicing & Surcharge Auditing',
    workflowNL: 'Facturatie & Toeslagen',
    impactScore: 'Zero Hidden Fees',
    traditional: 'Dozens of disjointed PDF invoices with unnoticed fuel, peak, and remote-area surcharges.',
    traditionalNL: 'Ondoorzichtige papieren facturen vol onopgemerkte diesel-, piek- en eilandtoeslagen.',
    zineps: 'One consolidated monthly invoice with automated line-item auditing against agreed SLAs.',
    zinepsNL: 'Eén overzichtelijke verzamelfactuur met automatische controle op SLA-fouten en toeslagen.',
  },
  {
    id: 'network-scale',
    category: 'experience',
    workflow: 'Network Scale & Buying Power',
    workflowNL: 'Inkoopkracht & Volume',
    impactScore: 'Tier-1 Rates on Day 1',
    traditional: 'Solo merchant volume with zero negotiating leverage against major parcel carriers.',
    traditionalNL: 'Geen onderhandelingskracht als individuele webshop bij nationale en internationale vervoerders.',
    zineps: 'Collective buying power of 10,000+ pooled merchants unlocked instantly for your business.',
    zinepsNL: 'Direct profiteren van de gebundelde inkoopkracht van 10.000+ aangesloten bedrijven.',
  },
];

const ComparisonSection: React.FC = () => {
  const { lang } = useLang();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'speed' | 'cost' | 'experience'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Workflows', labelNL: 'Alle Onderdelen', count: 6 },
    { id: 'speed', label: 'Speed & Automation', labelNL: 'Snelheid & Automatisering', count: 2 },
    { id: 'cost', label: 'Cost & Margins', labelNL: 'Kosten & Marges', count: 2 },
    { id: 'experience', label: 'Customer Experience', labelNL: 'Klantervaring', count: 2 },
  ];

  const filteredRows = COMPARISON_DATA.filter((row) => {
    if (selectedFilter === 'all') return true;
    return row.category === selectedFilter;
  });

  return (
    <section id="comparison" className="w-full py-16 md:py-24 relative bg-gradient-to-b from-white via-zinc-50/60 to-white overflow-hidden border-t border-slate-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#17332A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#48C293]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#48C293]" />
            <span>{lang === 'en' ? 'VALUE COMPARISON' : 'WAAROM ZINEPS'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-4">
            {lang === 'en'
              ? "Shipping shouldn't require five different systems."
              : 'Verzending hoort geen 5 verschillende systemen te kosten.'}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Compare the operational friction of fragmented carrier portals against deploying Zineps unified logistics operating system.'
              : 'Vergelijk de dagelijkse frictie van losse vervoerdersportalen met de geïntegreerde logistieke software van Zineps.'}
          </p>

          {/* Category Filter Tabs */}
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

        {/* Structured B2B Comparison Matrix - Replaces bulky empty horizontal pills */}
        <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          {/* Table Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-[#FAFCFB] border-b border-slate-200/80 text-xs font-extrabold uppercase tracking-wider text-slate-600">
            <div className="col-span-4">
              {lang === 'en' ? 'Core Logistics Workflow' : 'Logistiek Onderdeel'}
            </div>
            <div className="col-span-4 text-slate-500">
              {lang === 'en' ? 'Traditional Multi-Portal Stack' : 'Traditionele Losse Portalen'}
            </div>
            <div className="col-span-4 text-[#17332A] flex items-center gap-2 font-black">
              <span className="w-2 h-2 rounded-full bg-[#48C293]" />
              <span>{lang === 'en' ? 'Zineps Unified Platform' : 'Zineps Geïntegreerd Platform'}</span>
            </div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-slate-100">
            {filteredRows.map((row) => (
              <div
                key={row.id}
                className="p-5 sm:p-6 hover:bg-slate-50/50 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start">
                  {/* Column 1: Workflow Name & Benefit Tag */}
                  <div className="md:col-span-4">
                    <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {lang === 'en' ? row.workflow : row.workflowNL}
                    </h4>
                    <span className="inline-block text-[11px] font-bold text-[#0d9488] bg-[#E6FAF5] px-2.5 py-0.5 rounded-full border border-[#70CAB9]/40 mt-2">
                      {row.impactScore}
                    </span>
                  </div>

                  {/* Column 2: Traditional Stack (Friction) */}
                  <div className="md:col-span-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-rose-500 md:hidden mb-1 flex items-center gap-1.5">
                      <X className="w-3.5 h-3.5 text-rose-500" />
                      <span>{lang === 'en' ? 'Traditional Stack' : 'Traditioneel'}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <span className="hidden md:inline-flex w-4 h-4 rounded-full bg-rose-50 text-rose-600 items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3" />
                      </span>
                      <span>{lang === 'en' ? row.traditional : row.traditionalNL}</span>
                    </div>
                  </div>

                  {/* Column 3: With Zineps (Solution) */}
                  <div className="md:col-span-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#0d9488] md:hidden mb-1 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#0d9488]" />
                      <span>{lang === 'en' ? 'With Zineps' : 'Met Zineps'}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17332A] font-medium leading-relaxed">
                      <span className="hidden md:inline-flex w-4 h-4 rounded-full bg-[#E6FAF5] text-[#0d9488] items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span>{lang === 'en' ? row.zineps : row.zinepsNL}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
