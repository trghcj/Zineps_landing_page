import React from 'react';
import { useLang } from '@/App';
import { platformMetrics } from '@/data/features';

interface EnterpriseLogo {
  name: string;
  svg: React.ReactNode;
}

const enterpriseLogos: EnterpriseLogo[] = [
  {
    name: 'Acme Corp',
    svg: (
      <svg className="h-7 w-auto" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 16L12 28H24L32 16L24 4H12Z" stroke="#27272a" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="18" cy="16" r="4" fill="#27272a" />
        <text x="42" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="800" letterSpacing="0.08em" fill="#27272a">ACME CORP</text>
      </svg>
    ),
  },
  {
    name: 'GlobalFreight',
    svg: (
      <svg className="h-7 w-auto" viewBox="0 0 175 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="#27272a" strokeWidth="2.5" />
        <path d="M4 16H28M16 4C19 8 21 12 21 16C21 20 19 24 16 28M16 4C13 8 11 12 11 16C11 20 13 24 16 28" stroke="#27272a" strokeWidth="1.8" />
        <text x="38" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="800" letterSpacing="0.04em" fill="#27272a">GLOBALFREIGHT</text>
      </svg>
    ),
  },
  {
    name: 'CuboLogistics',
    svg: (
      <svg className="h-7 w-auto" viewBox="0 0 175 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="16" height="16" rx="3" stroke="#27272a" strokeWidth="2.5" />
        <path d="M14 8V24M6 16H22" stroke="#27272a" strokeWidth="1.8" />
        <text x="32" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="800" letterSpacing="0.04em" fill="#27272a">CUBOLOGISTICS</text>
      </svg>
    ),
  },
  {
    name: 'Nordic Retail',
    svg: (
      <svg className="h-7 w-auto" viewBox="0 0 165 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 24V8L16 24V8" stroke="#27272a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 8H28" stroke="#27272a" strokeWidth="2.8" strokeLinecap="round" />
        <text x="38" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="800" letterSpacing="0.06em" fill="#27272a">NORDIC RETAIL</text>
      </svg>
    ),
  },
  {
    name: 'Vanguard Supply',
    svg: (
      <svg className="h-7 w-auto" viewBox="0 0 185 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 7L16 25L26 7" stroke="#27272a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 16L16 25L21 16" fill="#27272a" />
        <text x="36" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="800" letterSpacing="0.06em" fill="#27272a">VANGUARD SUPPLY</text>
      </svg>
    ),
  },
  {
    name: 'OmniCommerce',
    svg: (
      <svg className="h-7 w-auto" viewBox="0 0 175 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="16" r="6" stroke="#27272a" strokeWidth="2.2" />
        <circle cx="22" cy="16" r="6" stroke="#27272a" strokeWidth="2.2" />
        <path d="M10 16H22" stroke="#27272a" strokeWidth="2.2" />
        <text x="36" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14.5" fontWeight="800" letterSpacing="0.05em" fill="#27272a">OMNICOMMERCE</text>
      </svg>
    ),
  },
];

const TrustedByMarquee: React.FC = () => {
  const { lang } = useLang();

  return (
    <section className="relative py-12 bg-white overflow-hidden border-b border-gray-100">
      <div className="site-container text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#60948A] block mb-2">
          {lang === 'en' ? 'PROVEN AT SCALE' : 'BEWEZEN OP SCHAAL'}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#424242]">
          {lang === 'en'
            ? 'Powering shipping for modern commerce'
            : 'Dé verzendinfrastructuur voor moderne handel'}
        </h2>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="overflow-hidden py-4 marquee-mask mb-10">
        <div className="flex w-max items-center gap-16 animate-[marquee_35s_linear_infinite]">
          {[...enterpriseLogos, ...enterpriseLogos, ...enterpriseLogos, ...enterpriseLogos].map(
            (item, index) => (
              <div
                key={index}
                className="flex items-center justify-center shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-default"
                title={item.name}
              >
                {item.svg}
              </div>
            )
          )}
        </div>
      </div>

      {/* 4 Compact Network Metrics with Animated Counters */}
      <div className="site-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#F3FBF7]/70 border border-[#48C293]/30 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17332A] tracking-tight">
              10,000+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              {lang === 'en' ? 'Businesses shipping' : 'Verzendende bedrijven'}
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17332A] tracking-tight">
              1,000+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              {lang === 'en' ? 'Shipping methods' : 'Verzendmethodes'}
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17332A] tracking-tight">
              200+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              {lang === 'en' ? 'Destination countries' : 'Landen wereldwijd'}
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17332A] tracking-tight">
              300M+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              {lang === 'en' ? 'Parcels routed / yr' : 'Pakketten per jaar'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByMarquee;
