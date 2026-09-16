import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useLang } from '@/App';

const GetStartedCTA: React.FC = () => {
  const { lang, t } = useLang();

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Full-width callout card in Deep Forest #17332A */}
        <div
          className="rounded-3xl p-10 sm:p-14 lg:p-20 text-center relative overflow-hidden shadow-2xl text-white bg-[#17332A]"
        >
          {/* Subtle Radial Emerald Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#48C293]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-[#55C99F]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#48C293] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#48C293]" />
              {lang === 'en' ? 'JOIN THE LOGISTICS NETWORK' : 'SLUIT JE AAN BIJ HET NETWERK'}
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
              {lang === 'en'
                ? 'Ready to make shipping a competitive advantage?'
                : 'Klaar om van verzending jouw concurrentievoordeel te maken?'}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              {lang === 'en'
                ? 'Connect your business to the logistics infrastructure built for modern commerce. Start shipping in minutes or consult with our logistics specialists.'
                : 'Koppel je organisatie aan het logistieke besturingssysteem van de toekomst. Ga binnen enkele minuten live of plan een demo met onze specialisten.'}
            </p>

            {/* Dual Pill CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://app.zineps.com/Account/Register"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full font-bold text-base bg-[#48C293] hover:bg-[#3bb182] text-white shadow-lg shadow-[#48C293]/25 hover:scale-105 active:scale-95 transition-all"
              >
                <span>{lang === 'en' ? 'Start shipping' : 'Start met verzenden'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:info@zineps.com"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full font-semibold text-base border border-white/30 text-white hover:bg-white/10 transition-all"
              >
                {lang === 'en' ? 'Talk to our team' : 'Neem contact op'}
              </a>
            </div>

            {/* Feature Checklist Bullets */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              {[
                { en: 'No setup fees', nl: 'Geen opstartkosten' },
                { en: 'Instant API keys', nl: 'Direct API toegang' },
                { en: '1,000+ carrier methods', nl: '1.000+ verzendmethodes' },
                { en: 'Your contracts or pre-negotiated rates', nl: 'Eigen contracten of partnertarieven' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#48C293]/20 text-[#48C293] flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>{lang === 'en' ? item.en : item.nl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCTA;
