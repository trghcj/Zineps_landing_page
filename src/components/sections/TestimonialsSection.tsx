import React from 'react';
import { useLang } from '@/App';
import { customerTestimonials } from '@/data/features';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { lang, t } = useLang();

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 relative bg-white overflow-hidden border-t border-gray-100 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6FAF5] text-[#155e57] text-xs font-bold uppercase tracking-wider mb-4 border border-[#70CAB9]/30">
            {lang === 'en' ? 'CUSTOMER SUCCESS' : 'KLANTERVARINGEN'}
          </span>
          <h2 className="section-title mx-auto font-extrabold text-[#424242] tracking-tight mb-6">
            {lang === 'en' ? 'Built for businesses that ship.' : 'Gebouwd voor bedrijven die verzenden.'}
          </h2>
          <p className="text-base sm:text-lg text-[#525151] leading-relaxed">
            {lang === 'en'
              ? 'Hear how fast-growing e-commerce brands and modern 3PL logistics providers accelerate growth with Zineps.'
              : 'Ontdek hoe toonaangevende e-commerce merken en logistieke dienstverleners tijd en kosten besparen met Zineps.'}
          </p>
        </div>

        {/* 3 Premium Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {customerTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-full h-auto min-h-[240px] rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E6FAF5] text-[#155e57] flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5" />
                </div>

                <p className="text-sm sm:text-base text-[#424242] leading-relaxed italic mb-8">
                  "{lang === 'en' ? item.quote : item.quoteNL}"
                </p>
              </div>

              <div className="pt-5 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{item.author}</h4>
                    <span className="text-xs text-gray-500">
                      {lang === 'en' ? item.role : item.roleNL} • {item.company}
                    </span>
                  </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-lg bg-[#E6FAF5] text-[#155e57] text-xs font-extrabold">
                  {lang === 'en' ? item.metrics : item.metricsNL}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
