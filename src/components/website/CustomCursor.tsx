import { useRef, useEffect } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const dot = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.documentElement.style.cursor = 'none';

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const toOrange = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '44px';
        ringRef.current.style.height = '44px';
        ringRef.current.style.opacity = '0.5';
        ringRef.current.style.borderColor = '#ea580c';
      }
      if (dotRef.current) dotRef.current.style.background = '#ea580c';
    };

    const toBlue = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '28px';
        ringRef.current.style.height = '28px';
        ringRef.current.style.opacity = '0.35';
        ringRef.current.style.borderColor = '#0ea5e9';
      }
      if (dotRef.current) dotRef.current.style.background = '#0ea5e9';
    };

    window.addEventListener('mousemove', onMove);

    const t = setTimeout(() => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, label').forEach(el => {
        el.addEventListener('mouseenter', toOrange);
        el.addEventListener('mouseleave', toBlue);
      });
    }, 500);

    const lerp = (a: number, b: number, f: number) => a + (b - a) * f;
    let animId: number;

    const tick = () => {
      dot.current.x = lerp(dot.current.x, mouse.current.x, 0.35);
      dot.current.y = lerp(dot.current.y, mouse.current.y, 0.35);
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.left = `${dot.current.x}px`;
        dotRef.current.style.top = `${dot.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);

    return () => {
      document.documentElement.style.cursor = '';
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#0ea5e9',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: 28,
          height: 28,
          borderRadius: '50%',
          border: '1.5px solid #0ea5e9',
          opacity: 0.35,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition: 'width 0.25s ease, height 0.25s ease, opacity 0.25s ease, border-color 0.25s ease',
        }}
      />
    </div>
  );
}
