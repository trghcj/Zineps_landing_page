import React, { useEffect, useRef, useState } from 'react';
import { useLang } from '@/App';
import { createCobeGlobe, Globe as CobeGlobeInstance } from '@/utils/cobe';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface Corridor {
  id: string;
  name: string;
  nameNL: string;
  origin: string;
  destination: string;
  carriers: string;
  transit: string;
  transitNL: string;
  status: string;
  statusNL: string;
  compliance: string;
}

const CORRIDORS: Corridor[] = [
  {
    id: 'benelux-dach',
    name: 'Benelux ⇄ DACH Express',
    nameNL: 'Benelux ⇄ DACH Express',
    origin: 'Amsterdam Hub (AMS)',
    destination: 'Frankfurt Hub (FRA)',
    carriers: 'DHL Express · PostNL',
    transit: 'Next-Day Delivery',
    transitNL: 'Volgende werkdag bezorgd',
    status: 'Direct Linehaul',
    statusNL: 'Directe lijndienst',
    compliance: 'DDP Pre-cleared · Zero Border Delays',
  },
  {
    id: 'western-europe',
    name: 'Western Europe Corridor',
    nameNL: 'West-Europa Corridor',
    origin: 'Rotterdam Depot',
    destination: 'Paris CDG Gateway',
    carriers: 'DPD Classic · Colissimo',
    transit: '24–48h Cross-Border',
    transitNL: '24–48u grensoverschrijdend',
    status: 'Daily Linehaul',
    statusNL: 'Dagelijkse lijndienst',
    compliance: 'Carbon-Neutral · 100% Tracking',
  },
  {
    id: 'transatlantic',
    name: 'UK & Transatlantic Transit',
    nameNL: 'VK & Trans-Atlantische Transit',
    origin: 'London Heathrow (LHR)',
    destination: 'New York JFK Hub',
    carriers: 'UPS Worldwide · FedEx',
    transit: '2–3 Days Priority',
    transitNL: '2–3 dagen express',
    status: 'Automated Customs',
    statusNL: 'Automatische inklaring',
    compliance: 'Paperless Commercial Invoice · IOSS Ready',
  },
];

export const InteractiveGlobe: React.FC = () => {
  const { lang } = useLang();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeInstanceRef = useRef<CobeGlobeInstance | null>(null);
  const [activeCorridorId, setActiveCorridorId] = useState<string>('benelux-dach');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 4.75;
    let theta = 0.28;
    let psi = 0;
    let currentScale = 1.0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    let globe: CobeGlobeInstance | null = null;
    try {
      globe = createCobeGlobe(canvas, {
        width: 600,
        height: 600,
        phi,
        theta,
        psi,
        scale: 1,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.15, 0.28, 0.22],
        markerColor: [0.44, 0.82, 0.68],
        glowColor: [0.28, 0.76, 0.58],
        arcColor: [0.44, 0.82, 0.68],
        arcWidth: 1.8,
        arcHeight: 0.35,
        diffuse: 1.2,
        dark: 1,
        devicePixelRatio: window.devicePixelRatio || 2,
        markers: [
          { location: [52.3676, 4.9041], size: 0.09, color: [0.44, 0.82, 0.68] },
          { location: [52.5200, 13.4050], size: 0.07, color: [0.44, 0.82, 0.68] },
          { location: [51.5074, -0.1278], size: 0.08, color: [0.44, 0.82, 0.68] },
          { location: [40.7128, -74.0060], size: 0.09, color: [0.44, 0.82, 0.68] },
          { location: [35.6762, 139.6503], size: 0.07, color: [0.44, 0.82, 0.68] },
          { location: [48.8566, 2.3522], size: 0.07, color: [0.44, 0.82, 0.68] },
          { location: [25.2048, 55.2708], size: 0.07, color: [0.44, 0.82, 0.68] },
        ],
        arcs: [
          { from: [52.3676, 4.9041], to: [52.5200, 13.4050], color: [0.44, 0.82, 0.68] },
          { from: [52.3676, 4.9041], to: [51.5074, -0.1278], color: [0.44, 0.82, 0.68] },
          { from: [52.3676, 4.9041], to: [48.8566, 2.3522], color: [0.44, 0.82, 0.68] },
          { from: [51.5074, -0.1278], to: [40.7128, -74.0060], color: [0.44, 0.82, 0.68] },
          { from: [52.3676, 4.9041], to: [25.2048, 55.2708], color: [0.44, 0.82, 0.68] },
        ],
      });
      globeInstanceRef.current = globe;
    } catch (err) {
      console.warn('Cobe globe initialization fallback', err);
    }

    let animId: number;
    const animate = () => {
      if (!isDragging) {
        phi += 0.003;
      }
      if (globe) {
        globe.update({
          phi,
          theta,
          psi,
          scale: currentScale,
        });
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      canvas.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      startX = e.clientX;
      startY = e.clientY;

      phi += dx * 0.006;
      theta = Math.max(-0.8, Math.min(0.8, theta - dy * 0.006));
    };

    const onPointerUp = () => {
      isDragging = false;
      canvas.style.cursor = 'grab';
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      if (globe) globe.destroy();
    };
  }, []);

  const activeCorridor = CORRIDORS.find((c) => c.id === activeCorridorId) || CORRIDORS[0];

  return (
    <div className="relative w-full rounded-3xl bg-[#0F231D] text-white p-6 sm:p-10 border border-[#70CAB9]/25 shadow-2xl overflow-hidden my-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#48C293]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left: Grounded Logistics Corridor Overview */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#70CAB9] text-xs font-bold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#48C293]" />
              <span>{lang === 'en' ? 'VERIFIED CARRIER CORRIDORS' : 'VERIFIEERDE TRANSPORTCORRIDORS'}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              {lang === 'en'
                ? 'Cross-border shipping at domestic speed and clarity.'
                : 'Grensoverschrijdend verzenden met lokale snelheid en duidelijkheid.'}
            </h3>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 font-normal">
              {lang === 'en'
                ? 'Route parcels directly through European consolidation hubs in Amsterdam, Frankfurt, Paris, and London with automated customs documentation and local last-mile handover.'
                : 'Verstuur zendingen via gecertificeerde hubs in Amsterdam, Frankfurt, Parijs en Londen met realtime douanedocumentatie en lokale last-mile overdracht.'}
            </p>
          </div>

          {/* Authentic Corridor Switcher */}
          <div className="space-y-3 mb-6">
            {CORRIDORS.map((corridor) => {
              const isActive = activeCorridorId === corridor.id;
              return (
                <button
                  key={corridor.id}
                  onClick={() => setActiveCorridorId(corridor.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-start justify-between gap-3 ${
                    isActive
                      ? 'bg-white/15 border-[#70CAB9] shadow-md ring-1 ring-[#70CAB9]/40'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">
                        {corridor.origin}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#70CAB9]" />
                      <span className="text-sm font-bold text-white">
                        {corridor.destination}
                      </span>
                    </div>
                    <div className="text-xs text-white/70 mt-1 font-medium">
                      {corridor.carriers} · {lang === 'en' ? corridor.transit : corridor.transitNL}
                    </div>
                    <div className="text-[11px] text-[#70CAB9]/90 mt-1 font-mono">
                      {corridor.compliance}
                    </div>
                  </div>
                  <span
                    className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      isActive
                        ? 'bg-[#70CAB9] text-[#0F231D]'
                        : 'bg-white/10 text-white/70 border border-white/10'
                    }`}
                  >
                    {lang === 'en' ? corridor.status : corridor.statusNL}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Footer Stats & Active Details */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-white/75 font-medium gap-2">
            <span>200+ Destination Countries</span>
            <span className="text-[#70CAB9] font-bold">50+ Integrated Carriers</span>
            <span>Commercial Invoicing Ready (DDP / IOSS)</span>
          </div>
        </div>

        {/* Right: Clean 3D Globe with Carrier Badges */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[420px]">
          <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
            <canvas
              ref={canvasRef}
              style={{ width: '100%', height: '100%', cursor: 'grab' }}
              className="touch-none select-none max-w-full"
            />
          </div>

          <div className="mt-3 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/10 text-[11px] text-white/75 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#70CAB9]" />
            <span>{lang === 'en' ? 'Drag globe to rotate network corridors' : 'Sleep de globe om corridors te draaien'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveGlobe;
