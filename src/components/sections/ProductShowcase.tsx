import React, { useState } from 'react';
import { useLang } from '@/App';
import { workflowSteps } from '@/data/features';
import { ShoppingCart, Scale, Sparkles, Printer, Compass, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  'shopping-cart': ShoppingCart,
  'scale': Scale,
  'sparkles': Sparkles,
  'printer': Printer,
  'compass': Compass,
  'check-circle-2': CheckCircle2,
  'rotate-ccw': RotateCcw,
};

const ProductShowcase: React.FC = () => {
  const { lang } = useLang();
  const [activeStep, setActiveStep] = useState(0);

  // Async Decisioning Pipeline: live simulation stepping through states
  React.useEffect(() => {
    let isMounted = true;
    const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

    const runSimulation = async () => {
      while (isMounted) {
        // Step 0: Order Received
        setActiveStep(0);
        await delay(1600);
        if (!isMounted) break;

        // Step 1: Rate Compared
        setActiveStep(1);
        await delay(1600);
        if (!isMounted) break;

        // Step 2: Carrier Selected (Resolves live response)
        setActiveStep(2);
        await delay(4200);
        if (!isMounted) break;
      }
    };

    runSimulation();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="workflow" className="w-full py-16 md:py-24 relative bg-gradient-to-b from-white via-zinc-50/50 to-white overflow-hidden scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#155e57] text-xs font-bold uppercase tracking-wider mb-4 border border-[#70CAB9]/30">
            {lang === 'en' ? 'END-TO-END FULFILLMENT' : 'END-TO-END FULFILMENT'}
          </span>
          <h2 className="section-title mx-auto font-extrabold text-[#424242] tracking-tight mb-6">
            {lang === 'en'
              ? 'From checkout to doorstep —\nwithout the manual work.'
              : 'Van checkout tot voordeur —\nzonder handmatig werk.'}
          </h2>
          <p className="text-base sm:text-lg text-[#525151] leading-relaxed">
            {lang === 'en'
              ? 'Connect once. Every order is algorithmically routed, generated, tracked, and insured through a unified automated pipeline.'
              : 'Eén koppeling. Elke bestelling wordt automatisch beoordeeld, geëtiketteerd en getrackt via een gestroomlijnde pijplijn.'}
          </p>
        </div>

        {/* Horizontal Workflow Stepper */}
        <div className="w-full flex justify-between items-center gap-2 mb-8 overflow-x-auto pb-2">
          <div className="flex items-center justify-between w-full gap-2 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            {workflowSteps.map((step, idx) => {
              const Icon = iconComponents[step.icon] || Sparkles;
              const isCurrent = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-center gap-1.5 py-2.5 px-3 rounded-xl cursor-pointer transition-all shrink-0 sm:shrink ${
                    isCurrent
                      ? 'bg-[#E6FAF5] border border-[#70CAB9] text-[#155e57] font-bold shadow-xs'
                      : 'hover:bg-gray-50 text-gray-400'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isCurrent ? 'bg-[#155e57] text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider">{step.number}</span>
                  <span className="text-[11px] text-center font-medium leading-tight hidden md:block">
                    {lang === 'en' ? step.title : step.titleNL}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Shipment Card & Visual Comparison - Balanced 50/50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Workflow detail card (50%) */}
          <div className="w-full h-auto min-h-[260px] p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xl flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#155e57] shrink-0">
                  AUTOMATION RULES ACTIVE
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {activeStep === 2 ? 'CARRIER SELECTED (RESOLVED)' : 'EVALUATING PIPELINE...'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#424242] mb-6 leading-snug">
                {lang === 'en'
                  ? 'Intelligent order decisioning in under 15ms'
                  : 'Slimme orderbeslissingen in minder dan 15ms'}
              </h3>

              <p className="text-sm sm:text-base text-[#525151] leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Instead of locking your business into a single carrier or relying on manual employee picks, Zineps compares live carrier capacity and rate tiers. If a carrier suffers regional weather delays, parcels seamlessly route to an alternative carrier.'
                  : 'In plaats van vastzitten aan één vervoerder of handmatige orderinvoer, evalueert Zineps continu live tarieven en actuele bezorgprestaties.'}
              </p>

              {/* 4 Live Signals */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <span className="text-xs font-bold text-emerald-900 block mb-1">AI selected DHL Express</span>
                  <span className="text-[11px] text-emerald-700 leading-snug">Automatic lowest cost lane</span>
                </div>
                <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200">
                  <span className="text-xs font-bold text-teal-900 block mb-1">€0.82 cheaper per label</span>
                  <span className="text-[11px] text-teal-700 leading-snug">Accumulated daily savings</span>
                </div>
                <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200">
                  <span className="text-xs font-bold text-sky-900 block mb-1">1 day faster delivery</span>
                  <span className="text-[11px] text-sky-700 leading-snug">Avoids local sorting depot backlog</span>
                </div>
                <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200">
                  <span className="text-xs font-bold text-purple-900 block mb-1">98% delivery confidence</span>
                  <span className="text-[11px] text-purple-700 leading-snug">Historical SLA prediction</span>
                </div>
              </div>
            </div>

            <a href="https://app.zineps.com/Account/Register" className="zineps-cta-btn h-12 px-7 rounded-xl font-bold text-sm"
            >
              <span>{lang === 'en' ? 'Start automated shipping' : 'Start met automatiseren'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Live Mockup preview (50%) with live resolution transition */}
          <div
            className={`w-full h-auto min-h-[260px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-200/50 bg-white p-6 sm:p-8 transition-all duration-700 ease-out flex items-center justify-center ${
              activeStep === 2
                ? 'opacity-100 translate-y-0 filter-none'
                : 'opacity-40 translate-y-2 filter blur-[1px]'
            }`}
          >
            <div className="relative">
              {activeStep === 2 && (
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-[11px] font-bold backdrop-blur-sm border border-emerald-300/60 shadow-sm animate-fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Carrier Selected</span>
                </div>
              )}
              <img
                src="/shippng-zineps.svg"
                alt="Automated shipment overview"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
