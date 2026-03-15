import { useRef, useEffect } from 'react';

export function NoiseOverlay({ alpha = 10 }: { alpha?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const SIZE = 256;
    let frame = 0;
    let animId = 0;

    canvas.width = SIZE;
    canvas.height = SIZE;

    const draw = () => {
      const img = ctx.createImageData(SIZE, SIZE);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255;
        d[i] = v; d[i + 1] = v; d[i + 2] = v; d[i + 3] = alpha;
      }
      ctx.putImageData(img, 0, 0);
    };

    const loop = () => {
      if (frame % 3 === 0) draw();
      frame++;
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => cancelAnimationFrame(animId);
  }, [alpha]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[6] w-screen h-screen"
      style={{ imageRendering: 'pixelated' }}
      aria-hidden="true"
    />
  );
}
