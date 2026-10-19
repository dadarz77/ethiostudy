# UI/UX Overhaul + Dedicated Auth Page + Admin Panel — Design

**Date:** 2026-10-20
**Status:** Approved by user (styles A+B, auth B + three.js, admin A)
**App:** `apps/web` — Vite + React 19, React Router v7, Zustand, Supabase auth, hand-rolled token design system in `src/styles.css`

## Goals

1. Make the UI more attractive and clean in **both** themes: dark = "Refined Cosmos" (direction A), light = "Bright Study Room" (direction B), same structure in both.
2. Make lesson-note visuals clear, high-contrast, and consistent across the 16 visual types.
3. Fix the measured weaknesses from the 2026-10-20 UI audit (7/10 baseline).
4. Replace the auth modal with a polished dedicated `/auth` page featuring a true three.js background scene.
5. Add a classic-console admin panel at `/admin` (stats + user management; no online content editing — content stays in the git/`data/` pipeline).

## Non-goals

- No online lesson editing or content writing via admin (QA browsing is read-only).
- No design-system migration to utility-first CSS; keep and refine `styles.css` tokens.
- No backend changes beyond a small Supabase schema/policy migration.

## 1. Theme system

Single token-based system, both themes structurally identical:

- **Dark "Refined Cosmos":** keep the cosmic identity, elevate polish: glassy layered cards (surface + 1px gradient border), dominant violet accent (`--accent`) with cyan as secondary, luminous data tables, gradient progress rings.
- **Light "Bright Study Room":** white cards, flat 1px borders, soft shadow, same indigo/violet accent, near-black text, replacing the current low-contrast light theme.
- **Shared:** a lucide-react icon replaces every UI emoji (subject cards, stat cards, nav); consistent radius/spacing scale; theme toggle keeps working via `data-theme`.

### 2. Page-level fixes (from the audit)

| Area | Fix |
|---|---|
| Dashboard | Merge the two stacked welcome banners into one hero (greeting + continue-lesson CTA + mastery ring). Resume card per subject. Icon-tile subject grid. Fix cropped "EXPLORE SUBJECTS" band and vertical rhythm. |
| Browse | Subject cards: colored lucide icon tile with per-subject gradient, left-aligned titles, visible progress bar + percentage, unit counts as quiet meta. |
| Topic view | Consistent section header chrome; more generous line-height and section spacing; accent color consolidated to the violet family; restyled tab chips with a clear active state. |
| Mobile | Topbar: logo + expanding search + one settings glyph (no collision). Bottom nav: 4 items (Learn, Practice, Exams, Me), labels never wrap. |
| Progress / Practice | Emoji stat clutter to icon-tile stat cards; useful empty states; humble but confident data presentation. |

## 3. Notes visuals cleanup

`src/components/Visuals.tsx` + lesson rendering in `TopicView.tsx`:

- Unified visual card chrome: title bar with type icon, consistent padding, theme-aware table styles (zebra rows, highlighted key rows readable in both themes).
- Larger, higher-contrast SVG text and chart labels; use theme tokens instead of hard-coded dark-only colors baked into current components.
- One semantic color pair `--ok` / `--bad` shared by every visual type (green = correct/equilibrium/benefit, red = incorrect/deficit).
- Roomier node spacing and cleaner connectors for mindMap / flowChart / cycleDiagram / timeline.

## 4. Dedicated `/auth` page

- New lazy route `/auth`; login / signup / forgot as tabs. The auth modal is removed as the primary path; topbar "Sign In" navigates to `/auth`, and account-required intercepts redirect there (returning the user to where they were after success).
- **three.js background** via `react-three-fiber`, lazily loaded in its own chunk: slowly rotating planet with atmosphere rim light, orbiting moon, mouse-parallax starfield. Fallback to the existing canvas `ParticleField` when WebGL is unavailable.
- Form polish: real-time validation, inline errors, password visibility toggle, loading/success states, "Welcome back" / "Create your account" headers, Google button first, benefits strip (synced progress, streaks, leaderboard).
- Keep the existing `useAuthStore` logic (email/password + Google OAuth, Supabase session, offline demo-user fallback when `VITE_SUPABASE_*` is unset).

## 5. Admin panel (`/admin`, classic console)

- **Access:** `profiles.is_admin` checked client-side; route guarded and hidden from the main nav; unauthenticated/non-admin visits redirect to `/auth`; "Supabase not configured" notice in offline/dev fallback.
- **Own sidebar tabs: Overview / Users / Engagement / Content.**
  - **Overview:** stat cards (total users, active today, quizzes/day, average score), popular-topics bar list, recent signups.
  - **Users:** searchable table (grade filter, active dot, quiz count, avg score); per-row actions: view that user's progress detail, ban/unban (`profiles.is_banned`), reset progress (delete their `student_progress` rows behind a confirm modal). CSV export client-side.
  - **Engagement:** 14-day quiz-volume chart and streak distribution derived from `student_progress` timestamps.
  - **Content:** read-only lesson browser for QA: counts per grade/subject/unit, open any lesson JSON rendered through the lesson components.
- **Supabase migration (checked-in SQL file):** add `is_admin`, `is_banned`, `last_seen` columns to `profiles`; create a quiz-activity helper view; RLS policies: admins read all profiles and all `student_progress` rows, admins update `is_banned`/`last_seen`, admins delete `student_progress` rows (reset); regular users keep their current self-row policies. Auth-user deletion or role granting stays out of the client panel (documented: grant admin via SQL).
- `last_seen` is refreshed by the existing sync engine on authenticated sessions.

## 6. Testing and gates

- Extend `Visuals.test.tsx` for the new chrome/config tokens; add route tests: `/auth` renders both tabs and validates bad input; `/admin` guards — admin sees the console, non-admin redirects to `/auth`.
- Gates: `npx vitest run` (103+ pass), `npx tsc -b` exit 0. Converter/data pipeline untouched.
- `oxlint` clean on touched files; PWA precache unaffected (lesson JSON unchanged).

## 7. File plan (indicative)

- `src/styles.css` — token + component overhaul (both themes).
- `src/views/Dashboard.tsx`, `Browse.tsx`, `Progress.tsx`, `Practice.tsx` — layout rewrites.
- `src/views/TopicView.tsx` — section chrome/spacing; `src/components/Visuals.tsx` — refactor.
- `src/components/Scene3D.tsx` (new) and `src/views/Auth.tsx` (new); `src/App.tsx` — routes; `src/components/AuthModal.tsx` — retired (replaced by redirect to `/auth`).
- `src/views/admin/*` (new: AdminLayout + panels), `src/lib/admin.ts` (new: Supabase queries + role helpers).
- `supabase/migrations/2026-10-20-admin.sql` (new).
