import React, { useState } from 'react';
import { useLang } from '@/App';
import { 
  Printer, 
  RotateCcw, 
  Compass, 
  ArrowRight,
  Sliders,
  Check,
  CheckCircle2,
  Sparkles,
  QrCode
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(2); // Default to 'Plastic plant with different colors'
  const [selectedCarrier, setSelectedCarrier] = useState(0); // Default to 'DHL For You'
  const [isLabelCreated, setIsLabelCreated] = useState(false);

  const capabilities = [
    {
      icon: Printer,
      title: 'Bulk Label Generation',
      titleNL: 'Bulk Labelprinten',
      desc: 'Print hundreds of carrier-compliant shipping labels, customs documents, and pick lists with one click.',
      descNL: 'Print honderden verzendlabels, douanedocumenten en pakbonnen tegelijk in één klik.',
    },
    {
      icon: Sliders,
      title: 'Smart Carrier Routing',
      titleNL: 'Slimme Vervoerderkeuze',
      desc: 'Automatically assigns the cheapest or fastest carrier for every order based on your preset rules.',
      descNL: 'Wijst per bestelling automatisch de goedkoopste of snelste vervoerder toe volgens jouw eigen regels.',
    },
    {
      icon: Compass,
      title: 'Branded Tracking',
      titleNL: 'Branded Track & Trace',
      desc: 'Keep customers informed with proactive shipment status notifications in your own branding and domain.',
      descNL: 'Houd klanten realtime op de hoogte via automatische statusupdates in je eigen huisstijl.',
    },
    {
      icon: RotateCcw,
      title: 'Automated Returns Portal',
      titleNL: 'Zelfservice Retourportaal',
      desc: 'Give buyers an effortless return experience with instant paperless QR drop-off codes.',
      descNL: 'Bied kopers een moeiteloze retourervaring met directe papierenloze QR-inlevercodes.',
    },
  ];

  // The 5 exact products from the second picture
  const products = [
    {
      id: 0,
      title: 'Small and light shampoo for kids',
      image: '/products/shampoo.jpg',
      weight: '0.45 kg',
      sku: 'SHP-001',
    },
    {
      id: 1,
      title: 'Smart watch with ultra light',
      image: '/products/smartwatch.jpg',
      weight: '0.28 kg',
      sku: 'WTC-402',
    },
    {
      id: 2,
      title: 'Plastic plant with different colors',
      image: '/products/plant.jpg',
      weight: '1.15 kg',
      sku: 'PLN-884',
    },
    {
      id: 3,
      title: 'Soft and smart pillow for your room',
      image: '/products/pillow.jpg',
      weight: '0.80 kg',
      sku: 'PLW-221',
    },
    {
      id: 4,
      title: 'Brand flag, fully custom colors',
      image: '/products/flag.png',
      weight: '0.35 kg',
      sku: 'FLG-109',
    },
  ];

  // The 5 exact carriers from the second picture
  const carriers = [
    {
      id: 0,
      name: 'DHL For You',
      logo: '/hero-dhl.svg',
      rate: '€2.84',
      badge: 'Best Rate',
      delivery: 'Tomorrow by 14:00',
    },
    {
      id: 1,
      name: 'Bpost',
      logo: '/hero-bpost.svg',
      rate: '€3.15',
      delivery: '1-2 business days',
    },
    {
      id: 2,
      name: 'PostNL',
      logo: '/hero-postnl.svg',
      rate: '€3.40',
      delivery: 'Tomorrow morning',
    },
    {
      id: 3,
      name: 'GLS',
      logo: '/hero-gls.svg',
      rate: '€3.20',
      delivery: '24-48 hours',
    },
    {
      id: 4,
      name: 'FedEx',
      logo: '/hero-fedex.svg',
      rate: '€4.10',
      delivery: 'Express Priority',
    },
  ];

  const handleCreateLabel = () => {
    setIsLabelCreated(true);
    setTimeout(() => setIsLabelCreated(false), 2400);
  };

  return (
    <section id="workflow" className="w-full py-14 md:py-18 relative bg-zinc-50/60 overflow-hidden border-t border-slate-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#17332A] text-xs font-bold uppercase tracking-wider mb-3 border border-[#48C293]/30">
            {lang === 'en' ? 'HOW IT WORKS' : 'HOE HET WERKT'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#161D1A] tracking-tight leading-tight mb-2.5">
            {lang === 'en'
              ? 'Smart shipping from label to return.'
              : 'Slimme verzending van label tot retour.'}
          </h2>
          <p className="text-base sm:text-lg text-[#52605B] leading-relaxed max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Less manual work, lower postage spend, faster fulfillment, and happier customers. Everything you need to scale your dispatch operations.'
              : 'Minder handmatig werk, lagere verzendkosten, snellere orderverwerking en tevreden klanten.'}
          </p>
        </div>

        {/* Rock-solid 12-column responsive layout preventing container crushing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Feature List Stack (5 of 12 cols = ~42%) */}
          <div className="lg:col-span-5 flex flex-col space-y-2.5">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer min-h-[76px] flex items-center ${
                    isSelected
                      ? 'bg-white border-[#17332A] shadow-sm ring-1 ring-[#17332A]/10'
                      : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3.5 w-full">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#17332A] text-[#70CAB9]'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm sm:text-base font-bold leading-tight truncate ${
                        isSelected ? 'text-[#17332A]' : 'text-[#161D1A]'
                      }`}>
                        {lang === 'en' ? cap.title : cap.titleNL}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-snug">
                        {lang === 'en' ? cap.desc : cap.descNL}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* CTA Button Aligned with Feature Stack */}
            <div className="pt-2">
              <a
                href="https://app.zineps.com/Account/Register"
                className="zineps-cta-btn w-full sm:w-auto h-11 px-6 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>{lang === 'en' ? 'Start automated shipping' : 'Start met automatiseren'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Exact Authentic Mockup from Reference (7 of 12 cols = ~58%) */}
          <div className="lg:col-span-7 w-full rounded-3xl border border-slate-200 bg-white p-3.5 sm:p-6 shadow-xl overflow-hidden">
            
            {/* Window Chrome Header with 3 Dots */}
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
                <span className="ml-2 text-[11px] font-mono text-slate-400 font-medium">
                  app.zineps.com / dispatch / label-create
                </span>
              </div>

              {/* Status Indicator responding to active feature */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#48C293] animate-pulse" />
                <span className="text-[11px] font-semibold text-slate-600 hidden sm:inline">
                  {activeTab === 0 ? 'Batch Fulfillment Active' :
                   activeTab === 1 ? 'Smart Routing Active' :
                   activeTab === 2 ? 'Live Tracking Synced' :
                   'Returns Portal Ready'}
                </span>
              </div>
            </div>

            {/* Main Mockup Body: Two Columns as in the Reference Image */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-start">
              
              {/* Products List (Left Side — 7 Cols) */}
              <div className="md:col-span-7 space-y-2">
                <div className="flex items-center justify-between px-1 pb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    ORDERS IN QUEUE (5)
                  </span>
                  {activeTab === 0 && (
                    <span className="text-[10px] font-bold text-[#17332A] bg-[#E6FAF5] px-2 py-0.5 rounded-full">
                      All Selected
                    </span>
                  )}
                </div>

                {products.map((prod) => {
                  const isSelected = selectedProduct === prod.id;
                  return (
                    <div
                      key={prod.id}
                      onClick={() => setSelectedProduct(prod.id)}
                      className={`flex items-center gap-3 p-2.5 sm:p-3 rounded-xl transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#E6FAF5] border border-[#70CAB9]/40 shadow-xs'
                          : 'bg-white hover:bg-slate-50 border border-transparent'
                      }`}
                    >
                      {/* Product Thumbnail */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200/80 flex items-center justify-center">
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback if image path has issue
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>

                      {/* Title & Metadata */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs sm:text-[13px] leading-tight truncate ${
                          isSelected ? 'font-bold text-[#17332A]' : 'font-medium text-[#424242]'
                        }`}>
                          {prod.title}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          {prod.sku} · {prod.weight}
                        </p>
                      </div>

                      {/* Selected Indicator */}
                      {isSelected && (
                        <span className="w-4 h-4 rounded-full bg-[#17332A] text-white flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#70CAB9]" />
                        </span>
                      )}
                    </div>
                  );
                })}

                {/* Sub-feature state banner (Interactive Feedback for Tracking / Returns) */}
                {activeTab === 2 && (
                  <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#48C293] shrink-0" />
                    <span>Branded tracking notifications automatically dispatched upon label generation.</span>
                  </div>
                )}
                {activeTab === 3 && (
                  <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-[#17332A] shrink-0" />
                    <span>Instant paperless return pass & drop-off QR generated automatically.</span>
                  </div>
                )}
              </div>

              {/* Carriers List & Action Button (Right Side — 5 Cols) */}
              <div className="md:col-span-5 bg-[#F9FBFA] p-3 sm:p-3.5 rounded-2xl border border-slate-200/80 flex flex-col space-y-2">
                <div className="flex items-center justify-between px-1 pb-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    CARRIER RATES
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">Auto-Optimized</span>
                </div>

                {carriers.map((car) => {
                  const isSelected = selectedCarrier === car.id;
                  const isRecommended = car.badge && activeTab === 1;
                  return (
                    <button
                      key={car.id}
                      onClick={() => setSelectedCarrier(car.id)}
                      className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-white border-[#70CAB9] shadow-sm ring-1 ring-[#70CAB9]/20'
                          : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-12 h-5 flex items-center justify-center shrink-0">
                          <img
                            src={car.logo}
                            alt={car.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-800 truncate">
                          {car.name}
                        </span>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-bold text-[#17332A]">{car.rate}</span>
                        {car.badge && (
                          <span className="block text-[9px] font-bold text-emerald-700 leading-none">
                            {car.badge}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}

                {/* Prominent "Create label" Button */}
                <div className="pt-2">
                  <button
                    onClick={handleCreateLabel}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white transition-all duration-200 flex items-center justify-center gap-2 shadow-sm cursor-pointer ${
                      isLabelCreated
                        ? 'bg-emerald-600'
                        : 'bg-[#70CAB9] hover:bg-[#5dbba9] active:scale-[0.99]'
                    }`}
                  >
                    {isLabelCreated ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                        <span>Label Ready (PDF Generated)</span>
                      </>
                    ) : (
                      <span>Create label</span>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
