import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navItems, languages } from '@/data/navigation';
import { useLang } from '@/App';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLanguage = languages.find((l) => l.code === lang) || languages[0];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white/85 backdrop-blur-sm border-b border-gray-100/40'
      }`}
    >
      <div className="site-container flex items-center justify-between h-[68px]">
        {/* Exact Zineps Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/Group.4de5c46a.svg" alt="Zineps" className="h-7 sm:h-8 w-auto" />
        </a>

        {/* Center Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group">
              {item.children ? (
                <button className="text-[15px] font-medium text-gray-800 hover:text-gray-950 flex items-center gap-1 py-1">
                  {lang === 'en' ? item.label : item.labelNL}
                  <ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-200 group-hover:rotate-180" />
                </button>
              ) : (
                <a
                  href={item.href || '#'}
                  className="text-[15px] font-medium text-gray-800 hover:text-gray-950 py-1 transition-colors"
                >
                  {lang === 'en' ? item.label : item.labelNL}
                </a>
              )}

              {/* Hover Dropdown */}
              {item.children && (
                <div className="absolute top-full left-0 mt-2 min-w-[280px] bg-white rounded-xl border border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                  {item.children.map((child, cIdx) => (
                    <a
                      key={cIdx}
                      href={child.href}
                      className="block p-2 rounded-lg hover:bg-[#E6FAF5]/60 transition"
                    >
                      <div className="text-sm font-semibold text-gray-900">
                        {lang === 'en' ? child.label : child.labelNL}
                      </div>
                      <div className="text-xs text-gray-500">
                        {lang === 'en' ? child.description : child.descriptionNL}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 border border-slate-200 rounded-full hover:bg-slate-50 transition"
            >
              <span>{currentLanguage?.flag}</span>
              <span className="uppercase tracking-wider">{currentLanguage?.code}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-40 bg-white rounded-2xl border border-slate-200 shadow-xl p-1 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      if (l.code === 'en' || l.code === 'nl') setLang(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left rounded-xl ${
                      lang === l.code ? 'bg-[#F3FBF7] text-[#17332A] font-bold' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sign up for free button as rounded-full pill */}
          <a href="https://app.zineps.com/Account/Register" className="zineps-cta-btn px-5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md"
          >
            {lang === 'en' ? 'Sign up for free' : 'Aanmelden'}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-800 lg:hidden"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 shadow-xl">
          <div className="flex flex-col gap-4">
            {navItems.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="font-semibold text-gray-800 text-sm">
                  {lang === 'en' ? item.label : item.labelNL}
                </div>
                {item.children && (
                  <div className="pl-4 flex flex-col gap-1 border-l-2 border-[#70CAB9]/40">
                    {item.children.map((child, cIdx) => (
                      <a
                        key={cIdx}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs text-gray-600 py-1"
                      >
                        {lang === 'en' ? child.label : child.labelNL}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 flex gap-2">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded text-xs font-semibold ${
                  lang === 'en' ? 'bg-[#70CAB9] text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('nl')}
                className={`px-3 py-1 rounded text-xs font-semibold ${
                  lang === 'nl' ? 'bg-[#70CAB9] text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                NL
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
