import { useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';

/* 3D pointer tilt for .subject-orbit-card grids — port of v1's pointermove handler. */
export function useOrbitTilt() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lowMotion = () => (useAppStore.getState().settings.motion ?? 'full') === 'low';
    const move = (e: PointerEvent) => {
      if (reduced || lowMotion()) return;
      const card = (e.target as HTMLElement).closest?.('.subject-orbit-card') as HTMLElement | null;
      if (!card) return;
      const box = card.getBoundingClientRect();
      card.style.setProperty('--tilt-x', `${((e.clientY - box.top) / box.height - .5) * -8}deg`);
      card.style.setProperty('--tilt-y', `${((e.clientX - box.left) / box.width - .5) * 10}deg`);
    };
    const out = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest?.('.subject-orbit-card') as HTMLElement | null;
      if (card && !card.contains(e.relatedTarget as Node)) {
        card.style.removeProperty('--tilt-x');
        card.style.removeProperty('--tilt-y');
      }
    };
    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerout', out);
    return () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerout', out);
    };
  }, []);
}
