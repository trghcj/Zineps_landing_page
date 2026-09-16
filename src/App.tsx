import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { createCobeGlobe } from './utils/cobe';
import { englishReplicaHtml, dutchReplicaHtml } from './data/replicaData';

export type Lang = 'en' | 'nl';

export interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, nl: string) => string;
}

export const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: (en) => en,
});

export const useLang = () => useContext(LangContext);

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const containerRef = useRef<HTMLDivElement>(null);

  const t = (en: string, nl: string) => (lang === 'en' ? en : nl);

  // Wire up interactive functionality to the replica elements
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // 1. Language selector dropdown
    const langButtons = root.querySelectorAll('header .relative button');
    langButtons.forEach((btn) => {
      const text = btn.textContent || '';
      if (text.includes('EN') || text.includes('NL')) {
        const dropdown = btn.nextElementSibling as HTMLElement | null;
        if (dropdown) {
          const toggleDropdown = (e: Event) => {
            e.stopPropagation();
            const isHidden = dropdown.classList.contains('opacity-0');
            if (isHidden) {
              dropdown.classList.remove('opacity-0', 'invisible');
              dropdown.classList.add('opacity-100', 'visible');
            } else {
              dropdown.classList.add('opacity-0', 'invisible');
              dropdown.classList.remove('opacity-100', 'visible');
            }
          };
          btn.addEventListener('click', toggleDropdown);

          // Language options inside dropdown
          const options = dropdown.querySelectorAll('button');
          options.forEach((opt) => {
            opt.addEventListener('click', (e: Event) => {
              e.stopPropagation();
              const optText = opt.textContent || '';
              if (optText.includes('English') || optText.includes('EN')) {
                setLang('en');
              } else if (optText.includes('Nederlands') || optText.includes('NL')) {
                setLang('nl');
              }
              dropdown.classList.add('opacity-0', 'invisible');
              dropdown.classList.remove('opacity-100', 'visible');
            });
          });
        }
      }
    });

    // 2. Navigation Dropdowns (Products, Knowledge Base)
    const navGroups = root.querySelectorAll('header nav .group');
    navGroups.forEach((group) => {
      const menu = group.querySelector('div.absolute') as HTMLElement | null;
      if (menu) {
        group.addEventListener('mouseenter', () => {
          menu.classList.remove('opacity-0', 'invisible');
          menu.classList.add('opacity-100', 'visible');
        });
        group.addEventListener('mouseleave', () => {
          menu.classList.add('opacity-0', 'invisible');
          menu.classList.remove('opacity-100', 'visible');
        });
      }
    });

    // 3. Top Announcement Banner Dismiss
    const closeBannerBtn = root.querySelector('button[aria-label="Close banner"]');
    if (closeBannerBtn) {
      const banner = closeBannerBtn.closest('.relative.isolate');
      closeBannerBtn.addEventListener('click', () => {
        if (banner) (banner as HTMLElement).style.display = 'none';
      });
    }

    // 4. Cookie settings modal dismiss
    const acceptBtn = Array.from(root.querySelectorAll('button')).find(
      (b) => b.textContent?.trim() === 'Accept' || b.textContent?.trim() === 'Accepteren'
    );
    const declineBtn = Array.from(root.querySelectorAll('button')).find(
      (b) => b.textContent?.trim() === 'Decline' || b.textContent?.trim() === 'Weigeren'
    );
    const dismissCookie = () => {
      const cookieBox = root.querySelector('.rounded-2xl.border.bg-card') || acceptBtn?.closest('div[class*="shadow"]');
      if (cookieBox) {
        (cookieBox as HTMLElement).style.display = 'none';
      }
    };
    if (acceptBtn) acceptBtn.addEventListener('click', dismissCookie);
    if (declineBtn) declineBtn.addEventListener('click', dismissCookie);

    // 5. Workflow Tabs Switching with 3D Forward Zoom & Settle Animation
    const tab0 = root.querySelector('#workflow-tab-0') as HTMLElement | null;
    const tab1 = root.querySelector('#workflow-tab-1') as HTMLElement | null;
    const pane0 = root.querySelector('#workflow-pane-0') as HTMLElement | null;
    const pane1 = root.querySelector('#workflow-pane-1') as HTMLElement | null;

    if (tab0 && tab1 && pane0 && pane1) {
      let currentActive = 0;

      const switchWorkflowTab = (targetTab: number) => {
        if (targetTab === currentActive) return;
        currentActive = targetTab;

        const activeBtn = targetTab === 0 ? tab0 : tab1;
        const inactiveBtn = targetTab === 0 ? tab1 : tab0;
        const incomingPane = targetTab === 0 ? pane0 : pane1;
        const outgoingPane = targetTab === 0 ? pane1 : pane0;

        // 1. Update Tab Headers
        const activeIndicator = activeBtn.querySelector('.tab-indicator') as HTMLElement | null;
        const activeLabel = activeBtn.querySelector('.tab-label') as HTMLElement | null;
        const inactiveIndicator = inactiveBtn.querySelector('.tab-indicator') as HTMLElement | null;
        const inactiveLabel = inactiveBtn.querySelector('.tab-label') as HTMLElement | null;

        if (activeIndicator) activeIndicator.classList.remove('hidden');
        if (activeLabel) {
          activeLabel.classList.remove('text-[#424242]');
          activeLabel.classList.add('text-white');
        }
        if (inactiveIndicator) inactiveIndicator.classList.add('hidden');
        if (inactiveLabel) {
          inactiveLabel.classList.remove('text-white');
          inactiveLabel.classList.add('text-[#424242]');
        }

        // 2. Outgoing Pane: recedes gracefully back into the distance and fades out
        outgoingPane.style.transition = 'transform 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease';
        outgoingPane.style.transform = 'scale(0.90) translateY(30px)';
        outgoingPane.style.opacity = '0';
        outgoingPane.style.zIndex = '1';
        outgoingPane.classList.add('pointer-events-none');

        // 3. Incoming Pane: "coming towards us then settle down to the exact position they are now" (Slower, cinematic timeframe)
        incomingPane.classList.remove('pointer-events-none');
        incomingPane.style.zIndex = '2';
        // Set initial starting position deeper in the background
        incomingPane.style.transition = 'none';
        incomingPane.style.transform = 'scale(0.86) translateY(44px)';
        incomingPane.style.opacity = '0';

        // Force reflow
        void incomingPane.offsetWidth;

        // Animate smoothly forward with a gentle, luxurious spring overshoot and settle (950ms timeframe)
        incomingPane.style.transition = 'transform 950ms cubic-bezier(0.25, 1.35, 0.45, 1), opacity 700ms cubic-bezier(0.16, 1, 0.3, 1)';
        incomingPane.style.transform = 'scale(1) translateY(0px)';
        incomingPane.style.opacity = '1';
      };

      tab0.onclick = (e) => {
        e.preventDefault();
        switchWorkflowTab(0);
      };
      tab1.onclick = (e) => {
        e.preventDefault();
        switchWorkflowTab(1);
      };
    }

    // 6. FAQ Accordion Interaction (Toggle shrink with +, expand with −)
    const faqButtons = root.querySelectorAll('[data-faq-button], section button[aria-expanded]');
    faqButtons.forEach((btnEl) => {
      const btn = btnEl as HTMLElement;
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const contentDiv = (btn.nextElementSibling || btn.parentElement?.querySelector('[data-faq-content]')) as HTMLElement | null;
        const iconSpan = (btn.querySelector('[data-faq-icon]') || btn.querySelector('span:last-child, span.text-xl')) as HTMLElement | null;
        const isCollapsed = contentDiv?.classList.contains('is-collapsed') || btn.getAttribute('aria-expanded') === 'false';

        if (!isCollapsed) {
          // SHRINK: collapse height to 0 and turn sign to +
          btn.setAttribute('aria-expanded', 'false');
          if (contentDiv) {
            contentDiv.classList.remove('is-expanded', 'grid-rows-[1fr]', 'pt-3');
            contentDiv.classList.add('is-collapsed');
          }
          if (iconSpan) {
            iconSpan.textContent = '+';
          }
        } else {
          // EXPAND: restore height and turn sign to −
          btn.setAttribute('aria-expanded', 'true');
          if (contentDiv) {
            contentDiv.classList.remove('is-collapsed', 'grid-rows-[0fr]');
            contentDiv.classList.add('is-expanded');
          }
          if (iconSpan) {
            iconSpan.textContent = '−';
          }
        }
      };
    });

    // 7. FAQ Search Filter & Glow on Click/Focus
    const faqSearchInputs = root.querySelectorAll('input[placeholder*="Search questions"], input[placeholder*="Zoek vragen"]');
    faqSearchInputs.forEach((inputEl) => {
      const input = inputEl as HTMLInputElement;
      const box = input.closest('.faq-search-box') as HTMLElement | null;
      if (box) {
        input.addEventListener('focus', () => box.classList.add('is-focused'));
        input.addEventListener('blur', () => box.classList.remove('is-focused'));
      }
      input.oninput = () => {
        const query = input.value.toLowerCase().trim();
        const faqCards = root.querySelectorAll('[data-faq-card], section .grid.grid-cols-1.gap-4.md\\:grid-cols-2 > div.group');
        faqCards.forEach((card) => {
          const cardEl = card as HTMLElement;
          const text = cardEl.textContent?.toLowerCase() || '';
          if (!query || text.includes(query)) {
            cardEl.style.display = '';
            if (query) {
              const btn = cardEl.querySelector('[data-faq-button], button[aria-expanded]');
              const icon = cardEl.querySelector('[data-faq-icon]') || btn?.querySelector('span:last-child, span.text-xl');
              const contentDiv = cardEl.querySelector('[data-faq-content]') || (btn?.nextElementSibling as HTMLElement | null);
              btn?.setAttribute('aria-expanded', 'true');
              if (icon) icon.textContent = '−';
              if (contentDiv) {
                contentDiv.classList.remove('is-collapsed', 'grid-rows-[0fr]');
                contentDiv.classList.add('is-expanded');
              }
            }
          } else {
            cardEl.style.display = 'none';
          }
        });
      };
    });

    // 7.1 Integration Category Filter Chips
    const integrationFilterButtons = root.querySelectorAll('[data-integration-filters] button');
    integrationFilterButtons.forEach((btnEl) => {
      const btn = btnEl as HTMLButtonElement;
      btn.onclick = (e) => {
        e.preventDefault();
        integrationFilterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      };
    });

    // 7.2 FAQ Category Filter Chips
    const faqFilterButtons = root.querySelectorAll('[data-faq-filters] button');
    faqFilterButtons.forEach((btnEl) => {
      const btn = btnEl as HTMLButtonElement;
      btn.onclick = (e) => {
        e.preventDefault();
        faqFilterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const topic = btn.getAttribute('data-topic') || 'all';
        const faqCards = root.querySelectorAll('[data-faq-card]');
        faqCards.forEach((cardEl) => {
          const card = cardEl as HTMLElement;
          const cardTopic = card.getAttribute('data-topic');
          if (topic === 'all' || cardTopic === topic) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      };
    });


    // 7.5 News Carousel Scroll Buttons (< and >)
    const newsContainer = root.querySelector('[data-news-container], .snap-x.snap-mandatory.scrollbar-hide') as HTMLElement | null;
    const newsLeftBtn = root.querySelector('[data-news-scroll-left], button[aria-label="Scroll left"]') as HTMLButtonElement | null;
    const newsRightBtn = root.querySelector('[data-news-scroll-right], button[aria-label="Scroll right"]') as HTMLButtonElement | null;
    let cleanupNewsScroll: (() => void) | null = null;

    if (newsContainer && (newsLeftBtn || newsRightBtn)) {
      const updateNewsArrows = () => {
        const atStart = newsContainer.scrollLeft <= 10;
        const atEnd = newsContainer.scrollLeft + newsContainer.clientWidth >= newsContainer.scrollWidth - 15;

        if (newsLeftBtn) {
          newsLeftBtn.disabled = atStart;
          if (atStart) {
            newsLeftBtn.classList.add('opacity-30', 'cursor-not-allowed');
            newsLeftBtn.classList.remove('cursor-pointer', 'hover:bg-muted');
          } else {
            newsLeftBtn.classList.remove('opacity-30', 'cursor-not-allowed');
            newsLeftBtn.classList.add('cursor-pointer', 'hover:bg-muted');
          }
        }

        if (newsRightBtn) {
          newsRightBtn.disabled = atEnd;
          if (atEnd) {
            newsRightBtn.classList.add('opacity-30', 'cursor-not-allowed');
            newsRightBtn.classList.remove('cursor-pointer', 'hover:bg-muted');
          } else {
            newsRightBtn.classList.remove('opacity-30', 'cursor-not-allowed');
            newsRightBtn.classList.add('cursor-pointer', 'hover:bg-muted');
          }
        }
      };

      if (newsLeftBtn) {
        newsLeftBtn.onclick = (e) => {
          e.preventDefault();
          const cardWidth = newsContainer.querySelector('a')?.offsetWidth || 300;
          newsContainer.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
        };
      }

      if (newsRightBtn) {
        newsRightBtn.onclick = (e) => {
          e.preventDefault();
          const cardWidth = newsContainer.querySelector('a')?.offsetWidth || 300;
          newsContainer.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
        };
      }

      newsContainer.addEventListener('scroll', updateNewsArrows, { passive: true });
      updateNewsArrows();
      cleanupNewsScroll = () => {
        newsContainer.removeEventListener('scroll', updateNewsArrows);
      };
    }

    // 8. Mobile Menu Drawer Toggle
    const mobileMenuBtn = root.querySelector('header button.md\\:hidden') as HTMLElement | null;
    let mobileDrawer = document.getElementById('zineps-mobile-drawer');
    if (!mobileDrawer) {
      mobileDrawer = document.createElement('div');
      mobileDrawer.id = 'zineps-mobile-drawer';
      mobileDrawer.className = 'fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 pointer-events-none';
      mobileDrawer.innerHTML = `
        <div class="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 translate-x-full">
          <div>
            <div class="flex items-center justify-between pb-6 border-b border-gray-100">
              <img alt="Zineps Logo" class="h-7 w-auto" src="/_next/static/media/Group.4de5c46a.svg">
              <button id="close-mobile-drawer" class="p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <nav class="mt-6 flex flex-col gap-4 text-base font-medium text-gray-800">
              <a href="/shipping" class="py-2 hover:text-[#60948A] border-b border-gray-50">Shipping for e-commerce</a>
              <a href="/logistics-operating-system" class="py-2 hover:text-[#60948A] border-b border-gray-50">Logistics OS</a>
              <a href="/ai-shipping-intelligence" class="py-2 hover:text-[#60948A] border-b border-gray-50">Shipping AI</a>
              <a href="/integrations" class="py-2 hover:text-[#60948A] border-b border-gray-50">Integrations</a>
              <a href="/pricing" class="py-2 hover:text-[#60948A] border-b border-gray-50">Pricing</a>
              <a href="/knowledge-base" class="py-2 hover:text-[#60948A]">Knowledge Base</a>
            </nav>
          </div>
          <div class="pt-6 border-t border-gray-100 flex flex-col gap-3">
            <div class="flex gap-2">
              <button id="m-lang-en" class="flex-1 py-2 text-sm font-medium border rounded-md ${lang === 'en' ? 'border-[#60948A] text-[#60948A] bg-[#60948A]/10' : 'border-gray-300 text-gray-700'}">English</button>
              <button id="m-lang-nl" class="flex-1 py-2 text-sm font-medium border rounded-md ${lang === 'nl' ? 'border-[#60948A] text-[#60948A] bg-[#60948A]/10' : 'border-gray-300 text-gray-700'}">Nederlands</button>
            </div>
            <button class="zineps-cta-btn w-full py-3 rounded-lg font-semibold text-[#16332c] shadow">Sign up for free</button>
          </div>
        </div>
      `;
      document.body.appendChild(mobileDrawer);
    }

    const drawerBackdrop = mobileDrawer;
    const drawerPanel = mobileDrawer.querySelector('div') as HTMLElement;
    const closeDrawerBtn = mobileDrawer.querySelector('#close-mobile-drawer');

    const openDrawer = (e: Event) => {
      e.stopPropagation();
      drawerBackdrop.classList.remove('opacity-0', 'pointer-events-none');
      drawerBackdrop.classList.add('opacity-100', 'pointer-events-auto');
      drawerPanel.classList.remove('translate-x-full');
      drawerPanel.classList.add('translate-x-0');
    };

    const closeDrawer = () => {
      drawerBackdrop.classList.add('opacity-0', 'pointer-events-none');
      drawerBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
      drawerPanel.classList.add('translate-x-full');
      drawerPanel.classList.remove('translate-x-0');
    };

    if (mobileMenuBtn) mobileMenuBtn.onclick = openDrawer;
    if (closeDrawerBtn) (closeDrawerBtn as HTMLElement).onclick = closeDrawer;
    drawerBackdrop.onclick = (e) => {
      if (e.target === drawerBackdrop) closeDrawer();
    };

    const mEn = mobileDrawer.querySelector('#m-lang-en');
    const mNl = mobileDrawer.querySelector('#m-lang-nl');
    if (mEn) (mEn as HTMLElement).onclick = () => { setLang('en'); closeDrawer(); };
    if (mNl) (mNl as HTMLElement).onclick = () => { setLang('nl'); closeDrawer(); };

    // 8.5 CTA Section Stat Counters (scroll-triggered countup)
    const statNums = root.querySelectorAll('.zineps-cta-stat-num');
    let statObserver: IntersectionObserver | null = null;
    if (statNums.length > 0) {
      statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.getAttribute('data-target') || '0', 10);
            const start = 0;
            const duration = 1600;
            const startTime = performance.now();
            const tick = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.round(start + eased * (target - start)).toString();
              if (progress < 1) {
                requestAnimationFrame(tick);
              } else {
                el.textContent = target.toString();
              }
            };
            requestAnimationFrame(tick);
            statObserver?.unobserve(el);
          }
        });
      }, { threshold: 0.2 });
      statNums.forEach(el => statObserver!.observe(el));
    }

    // 8.6 Uptime Chart Interactive Hover Tooltip (matching Image 2)
    const uptimeCharts = root.querySelectorAll('.zineps-uptime-chart');
    const uptimeCleanups: Array<() => void> = [];

    uptimeCharts.forEach((chartEl) => {
      const container = chartEl as HTMLElement;
      const svg = container.querySelector('.zineps-uptime-svg') as SVGSVGElement | null;
      const linePath = container.querySelector('.zineps-uptime-line') as SVGPathElement | null;
      const tooltip = container.querySelector('.zineps-uptime-tooltip') as HTMLElement | null;
      const hoverMarker = container.querySelector('.zineps-uptime-hover-marker') as SVGCircleElement | null;
      const guideline = container.querySelector('.zineps-uptime-guideline') as SVGLineElement | null;
      const valRev = container.querySelector('[data-val="revenue"]') as HTMLElement | null;
      const valShip = container.querySelector('[data-val="shipments"]') as HTMLElement | null;

      if (!svg || !linePath || !tooltip) return;

      const totalLength = linePath.getTotalLength();

      const handlePointerMove = (e: MouseEvent) => {
        const rect = svg.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        if (mouseX < 0 || mouseX > rect.width) {
          handlePointerLeave();
          return;
        }

        const svgX = Math.max(0, Math.min(800, (mouseX / rect.width) * 800));

        // Binary search for point on SVG path with closest x coordinate
        let low = 0;
        let high = totalLength;
        let bestPt = linePath.getPointAtLength(0);
        for (let i = 0; i < 24; i++) {
          const mid = (low + high) / 2;
          const pt = linePath.getPointAtLength(mid);
          if (Math.abs(pt.x - svgX) < 0.5) {
            bestPt = pt;
            break;
          }
          if (pt.x < svgX) {
            low = mid;
          } else {
            high = mid;
          }
          bestPt = pt;
        }

        // Update marker and guideline
        if (hoverMarker) {
          hoverMarker.setAttribute('cx', bestPt.x.toString());
          hoverMarker.setAttribute('cy', bestPt.y.toString());
          hoverMarker.style.opacity = '1';
        }
        if (guideline) {
          guideline.setAttribute('x1', bestPt.x.toString());
          guideline.setAttribute('x2', bestPt.x.toString());
          guideline.style.opacity = '1';
        }

        // Position tooltip relative to container
        const containerRect = container.getBoundingClientRect();
        const pointPixelX = rect.left - containerRect.left + (bestPt.x / 800) * rect.width;
        const pointPixelY = rect.top - containerRect.top + (bestPt.y / 120) * rect.height;

        // Prevent tooltip from overflowing left or right
        const clampedX = Math.max(70, Math.min(containerRect.width - 70, pointPixelX));

        tooltip.style.left = `${clampedX}px`;
        tooltip.style.top = `${pointPixelY - 10}px`;
        tooltip.style.opacity = '1';

        // Calculate dynamic values matching Image 2 reference
        const progress = Math.max(0, Math.min(1, svgX / 800));
        const heightFactor = 1 - (bestPt.y / 120);
        const revenue = Math.round(48000 + progress * 22000 + heightFactor * 18000);
        const shipments = Math.round(1100 + progress * 720 + heightFactor * 480);

        if (valRev) valRev.textContent = revenue.toLocaleString();
        if (valShip) valShip.textContent = shipments.toLocaleString();
      };

      const handlePointerLeave = () => {
        tooltip.style.opacity = '0';
        if (hoverMarker) hoverMarker.style.opacity = '0';
        if (guideline) guideline.style.opacity = '0';
      };

      container.addEventListener('mousemove', handlePointerMove);
      container.addEventListener('mouseleave', handlePointerLeave);

      uptimeCleanups.push(() => {
        container.removeEventListener('mousemove', handlePointerMove);
        container.removeEventListener('mouseleave', handlePointerLeave);
      });
    });

    // 9. Global document click to close dropdowns
    const handleDocClick = () => {
      const openDropdowns = root.querySelectorAll('header .visible');
      openDropdowns.forEach((d) => {
        d.classList.add('opacity-0', 'invisible');
        d.classList.remove('opacity-100', 'visible');
      });
    };
    document.addEventListener('click', handleDocClick);

    // 10. Tablet Scroll Turning Animation (Turns straight as user scrolls down)
    const tablet = root.querySelector('#hero-tablet-mockup') as HTMLElement | null;
    let updateTabletOnScroll: (() => void) | null = null;
    if (tablet) {
      updateTabletOnScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset || 0;
        // As scrollY goes from 0 to 450px, progress goes from 0 (tilted) to 1 (flat/straight)
        const progress = Math.min(Math.max(scrollY / 450, 0), 1);
        
        // Ease-out curve for natural physical leveling
        const eased = 1 - Math.pow(1 - progress, 2);

        const rotX = 20 * (1 - eased);
        const rotZ = -3 * (1 - eased);
        const scale = 1.06 - 0.04 * eased;

        tablet.style.transform = `scale(${scale.toFixed(3)}) rotateX(${rotX.toFixed(2)}deg) rotateZ(${rotZ.toFixed(2)}deg)`;
      };

      window.addEventListener('scroll', updateTabletOnScroll, { passive: true });
      updateTabletOnScroll(); // initialize state
    }

    // 11. Carrier Cubes Cursor Evasion Physics ("run away from cursor")
    const carrierElements = Array.from(root.querySelectorAll('[data-carrier-cube]')) as HTMLElement[];
    let cancelPhysicsLoop: (() => void) | null = null;

    if (carrierElements.length > 0) {
      interface CarrierItem {
        el: HTMLElement;
        baseX: number;
        baseY: number;
        currentX: number;
        currentY: number;
        targetX: number;
        targetY: number;
      }

      const items: CarrierItem[] = carrierElements.map((el) => {
        const baseX = parseFloat(el.getAttribute('data-base-x') || '0');
        const baseY = parseFloat(el.getAttribute('data-base-y') || '0');
        return {
          el,
          baseX,
          baseY,
          currentX: 0,
          currentY: 0,
          targetX: 0,
          targetY: 0,
        };
      });

      let mouseX = -9999;
      let mouseY = -9999;

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      const handleMouseLeave = () => {
        mouseX = -9999;
        mouseY = -9999;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);

      const REPEL_RADIUS = 160; // radius within which the logo runs away
      const MAX_REPEL_FORCE = 75; // max displacement in px

      let animId: number;
      const tick = () => {
        const now = performance.now() * 0.001; // seconds

        items.forEach((item, idx) => {
          const rect = item.el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const dx = mouseX - centerX;
          const dy = mouseY - centerY;
          const dist = Math.hypot(dx, dy);

          // Autonomous idle drift: figures move from right-top corner to left-bottom corner when not touched
          const phase = idx * 0.45;
          const t = now * 1.5 + phase;
          const wave = Math.sin(t);
          // Moving along the diagonal axis:
          // When wave > 0: moves towards left-bottom (-X, +Y)
          // When wave < 0: moves towards right-top (+X, -Y)
          const idleDriftX = -wave * 15;
          const idleDriftY = wave * 15;
          const idleTilt = -wave * 4.5;

          if (dist < REPEL_RADIUS && dist > 0) {
            // Repel vector pointing AWAY from cursor
            const safeDist = Math.max(dist, 1);
            const factor = Math.pow((REPEL_RADIUS - safeDist) / REPEL_RADIUS, 1.3);
            const repelMagnitude = factor * MAX_REPEL_FORCE;
            const nx = -dx / safeDist;
            const ny = -dy / safeDist;
            item.targetX = nx * repelMagnitude;
            item.targetY = ny * repelMagnitude;
          } else {
            // Autonomous idle diagonal movement
            item.targetX = idleDriftX;
            item.targetY = idleDriftY;
          }

          // Smooth lerp physics
          item.currentX += (item.targetX - item.currentX) * 0.15;
          item.currentY += (item.targetY - item.currentY) * 0.15;

          const totalX = item.baseX + item.currentX;
          const totalY = item.baseY + item.currentY;
          const tilt = (dist < REPEL_RADIUS && dist > 0) ? item.currentX * 0.3 : idleTilt;
          const scale = 1 + Math.min(Math.hypot(item.currentX, item.currentY) / 200, 0.15);

          item.el.style.transform = `translate(${totalX.toFixed(1)}px, ${totalY.toFixed(1)}px) rotate(${tilt.toFixed(1)}deg) scale(${scale.toFixed(2)})`;
        });

        animId = requestAnimationFrame(tick);
      };

      animId = requestAnimationFrame(tick);

      cancelPhysicsLoop = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    // 12. Interactive Movable Analytics Graph ("this graph is movable")
    const chartSvg = root.querySelector('[data-analytics-chart-svg]') as SVGSVGElement | null;
    const chartContainer = root.querySelector('[data-analytics-chart-container]') as HTMLElement | null;
    let cleanupChartListeners: (() => void) | null = null;

    if (chartSvg && chartContainer) {
      const markerGlow = chartSvg.querySelector('[data-analytics-marker-glow]');
      const markerDot = chartSvg.querySelector('[data-analytics-marker-dot]');
      const tooltipWrapper = chartContainer.querySelector('[data-analytics-tooltip-wrapper]') as HTMLElement | null;
      const tooltipValue = chartContainer.querySelector('[data-analytics-tooltip-value]') as HTMLElement | null;
      const dayLines = Array.from(chartSvg.querySelectorAll('[data-day-line]'));
      const dayTexts = Array.from(chartSvg.querySelectorAll('[data-day-text]'));

      const daysData = [
        { day: 'Mo', x: 10, y: 110, val: 450, left: 3.125, top: 78.5714 },
        { day: 'Tu', x: 60, y: 98.8298, val: 520, left: 18.75, top: 70.5927 },
        { day: 'Wo', x: 110, y: 73.2979, val: 680, left: 34.375, top: 52.3556 },
        { day: 'Th', x: 160, y: 62.1277, val: 750, left: 50.0, top: 44.3769 },
        { day: 'Fr', x: 210, y: 82.8723, val: 620, left: 65.625, top: 59.1945 },
        { day: 'Sa', x: 260, y: 57.3404, val: 780, left: 81.25, top: 40.9574 },
        { day: 'Su', x: 310, y: 35.0, val: 920, left: 96.875, top: 25.0 },
      ];

      let activeDayIdx = 3; // default Th (750)

      const setDay = (idx: number) => {
        const pt = daysData[idx];
        if (!pt) return;
        activeDayIdx = idx;

        if (markerGlow) {
          markerGlow.setAttribute('cx', String(pt.x));
          markerGlow.setAttribute('cy', String(pt.y));
        }
        if (markerDot) {
          markerDot.setAttribute('cx', String(pt.x));
          markerDot.setAttribute('cy', String(pt.y));
        }
        if (tooltipWrapper) {
          tooltipWrapper.style.left = `${pt.left}%`;
          tooltipWrapper.style.top = `${pt.top}%`;
        }
        if (tooltipValue) {
          tooltipValue.textContent = String(pt.val);
        }

        // Highlight active dashed guideline
        dayLines.forEach((line, i) => {
          if (i === idx) {
            line.setAttribute('opacity', '0.85');
            line.setAttribute('stroke-width', '1.5');
          } else {
            line.setAttribute('opacity', '0.4');
            line.setAttribute('stroke-width', '1');
          }
        });

        // Highlight active day text label
        dayTexts.forEach((text, i) => {
          if (i === idx) {
            text.setAttribute('class', 'text-[12px] font-bold fill-[#424242] transition-colors cursor-pointer');
          } else {
            text.setAttribute('class', 'text-[12px] font-medium fill-muted-foreground transition-colors cursor-pointer');
          }
        });
      };

      const handlePointerMove = (clientX: number) => {
        const rect = chartSvg.getBoundingClientRect();
        if (rect.width <= 0) return;
        const mouseX = Math.max(0, Math.min(rect.width, clientX - rect.left));
        const svgX = (mouseX / rect.width) * 320;

        let closestIdx = 0;
        let minDiff = Infinity;
        daysData.forEach((pt, i) => {
          const diff = Math.abs(svgX - pt.x);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = i;
          }
        });

        if (closestIdx !== activeDayIdx) {
          setDay(closestIdx);
        }
      };

      const onMouseMove = (e: MouseEvent) => {
        handlePointerMove(e.clientX);
      };

      const onTouchMove = (e: TouchEvent) => {
        if (e.touches && e.touches[0]) {
          handlePointerMove(e.touches[0].clientX);
        }
      };

      let isDragging = false;
      const onMouseDown = (e: MouseEvent) => {
        isDragging = true;
        handlePointerMove(e.clientX);
      };
      const onWindowMouseMove = (e: MouseEvent) => {
        if (isDragging) {
          handlePointerMove(e.clientX);
        }
      };
      const onWindowMouseUp = () => {
        isDragging = false;
      };

      chartContainer.addEventListener('mousemove', onMouseMove);
      chartContainer.addEventListener('mousedown', onMouseDown);
      chartContainer.addEventListener('touchmove', onTouchMove, { passive: true });
      chartContainer.addEventListener('touchstart', onTouchMove, { passive: true });
      window.addEventListener('mousemove', onWindowMouseMove);
      window.addEventListener('mouseup', onWindowMouseUp);

      // Direct click on day text labels
      dayTexts.forEach((textEl, i) => {
        (textEl as SVGElement).onclick = (e) => {
          e.stopPropagation();
          setDay(i);
        };
      });

      cleanupChartListeners = () => {
        chartContainer.removeEventListener('mousemove', onMouseMove);
        chartContainer.removeEventListener('mousedown', onMouseDown);
        chartContainer.removeEventListener('touchmove', onTouchMove);
        chartContainer.removeEventListener('touchstart', onTouchMove);
        window.removeEventListener('mousemove', onWindowMouseMove);
        window.removeEventListener('mouseup', onWindowMouseUp);
      };
    }

    // 13. Interactive Scalability & Uptime Stepped Graph ("this graph also shows value when cursor is being hovered on it")
    const uptimeSvg = root.querySelector('[data-uptime-svg]') as SVGSVGElement | null;
    const uptimeContainer = root.querySelector('[data-uptime-card-container]') as HTMLElement | null;
    let cleanupUptimeListeners: (() => void) | null = null;

    if (uptimeSvg && uptimeContainer) {
      const dotHalo = uptimeSvg.querySelector('[data-uptime-dot-halo]');
      const dotCore = uptimeSvg.querySelector('[data-uptime-dot-core]');
      const tooltip = uptimeContainer.querySelector('[data-uptime-tooltip]') as HTMLElement | null;
      const tooltipRevenue = uptimeContainer.querySelector('[data-uptime-tooltip-revenue]') as HTMLElement | null;
      const tooltipShipments = uptimeContainer.querySelector('[data-uptime-tooltip-shipments]') as HTMLElement | null;
      const vGuides = Array.from(uptimeSvg.querySelectorAll('[data-uptime-vguide]'));
      const cornerNodes = Array.from(uptimeSvg.querySelectorAll('[data-uptime-node]'));

      const uptimeTiers = [
        { step: 0, x: 460, y: 250, revenue: '15,000', shipments: '450', left: 32.86, top: 69.44, anchorTop: true },
        { step: 1, x: 680, y: 190, revenue: '34,500', shipments: '980', left: 48.57, top: 52.78, anchorTop: false },
        { step: 2, x: 900, y: 130, revenue: '68,000', shipments: '1,888', left: 64.29, top: 36.11, anchorTop: false },
        { step: 3, x: 1120, y: 75, revenue: '142,000', shipments: '4,120', left: 80.00, top: 20.83, anchorTop: false },
        { step: 4, x: 1280, y: 30, revenue: '380,000', shipments: '12,500', left: 91.43, top: 8.33, anchorTop: false },
      ];

      let currentTierIdx = 2; // Default to Tier 2 (68,000 / 1,888) as in reference screenshot

      const setUptimeTier = (idx: number) => {
        const tier = uptimeTiers[idx];
        if (!tier) return;
        currentTierIdx = idx;

        if (dotHalo) {
          dotHalo.setAttribute('cx', String(tier.x));
          dotHalo.setAttribute('cy', String(tier.y));
        }
        if (dotCore) {
          dotCore.setAttribute('cx', String(tier.x));
          dotCore.setAttribute('cy', String(tier.y));
        }
        if (tooltip) {
          tooltip.style.left = `${tier.left}%`;
          tooltip.style.top = `${tier.top}%`;
          tooltip.style.transform = tier.anchorTop ? 'translate(-50%, -115%)' : 'translate(-50%, 14px)';
        }
        if (tooltipRevenue) {
          tooltipRevenue.textContent = tier.revenue;
        }
        if (tooltipShipments) {
          tooltipShipments.textContent = tier.shipments;
        }

        // Highlight active guide line
        vGuides.forEach((g, i) => {
          g.setAttribute('opacity', i === idx ? '0.75' : '0.25');
        });

        // Highlight active corner node
        cornerNodes.forEach((n, i) => {
          n.setAttribute('opacity', i === idx ? '1' : '0.6');
          n.setAttribute('r', i === idx ? '5' : '4');
        });
      };

      const handleUptimePointer = (clientX: number) => {
        const rect = uptimeSvg.getBoundingClientRect();
        if (rect.width <= 0) return;
        const mouseX = Math.max(0, Math.min(rect.width, clientX - rect.left));
        const svgX = (mouseX / rect.width) * 1400;

        let targetIdx = 0;
        if (svgX < 570) {
          targetIdx = 0;
        } else if (svgX < 790) {
          targetIdx = 1;
        } else if (svgX < 1010) {
          targetIdx = 2;
        } else if (svgX < 1200) {
          targetIdx = 3;
        } else {
          targetIdx = 4;
        }

        if (targetIdx !== currentTierIdx) {
          setUptimeTier(targetIdx);
        }
      };

      const onUptimeMouseMove = (e: MouseEvent) => {
        handleUptimePointer(e.clientX);
      };

      const onUptimeTouchMove = (e: TouchEvent) => {
        if (e.touches && e.touches[0]) {
          handleUptimePointer(e.touches[0].clientX);
        }
      };

      uptimeContainer.addEventListener('mousemove', onUptimeMouseMove);
      uptimeContainer.addEventListener('touchmove', onUptimeTouchMove, { passive: true });
      uptimeContainer.addEventListener('touchstart', onUptimeTouchMove, { passive: true });

      cleanupUptimeListeners = () => {
        uptimeContainer.removeEventListener('mousemove', onUptimeMouseMove);
        uptimeContainer.removeEventListener('touchmove', onUptimeTouchMove);
        uptimeContainer.removeEventListener('touchstart', onUptimeTouchMove);
      };
    }

    // 14. 3D Interactive Cobe Globe with Zineps Service Hubs & Cursor Rotation
    const globeCanvas = root.querySelector('[data-zineps-globe-canvas]') as HTMLCanvasElement | null;
    let cleanupGlobe: (() => void) | null = null;

    if (globeCanvas) {
      let currentPhi = 4.75;
      let currentTheta = 0.28;
      let currentPsi = 0;
      let currentScale = 1.0;

      let targetPhi = 4.75;
      let targetTheta = 0.28;
      let targetPsi = 0;
      let targetScale = 1.0;

      let isDragging = false;
      let isRollMode = false;
      let startX = 0;
      let startY = 0;
      let startPhi = 4.75;
      let startTheta = 0.28;
      let startPsi = 0;
      let startAngle = 0;

      // Zineps Global Service Locations (Headquarters & logistics network hubs)
      const serviceLocations = [
        { location: [52.3676, 4.9041] as [number, number], size: 0.12 }, // Amsterdam, NL (HQ & Primary Hub)
        { location: [50.8503, 4.3517] as [number, number], size: 0.09 }, // Brussels, Belgium (Bpost / Bol)
        { location: [50.1109, 8.6821] as [number, number], size: 0.09 }, // Frankfurt, Germany (DHL Hub)
        { location: [51.5074, -0.1278] as [number, number], size: 0.09 }, // London, UK (DPD / Royal Mail)
        { location: [48.8566, 2.3522] as [number, number], size: 0.08 }, // Paris, France (Colissimo)
        { location: [40.4168, -3.7038] as [number, number], size: 0.08 }, // Madrid, Spain (Correos)
        { location: [45.4642, 9.1900] as [number, number], size: 0.08 }, // Milan, Italy (Poste Italiane)
        { location: [40.7128, -74.0060] as [number, number], size: 0.09 }, // New York, USA (Transatlantic lane)
        { location: [34.0522, -118.2437] as [number, number], size: 0.08 }, // Los Angeles, USA
        { location: [22.3193, 114.1694] as [number, number], size: 0.08 }, // Shenzhen / Hong Kong (E-commerce import)
      ];

      let width = globeCanvas.offsetWidth || 800;

      // Shipping transit lanes connecting Zineps logistics hubs
      const shippingArcs = [
        { from: [52.3676, 4.9041] as [number, number], to: [40.7128, -74.0060] as [number, number] }, // Amsterdam -> New York
        { from: [52.3676, 4.9041] as [number, number], to: [50.1109, 8.6821] as [number, number] },  // Amsterdam -> Frankfurt
        { from: [52.3676, 4.9041] as [number, number], to: [51.5074, -0.1278] as [number, number] }, // Amsterdam -> London
        { from: [52.3676, 4.9041] as [number, number], to: [48.8566, 2.3522] as [number, number] },  // Amsterdam -> Paris
        { from: [52.3676, 4.9041] as [number, number], to: [40.4168, -3.7038] as [number, number] }, // Amsterdam -> Madrid
        { from: [40.7128, -74.0060] as [number, number], to: [34.0522, -118.2437] as [number, number] }, // New York -> LA
        { from: [52.3676, 4.9041] as [number, number], to: [22.3193, 114.1694] as [number, number] }, // Amsterdam -> Shenzhen
      ];

      const globe = createCobeGlobe(globeCanvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width,
        height: width,
        phi: 4.75,
        theta: 0.28,
        psi: 0,
        scale: 1.0,
        dark: 1,
        diffuse: 1.25,
        mapSamples: 16000,
        mapBrightness: 5.5,
        baseColor: [0.26, 0.35, 0.31], // Crisp slate-teal land matrix
        markerColor: [0.55, 0.98, 0.85], // Vibrant glowing mint green dots (#70CAB9)
        glowColor: [0.38, 0.80, 0.68], // Atmospheric mint ambient glow (#55C99F)
        markers: serviceLocations,
        arcs: shippingArcs,
        arcColor: [0.45, 0.88, 0.74],
        arcWidth: 1.0,
        arcHeight: 0.32,
      });

      let animId: number;
      const animateGlobe = () => {
        if (!isDragging) {
          targetPhi += 0.003; // Smooth autonomous rotation around X-axis
        }
        // Smooth momentum interpolation across all 3 axes + scale
        currentPhi += (targetPhi - currentPhi) * 0.12;
        currentTheta += (targetTheta - currentTheta) * 0.12;
        currentPsi += (targetPsi - currentPsi) * 0.12;
        currentScale += (targetScale - currentScale) * 0.12;

        globe.update({
          phi: currentPhi,
          theta: currentTheta,
          psi: currentPsi,
          scale: currentScale,
        });
        animId = requestAnimationFrame(animateGlobe);
      };
      animId = requestAnimationFrame(animateGlobe);

      const onPointerDown = (e: PointerEvent) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startPhi = targetPhi;
        startTheta = targetTheta;
        startPsi = targetPsi;
        globeCanvas.style.cursor = 'grabbing';

        const rect = globeCanvas.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distFromCenter = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        const radius = Math.min(rect.width, rect.height) / 2;

        // Shift key, right-click, or dragging along the outer perimeter (72%-120% radius) triggers Z-axis roll
        if (e.shiftKey || e.button === 2 || (distFromCenter > radius * 0.72 && distFromCenter < radius * 1.25)) {
          isRollMode = true;
          startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        } else {
          isRollMode = false;
        }
      };

      const onPointerMove = (e: PointerEvent) => {
        if (!isDragging) return;

        if (isRollMode || e.shiftKey) {
          const rect = globeCanvas.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const currentAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
          let diff = currentAngle - startAngle;
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;
          targetPsi = startPsi + diff;
        } else {
          // Free, unconstrained 3D movement in X and Y axes:
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;
          targetPhi = startPhi + dx * 0.007; // X-axis azimuth rotation
          targetTheta = startTheta - dy * 0.007; // Y-axis pitch rotation (free 360° unconstrained)
        }
      };

      const onPointerUp = () => {
        isDragging = false;
        isRollMode = false;
        globeCanvas.style.cursor = 'grab';
      };

      // Z-depth zoom via mouse wheel
      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        const delta = -e.deltaY * 0.0015;
        targetScale = Math.max(0.65, Math.min(2.0, targetScale + delta));
      };

      // Touch pinch-to-zoom for mobile/touchpads
      let initialTouchDist = 0;
      let touchBaseScale = 1.0;
      const onTouchStart = (e: TouchEvent) => {
        const t0 = e.touches[0];
        const t1 = e.touches[1];
        if (t0 && t1) {
          initialTouchDist = Math.hypot(
            t0.clientX - t1.clientX,
            t0.clientY - t1.clientY
          );
          touchBaseScale = targetScale;
        }
      };
      const onTouchMove = (e: TouchEvent) => {
        const t0 = e.touches[0];
        const t1 = e.touches[1];
        if (t0 && t1 && initialTouchDist > 0) {
          e.preventDefault();
          const dist = Math.hypot(
            t0.clientX - t1.clientX,
            t0.clientY - t1.clientY
          );
          const ratio = dist / initialTouchDist;
          targetScale = Math.max(0.65, Math.min(2.0, touchBaseScale * ratio));
        }
      };

      // Prevent context menu when right-clicking for Z-roll
      const onContextMenu = (e: MouseEvent) => {
        e.preventDefault();
      };

      // Floating 3D Control Toolbar button click handlers
      const zoomInBtn = root.querySelector('[data-globe-zoom-in]');
      const zoomOutBtn = root.querySelector('[data-globe-zoom-out]');
      const rollLeftBtn = root.querySelector('[data-globe-roll-left]');
      const rollRightBtn = root.querySelector('[data-globe-roll-right]');
      const resetBtn = root.querySelector('[data-globe-reset]');

      const onZoomIn = (e: Event) => {
        e.stopPropagation();
        targetScale = Math.min(2.0, targetScale + 0.2);
      };
      const onZoomOut = (e: Event) => {
        e.stopPropagation();
        targetScale = Math.max(0.65, targetScale - 0.2);
      };
      const onRollLeft = (e: Event) => {
        e.stopPropagation();
        targetPsi -= Math.PI / 6; // 30° Z-axis roll counter-clockwise
      };
      const onRollRight = (e: Event) => {
        e.stopPropagation();
        targetPsi += Math.PI / 6; // 30° Z-axis roll clockwise
      };
      const onReset = (e: Event) => {
        e.stopPropagation();
        targetPhi = 4.75;
        targetTheta = 0.28;
        targetPsi = 0;
        targetScale = 1.0;
      };

      zoomInBtn?.addEventListener('click', onZoomIn);
      zoomOutBtn?.addEventListener('click', onZoomOut);
      rollLeftBtn?.addEventListener('click', onRollLeft);
      rollRightBtn?.addEventListener('click', onRollRight);
      resetBtn?.addEventListener('click', onReset);

      // Keyboard arrow keys for precision 3D navigation
      const onKeyDown = (e: KeyboardEvent) => {
        if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
        if (e.key === 'ArrowUp') {
          targetTheta += 0.12; // Pitch up in Y-axis
        } else if (e.key === 'ArrowDown') {
          targetTheta -= 0.12; // Pitch down in Y-axis
        } else if (e.key === 'ArrowLeft') {
          targetPhi -= 0.12; // Turn left in X-axis
        } else if (e.key === 'ArrowRight') {
          targetPhi += 0.12; // Turn right in X-axis
        }
      };
      window.addEventListener('keydown', onKeyDown);

      // Listen to pointer events on both canvas and section so dragging anywhere smoothly rotates the globe
      const globeSection = root.querySelector('[data-globe-section]') as HTMLElement | null;
      const onSectionPointerDown = (e: PointerEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('button, a, input, textarea')) return;
        onPointerDown(e);
      };

      globeCanvas.addEventListener('pointerdown', onPointerDown);
      globeSection?.addEventListener('pointerdown', onSectionPointerDown);
      globeCanvas.addEventListener('wheel', onWheel, { passive: false });
      globeCanvas.addEventListener('touchstart', onTouchStart, { passive: true });
      globeCanvas.addEventListener('touchmove', onTouchMove, { passive: false });
      globeCanvas.addEventListener('contextmenu', onContextMenu);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('pointercancel', onPointerUp);

      const onResize = () => {
        if (globeCanvas) {
          width = globeCanvas.offsetWidth || 1000;
          globe.update({
            width: width,
            height: width,
          });
        }
      };
      window.addEventListener('resize', onResize);

      cleanupGlobe = () => {
        cancelAnimationFrame(animId);
        zoomInBtn?.removeEventListener('click', onZoomIn);
        zoomOutBtn?.removeEventListener('click', onZoomOut);
        rollLeftBtn?.removeEventListener('click', onRollLeft);
        rollRightBtn?.removeEventListener('click', onRollRight);
        resetBtn?.removeEventListener('click', onReset);
        window.removeEventListener('keydown', onKeyDown);
        globeCanvas.removeEventListener('pointerdown', onPointerDown);
        globeSection?.removeEventListener('pointerdown', onSectionPointerDown);
        globeCanvas.removeEventListener('wheel', onWheel);
        globeCanvas.removeEventListener('touchstart', onTouchStart);
        globeCanvas.removeEventListener('touchmove', onTouchMove);
        globeCanvas.removeEventListener('contextmenu', onContextMenu);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('pointercancel', onPointerUp);
        window.removeEventListener('resize', onResize);
        globe.destroy();
      };
    }

    // 12. Smooth Slow Scroll Reveal for Each Section
    const revealTargets = root.querySelectorAll('section, footer');
    let revealObserver: IntersectionObserver | null = null;

    if (revealTargets.length > 0) {
      revealTargets.forEach((target) => {
        target.classList.add('zineps-reveal');
      });

      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Takes a few milliseconds to appear, and animates in slowly
            setTimeout(() => {
              el.classList.add('is-visible');
            }, 80);
            revealObserver?.unobserve(el);
          }
        });
      }, {
        root: null,
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      });

      revealTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        // Immediately reveal if already within or above the initial viewport
        if (rect.top < window.innerHeight * 0.9) {
          target.classList.add('is-visible');
        } else {
          revealObserver?.observe(target);
        }
      });
    }

    return () => {
      document.removeEventListener('click', handleDocClick);
      if (updateTabletOnScroll) {
        window.removeEventListener('scroll', updateTabletOnScroll);
      }
      if (cancelPhysicsLoop) {
        cancelPhysicsLoop();
      }
      if (cleanupChartListeners) {
        cleanupChartListeners();
      }
      if (cleanupUptimeListeners) {
        cleanupUptimeListeners();
      }
      if (cleanupGlobe) {
        cleanupGlobe();
      }
      if (cleanupNewsScroll) {
        cleanupNewsScroll();
      }
      if (statObserver) {
        statObserver.disconnect();
      }
      if (revealObserver) {
        revealObserver.disconnect();
      }
      uptimeCleanups.forEach(c => c());
      if (mobileDrawer && mobileDrawer.parentNode) {
        mobileDrawer.parentNode.removeChild(mobileDrawer);
      }
    };
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div
        ref={containerRef}
        className="w-full min-h-screen font-sans bg-white"
        dangerouslySetInnerHTML={{
          __html: lang === 'en' ? englishReplicaHtml : dutchReplicaHtml,
        }}
      />
      {/* Floating Chat / Support Widget (matching Image 4) */}
      <aside
        id="zineps-chat-launcher"
        aria-label="Support chat launcher"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center pointer-events-auto"
      >
        <button
          type="button"
          aria-label="Open support chat"
          className="zineps-chat-launcher-btn"
          onClick={() => {
            window.open('/contact', '_self');
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#17332A" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 4.5h10.5a2 2 0 0 1 2 2v7a2 2 0 0 1-1.2 1.8" />
            <path d="M4 8.5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7l-3 3.5V10.5a2 2 0 0 1 2-2z" />
          </svg>
        </button>
      </aside>
    </LangContext.Provider>
  );
}
