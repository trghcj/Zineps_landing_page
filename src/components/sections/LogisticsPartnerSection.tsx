import React from 'react';
import { useLang } from '@/App';
import { CircleCheck, ArrowRight, Layers, DollarSign, Users, FileCheck } from 'lucide-react';

const LogisticsPartnerSection: React.FC = () => {
  const { lang, t } = useLang();

  return (
    <section id="partners" className="w-full py-16 md:py-24 relative bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#17332A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#48C293]/30">
            {lang === 'en' ? 'FOR LOGISTICS PARTNERS' : 'VOOR LOGISTIEKE PARTNERS'}
          </span>
          <h2 className="section-title mx-auto font-extrabold text-[#161D1A] tracking-tight mb-6">
            {lang === 'en'
              ? 'Your logistics network deserves better software.'
              : 'Jouw logistiek netwerk verdient modernere software.'}
          </h2>
          <p className="text-base sm:text-lg text-[#525151] leading-relaxed">
            {lang === 'en'
              ? 'Give your merchants modern shipping infrastructure without rebuilding it yourself. Publish rates, automate billing, and monetize existing capacity.'
              : 'Bied je klanten moderne verzendinfrastructuur zonder miljoenen te investeren in eigen softwareontwikkeling.'}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Explanations */}
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#424242] mb-5 leading-snug">
              {lang === 'en'
                ? 'Monetize contracted capacity across thousands of active shippers'
                : 'Zet jouw volumedeals om in een schaalbaar digitaal distributiekanaal'}
            </h3>

            <p className="text-base text-[#525151] leading-relaxed mb-6">
              {lang === 'en'
                ? 'Logistics service providers, 3PL warehouses, and freight forwarders use Zineps as their customer-facing operating system. You determine the tariffs and customer margins. Zineps handles the label printing, APIs, and real-time merchant support.'
                : 'Expediteurs, 3PLs en logistieke dienstverleners gebruiken Zineps als hun digitale portaal. Jij bepaalt de tarieven en klantmarges; Zineps regelt de software, koppelingen en tracking.'}
            </p>

            {/* Partner Equation Visual */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#E6FAF5] via-white to-[#E6FAF5] border border-[#70CAB9]/40 mb-8 flex items-center justify-around text-center text-xs font-bold text-[#155e57]">
              <div>
                <span className="block text-sm sm:text-base font-black text-gray-800">YOUR CONTRACTS</span>
                <span className="text-[10px] text-gray-500 font-medium">Negotiated Carrier Deals</span>
              </div>
              <span className="text-lg font-black text-[#70CAB9]">+</span>
              <div>
                <span className="block text-sm sm:text-base font-black text-gray-800">ZINEPS NETWORK</span>
                <span className="text-[10px] text-gray-500 font-medium">10,000+ Active Merchants</span>
              </div>
              <span className="text-lg font-black text-[#70CAB9]">=</span>
              <div>
                <span className="block text-sm sm:text-base font-black text-emerald-700">MORE SHIPPING VOLUME</span>
                <span className="text-[10px] text-emerald-600 font-medium">Higher Vehicle Utilization</span>
              </div>
            </div>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {[
                { en: 'Publish custom tariffs and tiered margin rules', nl: 'Publiceer maatwerktarieven en klantmarges' },
                { en: 'Manage customer groups, contracts & credits', nl: 'Beheer klantcontracten, tegoeden en limieten' },
                { en: 'Automated consolidated billing per shipment', nl: 'Geautomatiseerde facturatie per zending' },
                { en: 'Merchant self-onboarding portal in your brand', nl: 'Self-onboarding portaal in eigen huisstijl' },
                { en: 'Retain 100% of your commercial relationships', nl: 'Behoud 100% van je eigen klantrelaties' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm font-semibold text-[#424242]">
                  <CircleCheck className="w-5 h-5 text-[#60948A] shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? item.en : item.nl}</span>
                </li>
              ))}
            </ul>

            <div>
              <a
                href="https://app.zineps.com/Account/Register"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full font-bold text-sm text-white bg-[#17332A] hover:bg-[#122820] shadow-md hover:shadow-lg transition-all"
              >
                <span>{lang === 'en' ? 'Become a logistics partner' : 'Word logistiek partner'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Partner Panel Mockup */}
          <div className="flex flex-col items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <img
                src="/zineps-partnerpanel.svg"
                alt="Partner Panel OS"
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
            </div>

            <div className="mt-8 flex flex-col items-center w-full">
              <p className="text-xs sm:text-sm font-medium text-[#6B7280] mb-3 text-center">
                {lang === 'en' ? 'Built specifically for:' : 'Gebouwd voor:'}
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <span className="px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm text-xs sm:text-sm font-semibold text-[#424242]">
                  {lang === 'en' ? 'Logistics service providers' : 'Logistieke dienstverleners'}
                </span>
                <span className="px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm text-xs sm:text-sm font-semibold text-[#424242]">
                  {lang === 'en' ? 'Freight forwarders & brokers' : 'Expediteurs & brokers'}
                </span>
                <span className="px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm text-xs sm:text-sm font-semibold text-[#424242]">
                  {lang === 'en' ? '3PL fulfillment warehouses' : '3PL fulfilmentbedrijven'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsPartnerSection;
