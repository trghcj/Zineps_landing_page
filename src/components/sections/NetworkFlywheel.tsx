import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/App';
import { Users, Layers, TrendingUp, Zap, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

const NetworkFlywheel: React.FC = () => {
  const { lang, t } = useLang();

  const flywheelSteps = [
    {
      title: 'More Merchants Connect',
      titleNL: 'Meer Webshops Koppelen',
      desc: 'Shops connect their storefronts to streamline multi-carrier shipping.',
      descNL: 'Winkels koppelen hun kanalen voor gecentraliseerde fulfilment.',
      tag: 'Demand Side',
      icon: Users,
    },
    {
      title: 'Aggregated Shipment Volume',
      titleNL: 'Gebundeld Pakketvolume',
      desc: 'Hundreds of millions of parcels routed through one consolidated infrastructure.',
      descNL: 'Honderden miljoenen zendingen lopen via één gedeelde backbone.',
      tag: 'Volume Scale',
      icon: Layers,
    },
    {
      title: 'Logistics Partners Join',
      titleNL: 'Logistieke Partners Sluiten Aan',
      desc: 'Top carriers & 3PLs publish exclusive wholesale discounts to capture demand.',
      descNL: 'Expediteurs en vervoerders publiceren bulktarieven om capaciteit te vullen.',
      tag: 'Capacity Supply',
      icon: TrendingUp,
    },
    {
      title: 'Better Rates & Coverage',
      titleNL: 'Scherpere Tarieven & Dekking',
      desc: 'Merchants unlock tier-1 carrier contracts without individual negotiation.',
      descNL: 'Iedere webshop krijgt toegang tot tier-1 inkoopvoordelen.',
      tag: 'Network Advantage',
      icon: Zap,
    },
    {
      title: 'Smarter Matching Engine',
      titleNL: 'Intelligentere Routering',
      desc: 'Our AI trains on live delivery latency, customs bottlenecks, and cost vectors.',
      descNL: 'Miljoenen datapunten trainen onze routerings-AI elke milliseconde.',
      tag: 'AI Intelligence',
      icon: Sparkles,
    },
    {
      title: 'Lower Costs + Faster Delivery',
      titleNL: 'Lagere Kosten & Snellere Levering',
      desc: 'Parcels arrive on-time for less money, driving superior consumer retention.',
      descNL: 'Pakketten sneller en goedkoper bezorgd, wat leidt tot hogere klanttevredenheid.',
      tag: 'End Value',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="flywheel" className="w-full py-16 md:py-24 relative bg-gradient-to-b from-white via-zinc-50/40 to-white overflow-hidden border-t border-gray-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#155e57] text-xs font-bold uppercase tracking-wider mb-4 border border-[#70CAB9]/30">
            {lang === 'en' ? 'COMPOUNDING NETWORK EFFECTS' : 'ZELFVERSTERKEND NETWERKEFFECT'}
          </span>
          <h2 className="section-title mx-auto font-extrabold text-[#424242] tracking-tight mb-6">
            {lang === 'en'
              ? 'The more the network grows,\nthe smarter shipping becomes.'
              : 'Hoe groter het netwerk groeit,\nhoe slimmer verzending wordt.'}
          </h2>
          <p className="text-base sm:text-lg text-[#525151] leading-relaxed">
            {lang === 'en'
              ? 'Traditional shipping software is an isolated tool. Zineps is a collective logistics ecosystem where every added parcel makes the network cheaper and more reliable for everyone.'
              : 'Traditionele verzendsoftware is een geïsoleerde tool. Zineps is een levend ecosysteem: elk nieuw pakket maakt het netwerk voordeliger en betrouwbaarder voor alle deelnemers.'}
          </p>
        </motion.div>

        {/* Visual Flywheel Flow with animated connection nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10 relative">
          {flywheelSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative w-full h-auto min-h-[220px] rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Subtle glowing connector line indicator */}
                <div className="absolute -top-1.5 right-8 w-3 h-3 rounded-full bg-[#70CAB9] border-2 border-white shadow-sm" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-extrabold text-[#155e57] uppercase tracking-wider px-3 py-1 rounded-full bg-[#E6FAF5]">
                      {step.tag}
                    </span>
                    <span className="text-xs font-semibold text-[#144A33] bg-[#F0F7F4] px-2.5 py-1 rounded-md border border-[#70CAB9]/40 font-mono">
                      Step {idx + 1} of 6
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#E6FAF5] border border-[#70CAB9]/40 flex items-center justify-center text-[#155e57] mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#424242] mb-3 leading-snug">
                    {lang === 'en' ? step.title : step.titleNL}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#525151] leading-relaxed mb-6">
                    {lang === 'en' ? step.desc : step.descNL}
                  </p>
                </div>

                <div className="pt-5 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#155e57]">
                  <span>Step {idx + 1} of 6</span>
                  <span className="text-gray-400 group-hover:text-[#155e57] group-hover:translate-x-1 transition-all">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3 Flywheel Outcome Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
        >
          <div className="text-center p-4 border-b sm:border-b-0 sm:border-r border-gray-100">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#155e57] block">More carriers</span>
            <span className="text-xs text-gray-500 font-medium mt-1 block">
              Continuous lane density without custom code
            </span>
          </div>
          <div className="text-center p-4 border-b sm:border-b-0 sm:border-r border-gray-100">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#155e57] block">Better rates</span>
            <span className="text-xs text-gray-500 font-medium mt-1 block">
              Pooled volume creates enterprise buying leverage
            </span>
          </div>
          <div className="text-center p-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#155e57] block">Smarter decisions</span>
            <span className="text-xs text-gray-500 font-medium mt-1 block">
              AI recommendations continually self-optimize
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkFlywheel;
