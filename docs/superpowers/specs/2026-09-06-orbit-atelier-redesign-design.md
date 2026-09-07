# EthioStudy Orbit Atelier Redesign

## Goal

Transform EthioStudy into a clear, inviting Grade 10–11 study environment for Ethiopian learners. The interface should pair purposeful 3D depth and calm motion with obvious next steps that improve subject understanding. Lesson and quiz content remains English. Interface labels can switch between English and Amharic.

## Experience direction

The dashboard combines the chosen Learning Orbit and Study Atelier concepts:

- A leading continuation panel presents one next study action in a small, layered “learning universe”.
- Subjects appear as tactile, tilted 3D cards with their own recognizable materials and colors: gold for mathematics, blue for physics, green for biology, and warm red for chemistry.
- Depth is created with CSS perspective, transforms, shadows, gradients, and a restrained canvas star field rather than a heavy 3D dependency.
- Motion reinforces state: an orbit/ambient background for orientation, a subtle card tilt on pointer interaction, and clear progress/completion feedback. It never blocks reading or navigation.

## Information architecture

The existing views and curriculum data remain unchanged. The dashboard is reorganized around four actions:

1. Continue learning: resumes the most recent topic, or opens the topic picker when there is no history.
2. Explore subjects: opens a chosen subject in the existing curriculum browser.
3. Practice weak topics: routes to practice and makes current performance visible.
4. Exam readiness: routes to exam preparation and summarizes readiness.

The existing sidebar remains the reliable navigation fallback, but is visually streamlined around these actions.

## Interface components

- A persistent `English / አማርኛ` control in the top bar stores its selection locally and translates interface chrome, buttons, navigation, helper text, and empty-state messaging. It does not translate authored lessons or quiz data.
- A new dashboard hero contains the learning orbit, the day/context label, an accessible status summary, and a single primary continuation button.
- A subject deck replaces the generic dashboard progress-only entry point. Every subject card has an icon, progress, its study count, and a direct action.
- Supporting study actions present practice and exam preparation as compact, understandable cards instead of requiring users to infer where to go.
- Existing score, study-time, progress, and recent-session information remains available below the action-oriented area.

## Visual system

The palette stays recognizably Ethiopian without using the flag as decoration: deep ink-blue background; maize gold, forest green, cool blue, and terracotta as subject accents; soft cream text for warmth. Existing Outfit and DM Sans remain the display/body pairing. Status colors and text retain accessible contrast in both dark and light themes.

The signature element is the learning orbit: a CSS-built planetoid and rings that give the dashboard depth while keeping continuation content readable. The distinctive risk is combining its cinematic presentation with familiar physical subject cards, rather than making the whole application a visual spectacle.

## Behavior and data flow

- Dashboard derives data from the existing Store, curriculum index, and study history. No curriculum data structures change.
- The selected language is persisted through the existing settings storage API. A central translation dictionary supplies UI text with English fallback.
- Subject cards link with the existing `browse` route and subject parameters. Continue links to the last studied topic if valid, otherwise the existing picker.
- 3D pointer effects use CSS custom properties set by one delegated pointer handler. Touch devices retain the static 3D composition without requiring hover.

## Accessibility, resilience, and performance

- Respect `prefers-reduced-motion`; remove continuous animation and pointer tilt while retaining hierarchy.
- Use visible keyboard focus, semantic buttons/links, descriptive aria labels, and touch targets of at least 44px.
- All vital information is text, not conveyed solely by color or motion.
- Avoid external animation or 3D packages. Use one canvas animation already present and avoid per-card animation loops.
- If a saved recent topic no longer exists, safely fall back to the picker.

## Validation

- Verify core routes: dashboard, subject browser, practice, and exam prep.
- Verify English/Amharic interface switching persists after reload and never alters lesson/quiz content.
- Check desktop, narrow mobile layout, light/dark themes, keyboard focus, and reduced-motion mode.
- Confirm the static app loads without console errors and that existing topic selection, search, timer, quiz, notes, and progress remain functional.

## Scope boundary

This implementation does not translate academic content, alter curriculum datasets, add accounts, or introduce a WebGL/Three.js rendering engine.

## Full layout system extension

The initial dashboard treatment extends to every existing view while preserving the left sidebar and current routes.

- **Command rail:** The left sidebar remains the primary orientation tool. It receives a quieter layered background, a clear active glow, a compact study-status treatment, and a mobile sheet behavior that does not obscure navigation.
- **Curriculum browser:** Grade, subject, unit, and topic levels use a consistent learning-path header and subject-aware surfaces. Topic cards show study state, difficulty, and mastery as a scan-friendly route rather than an undifferentiated card list.
- **Lesson studio:** Lessons become an uncluttered reading surface with a visible title/context band, a progress cue, contained controls, and improved visual hierarchy for explanations, formulae, examples, and common mistakes. Timer controls remain available and preserve their existing behavior.
- **Practice and exam preparation:** Existing practice modes and exam generation stay intact but are presented as purpose-specific mission cards with readiness cues, clear start actions, and useful no-history guidance.
- **Progress, notes, bookmarks, settings, search, modals, and toasts:** These views use the same elevated surface vocabulary, intentional spacing, visible states, and responsive behaviors. Existing data and actions do not change.
- **Motion:** View entry, card depth, selected states, progress changes, dialogs, and search use the shared motion cadence. Reduced-motion disables nonessential movement while retaining all state cues.

## Full-layout validation

- Exercise every existing route in desktop and narrow/mobile layouts after the shared surface changes.
- Verify that all existing `data-act` controls still route and operate correctly.
- Verify no dense lesson content loses contrast, readable line length, keyboard focus, or scroll access.
