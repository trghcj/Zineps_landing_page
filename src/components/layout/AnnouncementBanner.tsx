import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/App';

const AnnouncementBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLang();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative isolate overflow-hidden border-b border-[#70CAB9]/25 bg-gradient-to-r from-[#E6FAF5]/90 via-[#DDF6F0]/90 to-[#E6FAF5]/90 py-2.5 sm:py-2 z-50 backdrop-blur-md"
        >
          {/* Subtle Grid Pattern Overlay */}
          <svg
            className="pointer-events-none absolute inset-0 text-[#70CAB9]/15 mix-blend-overlay [mask-image:linear-gradient(to_right,black,transparent)] md:[mask-image:linear-gradient(to_right,black_60%,transparent)]"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern id="announcement-grid" x="-1" y="-2" width="14" height="14" patternUnits="userSpaceOnUse">
                <path d="M 14 0 L 0 0 0 14" fill="transparent" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect fill="url(#announcement-grid)" width="100%" height="100%" />
          </svg>

          <div className="relative site-container flex items-center justify-between gap-3 pr-8 sm:pr-10 min-h-[36px]">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#48C293]/20 text-[#17332A] border border-[#48C293]/30">
                New
              </span>
              <p className="text-xs sm:text-sm text-[#161D1A] font-medium truncate sm:whitespace-normal">
                {t(
                  "We've successfully closed our post-seed investment.",
                  "We hebben onze post-seed investering succesvol afgerond."
                )}{' '}
                <a
                  href="#news"
                  className="font-bold text-[#17332A] hover:text-[#48C293] underline underline-offset-2 transition-colors inline-flex items-center gap-0.5 ml-1"
                >
                  {t('Read more →', 'Lees meer →')}
                </a>
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              className="absolute inset-y-0 right-2 sm:right-4 my-auto h-6 w-6 flex items-center justify-center rounded-md p-1 text-[#1f7f77] transition-colors hover:bg-black/5 hover:text-[#155e57]"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
