import React from 'react';
import { footerLinks } from '@/data/navigation';
import { useLang } from '@/App';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const { lang, t } = useLang();

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#f8fafb] to-[#E6FAF5]/40 border-t border-gray-200 overflow-hidden pt-16 pb-12">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-15">
        <div className="border-l border-gray-400 h-full"></div>
        <div className="border-l border-gray-400 h-full hidden sm:block"></div>
        <div className="border-l border-gray-400 h-full hidden md:block"></div>
        <div className="border-l border-gray-400 h-full hidden lg:block"></div>
        <div className="border-l border-gray-400 h-full"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 flex flex-col pr-4">
            <a href="/" className="inline-block mb-5">
              <img src="/zineps-logo.svg" alt="Zineps Logo" className="h-9 w-auto" />
            </a>
            <p className="text-sm text-[#525151] leading-relaxed max-w-sm mb-6">
              {t(
                'AI-driven shipping software for fast-growing e-commerce & logistics companies. Automate workflows, compare carrier rates, and optimize returns.',
                'AI-gedreven verzendecosysteem voor snelgroeiende e-commerce & logistieke bedrijven. Automatiseer workflows, vergelijk tarieven en optimaliseer retouren.'
              )}
            </p>
            <div className="text-xs text-gray-500 font-medium">
              © {new Date().getFullYear()} Zineps B.V. {t('All rights reserved.', 'Alle rechten voorbehouden.')}
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="text-sm font-bold text-[#424242] uppercase tracking-wider mb-4">
              {t('Products', 'Producten')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.products.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-[#525151] hover:text-[#155e57] hover:underline underline-offset-4 transition-colors inline-block"
                  >
                    {lang === 'en' ? link.label : link.labelNL}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-sm font-bold text-[#424242] uppercase tracking-wider mb-4">
              {t('Company', 'Bedrijf')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-[#525151] hover:text-[#155e57] hover:underline underline-offset-4 transition-colors inline-block"
                  >
                    {lang === 'en' ? link.label : link.labelNL}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-bold text-[#424242] uppercase tracking-wider mb-4">
              {t('Contact', 'Contact')}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#525151]">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#70CAB9] shrink-0" />
                <a href={`mailto:${footerLinks.contact.email}`} className="hover:text-[#155e57] transition-colors">
                  {footerLinks.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#70CAB9] shrink-0" />
                <a href={`tel:${footerLinks.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#155e57] transition-colors">
                  {footerLinks.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#70CAB9] shrink-0 mt-0.5" />
                <span>
                  {footerLinks.contact.address1},<br />
                  {footerLinks.contact.address2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-black">
              {t('Privacy Policy', 'Privacybeleid')}
            </a>
            <a href="/terms" className="hover:text-black">
              {t('Terms of Service', 'Algemene voorwaarden')}
            </a>
            <a href="/security" className="hover:text-black">
              {t('Security & GDPR', 'Beveiliging & AVG')}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-emerald-700 font-semibold">{t('All systems operational (99.9% Uptime)', 'Alle systemen operationeel (99.9% Uptime)')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
