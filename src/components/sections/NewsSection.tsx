import React from 'react';
import { useLang } from '@/App';
import { ArrowUpRight } from 'lucide-react';

interface NewsItem {
  badge: string;
  badgeColor: string;
  date: string;
  title: string;
  titleNL: string;
  desc: string;
  descNL: string;
  link: string;
  image: string;
  isHero?: boolean;
}

export const NewsSection: React.FC = () => {
  const { lang } = useLang();

  const heroItem: NewsItem = {
    badge: 'INVESTMENT',
    badgeColor: 'bg-[#48C293]/20 text-[#17332A]',
    date: 'July 23, 2026',
    title: 'Zineps closes late-seed investment to accelerate its next phase of growth',
    titleNL: 'Zineps sluit late-seed investeringsronde om verdere groei te versnellen',
    desc: 'Expanding our cross-border logistics infrastructure and AI carrier decisioning engine across Central and Southern Europe.',
    descNL: 'Uitbreiding van onze internationale verzendinfrastructuur en AI-routeringsengine in Midden- en Zuid-Europa.',
    link: '#',
    isHero: true,
    image: 'https://img.youtube.com/vi/elrvo3ZxDtA/maxresdefault.jpg',
  };

  const secondaryItems: NewsItem[] = [
    {
      badge: 'PLATFORM UPDATE',
      badgeColor: 'bg-sky-100 text-sky-800',
      date: 'July 20, 2026',
      title: 'Late July Platform Update: Bulk Customs Automation, Smarter Address Books, and More',
      titleNL: 'Platform Update: Automatische douanedocumenten, slim adresboek en meer',
      desc: 'Seamless international clearance for DDP and DDU parcel shipments.',
      descNL: 'Snellere douane-afhandeling voor al je internationale pakketzendingen.',
      link: '#',
      image: 'https://images.prismic.io/zineps/aZ8Xl8FoBIGEgyL4_Screenshot2026-02-25at16.38.35.png?auto=format,compress',
    },
    {
      badge: 'INTEGRATION',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      date: 'December 27, 2025',
      title: 'Zineps now integrates directly with Nova Post',
      titleNL: 'Zineps integreert nu rechtstreeks met Nova Post',
      desc: 'Fast, secure parcel shipping lanes to Ukraine and Eastern European markets.',
      descNL: 'Directe aansluiting op de Oost-Europese corridors van Nova Post.',
      link: '#',
      image: 'https://images.prismic.io/zineps/Zt4sEkdP0pZnE5HI_ZINEPSNOVAPOST.png?auto=format,compress',
    },
  ];

  return (
    <section id="news" className="w-full py-16 md:py-24 relative bg-[#FAFCFB] border-t border-gray-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#155e57] text-xs font-bold uppercase tracking-wider mb-4 border border-[#70CAB9]/30">
              {lang === 'en' ? 'NEWSROOM & UPDATES' : 'NIEUWS & UPDATES'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#161D1A] tracking-tight">
              {lang === 'en' ? 'Recent news & insights' : 'Laatste nieuws & updates'}
            </h2>
          </div>
          <a
            href="https://zineps.com/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#17332A] hover:text-[#48C293] transition-colors"
          >
            <span>{lang === 'en' ? 'View all news' : 'Bekijk alle artikelen'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Hero Feature Card (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#70CAB9]/60 transition-all flex flex-col justify-between group">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <img
                src={heroItem.image}
                alt={heroItem.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#48C293] text-[#0F231D]">
                  {heroItem.badge}
                </span>
                <span className="text-xs text-white/90 font-medium">{heroItem.date}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#161D1A] group-hover:text-[#17332A] transition-colors mb-3 leading-snug">
                {lang === 'en' ? heroItem.title : heroItem.titleNL}
              </h3>
              <p className="text-sm sm:text-base text-[#52605B] leading-relaxed">
                {lang === 'en' ? heroItem.desc : heroItem.descNL}
              </p>
            </div>
          </div>

          {/* Right Column: 2 Secondary Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryItems.map((item, idx) => (
              <div
                key={idx}
                className="flex-1 rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#70CAB9]/50 transition-all p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-[#161D1A] group-hover:text-[#17332A] transition-colors mb-2 leading-snug">
                    {lang === 'en' ? item.title : item.titleNL}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#52605B] leading-relaxed">
                    {lang === 'en' ? item.desc : item.descNL}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#17332A] group-hover:text-[#48C293] transition-colors">
                  <span>{lang === 'en' ? 'Read article' : 'Lees verder'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
