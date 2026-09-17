import React, { useState, useMemo } from 'react';
import { useLang } from '@/App';
import { faqItems } from '@/data/features';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return faqItems;
    const q = searchQuery.toLowerCase();
    return faqItems.filter((item) => {
      const question = (lang === 'en' ? item.question : item.questionNL).toLowerCase();
      const answer = (lang === 'en' ? item.answer : item.answerNL).toLowerCase();
      return question.includes(q) || answer.includes(q);
    });
  }, [searchQuery, lang]);

  return (
    <section id="faq" className="w-full py-20 sm:py-24 lg:py-28 relative bg-white overflow-hidden border-t border-slate-100 scroll-mt-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Comfortable top spacing, perfectly visible heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          
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
          <p className="text-base sm:text-lg text-[#52605B] leading-relaxed max-w-2xl mx-auto mb-8">
            {lang === 'en'
              ? 'Clear answers on our business model, integrations, carrier contracts, and network architecture.'
              : 'Duidelijke antwoorden over ons verdienmodel, koppelingen, contracten en netwerk.'}
          </p>

          {/* Search Filter Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'en' ? 'Search questions or topics...' : 'Zoek vragen of onderwerpen...'}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#70CAB9] focus:bg-white transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-medium px-1.5 py-0.5"
              >
                {lang === 'en' ? 'Clear' : 'Wissen'}
              </button>
            )}
          </div>
        </div>

        {/* Editorial FAQ Accordion Container (820–860px) */}
        <div className="w-full max-w-[840px] mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700 mb-1">
                {lang === 'en' ? 'No matching questions found' : 'Geen overeenkomende vragen gevonden'}
              </p>
              <p className="text-xs text-slate-500">
                {lang === 'en'
                  ? 'Try searching for terms like "rates", "Shopify", "contracts", or "API"'
                  : 'Probeer te zoeken op termen als "tarieven", "Shopify", "contracten" of "API"'}
              </p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-3.5">
              {filteredItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                      isOpen
                        ? 'border-[#70CAB9]/60 shadow-[0_4px_16px_rgba(112,202,185,0.12)] ring-1 ring-[#70CAB9]/20'
                        : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                    }`}
                  >
                    {/* Clickable Question Trigger */}
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17332A] rounded-2xl min-h-[58px]"
                    >
                      <span
                        className={`text-base sm:text-[17px] font-bold leading-snug flex-1 min-w-0 pr-2 transition-colors duration-150 ${
                          isOpen ? 'text-[#17332A]' : 'text-[#161D1A]'
                        }`}
                      >
                        {lang === 'en' ? item.question : item.questionNL}
                      </span>

                      {/* Centered Chevron with soft mint hover */}
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                          isOpen ? 'bg-[#E9F8F2]' : 'bg-slate-50'
                        }`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 shrink-0 transition-transform duration-200 ease-out ${
                            isOpen ? 'rotate-180 text-[#17332A]' : 'rotate-0 text-slate-400'
                          }`}
                        />
                      </div>
                    </button>

                    {/* Open Answer State */}
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3.5 border-t border-slate-100/90 transition-all duration-200 bg-slate-50/20">
                        <p className="text-sm sm:text-[15px] text-[#52605B] leading-[1.65] max-w-[760px]">
                          {lang === 'en' ? item.answer : item.answerNL}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Still Have Questions Support Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F8FCFA] border border-[#70CAB9]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#70CAB9]/30 flex items-center justify-center shadow-xs shrink-0">
                <MessageSquare className="w-5 h-5 text-[#0d9488]" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {lang === 'en' ? 'Still have questions about Zineps?' : 'Heb je nog andere vragen over Zineps?'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {lang === 'en'
                    ? 'Our logistics operations team is ready to assist you.'
                    : 'Onze logistieke specialisten staan voor je klaar.'}
                </p>
              </div>
            </div>

            <a
              href="mailto:support@zineps.com"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#70CAB9] text-xs sm:text-sm font-bold text-slate-800 hover:text-[#17332A] transition-all shadow-xs hover:shadow-sm shrink-0"
            >
              {lang === 'en' ? 'Contact support' : 'Neem contact op'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
