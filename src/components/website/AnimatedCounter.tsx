import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';

interface AnimatedCounterProps {
  value: string;       // e.g. "150+", "98%", "500+"
  label: string;
  className?: string;
  numberClassName?: string;
}

export function AnimatedCounter({ value, label, className, numberClassName }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const match = value.match(/^(\d+)(.*)$/);
  const num = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : '';

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, num, { duration: 2, ease: 'easeOut' });
    return controls.stop;
  }, [isInView, num, count]);

  return (
    <div ref={ref} className={className}>
      <div className={`flex items-baseline justify-center gap-0 ${numberClassName}`}>
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm sm:text-base opacity-60 font-medium mt-1">{label}</div>
    </div>
  );
}
