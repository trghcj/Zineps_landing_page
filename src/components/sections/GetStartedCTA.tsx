import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLang } from '@/App';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const GetStartedCTA: React.FC = () => {
  const { lang, t } = useLang();

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width callout card in Deep Forest #17332A */}
        <div className="rounded-3xl p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl text-white bg-gradient-to-br from-[#17332A] via-[#10241E] to-[#0A1813] border border-[#70CAB9]/20">
          {/* Subtle Radial Emerald Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#48C293]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-[#55C99F]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left: Text & Action (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#48C293] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/10 w-max">
                <Sparkles className="w-3.5 h-3.5 text-[#48C293]" />
                {lang === 'en' ? 'JOIN THE LOGISTICS NETWORK' : 'SLUIT JE AAN BIJ HET NETWERK'}
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
                {lang === 'en'
                  ? 'Ready to make shipping a competitive advantage?'
                  : 'Klaar om van verzending jouw concurrentievoordeel te maken?'}
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-normal">
                {lang === 'en'
                  ? 'Connect your business to the logistics infrastructure built for modern commerce. Start shipping in minutes or consult with our logistics specialists.'
                  : 'Koppel je organisatie aan het logistieke besturingssysteem van de toekomst. Ga binnen enkele minuten live of plan een demo met onze specialisten.'}
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <a
                  href="https://app.zineps.com/Account/Register"
                  className="w-full sm:w-auto zineps-cta-btn inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl font-bold text-base transition-all"
                >
                  <span>{lang === 'en' ? 'Start your free trial' : 'Start gratis proefperiode'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="mailto:info@zineps.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-7 rounded-xl font-semibold text-base border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
                >
                  {lang === 'en' ? 'Talk to our team' : 'Neem contact op'}
                </a>
              </div>

              {/* Feature Checklist Bullets */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300 font-medium">
                {[
                  { en: 'No setup fees', nl: 'Geen opstartkosten' },
                  { en: 'Instant API keys', nl: 'Direct API toegang' },
                  { en: '1,000+ carrier methods', nl: '1.000+ verzendmethodes' },
                  { en: 'Setup in 5 minutes', nl: 'Live in 5 minuten' },
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

            {/* Right: Live Network Statistics Bento (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {[
                { value: 20, suffix: '+', label: 'Shipping Partners', labelNL: 'Logistieke Partners', sub: 'Contracted high-volume lanes' },
                { value: 200, suffix: '+', label: 'Countries Covered', labelNL: 'Landen Bereikbaar', sub: 'Customs cleared DDP & DDU' },
                { value: 1000, suffix: '+', label: 'Shipping Methods', labelNL: 'Verzendmethodes', sub: 'Standard, Express & Freight' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between"
                >
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-[#70CAB9]">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <span className="text-sm font-bold text-white block mt-0.5">
                      {lang === 'en' ? stat.label : stat.labelNL}
                    </span>
                    <span className="text-xs text-white/60">{stat.sub}</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#70CAB9] flex items-center justify-center font-black text-sm">
                    0{idx + 1}
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

export default GetStartedCTA;
