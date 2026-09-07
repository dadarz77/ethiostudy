# EthioStudy Feature Parity Checklist

Extracted from the vanilla app (`js/app.js`, `js/state.js`, `js/tutor.js`) on 2026-09-07.
Every row must be ✅ in the React app before cutover (Phase 6), or explicitly descoped with Robel's sign-off.

## Views (20 render functions)

| # | Old render fn | Route in React | Status |
|---|---|---|---|
| 1 | renderDashboard | `/` | ☐ |
| 2 | renderPicker (random topic 🎲) | `/` action | ☐ |
| 3 | renderBrowse (grade/subject deck) | `/curriculum` | ☐ |
| 4 | renderSubject (open-subject) | `/curriculum/:grade/:subject` | ☐ |
| 5 | renderUnit (open-unit) | `/curriculum/:g/:s/:unit` | ☐ |
| 6 | renderTopic (open-topic) | `/topic/:id` | ☐ |
| 7 | renderLesson (lesson tab) | `/topic/:id` tab | ☐ |
| 8 | renderQuizPanel / renderQuiz / renderQuizQuestion | `/topic/:id` quiz tab | ☐ |
| 9 | renderQuizResult (grade bands, explanations) | quiz finish | ☐ |
| 10 | renderExam (subject picker) | `/exam` | ☐ |
| 11 | renderExamRun (timed multi-subject) | `/exam/run` | ☐ |
| 12 | renderExamResult (per-subject breakdown) | exam finish | ☐ |
| 13 | renderPractice (weak-topic drill) | `/practice` | ☐ |
| 14 | renderProgress (stats, mastery histogram) | `/progress` | ☐ |
| 15 | renderBookmarks | `/bookmarks` | ☐ |
| 16 | renderNotes / renderNotesPanel | `/notes` + topic tab | ☐ |
| 17 | renderSettings | `/settings` | ☐ |
| 18 | renderTutorPanel (chat chips + answers) | `/topic/:id` tutor tab | ☐ |
| 19 | Timer widget (study session) | topic view | ☐ |
| 20 | Particles/visuals canvas | global, reduced-motion aware | ☐ |

## Actions (data-act inventory)

| Action | Behavior to preserve |
|---|---|
| bookmark / toggle-bookmark / remove-bookmark | topic/question/formula bookmarks, persisted |
| browse-grade / set-grade | grade 10/11 switch, filters everywhere |
| set-language | EN/አማ toggle, persisted |
| set-theme / 🌙 | dark/light, persisted |
| set-quizlen | quiz length 5/10/20 |
| pick-topic | random topic roulette |
| open-subject / open-unit / open-topic | drill-down nav |
| start-quiz / retake / next-topic | quiz lifecycle |
| generate-exam / exam-again | exam lifecycle |
| go-practice | weak-topics entry |
| start-session / toggle-timer / reset-timer / finish-timer | study pomodoro + streak touch |
| toggle-sound | quiz SFX on/off |
| delete-note / add note | per-topic notes |
| reset-all | full data wipe w/ confirm |

## Store API (js/state.js) — must exist in Zustand store

`mastery` · `recomputeMastery` · `progressOf` · `topicProg` · `logQuiz` · `logStudy` · `touchStreak` · `weakTopics` · `overallStats` · `subjectStats` · `studyHistory` · `addBookmark`/`removeBookmark`/`isBookmarked` · `addNote`/`getNotes`/`deleteNote` · `getSetting`/`setSetting` · `resetAll`

**Migration invariant:** reads existing `localStorage["ethiostudy_v1"]` blob without loss.

## Grader invariants (js/quiz.js — Sept 7 hardened)

- 2,123/2,123 canonical answers pass (full-bank self-check test)
- 0 false positives (tf-flip, mcq-neighbor, junk text)
- calc answers with text ("polar covalent", "no") fall back to text grading
- single-char answers exact-match; ≤3-char alternatives word-boundary match
- mislabeled MCQ (friction direction) rescued at data level

## Global chrome

- Sidebar nav (Dashboard, Browse, Practice, Exam Prep, Progress, Bookmarks, Notes, Settings)
- Topbar: streak 🔥 count, EN/አማ, theme toggle, ☰ collapse
- Empty states (e.g. "No quiz yet" UI.emptyState)
- Keyboard: number keys 1-4 answer MCQ (nice-to-have; confirm)
