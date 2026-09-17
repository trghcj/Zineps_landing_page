import React from 'react';
import { footerLinks } from '@/data/navigation';
import { useLang } from '@/App';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, t } = useLang();

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#f8fafb] to-[#E6FAF5]/40 border-t border-gray-200 overflow-hidden pt-16 sm:pt-20 pb-8">
      {/* Decorative vertical grid lines aligned with the 4 columns */}
      <div className="absolute inset-0 pointer-events-none w-full max-w-[1220px] mx-auto px-6 sm:px-8 lg:px-12 opacity-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full border-x border-gray-400">
          <div className="border-r border-gray-400 h-full hidden md:block"></div>
          <div className="border-r border-gray-400 h-full hidden lg:block"></div>
          <div className="border-r border-gray-400 h-full hidden lg:block"></div>
        </div>
      </div>

      {/* Main Content Container: Max-width 1220px, horizontally centered */}
      <div className="relative w-full max-w-[1220px] mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* 4-Column Desktop Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 sm:pb-16 items-start">
          
          {/* COLUMN 1: ZINEPS / BRAND */}
          <div className="flex flex-col pr-2">
            <a href="/" className="inline-block mb-5">
              <img src="/zineps-logo.svg" alt="Zineps Logo" className="h-8 sm:h-9 w-auto" />
            </a>
            <p className="text-sm text-[#525151] leading-relaxed max-w-sm">
              {t(
                'AI-driven shipping software for fast-growing e-commerce & logistics companies. Automate workflows, compare carrier rates, and optimize returns.',
                'AI-gedreven verzendecosysteem voor snelgroeiende e-commerce & logistieke bedrijven. Automatiseer workflows, vergelijk tarieven en optimaliseer retouren.'
              )}
            </p>
          </div>

          {/* COLUMN 2: PRODUCTS */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-5 h-6 flex items-center">
              {t('Products', 'Producten')}
            </h4>
            <ul className="flex flex-col space-y-3.5">
              {footerLinks.products.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-[#525151] hover:text-[#17332A] hover:font-medium transition-colors inline-block leading-snug"
                  >
                    {lang === 'en' ? link.label : link.labelNL}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: COMPANY */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-5 h-6 flex items-center">
              {t('Company', 'Bedrijf')}
            </h4>
            <ul className="flex flex-col space-y-3.5">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-[#525151] hover:text-[#17332A] hover:font-medium transition-colors inline-block leading-snug"
                  >
                    {lang === 'en' ? link.label : link.labelNL}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT (Dedicated 4th Column) */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-5 h-6 flex items-center">
              {t('Contact', 'Contact')}
            </h4>
            <ul className="flex flex-col space-y-3.5 text-sm text-[#525151]">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#70CAB9] shrink-0" />
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="hover:text-[#17332A] transition-colors"
                >
                  {footerLinks.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#70CAB9] shrink-0" />
                <a
                  href={`tel:${footerLinks.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#17332A] transition-colors"
                >
                  {footerLinks.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#70CAB9] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {footerLinks.contact.address1},<br />
                  1101CT, Amsterdam,<br />
                  The Netherlands
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM LEGAL BAR: Coherent utility row with Copyright, Legal Links, and Status */}
        <div className="pt-6 sm:pt-8 border-t border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          {/* Copyright moved to bottom bar */}
          <div className="font-medium text-slate-600 order-2 md:order-1 text-center md:text-left">
            © 2026 Zineps B.V. {t('All rights reserved.', 'Alle rechten voorbehouden.')}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 order-1 md:order-2">
            <a href="/privacy-policy" className="hover:text-[#17332A] transition-colors">
              {t('Privacy Policy', 'Privacybeleid')}
            </a>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <a href="/terms" className="hover:text-[#17332A] transition-colors">
              {t('Terms of Service', 'Algemene voorwaarden')}
            </a>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <a href="/security" className="hover:text-[#17332A] transition-colors">
              {t('Security & GDPR', 'Beveiliging & AVG')}
            </a>
          </div>

          {/* System Status Indicator aligned to right */}
          <div className="flex items-center gap-2 order-3">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-700 font-semibold">
              {t('All systems operational (99.9% Uptime)', 'Alle systemen operationeel (99.9% Uptime)')}
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
