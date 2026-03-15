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
  const copy1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const copy1 = copy1Ref.current;
    if (!track || !copy1) return;

    const setWidth = () => {
      const w = copy1.getBoundingClientRect().width;
      if (w > 0) track.style.setProperty('--marquee-copy-width', `${w}px`);
    };

    setWidth();
    // Re-measure after fonts load
    document.fonts.ready.then(setWidth);

    const ro = new ResizeObserver(setWidth);
    ro.observe(copy1);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes collabrix-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-1 * var(--marquee-copy-width, 0px))); }
        }
      `}</style>

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
          style={{
            display: 'flex',
            width: 'max-content',
            willChange: 'transform',
            animation: `collabrix-marquee ${speed}s linear infinite`,
            animationDirection: reverse ? 'reverse' : 'normal',
          }}
        >
          <div
            ref={copy1Ref}
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0, whiteSpace: 'nowrap' }}
          >
            {children}
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0, whiteSpace: 'nowrap' }}
            aria-hidden="true"
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
