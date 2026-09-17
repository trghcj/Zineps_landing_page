import React, { useEffect, useRef, useState } from 'react';
import { useLang } from '@/App';
import { createCobeGlobe, Globe as CobeGlobeInstance } from '@/utils/cobe';
import { Compass, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

export const InteractiveGlobe: React.FC = () => {
  const { lang, t } = useLang();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeInstanceRef = useRef<CobeGlobeInstance | null>(null);
  const [activeHub, setActiveHub] = useState<string>('Amsterdam');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 4.75;
    let theta = 0.28;
    let psi = 0;
    let targetScale = 1.0;
    let currentScale = 1.0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    const globe = createCobeGlobe(canvas, {
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

    let animId: number;
    const animate = () => {
      if (!isDragging) {
        phi += 0.0035;
      }
      currentScale += (targetScale - currentScale) * 0.1;

      globe.update({
        phi,
        theta,
        psi,
        scale: currentScale,
      });

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
      globe.destroy();
    };
  }, []);

  return (
    <div className="relative w-full rounded-3xl bg-[#0F231D] text-white p-6 sm:p-10 border border-[#70CAB9]/25 shadow-2xl overflow-hidden my-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#48C293]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#70CAB9] text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#48C293] animate-ping" />
              <span>{lang === 'en' ? 'LIVE NETWORK TOPOLOGY' : 'LIVE NETWERK TOPOLOGIE'}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              {lang === 'en' ? 'Cross-border fulfillment at local speeds.' : 'Grensoverschrijdend verzenden met lokale snelheid.'}
            </h3>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 font-normal">
              {lang === 'en'
                ? 'Routing through verified logistics hubs in Amsterdam, London, Frankfurt, and Paris. Automated customs clearing with unified commercial invoicing.'
                : 'Routering via gecertificeerde hubs in Amsterdam, Londen, Frankfurt en Parijs met realtime douane-afhandeling.'}
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {[
              { hub: 'Amsterdam', dest: 'Berlin Depot', lane: 'DHL Express · 22h', stat: '99.8% On-Time' },
              { hub: 'Rotterdam', dest: 'Paris CDG Hub', lane: 'DPD Priority · 24h', stat: '99.4% On-Time' },
              { hub: 'London Hub', dest: 'New York JFK', lane: 'UPS Worldwide · 36h', stat: 'Customs Cleared' },
            ].map((route, i) => (
              <button
                key={i}
                onClick={() => setActiveHub(route.hub)}
                className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  activeHub === route.hub
                    ? 'bg-white/15 border-[#70CAB9] shadow-md'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div>
                  <span className="text-xs font-bold text-white block">
                    {route.hub} → {route.dest}
                  </span>
                  <span className="text-[11px] text-white/70">{route.lane}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#48C293]/20 text-[#70CAB9] border border-[#48C293]/30">
                  {route.stat}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70 font-medium">
            <span>200+ Destination Countries</span>
            <span className="text-[#70CAB9] font-bold">1,000+ Carrier Lanes</span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[420px] sm:min-h-[500px]">
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            <canvas
              ref={canvasRef}
              style={{ width: '100%', height: '100%', cursor: 'grab' }}
              className="touch-none select-none max-w-full"
            />
          </div>

          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] text-white/70 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#70CAB9]" />
            <span>{lang === 'en' ? 'Drag globe to rotate network corridors' : 'Sleep de globe om routes te draaien'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveGlobe;
