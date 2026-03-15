import { useState, ReactNode, MouseEvent, CSSProperties } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  style?: CSSProperties;
  onClick?: () => void;
}

export function TiltCard({ children, className = '', maxTilt = 7, style, onClick }: TiltCardProps) {
  const [transform, setTransform] = useState(
    'perspective(700px) rotateX(0deg) rotateY(0deg)'
  );
  const [transition, setTransition] = useState('transform 0.5s ease');

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * maxTilt;
    const y = ((e.clientY - r.top) / r.height - 0.5) * maxTilt;
    setTransform(`perspective(700px) rotateX(${-y}deg) rotateY(${x}deg)`);
    setTransition('transform 0.08s ease');
  };

  const onLeave = () => {
    setTransform('perspective(700px) rotateX(0deg) rotateY(0deg)');
    setTransition('transform 0.5s ease');
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={className}
      style={{ ...style, transform, transition }}
    >
      {children}
    </div>
  );
}
