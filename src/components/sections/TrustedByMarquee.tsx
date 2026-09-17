import React from 'react';
import { useLang } from '@/App';

export const TrustedByMarquee: React.FC = () => {
  const { lang } = useLang();

  const enterpriseLogos = [
    { name: 'DHL Express', svg: <img src="/hero-dhl.svg" alt="DHL" className="h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" /> },
    { name: 'PostNL', svg: <img src="/hero-postnl.svg" alt="PostNL" className="h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" /> },
    { name: 'DPD', svg: <img src="/hero-dpd.svg" alt="DPD" className="h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" /> },
    { name: 'UPS', svg: <img src="/hero-ups.svg" alt="UPS" className="h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" /> },
    { name: 'FedEx', svg: <img src="/hero-fedex.svg" alt="FedEx" className="h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" /> },
    { name: 'GLS', svg: <img src="/hero-gls.svg" alt="GLS" className="h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" /> },
    { name: 'Shopify', svg: <img src="/hero-shopify.svg" alt="Shopify" className="h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" /> },
    { name: 'WooCommerce', svg: <img src="/hero-woo.svg" alt="WooCommerce" className="h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" /> },
    { name: 'Bol.com', svg: <img src="/hero-bol.svg" alt="Bol.com" className="h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" /> },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-white border-y border-slate-100 overflow-hidden">
      {/* Label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          {lang === 'en'
            ? 'TRUSTED BY LEADING E-COMMERCE BRANDS & LOGISTICS PROVIDERS'
            : 'VERTROUWD DOOR VOORUITSTREVENDE WEBSHOPS & LOGISTIEKE PARTNERS'}
        </p>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="overflow-hidden py-2 mb-12">
        <div className="flex w-max items-center gap-16 animate-[marquee_40s_linear_infinite]">
          {[...enterpriseLogos, ...enterpriseLogos, ...enterpriseLogos, ...enterpriseLogos].map(
            (item, index) => (
              <div
                key={index}
                className="flex items-center justify-center shrink-0 cursor-default"
                title={item.name}
              >
                {item.svg}
              </div>
            )
          )}
        </div>
      </div>

      {/* Human-Made Clean Stats Row with Subtle Dividers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80 pt-4">
          <div className="flex flex-col items-center lg:items-start lg:pl-4 pt-4 lg:pt-0">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161D1A] tracking-tight">
              10,000+
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1.5">
              {lang === 'en' ? 'Active webshops shipping daily' : 'Actieve webshops die dagelijks verzenden'}
            </span>
          </div>

          <div className="flex flex-col items-center lg:items-start lg:pl-8 pt-4 lg:pt-0">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161D1A] tracking-tight">
              1,000+
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1.5">
              {lang === 'en' ? 'Standard & express shipping methods' : 'Standaard & express verzendopties'}
            </span>
          </div>

          <div className="flex flex-col items-center lg:items-start lg:pl-8 pt-4 lg:pt-0">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161D1A] tracking-tight">
              200+
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1.5">
              {lang === 'en' ? 'Countries covered worldwide' : 'Landen wereldwijd bereikbaar'}
            </span>
          </div>

          <div className="flex flex-col items-center lg:items-start lg:pl-8 pt-4 lg:pt-0">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161D1A] tracking-tight">
              300M+
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1.5">
              {lang === 'en' ? 'Parcels routed seamlessly each year' : 'Pakketten jaarlijks succesvol bezorgd'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByMarquee;
