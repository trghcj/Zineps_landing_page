import React, { useEffect, useRef, useState, useMemo } from 'react';

export interface PhysicsItemData {
  id: string;
  name: string;
  src: string;
  initialYOffset?: number;
}

interface PhysicsState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  homeX: number;
  homeY: number;
  rotation: number;
  el: HTMLDivElement | null;
}

interface FloatingPhysicsNetworkProps {
  items: PhysicsItemData[];
  className?: string;
}

// Predefined aesthetic 2D relative distributions across the 420px canvas
const RELATIVE_COORDINATES: Array<{ xRatio: number; yRatio: number }> = [
  { xRatio: 0.12, yRatio: 0.22 },
  { xRatio: 0.32, yRatio: 0.18 },
  { xRatio: 0.52, yRatio: 0.24 },
  { xRatio: 0.72, yRatio: 0.19 },
  { xRatio: 0.90, yRatio: 0.25 },
  { xRatio: 0.22, yRatio: 0.50 },
  { xRatio: 0.42, yRatio: 0.48 },
  { xRatio: 0.62, yRatio: 0.52 },
  { xRatio: 0.82, yRatio: 0.47 },
  { xRatio: 0.10, yRatio: 0.78 },
  { xRatio: 0.30, yRatio: 0.82 },
  { xRatio: 0.50, yRatio: 0.76 },
  { xRatio: 0.70, yRatio: 0.81 },
  { xRatio: 0.88, yRatio: 0.77 },
];

export const FloatingPhysicsNetwork: React.FC<FloatingPhysicsNetworkProps> = ({
  items,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const statesRef = useRef<Map<string, PhysicsState>>(new Map());
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });
  const animFrameRef = useRef<number | null>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [containerDimensions, setContainerDimensions] = useState<{ width: number; height: number }>({
    width: 1000,
    height: 420,
  });

  useEffect(() => {
    // Check reduced motion
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionMedia.matches);
    const motionListener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    motionMedia.addEventListener('change', motionListener);

    // Check touch / mobile
    const checkMobileAndSize = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
      if (containerRef.current) {
        setContainerDimensions({
          width: containerRef.current.clientWidth || 1000,
          height: containerRef.current.clientHeight || 420,
        });
      }
    };

    checkMobileAndSize();
    window.addEventListener('resize', checkMobileAndSize);

    return () => {
      motionMedia.removeEventListener('change', motionListener);
      window.removeEventListener('resize', checkMobileAndSize);
    };
  }, []);

  // Update home positions whenever container dimensions or items change
  useEffect(() => {
    const { width, height } = containerDimensions;
    const padding = 50;
    const effectiveW = Math.max(width - padding * 2, 280);
    const effectiveH = Math.max(height - padding * 2, 200);

    // Prune stale nodes from previous category selection
    const currentIdSet = new Set(items.map((i) => i.id));
    for (const key of Array.from(statesRef.current.keys())) {
      if (!currentIdSet.has(key)) {
        statesRef.current.delete(key);
      }
    }

    items.forEach((item, index) => {
      const coord = RELATIVE_COORDINATES[index % RELATIVE_COORDINATES.length]!;
      const homeX = padding + coord.xRatio * effectiveW;
      const homeY = padding + coord.yRatio * effectiveH;

      const existing = statesRef.current.get(item.id);
      if (existing) {
        existing.homeX = homeX;
        existing.homeY = homeY;
      } else {
        statesRef.current.set(item.id, {
          x: homeX,
          y: homeY,
          vx: 0,
          vy: 0,
          homeX,
          homeY,
          rotation: 0,
          el: null,
        });
      }
    });
  }, [items, containerDimensions]);

  // Main 60fps physics simulation loop
  useEffect(() => {
    if (isReducedMotion || isMobile) return;

    let time = 0;
    const states = statesRef.current;

    const simulate = () => {
      time += 0.02;
      const mouse = mouseRef.current;
      const isMouseActive = mouse.active;
      const interactionRadius = 140;
      const repulsionStrength = 4.2;
      const friction = 0.92;
      const springK = 0.038;
      const collisionDist = 74; // safe distance between badge centers
      const { width, height } = containerDimensions;

      const nodes = Array.from(states.values());

      // 1. Organic float + cursor repulsion & tangential swirl
      nodes.forEach((node, idx) => {
        // Subtle ambient oscillation
        const ambientX = Math.cos(time + idx * 1.3) * 0.25;
        const ambientY = Math.sin(time + idx * 0.9) * 0.25;
        node.vx += ambientX;
        node.vy += ambientY;

        if (isMouseActive) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < interactionRadius && dist > 1) {
            const factor = (interactionRadius - dist) / interactionRadius;
            const force = factor * factor * repulsionStrength;
            const nx = dx / dist;
            const ny = dy / dist;

            // Radial repulsion
            node.vx += nx * force;
            node.vy += ny * force;

            // Tangential orbit / swirl torque
            node.vx += -ny * force * 0.45;
            node.vy += nx * force * 0.45;

            node.rotation += (nx > 0 ? 1 : -1) * force * 1.8;
          }
        }

        // Return spring force towards home anchor
        node.vx += (node.homeX - node.x) * springK;
        node.vy += (node.homeY - node.y) * springK;

        // Apply friction
        node.vx *= friction;
        node.vy *= friction;
        node.rotation *= 0.90;

        node.x += node.vx;
        node.y += node.vy;

        // Container bounds containment
        const margin = 36;
        if (node.x < margin) {
          node.x = margin;
          node.vx *= -0.5;
        } else if (node.x > width - margin) {
          node.x = width - margin;
          node.vx *= -0.5;
        }
        if (node.y < margin) {
          node.y = margin;
          node.vy *= -0.5;
        } else if (node.y > height - margin) {
          node.y = height - margin;
          node.vy *= -0.5;
        }
      });

      // 2. Pairwise elastic collision detection
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]!;
          const b = nodes[j]!;

          const cdx = b.x - a.x;
          const cdy = b.y - a.y;
          const cdist = Math.hypot(cdx, cdy);

          if (cdist < collisionDist && cdist > 0.1) {
            const overlap = (collisionDist - cdist) * 0.5;
            const nx = cdx / cdist;
            const ny = cdy / cdist;

            a.x -= nx * overlap;
            a.y -= ny * overlap;
            b.x += nx * overlap;
            b.y += ny * overlap;

            // Elastic impulse
            a.vx -= nx * 0.7;
            a.vy -= ny * 0.7;
            b.vx += nx * 0.7;
            b.vy += ny * 0.7;
          }
        }
      }

      // 3. Direct hardware-accelerated transforms
      nodes.forEach((node) => {
        if (node.el) {
          node.el.style.transform = `translate3d(${node.x.toFixed(1)}px, ${node.y.toFixed(1)}px, 0) translate(-50%, -50%) rotate(${node.rotation.toFixed(1)}deg)`;
        }
      });

      animFrameRef.current = requestAnimationFrame(simulate);
    };

    animFrameRef.current = requestAnimationFrame(simulate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isReducedMotion, isMobile, containerDimensions]);

  // Pointer position tracking relative to the container
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

const PhysicsBadgeItem: React.FC<{ item: PhysicsItemData; sizeClass?: string; imgClass?: string }> = ({
  item,
  sizeClass = 'w-16 h-16 sm:w-18 sm:h-18 p-2',
  imgClass = 'w-10 h-10',
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      title={item.name}
      className={`${sizeClass} rounded-2xl bg-white/95 shadow-lg border border-gray-100/80 flex items-center justify-center hover:shadow-[0_12px_28px_rgba(112,202,185,0.35)] hover:scale-110 transition-all duration-150`}
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
              sizeClass="p-2 sm:p-2.5"
              imgClass="w-8 h-8 sm:w-10 sm:h-10"
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop Interactive Physics Field (height: 420px, contain: layout paint)
  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative w-full h-[420px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#E6FAF5]/30 via-white to-[#E6FAF5]/15 border border-[#70CAB9]/25 select-none shadow-inner ${className}`}
      style={{ contain: 'layout paint' }}
    >
      {/* Background hint & subtle center glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-80 h-80 rounded-full bg-[#70CAB9]/10 blur-3xl" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#60948A]/40 select-none">
          Interactive Carrier Network • Hover to Repel
        </span>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          ref={(el) => {
            const state = statesRef.current.get(item.id);
            if (state) state.el = el;
          }}
          className="absolute top-0 left-0 will-change-transform cursor-pointer"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <PhysicsBadgeItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default FloatingPhysicsNetwork;
