import { describe, it, expect, beforeEach } from 'vitest';
import {
  reportError, scrubCtx, shortCode, queuedErrorCount, clearErrorQueue,
  flushErrorQueue, BUILD_ID,
} from './observability';

beforeEach(() => {
  clearErrorQueue();
});

describe('scrubCtx — no student content leaves the device', () => {
  it('drops values whose key implies authored content or an identifier', () => {
    const out = scrubCtx({
      note: 'my private note about my teacher',
      answer: 'the answer I typed',
      text: 'essay body',
      email: 'student@example.com',
      question: 'what I got wrong',
      token: 'eyJhbGciOi...',
    });
    expect(out).toEqual({});
  });

  it('keeps bounded scalars needed for triage', () => {
    const out = scrubCtx({ topicId: 'g12-physics-1', elapsedMs: 1500, ok: false, missing: null });
    expect(out).toEqual({ topicId: 'g12-physics-1', elapsedMs: 1500, ok: false, missing: null });
  });

  it('drops nested objects and functions instead of serialising them', () => {
    const out = scrubCtx({ payload: { secret: 'x' }, list: [1, 2, 3], fn: () => 1 });
    expect(out).toEqual({});
  });

  it('truncates long strings', () => {
    const out = scrubCtx({ route: 'a'.repeat(500) });
    expect(String(out.route)).toHaveLength(120);
  });
});

describe('shortCode', () => {
  it('is deterministic and 6 characters', () => {
    expect(shortCode('render_error|boom|/quiz')).toBe(shortCode('render_error|boom|/quiz'));
    expect(shortCode('render_error|boom|/quiz')).toMatch(/^[0-9A-Z]{6}$/);
  });

  it('differs for different signatures', () => {
    expect(shortCode('a|b')).not.toBe(shortCode('a|c'));
  });
});

describe('reportError — total function', () => {
  it('never throws on hostile input', () => {
    const circular: Record<string, unknown> = {};
    circular.self = circular;
    const hostile = [null, undefined, 0, '', 'plain string', circular, Symbol('s'), () => 1, new Error('x')];

    for (const v of hostile) {
      expect(() => reportError(v, { source: 'window.error' })).not.toThrow();
    }
  });

  it('returns a short code for a fresh error', () => {
    const code = reportError(new Error('Level 4 failed to load'), { source: 'react.render' });
    expect(code).toMatch(/^[0-9A-Z]{6}$/);
  });

  it('queues the report locally', () => {
    reportError(new Error('boom'), { source: 'react.render', event: 'render_error' });
    expect(queuedErrorCount()).toBe(1);
  });

  it('caps identical errors at 3 so a render loop cannot flood the queue', () => {
    for (let i = 0; i < 25; i++) {
      reportError(new Error('same every time'), { source: 'react.render', event: 'render_error' });
    }
    expect(queuedErrorCount()).toBe(3);
  });

  it('distinct errors still queue independently', () => {
    for (let i = 0; i < 5; i++) {
      reportError(new Error(`distinct failure ${i}`), { source: 'sync', event: 'sync_push_failed' });
    }
    expect(queuedErrorCount()).toBe(5);
  });

  it('truncates a huge message', () => {
    reportError(new Error('x'.repeat(5000)), { source: 'window.error' });
    const raw = localStorage.getItem('ethiostudy.errqueue.v1')!;
    const [entry] = JSON.parse(raw);
    expect(entry.message).toHaveLength(500);
  });

  it('does not carry a student note field into the stored payload', () => {
    reportError(new Error('render failed'), {
      source: 'react.render',
      ctx: { note: 'private', topicId: 'g10-bio-3' },
    });
    const raw = localStorage.getItem('ethiostudy.errqueue.v1')!;
    expect(raw).not.toContain('private');
    expect(raw).toContain('g10-bio-3');
  });

  it('stamps the build id', () => {
    reportError(new Error('boom'), { source: 'react.render' });
    const [entry] = JSON.parse(localStorage.getItem('ethiostudy.errqueue.v1')!);
    expect(entry.build_id).toBe(BUILD_ID);
  });
});

describe('flushErrorQueue', () => {
  it('is a no-op when Supabase is not configured', async () => {
    reportError(new Error('boom'), { source: 'react.render' });
    await expect(flushErrorQueue()).resolves.toBe(0);
    // Nothing was sent, so nothing is discarded: the report survives for later.
    expect(queuedErrorCount()).toBe(1);
  });
});
