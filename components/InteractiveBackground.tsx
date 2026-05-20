'use client';

import { useEffect } from 'react';

export default function InteractiveBackground() {
  useEffect(() => {
    const handler = (e: PointerEvent) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', handler);
    return () => window.removeEventListener('pointermove', handler);
  }, []);

  return (
    <div className="bg-stage" aria-hidden>
      <div className="bg-grid" />
      <div className="bg-glow" />
      <div className="bg-scanlines" />
      <div className="bg-vignette" />
    </div>
  );
}
