import React from 'react';
import { Globe, Network, PackageCheck } from 'lucide-react';
import { useLang } from '@/App';

const WorldwideCoverage: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="relative w-full h-[260px] flex items-center justify-center">
      {/* Card 1: Bottom (Rotated back) */}
      <div className="absolute w-64 h-24 rounded-2xl bg-white border-2 border-gray-200 shadow-md p-4 flex items-center gap-3 transform -rotate-6 -translate-y-8 -translate-x-4 filter grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105 cursor-pointer">
        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
          <Globe className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs text-gray-500 font-bold block">{t('Worldwide reach', 'Wereldwijd')}</span>
          <span className="text-sm font-extrabold text-[#424242]">200+ {t('Countries', 'Landen')}</span>
        </div>
      </div>

      {/* Card 2: Middle */}
      <div className="absolute w-64 h-24 rounded-2xl bg-white border-2 border-gray-200 shadow-lg p-4 flex items-center gap-3 transform rotate-3 translate-y-4 -translate-x-8 filter grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105 cursor-pointer z-10">
        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
          <Network className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs text-gray-500 font-bold block">{t('Active carriers', 'Vervoerders')}</span>
          <span className="text-sm font-extrabold text-[#424242]">50+ {t('Partners', 'Partners')}</span>
        </div>
      </div>

      {/* Card 3: Top/Front Highlighted Card */}
      <div className="absolute w-68 h-24 rounded-2xl bg-gradient-to-r from-white to-[#E6FAF5] border-2 border-[#70CAB9] shadow-xl p-4 flex items-center gap-3.5 transform -rotate-1 translate-y-12 translate-x-6 z-20 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="w-11 h-11 rounded-xl bg-[#70CAB9] flex items-center justify-center text-white shrink-0 shadow-md">
          <PackageCheck className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs text-[#155e57] font-bold block uppercase tracking-wider">
            {t('Shipping methods', 'Verzendopties')}
          </span>
          <span className="text-base font-extrabold text-[#424242]">1,000+ {t('Methods', 'Methodes')}</span>
        </div>
      </div>
    </div>
  );
};

export default WorldwideCoverage;
