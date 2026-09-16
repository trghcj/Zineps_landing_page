import React from 'react';
import { useLang } from '@/App';
import { ShieldCheck, Activity, CheckCircle2, Clock } from 'lucide-react';
import UptimeChart from './UptimeChart';

const ReliabilitySection: React.FC = () => {
  const { lang, t } = useLang();

  const reliabilityStats = [
    { value: '99.9%', label: 'Platform uptime', labelNL: 'Platform uptime', desc: 'Fault-tolerant multi-cloud cluster', icon: Activity },
    { value: '98%+', label: 'Successful deliveries', labelNL: 'Succesvolle afleveringen', desc: 'Predictive routing minimizes exceptions', icon: CheckCircle2 },
    { value: '24/7', label: 'Shipment monitoring', labelNL: 'Pakketmonitoring', desc: 'Proactive carrier delay notifications', icon: Clock },
    { value: '1,000+', label: 'Shipping methods', labelNL: 'Verzendmethodes', desc: 'Redundant domestic & global lanes', icon: ShieldCheck },
  ];

  return (
    <section id="reliability" className="w-full py-16 md:py-24 relative bg-white overflow-hidden border-t border-gray-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#155e57] text-xs font-bold uppercase tracking-wider mb-4 border border-[#70CAB9]/30">
            {lang === 'en' ? 'ENTERPRISE-GRADE INFRASTRUCTURE' : 'ENTERPRISE BETROUWBAARHEID'}
          </span>
          <h2 className="section-title mx-auto font-extrabold text-[#424242] tracking-tight mb-6">
            {lang === 'en'
              ? 'Logistics infrastructure you can depend on.'
              : 'Logistieke infrastructuur waarop je kunt bouwen.'}
          </h2>
          <p className="text-base sm:text-lg text-[#525151] leading-relaxed">
            {lang === 'en'
              ? 'Engineered to handle high-velocity order spikes during peak seasonal holidays with sub-second API latency and guaranteed reliability.'
              : 'Gebouwd om piekvolumes tijdens Black Friday en feestdagen vlekkeloos te verwerken met sub-seconde API response.'}
          </p>
        </div>

        {/* 4 Reliability Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full">
          {reliabilityStats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="w-full h-auto min-h-[200px] p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E9F8F2] text-[#17332A] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#17332A] block mb-2">
                    {item.value}
                  </span>
                  <span className="text-base font-bold text-slate-800 block mb-1">
                    {lang === 'en' ? item.label : item.labelNL}
                  </span>
                  <span className="text-xs text-slate-500 leading-relaxed block">{item.desc}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Volume & Reliability Chart */}
        <div className="w-full max-w-5xl mx-auto rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-lg overflow-hidden">
          <UptimeChart />
        </div>
      </div>
    </section>
  );
};

export default ReliabilitySection;
