import React, { useState } from 'react';
import { useLang } from '@/App';
import { faqItems } from '@/data/features';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const { lang, t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-16 md:py-24 relative bg-white overflow-hidden border-t border-gray-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#155e57] text-xs font-bold uppercase tracking-wider mb-4 border border-[#70CAB9]/30">
              {lang === 'en' ? 'COMMON QUESTIONS' : 'VEELGESTELDE VRAGEN'}
            </span>
            <h2 className="section-title mx-auto font-extrabold text-[#424242] tracking-tight mb-6">
              {lang === 'en'
                ? 'Everything you need to know about Zineps.'
                : 'Alles wat je moet weten over Zineps.'}
            </h2>
            <p className="text-base text-[#525151] leading-relaxed">
              {lang === 'en'
                ? 'Clear answers on our business model, integrations, carrier contracts, and network architecture.'
                : 'Duidelijke antwoorden over ons verdienmodel, koppelingen, contracten en netwerk.'}
            </p>
          </div>

          {/* Accordion list */}
          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs transition-all"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-gray-800 hover:text-[#155e57] transition-colors"
                  >
                    <span>{lang === 'en' ? item.question : item.questionNL}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#155e57]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-sm sm:text-base text-[#525151] leading-relaxed border-t border-slate-100 pt-3">
                      {lang === 'en' ? item.answer : item.answerNL}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
