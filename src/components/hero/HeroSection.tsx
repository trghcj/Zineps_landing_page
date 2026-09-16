import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/App';
import {
  ArrowRight,
  Sparkles,
  Search,
  Package,
  Truck,
  BarChart3,
  Settings,
  LayoutDashboard,
  CheckCircle2,
  Clock,
  TrendingUp,
  Shield,
  Layers,
  ShoppingBag,
} from 'lucide-react';

const HeroSection: React.FC = () => {
  const { lang, t } = useLang();

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Ambient Radial Mint Gradient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] opacity-60 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(72, 194, 147, 0.22) 0%, rgba(85, 201, 159, 0.08) 50%, transparent 75%)',
          }}
        />
        <div
          className="absolute top-48 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(72, 194, 147, 0.25) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Overline Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3FBF7] border border-[#48C293]/30 shadow-xs mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#48C293] animate-pulse" />
            <span className="text-xs font-semibold text-[#17332A] tracking-wide">
              {lang === 'en'
                ? 'For businesses that ship, and the logistics partners that move their goods'
                : 'Voor verzendende bedrijven en de logistieke partners die hun goederen vervoeren'}
            </span>
          </motion.div>

          {/* Main H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#161D1A] leading-[1.08] mb-6"
          >
            {lang === 'en' ? (
              <>
                The intelligent layer <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17332A] via-[#21473B] to-[#48C293]">
                  for global logistics
                </span>
              </>
            ) : (
              <>
                De intelligente laag <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17332A] via-[#21473B] to-[#48C293]">
                  voor wereldwijde logistiek
                </span>
              </>
            )}
          </motion.h1>

          {/* Subtitle Value Prop */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#52605B] leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
          >
            {lang === 'en'
              ? 'One unified dashboard and developer API connecting e-commerce stores with pre-negotiated carrier rates across DHL, PostNL, and DPD — routing every parcel for maximum speed and cost efficiency.'
              : 'Eén centraal dashboard en API die je webshops koppelt aan scherpe vervoerderscontracten van DHL, PostNL en DPD — met automatische selectie van het snelste en voordeligste tarief.'}
          </motion.p>

          {/* Dual Pill CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a
              href="https://app.zineps.com/Account/Register"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full font-bold text-sm sm:text-base text-white bg-[#48C293] hover:bg-[#3bb182] hover:shadow-lg hover:shadow-[#48C293]/25 active:scale-95 transition-all shadow-md"
            >
              <span>{lang === 'en' ? 'Start shipping' : 'Start met verzenden'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#two-sided-network"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-7 rounded-full text-sm sm:text-base font-semibold text-[#161D1A] border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
            >
              {lang === 'en' ? "I'm a logistics partner" : 'Ik ben logistiek partner'}
            </a>
          </motion.div>

          {/* 4 Trust Checkmarks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-[#52605B]"
          >
            {[
              { en: 'No setup fees', nl: 'Geen opstartkosten' },
              { en: '1,000+ shipping methods', nl: '1.000+ methodes' },
              { en: 'Your contracts or rates', nl: 'Eigen contract of partnertarief' },
              { en: 'Go live in minutes', nl: 'Live in minuten' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#E9F8F2] text-[#17332A] flex items-center justify-center text-[10px] font-bold shrink-0">
                  ✓
                </span>
                <span>{lang === 'en' ? item.en : item.nl}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Centerpiece App Window Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-5xl mx-auto mt-14 sm:mt-16 rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-2xl shadow-slate-200/70 overflow-hidden"
        >
          {/* macOS-style Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-50/80 border-b border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]/90 border border-[#DC2626]/40" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]/90 border border-[#D97706]/40" />
              <span className="w-3 h-3 rounded-full bg-[#10B981]/90 border border-[#059669]/40" />
              <div className="hidden sm:flex items-center gap-2 ml-4 px-3 py-1 bg-white rounded-md border border-slate-200/80 text-[11px] font-mono text-slate-600">
                <span>app.zineps.com/orders</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E9F8F2] text-[#17332A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#48C293] animate-pulse" />
                API Connected
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                v2.4.0
              </span>
            </div>
          </div>

          {/* App Window Interior: Left Icon Rail + Main Console */}
          <div className="flex flex-col sm:flex-row min-h-[460px]">
            {/* Left Icon Rail */}
            <div className="hidden sm:flex flex-col items-center justify-between w-16 py-5 bg-[#FAFCFB] border-r border-slate-100">
              <div className="flex flex-col items-center gap-5">
                <div className="w-9 h-9 rounded-xl bg-[#17332A] text-white flex items-center justify-center font-black text-sm shadow-xs">
                  Z
                </div>
                <div className="w-9 h-9 rounded-lg bg-[#E9F8F2] text-[#17332A] flex items-center justify-center cursor-pointer">
                  <LayoutDashboard className="w-4 h-4" />
                </div>
                <div className="w-9 h-9 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center cursor-pointer transition">
                  <Package className="w-4 h-4" />
                </div>
                <div className="w-9 h-9 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center cursor-pointer transition">
                  <Truck className="w-4 h-4" />
                </div>
                <div className="w-9 h-9 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center cursor-pointer transition">
                  <BarChart3 className="w-4 h-4" />
                </div>
              </div>

              <div className="w-9 h-9 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center cursor-pointer transition">
                <Settings className="w-4 h-4" />
              </div>
            </div>

            {/* Main Orders Console */}
            <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                {/* Search & Top Action Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg font-bold text-[#161D1A]">Fulfillment Command Center</h3>
                    <p className="text-xs text-[#52605B]">Real-time parcel routing across connected storefronts</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50/70 text-xs text-slate-500 w-full sm:w-56">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-[11px]">Filter order, destination...</span>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-[#17332A] text-white text-xs font-semibold hover:bg-[#21473B] transition shrink-0">
                      + New Label
                    </button>
                  </div>
                </div>

                {/* 3 Metric Cards Row (Open Orders = 789) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
                  <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Open Orders
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black text-[#161D1A]">789</span>
                      <span className="text-[11px] font-bold text-[#48C293] flex items-center">
                        <TrendingUp className="w-3 h-3 mr-0.5" /> +14.2%
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500">Ready to dispatch</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      On-Time SLA
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black text-[#161D1A]">99.4%</span>
                      <span className="text-[11px] font-bold text-emerald-600">Optimal</span>
                    </div>
                    <span className="text-[10px] text-slate-500">Across Europe lanes</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F3FBF7] border border-[#48C293]/30">
                    <span className="text-[10px] font-bold text-[#17332A] uppercase tracking-wider block">
                      Average Rate
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black text-[#17332A]">€2.48</span>
                      <span className="text-[11px] font-bold text-[#48C293]">Saved €0.62/p</span>
                    </div>
                    <span className="text-[10px] text-[#52605B]">AI rate optimization</span>
                  </div>
                </div>

                {/* Live Orders Table with WooCommerce, Shopify, and Bol.com tags */}
                <div className="overflow-x-auto rounded-xl border border-slate-100">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-100">
                      <tr>
                        <th className="py-2.5 px-3">Order ID</th>
                        <th className="py-2.5 px-3">Store Channel</th>
                        <th className="py-2.5 px-3">Destination</th>
                        <th className="py-2.5 px-3">Matched Carrier</th>
                        <th className="py-2.5 px-3">Rate</th>
                        <th className="py-2.5 px-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {/* Row 1: Shopify */}
                      <tr className="hover:bg-slate-50/60 transition">
                        <td className="py-3 px-3 font-mono font-bold text-slate-900">#ZN-94821</td>
                        <td className="py-3 px-3">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Shopify
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-700 font-medium">Berlin, DE</td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-1.5">
                            <img src="/hero-dhl.svg" alt="DHL" className="h-3.5 w-auto" />
                            <span className="font-semibold text-slate-800">DHL Express</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-bold text-slate-900">€2.84</td>
                        <td className="py-3 px-3 text-right">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E9F8F2] text-[#17332A]">
                            <CheckCircle2 className="w-2.5 h-2.5 text-[#48C293]" /> Dispatched
                          </span>
                        </td>
                      </tr>

                      {/* Row 2: WooCommerce */}
                      <tr className="hover:bg-slate-50/60 transition">
                        <td className="py-3 px-3 font-mono font-bold text-slate-900">#ZN-94820</td>
                        <td className="py-3 px-3">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            WooCommerce
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-700 font-medium">Rotterdam, NL</td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-1.5">
                            <img src="/hero-postnl.svg" alt="PostNL" className="h-3.5 w-auto" />
                            <span className="font-semibold text-slate-800">PostNL Global</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-bold text-slate-900">€3.20</td>
                        <td className="py-3 px-3 text-right">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700">
                            <Clock className="w-2.5 h-2.5 text-blue-500" /> Label Created
                          </span>
                        </td>
                      </tr>

                      {/* Row 3: Bol.com */}
                      <tr className="hover:bg-slate-50/60 transition">
                        <td className="py-3 px-3 font-mono font-bold text-slate-900">#ZN-94819</td>
                        <td className="py-3 px-3">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            Bol.com
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-700 font-medium">Paris, FR</td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-1.5">
                            <img src="/hero-dpd.svg" alt="DPD" className="h-3.5 w-auto" />
                            <span className="font-semibold text-slate-800">DPD Express</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-bold text-slate-900">€3.05</td>
                        <td className="py-3 px-3 text-right">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E9F8F2] text-[#17332A]">
                            <Sparkles className="w-2.5 h-2.5 text-[#48C293]" /> AI Optimized
                          </span>
                        </td>
                      </tr>

                      {/* Row 4: Shopify */}
                      <tr className="hover:bg-slate-50/60 transition">
                        <td className="py-3 px-3 font-mono font-bold text-slate-900">#ZN-94818</td>
                        <td className="py-3 px-3">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Shopify
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-700 font-medium">Munich, DE</td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-1.5">
                            <img src="/hero-dhl.svg" alt="DHL" className="h-3.5 w-auto" />
                            <span className="font-semibold text-slate-800">DHL Express</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-bold text-slate-900">€2.84</td>
                        <td className="py-3 px-3 text-right">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700">
                            <Clock className="w-2.5 h-2.5 text-amber-500" /> In Transit
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom Table Sync Footer */}
              <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
                <span>Showing 4 of 789 open orders</span>
                <span className="flex items-center gap-1 text-slate-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Synced with WooCommerce, Shopify & Bol.com APIs in 12ms
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
