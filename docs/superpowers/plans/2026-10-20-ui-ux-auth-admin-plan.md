# UI/UX Overhaul + Auth + Admin — Implementation Plan

**Design:** `docs/superpowers/specs/2026-10-20-ui-ux-auth-admin-design.md`

**Status (2026-10-20):** COMPLETE — all phases A–G implemented, verified (tsc 0, 111/111 vitest), committed.

**Rule:** one phase at a time, verify each with `npx vitest run` (all pass) + `npx tsc -b` (exit 0) + visual check via browser before the next. Keep all work consistent with the spec. Data pipeline (`data/`, converter) is untouched.

---

## Phase A — Theme foundation + shared chrome

1. `src/styles.css`: rework token blocks for both themes (dark: glassy cards, gradient-border cards, luminous tables, `--ok/--bad` semantic pair, violet primary + cyan secondary; light: white cards, flat borders, soft shadow, near-black text). Add radius/spacing scale.
2. Replace every UI emoji with lucide-react icons in `App.tsx` (topbar, sidebar), `Dashboard.tsx` (subject tiles, stat cards), `Browse.tsx`, `Progress.tsx`, `Practice.tsx`, `Visuals.tsx` where used as UI flags.
3. **Verify:** app boots in both themes, no emoji UI remains, tests + tsc pass.

## Phase B — Dashboard rewrite

1. `Dashboard.tsx`: single hero (greeting, date, continue-lesson CTA, mastery ring), remove the second welcome card; per-subject resume card; icon-tile subject grid; fix cropped band/rhythm.
2. **Verify:** browser screenshot dark+light+mobile; tests.

## Phase C — Browse / Progress / Practice polish

1. `Browse.tsx`: subject cards per spec (icon tile, left-aligned title, visible progress %, quiet meta).
2. `Progress.tsx` / `Practice.tsx`: icon-tile stat cards, polished empty states.
3. **Verify:** same as above.

## Phase D — TopicView + visuals cleanup

1. `TopicView.tsx`: section header chrome, spacing/line-height, consolidated violet accent, tab chips active state.
2. `Visuals.tsx`: unified visual card chrome (title bar with type icon), theme tokens for tables/SVG text, shared `--ok/--bad`, roomier diagram nodes.
3. **Verify:** a lesson with tableVisual/comparison/flowChart/mindMap/timeline checked in both themes; `Visuals.test.tsx` extended; tests.

## Phase E — Dedicated /auth page + three.js background

1. `npm i three @react-three/fiber`; `src/components/Scene3D.tsx` (lazy chunk): rotating planet + atmosphere rim light + orbiting moon + mouse-parallax stars; WebGL fallback to `ParticleField`.
2. `src/views/Auth.tsx`: login/signup/forgot tabs, validation states, password visibility, Google first, benefits strip; redirect-back behavior after sign-in.
3. `App.tsx`: add `/auth` route; topbar Sign In navigates; `AuthModal.tsx` retired — auth intercepts redirect to `/auth`.
4. **Verify:** sign-in happy path (offline demo fallback + Supabase when configured), tests.

## Phase F — Admin panel + Supabase migration

1. `supabase/migrations/2026-10-20-admin.sql`: `profiles.is_admin/is_banned/last_seen`, quiz-activity helper view, RLS policies (admins read.all profiles + progress, ban/reset write perms; user self-policies unchanged).
2. `src/lib/admin.ts`: role helpers + queries (profiles, progress aggregates, engagement); `last_seen` refresh hook in sync flow; auth store signs out banned users.
3. `src/views/admin/*`: `AdminLayout` (collapsible sidebar, ADMIN badge, guard/redirect), `Overview`, `Users` (search/filter/table: view progress / ban-unban / reset with confirm / CSV export), `Engagement` (14-day quiz chart), `Content` (read-only QA browser).
4. **Verify:** guard tests (admin passes, non-admin redirects, offline shows notice), tests.

## Phase G — Mobile + final gates

1. Topbar/bottom-nav mobile fixes; responsive sweep of every new view at 390px.
2. Full gates: `npx vitest run`, `npx tsc -b`, visual pass in both themes, commit per phase.

---

## Risks / guardrails

- Do not break the PWA precache or lesson JSON loading.
- All destructive admin actions are confirmed modals; no auth-user deletion from client.
- three.js stays lazy-loaded in its own chunk; main bundle must not grow.
