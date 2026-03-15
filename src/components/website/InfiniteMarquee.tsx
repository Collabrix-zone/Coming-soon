import { ReactNode, useRef, useEffect } from 'react';

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
  fadeEdges?: boolean;
}

export function InfiniteMarquee({
  children,
  speed = 28,
  reverse = false,
  className = '',
  fadeEdges = true,
}: InfiniteMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const animRef = useRef<number>(0);
  const copyWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const copy1 = track.children[0] as HTMLElement;
      if (copy1) copyWidthRef.current = copy1.offsetWidth;
    };

    // Measure after fonts/layout settle
    measure();
    const t = setTimeout(measure, 200);

    const direction = reverse ? 1 : -1;

    const tick = () => {
      const copyWidth = copyWidthRef.current;
      if (copyWidth > 0) {
        // pixels per frame = copyWidth / (speed * 60fps)
        xRef.current += direction * (copyWidth / (speed * 60));
        // seamless reset: when we've scrolled exactly one copy, snap back to 0
        if (xRef.current <= -copyWidth) xRef.current += copyWidth;
        if (xRef.current >= copyWidth) xRef.current -= copyWidth;
        track.style.transform = `translateX(${xRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);

    const ro = new ResizeObserver(measure);
    ro.observe(track);

    return () => {
      cancelAnimationFrame(animRef.current);
      clearTimeout(t);
      ro.disconnect();
    };
  }, [speed, reverse]);

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={
        fadeEdges
          ? {
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }
          : undefined
      }
    >
      <div
        ref={trackRef}
        style={{ display: 'flex', willChange: 'transform', whiteSpace: 'nowrap' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          {children}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
