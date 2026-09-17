import React, { useState } from 'react';
import { useLang } from '@/App';
import { faqItems } from '@/data/features';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-20 sm:py-24 lg:py-28 relative bg-white overflow-hidden border-t border-slate-100 scroll-mt-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Comfortable top spacing, perfectly visible heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          
          {/* Subtle FAQ Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9F8F2] border border-[#48C293]/30 shadow-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#48C293]" />
            <span className="text-xs font-bold text-[#17332A] uppercase tracking-wider">
              {lang === 'en' ? 'FREQUENTLY ASKED QUESTIONS' : 'VEELGESTELDE VRAGEN'}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#161D1A] tracking-tight leading-[1.14] mb-5 sm:mb-6">
            {lang === 'en'
              ? 'Everything you need to know about Zineps.'
              : 'Alles wat je moet weten over Zineps.'}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#52605B] leading-relaxed max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Clear answers on our business model, integrations, carrier contracts, and network architecture.'
              : 'Duidelijke antwoorden over ons verdienmodel, koppelingen, contracten en netwerk.'}
          </p>
        </div>

        {/* Narrower, Editorial FAQ Accordion Container (820–860px) */}
        <div className="w-full max-w-[840px] mx-auto">
          {/* Accordion List with 12–14px vertical item spacing */}
          <div className="space-y-3 sm:space-y-3.5">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                    isOpen
                      ? 'border-slate-300 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Entire Question Row is Clickable Trigger */}
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17332A] rounded-2xl min-h-[58px]"
                  >
                    {/* Long questions wrap naturally without overlapping chevron */}
                    <span
                      className={`text-base sm:text-[17px] font-bold leading-snug flex-1 min-w-0 pr-2 transition-colors duration-150 ${
                        isOpen ? 'text-[#17332A]' : 'text-[#161D1A]'
                      }`}
                    >
                      {lang === 'en' ? item.question : item.questionNL}
                    </span>

                    {/* Centered Chevron with 180-200ms Rotation */}
                    <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 bg-slate-50">
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ease-out ${
                          isOpen ? 'rotate-180 text-[#17332A]' : 'rotate-0 text-slate-400'
                        }`}
                      />
                    </div>
                  </button>

                  {/* Intentional Open Answer State */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3.5 border-t border-slate-100 transition-all duration-200">
                      <p className="text-sm sm:text-[15px] text-[#52605B] leading-[1.62] max-w-[760px]">
                        {lang === 'en' ? item.answer : item.answerNL}
                      </p>
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
