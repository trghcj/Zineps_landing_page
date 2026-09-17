import React, { useEffect, useRef, useState } from 'react';

export interface PhysicsItemData {
  id: string;
  name: string;
  src: string;
  initialYOffset?: number;
}

interface PhysicsNode {
  dx: number;
  dy: number;
  vx: number;
  vy: number;
  rot: number;
}

interface FloatingPhysicsNetworkProps {
  items: PhysicsItemData[];
  className?: string;
}

// Predefined aesthetic 2D relative distributions across the canvas
const RELATIVE_COORDINATES: Array<{ xRatio: number; yRatio: number }> = [
  { xRatio: 0.14, yRatio: 0.28 },
  { xRatio: 0.34, yRatio: 0.22 },
  { xRatio: 0.54, yRatio: 0.26 },
  { xRatio: 0.74, yRatio: 0.20 },
  { xRatio: 0.88, yRatio: 0.30 },
  { xRatio: 0.24, yRatio: 0.68 },
  { xRatio: 0.44, yRatio: 0.62 },
  { xRatio: 0.64, yRatio: 0.66 },
  { xRatio: 0.82, yRatio: 0.64 },
  { xRatio: 0.16, yRatio: 0.82 },
  { xRatio: 0.50, yRatio: 0.82 },
  { xRatio: 0.72, yRatio: 0.82 },
];

const PhysicsBadgeItem: React.FC<{ item: PhysicsItemData; sizeClass?: string; imgClass?: string }> = ({
  item,
  sizeClass = 'w-16 h-16 sm:w-18 sm:h-18 p-2.5',
  imgClass = 'w-10 h-10',
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      title={item.name}
      className={`${sizeClass} rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-slate-200/90 flex items-center justify-center hover:shadow-[0_14px_30px_rgba(112,202,185,0.4)] hover:scale-110 transition-all duration-150 group`}
    >
      {!imgError ? (
        <img
          src={item.src}
          alt={item.name}
          onError={() => setImgError(true)}
          className={`${imgClass} object-contain pointer-events-none select-none`}
          draggable={false}
        />
      ) : (
        <div className={`${imgClass} rounded-xl bg-[#E9F8F2] text-[#17332A] flex items-center justify-center font-bold text-xs`}>
          {item.name.slice(0, 3).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export const FloatingPhysicsNetwork: React.FC<FloatingPhysicsNetworkProps> = ({
  items,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const physicsNodesRef = useRef<Map<string, PhysicsNode>>(new Map());
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });
  const animFrameRef = useRef<number | null>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionMedia.matches);
    const motionListener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    motionMedia.addEventListener('change', motionListener);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      motionMedia.removeEventListener('change', motionListener);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Synchronize physics nodes with current items
  useEffect(() => {
    const currentIds = new Set(items.map((i) => i.id));
    const nodeMap = physicsNodesRef.current;

    for (const id of Array.from(nodeMap.keys())) {
      if (!currentIds.has(id)) {
        nodeMap.delete(id);
      }
    }

    items.forEach((item) => {
      if (!nodeMap.has(item.id)) {
        nodeMap.set(item.id, {
          dx: 0,
          dy: 0,
          vx: 0,
          vy: 0,
          rot: 0,
        });
      }
    });
  }, [items]);

  // 60fps physics simulation
  useEffect(() => {
    if (isReducedMotion || isMobile) return;

    let time = 0;
    const radius = 130;
    const repulsionStrength = 3.5;
    const springK = 0.04;
    const friction = 0.88;

    const simulate = () => {
      time += 0.025;
      const container = containerRef.current;
      const width = container?.clientWidth || 1000;
      const height = container?.clientHeight || 420;
      const mouse = mouseRef.current;

      items.forEach((item, idx) => {
        let node = physicsNodesRef.current.get(item.id);
        if (!node) {
          node = { dx: 0, dy: 0, vx: 0, vy: 0, rot: 0 };
          physicsNodesRef.current.set(item.id, node);
        }

        const coord = RELATIVE_COORDINATES[idx % RELATIVE_COORDINATES.length]!;
        const baseX = coord.xRatio * width;
        const baseY = coord.yRatio * height;

        const ambientX = Math.cos(time + idx * 1.4) * 0.3;
        const ambientY = Math.sin(time + idx * 1.1) * 0.3;
        node.vx += ambientX;
        node.vy += ambientY;

        if (mouse.active) {
          const curX = baseX + node.dx;
          const curY = baseY + node.dy;
          const diffX = curX - mouse.x;
          const diffY = curY - mouse.y;
          const dist = Math.hypot(diffX, diffY);

          if (dist < radius && dist > 1) {
            const factor = (radius - dist) / radius;
            const force = factor * factor * repulsionStrength;
            const nx = diffX / dist;
            const ny = diffY / dist;

            node.vx += nx * force;
            node.vy += ny * force;
            node.rot += (nx > 0 ? 1 : -1) * force * 1.6;
          }
        }

        node.vx -= node.dx * springK;
        node.vy -= node.dy * springK;

        node.vx *= friction;
        node.vy *= friction;
        node.rot *= 0.90;

        node.dx += node.vx;
        node.dy += node.vy;

        const maxDrift = 55;
        node.dx = Math.max(-maxDrift, Math.min(maxDrift, node.dx));
        node.dy = Math.max(-maxDrift, Math.min(maxDrift, node.dy));

        const el = elementsRef.current.get(item.id);
        if (el) {
          el.style.transform = `translate(-50%, -50%) translate3d(${node.dx.toFixed(1)}px, ${node.dy.toFixed(1)}px, 0) rotate(${node.rot.toFixed(1)}deg)`;
        }
      });

      animFrameRef.current = requestAnimationFrame(simulate);
    };

    animFrameRef.current = requestAnimationFrame(simulate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [items, isReducedMotion, isMobile]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMobile || isReducedMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handlePointerLeave = () => {
    mouseRef.current.active = false;
  };

  // Mobile / Reduced Motion Accessible Grid Render
  if (isMobile || isReducedMotion) {
    return (
      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-[#E6FAF5]/30 via-white to-[#E6FAF5]/15 border border-[#70CAB9]/25 p-6 shadow-sm ${className}`}
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {items.map((item) => (
            <PhysicsBadgeItem
              key={item.id}
              item={item}
              sizeClass="p-2.5 sm:p-3"
              imgClass="w-8 h-8 sm:w-10 sm:h-10"
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop Interactive Physics Field
  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative w-full h-[380px] sm:h-[420px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#E6FAF5]/30 via-white to-[#E6FAF5]/15 border border-[#70CAB9]/25 select-none shadow-inner ${className}`}
      style={{ contain: 'layout paint' }}
    >
      {/* Background hint & subtle center glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-80 h-80 rounded-full bg-[#70CAB9]/10 blur-3xl" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#60948A]/40 select-none">
          Interactive Carrier Network • Hover to Repel
        </span>
      </div>

      {items.map((item, idx) => {
        const coord = RELATIVE_COORDINATES[idx % RELATIVE_COORDINATES.length]!;
        return (
          <div
            key={item.id}
            ref={(el) => {
              if (el) {
                elementsRef.current.set(item.id, el);
              } else {
                elementsRef.current.delete(item.id);
              }
            }}
            className="absolute will-change-transform cursor-pointer"
            style={{
              left: `${(coord.xRatio * 100).toFixed(1)}%`,
              top: `${(coord.yRatio * 100).toFixed(1)}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <PhysicsBadgeItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingPhysicsNetwork;
