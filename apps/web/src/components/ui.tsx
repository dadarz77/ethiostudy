import { useEffect } from 'react';

/* Shared UI primitives — exact ports of js/components.js so the premium
   design system (cards, chips, orbit hero, 3D tilt) is actually used. */

export const esc = (s: unknown) => String(s ?? '');

export function Chip({ text, cls = '' }: { text: React.ReactNode; cls?: string }) {
  return <span className={'chip ' + cls}>{text}</span>;
}

export function DiffChip({ d }: { d: number | string }) {
  const n = Number(d) || 0;
  const label = n >= 4 ? 'Hard' : n >= 3 ? 'Medium' : 'Easy';
  const cls = n >= 4 ? 'chip-diff-hard' : n >= 3 ? 'chip-diff-medium' : 'chip-diff-easy';
  return <Chip text={label} cls={cls} />;
}

export function ProgressBar({ pct, cls = '' }: { pct: number; cls?: string }) {
  const p = Math.max(0, Math.min(100, Math.round(pct || 0)));
  return <div className={'progress ' + cls}><div style={{ width: p + '%' }} /></div>;
}

export function StatCard({ num, label, ico }: { num: React.ReactNode; label: string; ico?: string }) {
  return (
    <div className="card card-hover stat">
      <div className="stat-ico" style={{ fontSize: '1.6rem' }}>{ico || ''}</div>
      <div className="stat-num">{num}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export function EmptyState({ icon, title, sub }: { icon: string; title: string; sub?: string }) {
  return (
    <div className="empty-state">
      <div className="big">{icon}</div>
      <h3>{title}</h3>
      {sub && <p className="muted">{sub}</p>}
    </div>
  );
}

export function ScoreRing({ pct }: { pct: number }) {
  const C = 2 * Math.PI * 54;
  const color = pct >= 70 ? 'var(--success)' : 'var(--danger)';
  return (
    <div className="score-ring">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" fill="none" stroke="var(--bg-2)" strokeWidth="12" />
        <circle cx="60" cy="60" r="54" fill="none" stroke={color} strokeWidth="12" strokeLinecap="round"
          strokeDasharray={C} strokeDashoffset={C * (1 - pct / 100)}
          style={{ transition: 'stroke-dashoffset .8s cubic-bezier(.2,.8,.2,1)' }} />
      </svg>
      <div className="ring-num">{pct}%</div>
    </div>
  );
}

/* 3D pointer tilt for .subject-orbit-card grids — port of v1's pointermove handler. */
export function useOrbitTilt() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const move = (e: PointerEvent) => {
      if (reduced) return;
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
    return () => { document.removeEventListener('pointermove', move); document.removeEventListener('pointerout', out); };
  }, []);
}
