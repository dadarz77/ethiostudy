/* ============================================================
   Client error reporting.

   Design constraints, in priority order:
   1. Never break the app. Every public function is total: it catches
      its own errors and returns a value, always.
   2. Never leak student content. Fields are allowlisted, and free-form
      context is scrubbed — lesson notes and answers must never leave the
      device (see scrubCtx).
   3. Survive offline. Errors queue in localStorage and flush when the
      student is authenticated and online, so a crash during an offline
      session still reaches us later.

   Where the data goes: Supabase `error_log` (see
   supabase/migrations/2026-11-01-error-log.sql). RLS lets a student insert
   and read only their own rows; admins read all.
   ============================================================ */

import { supabase, isSupabaseConfigured } from './supabase';

export type ErrorSource = 'react.render' | 'window.error' | 'unhandledrejection' | 'sync' | 'auth';

export interface ErrorReport {
  event: string;
  message: string;
  stack: string | null;
  route: string | null;
  source: ErrorSource;
  build_id: string;
  ctx: Record<string, unknown>;
}

const QUEUE_KEY = 'ethiostudy.errqueue.v1';
const MAX_QUEUE = 50;
/** Same error more than this per session is almost always a render loop. */
const MAX_PER_SIGNATURE = 3;
/** Give up on a row after this many failed uploads so the queue can't stall. */
const MAX_ATTEMPTS = 3;
const MAX_MESSAGE_CHARS = 500;
const MAX_STACK_CHARS = 2000;

interface Queued extends ErrorReport {
  id: string;
  ts: number;
  attempts: number;
}

type AnyImportMeta = ImportMeta & { env?: Record<string, string | undefined> };

/** Which deployed bundle produced this error (set from the commit SHA in CI). */
export const BUILD_ID: string =
  (import.meta as AnyImportMeta).env?.VITE_BUILD_ID ?? 'dev';

/* ---------- storage (never throws) ---------- */

function readQueue(): Queued[] {
  try {
    if (typeof localStorage === 'undefined') return [];
    const raw = localStorage.getItem(QUEUE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Queued[]) : [];
  } catch {
    return [];
  }
}

function writeQueue(queue: Queued[]): void {
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue.slice(-MAX_QUEUE)));
  } catch {
    // Quota or private mode — drop silently. Reporting must never surface.
  }
}

/* ---------- scrubbing ---------- */

/** Keys whose values may contain student-authored content or identifiers. */
const PII_KEYS = /note|answer|text|email|name|phone|password|token|question|prompt/i;

/**
 * Allowlist-shaped context: scalars only, no functions/objects, no unknown
 * student content. A thrown object with a `note` field must not ship.
 */
export function scrubCtx(ctx: Record<string, unknown> = {}): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(ctx)) {
    if (PII_KEYS.test(k)) continue;
    if (v === null || typeof v === 'number' || typeof v === 'boolean') {
      out[k] = v;
    } else if (typeof v === 'string') {
      out[k] = v.slice(0, 120); // topic ids, error codes — not prose
    }
    // objects, arrays, functions, symbols: dropped on purpose
  }
  return out;
}

/* ---------- fingerprints ---------- */

/** Stable short code so a student can read it out loud: "error A3F9K2". */
export function shortCode(signature: string): string {
  let h = 5381;
  for (let i = 0; i < signature.length; i++) h = ((h << 5) + h + signature.charCodeAt(i)) >>> 0;
  return h.toString(36).toUpperCase().padStart(6, '0').slice(-6);
}

function signatureOf(r: ErrorReport): string {
  return [r.source, r.event, r.message, r.route ?? ''].join('|');
}

function countSignature(queue: Queued[], signature: string): number {
  return queue.filter(q => signatureOf(q) === signature).length;
}

/* ---------- extraction ---------- */

function errorToReport(error: unknown, opts: {
  source: ErrorSource;
  event?: string;
  route?: string | null;
  ctx?: Record<string, unknown>;
}): ErrorReport {
  let message = 'Unknown error';
  let stack: string | null = null;

  if (error instanceof Error) {
    message = error.message || error.name;
    stack = error.stack ?? null;
  } else if (typeof error === 'string') {
    message = error;
  } else if (error && typeof error === 'object') {
    // Supabase rejects with plain objects like { message, code, details }.
    const e = error as { message?: unknown; code?: unknown };
    message = typeof e.message === 'string' ? e.message : JSON.stringify(scrubCtx(e as Record<string, unknown>));
  }

  const ctx = scrubCtx(opts.ctx);
  // Supabase/HTTP codes are the single most useful field for sync failures.
  if (error && typeof error === 'object') {
    const e = error as { code?: unknown; status?: unknown };
    if (typeof e.code === 'string') ctx.code = e.code.slice(0, 40);
    if (typeof e.status === 'number') ctx.status = e.status;
  }

  return {
    event: opts.event ?? 'client_error',
    message: message.slice(0, MAX_MESSAGE_CHARS),
    stack: stack ? stack.slice(0, MAX_STACK_CHARS) : null,
    route: opts.route ?? (typeof location !== 'undefined' ? location.pathname : null),
    source: opts.source,
    build_id: BUILD_ID,
    ctx,
  };
}

/* ---------- public API ---------- */

/**
 * Record an error. Returns the short code to show the student (or null when
 * suppressed as a duplicate). Never throws.
 */
export function reportError(error: unknown, opts: {
  source: ErrorSource;
  event?: string;
  route?: string | null;
  ctx?: Record<string, unknown>;
}): string | null {
  try {
    const report = errorToReport(error, opts);
    const signature = signatureOf(report);
    const queue = readQueue();

    // A render loop can fire hundreds of identical reports. Keep the first few.
    if (countSignature(queue, signature) >= MAX_PER_SIGNATURE) return shortCode(signature);

    const entry: Queued = {
      ...report,
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      ts: Date.now(),
      attempts: 0,
    };
    writeQueue([...queue, entry]);
    scheduleFlush();
    return shortCode(signature);
  } catch {
    return null;
  }
}

let flushTimer: ReturnType<typeof setTimeout> | null = null;

function scheduleFlush(): void {
  try {
    if (flushTimer) return;
    flushTimer = setTimeout(() => {
      flushTimer = null;
      void flushErrorQueue();
    }, 5000);
  } catch {
    /* no timers (SSR) — flush happens on init instead */
  }
}

/**
 * Upload queued errors. Requires an authenticated session: anonymous rows
 * would be unrate-limitable spam, so pre-login errors wait in the queue and
 * are attributed once the student signs in.
 */
export async function flushErrorQueue(): Promise<number> {
  if (!supabase || !isSupabaseConfigured) return 0;
  const queue = readQueue();
  if (!queue.length) return 0;

  // Imported lazily: observability is loaded by the boundary and by the sync
  // engine, and a static store import risks an import cycle at boot.
  const { useAuthStore } = await import('../store/useAuthStore');
  const user = useAuthStore.getState().user;
  if (!user || user.id.startsWith('offline-') || user.id.startsWith('google-offline-')) return 0;

  const batch = queue.slice(0, 20);
  const rows = batch.map(q => ({
    user_id: user.id,
    event: q.event,
    message: q.message,
    stack: q.stack,
    route: q.route,
    source: q.source,
    build_id: q.build_id,
    ctx: q.ctx,
    created_at: new Date(q.ts).toISOString(),
  }));

  try {
    const { error } = await supabase.from('error_log').insert(rows);
    if (error) throw error;
    const sent = new Set(batch.map(b => b.id));
    writeQueue(readQueue().filter(q => !sent.has(q.id)));
    return batch.length;
  } catch {
    // Keep the rows, but stop retrying a poison payload forever.
    const bumped = readQueue().map(q =>
      batch.some(b => b.id === q.id) ? { ...q, attempts: q.attempts + 1 } : q,
    ).filter(q => q.attempts < MAX_ATTEMPTS);
    writeQueue(bumped);
    return 0;
  }
}

/** Wire global handlers. Idempotent; call once from main.tsx. */
export function initErrorReporting(): void {
  try {
    if (typeof window === 'undefined') return;

    window.addEventListener('error', (e: ErrorEvent) => {
      reportError(e.error ?? e.message, {
        source: 'window.error',
        event: 'uncaught_error',
        ctx: { file: e.filename, line: e.lineno, col: e.colno },
      });
    });

    window.addEventListener('unhandledrejection', (e: PromiseRejectionEvent) => {
      reportError(e.reason, { source: 'unhandledrejection', event: 'unhandled_rejection' });
    });

    // A queued error that never flushes is just a local log. Try on the way out
    // and whenever the tab is backgrounded.
    window.addEventListener('pagehide', () => { void flushErrorQueue(); });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) void flushErrorQueue();
    });

    void flushErrorQueue();
  } catch {
    /* instrumentation must not take the app down */
  }
}

/** Test/maintenance helper: drop everything queued. */
export function clearErrorQueue(): void {
  try {
    if (typeof localStorage !== 'undefined') localStorage.removeItem(QUEUE_KEY);
  } catch { /* ignore */ }
}

export function queuedErrorCount(): number {
  return readQueue().length;
}
