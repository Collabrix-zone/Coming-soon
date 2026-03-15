import { ReactNode } from 'react';

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
        className="flex w-max"
        style={{ animation: `collabrix-marquee ${speed}s linear infinite${reverse ? ' reverse' : ''}` }}
      >
        <div className="flex items-center shrink-0">{children}</div>
        <div className="flex items-center shrink-0" aria-hidden="true">{children}</div>
      </div>

      {/* Scoped keyframe — won't collide with any global CSS */}
      <style>{`
        @keyframes collabrix-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
