import { describe, it, expect } from 'vitest';
import { tr, COPY } from './i18n';
import type { Lang } from './i18n';

const NAV_KEYS = ['dashboard','browse','practice','exam','international','national','bookmarks','notes','settings','progress'];

describe('i18n completeness', () => {
  it('every nav key has real strings in EN and AM (no raw-key fallback)', () => {
    for (const k of NAV_KEYS) {
      for (const lang of ['en','am'] as const) {
        const v = (COPY[lang] as Record<string,string>)[k];
        expect(v, `COPY.${lang}.${k} missing`).toBeTruthy();
        expect(tr(k, lang as Lang)).not.toBe(k); // tr() falls back to raw key
      }
    }
  });
});
