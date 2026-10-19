import { useNavigate } from 'react-router-dom';
import {
  Sigma, Dna, Atom, FlaskConical, Landmark, Earth, TrendingUp, Scale, BookOpenText, BookMarked,
  Library, ClipboardList, Dices, Sparkles, Target, ArrowUpRight, ChevronRight,
  Shield, Flame, BookOpen, CircleCheck, Hourglass, Timer, Trophy, Clock, Beaker, Compass,
} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { todayStr } from '../lib/scoring';
import { topicById, subjectsFor, subjectsByGroup, fmtTime, CURRICULUM, type Grade } from '../lib/curriculum';
import { statsFor } from '../lib/scoring';
import { tr } from '../lib/i18n';
import { ProgressBar } from '../components/ui';
import { useOrbitTilt } from '../lib/useOrbitTilt';

function HeroPlanet() {
  return (
    <>
      <div className="orbit-star">✦</div>
      <div className="orbit-ring ring-one" />
      <div className="orbit-ring ring-two" />
      <div className="orbit-planet"><span /></div>
      <div className="orbit-moon" />
    </>
  );
}

/* Lucide icon per subject key — no emoji icons in the UI. */
const SUBJECT_ICONS: Record<string, typeof Sigma> = {
  mathematics: Sigma,
  biology: Dna,
  physics: Atom,
  chemistry: FlaskConical,
  history: Landmark,
  geography: Earth,
  economics: TrendingUp,
  civics: Scale,
  esl: BookOpenText,
};
const subjectIcon = (key: string) => SUBJECT_ICONS[key] ?? BookMarked;

type IconType = typeof Sigma;

function StatTile({ num, label, icon: Icon, accent }: { num: React.ReactNode; label: string; icon: IconType; accent: string }) {
  return (
    <div className="card card-hover stat-tile">
      <span className="icon-tile" style={{ ['--tile-accent' as string]: accent }}><Icon size={22} /></span>
      <span className="stat-tile-label">{label}</span>
      <span className="stat-tile-num">{num}</span>
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();

  // Selective subscriptions — Dashboard only re-renders when these specific slices change
  const lang     = useAppStore(s => s.settings.language);
  const grade    = useAppStore(s => s.settings.grade);
  const progress = useAppStore(s => s.progress);
  const history  = useAppStore(s => s.history);
  const streak   = useAppStore(s => s.streak);
  const setSetting = useAppStore(s => s.setSetting);
  const totalStudySec = useAppStore(s => s.totalStudySec);

  const overall = statsFor(CURRICULUM as never, progress, { grade });
  const recent = history.slice(0, 6);
  const recentTopic = recent.map(h => topicById(h.topicId)).find(Boolean);
  useOrbitTilt();

  const today = new Date().toLocaleDateString(lang === 'am' ? 'am-ET' : 'en-ET', { weekday: 'long', month: 'long', day: 'numeric' });

  const isNewUser = recent.length === 0 && totalStudySec === 0;

  const resumeChip = recentTopic
    ? <button className="resume-chip resume-continue" onClick={() => navigate('/topic/' + recentTopic._id)}>
        <BookOpen size={15} /> <span>{tr('continue', lang)}:</span> <b>{recentTopic.title}</b> <ArrowUpRight size={14} />
      </button>
    : null;

  return (
    <>
      <section className="orbit-hero" aria-label={tr('continue', lang)}>
        <div className="orbit-copy">
          <div className="eyebrow">Ethiopian New Curriculum <span></span> {today}</div>
          <h1>{tr('welcome', lang)}</h1>
          <p>{lang === 'am'
            ? `የ${grade}ኛ ክፍል ትምህርትዎን በአንድ ግልጽ እርምጃ ይቀጥሉ።`
            : `Keep building your Grade ${grade} understanding—one clear step at a time.`}</p>
          <button className="orbit-action" onClick={() => recentTopic ? navigate('/topic/' + recentTopic._id) : navigate('/practice')}>
            <span>{tr('continue', lang)}</span>
            <b>{recentTopic ? recentTopic.title : tr('start', lang)}</b>
            <i><ArrowUpRight size={17} /></i>
          </button>
        </div>
        <div className="orbit-scene" aria-hidden="true">
          <HeroPlanet />
          <div className="orbit-caption">{overall.avgMastery || 0}%<small>mastery</small></div>
        </div>
      </section>

      {/* ── Compact continue-learning strip (merged from the old promo card) ── */}
      <section className="hero-resume-strip" aria-label="Quick actions">
        {resumeChip}
        <button className="resume-chip" onClick={() => navigate('/practice')}>
          <Dices size={15} /> {lang === 'am' ? 'በዘፈቀደ ልምምድ' : 'Random practice'}
        </button>
        <button className="resume-chip" onClick={() => navigate('/national')}>
          <ClipboardList size={15} /> {tr('national', lang)}
        </button>
        <button className="resume-chip" onClick={() => navigate('/browse')}>
          <Library size={15} /> {tr('browse', lang)}
        </button>
      </section>
      {streak.lastDate !== todayStr() && streak.current > 0 && (
        <button className="btn streak-nudge mt-3" style={{ width: '100%' }} onClick={() => navigate('/national')} aria-live="polite">
          <Shield size={15} /> Keep your <Flame size={13} /> {streak.current}-day streak alive — one exam today does it <ChevronRight size={15} />
        </button>
      )}
      {isNewUser && (
        <p className="tiny muted mt-3" style={{ textAlign: 'center' }}>
          {lang === 'am' ? 'ትምህርትዎን ይጀምሩ — ርዕስ ይምረጡ።' : 'Welcome to EthioStudy — pick a subject below to log your first session.'}
        </p>
      )}

      <section className="subject-deck" aria-label={tr('explore', lang)}>
        <div className="section-heading">
          <h2>Grade {grade} subjects</h2>
          <div className="row" style={{ gap: 8 }}>
            {Object.keys(CURRICULUM).sort((a, b) => Number(a) - Number(b)).map(g => (
              <button key={g} className={'btn btn-sm ' + (g === grade ? 'btn-primary' : '')}
                onClick={() => setSetting('grade', g as Grade)}>G{g}</button>
            ))}
            <button className="text-action" onClick={() => navigate('/browse')}>{lang === 'am' ? 'ሁሉንም ይመልከቱ' : 'View curriculum'} <span>→</span></button>
          </div>
        </div>
        <div className="subject-groups">
          {subjectsByGroup(grade as Grade).map(({ group, label, subjects }) => {
            const GroupIcon = group === 'science' ? Beaker : Compass;
            return (
              <div key={group} className="subject-group">
                <h3 className="subject-group-title"><GroupIcon size={14} /> {lang === 'am' ? label.am : label.en}</h3>
                <div className="subject-card-grid">
                  {subjects.map(({ key, s: subj }, index) => {
                    const st = statsFor(CURRICULUM as never, progress, { grade, subjectKey: key });
                    const SIcon = subjectIcon(key);
                    return (
                      <button key={key} className={'subject-orbit-card subject-' + key} style={{ ['--card-index' as string]: index }}
                        onClick={() => navigate('/browse?subject=' + key)}>
                        <span className="card-orbit" />
                        <span className="subject-icon-tile"><SIcon size={22} /></span>
                        <span className="subject-card-content">
                          <b>{subj.title}</b>
                          <small>{lang === 'am'
                            ? `${st.studied}/${st.total} ርዕሶች · ${subj.units.length} ክፍሎች${st.avgMastery ? ' · ' + st.avgMastery + '% ሃብት' : ''}`
                            : `${st.studied}/${st.total} topics · ${subj.units.length} units${st.avgMastery ? ' · ' + st.avgMastery + '% mastery' : ''}`}</small>
                          <span className="subject-progress"><i style={{ width: st.pct + '%' }} /></span>
                        </span>
                        <span className="card-arrow"><ArrowUpRight size={18} /></span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="study-routes">
        <button className="study-route route-practice" onClick={() => navigate('/practice')}>
          <span className="route-icon"><Target size={20} /></span>
          <span><small>{tr('weak', lang)}</small><b>{lang === 'am' ? 'የሚያስፈልግዎትን ያጠናክሩ' : 'Strengthen what needs attention'}</b></span><i>→</i>
        </button>
        <button className="study-route route-exam" onClick={() => navigate('/exam')}>
          <span className="route-icon"><Sparkles size={20} /></span>
          <span><small>{tr('readiness', lang)}</small><b>{overall.avgScore ? `${overall.avgScore}% ${lang === 'am' ? 'አማካይ ውጤት' : 'average quiz score'}` : (lang === 'am' ? 'ዝግጁነትዎን ይለኩ' : 'Check your readiness')}</b></span><i>→</i>
        </button>
      </section>

      <div className="grid grid-4 dashboard-stats">
        <StatTile num={overall.total} label="Total topics" icon={BookMarked} accent="var(--accent)" />
        <StatTile num={overall.studied} label="Topics studied" icon={CircleCheck} accent="var(--success)" />
        <StatTile num={overall.total - overall.studied} label="Topics remaining" icon={Hourglass} accent="var(--gold)" />
        <StatTile num={overall.avgScore ? overall.avgScore + '%' : '—'} label="Average quiz score" icon={Target} accent="var(--accent-2)" />
      </div>
      <div className="grid grid-2 mt-3">
        <StatTile num={fmtTime(overall.studySec)} label="Total study time" icon={Timer} accent="var(--accent)" />
        <StatTile num={overall.avgMastery ? overall.avgMastery + '%' : '—'} label="Average mastery" icon={Trophy} accent="var(--gold)" />
      </div>

      <h2 className="section-title"><TrendingUp size={20} /> {lang === 'am' ? 'በትምህርት ዓይነት እድገት' : 'Progress by Subject'} — Grade {grade}</h2>
      <div className="card">
        {subjectsFor(grade as Grade).map(({ key, s: subj }, i) => {
          const st = statsFor(CURRICULUM as never, progress, { grade, subjectKey: key });
          const SIcon = subjectIcon(key);
          return (
            <div key={key} style={{ margin: i === 0 ? 0 : '18px 0 0' }}>
              <div className="spread" style={{ marginBottom: 6 }}>
                <span style={{ fontWeight: 700, fontFamily: 'var(--font-display)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <SIcon size={15} /> {subj.title} <span className="muted" style={{ fontWeight: 400 }}>· {st.studied}/{st.total} topics</span>
                </span>
                <span style={{ fontWeight: 700, color: 'var(--fg-2)', fontVariantNumeric: 'tabular-nums' }}>{st.pct}%</span>
              </div>
              <ProgressBar pct={st.pct} cls={st.pct > 60 ? '' : st.pct > 30 ? 'warn' : 'low'} />
              <div className="tiny mt-2">Avg score: {st.avgScore || '—'}% · Mastery: {st.avgMastery || '—'}%</div>
            </div>
          );
        })}
      </div>

      <h2 className="section-title"><Clock size={20} /> {lang === 'am' ? 'የቅርብ ጊዜ ጥናቶች' : 'Recent Study Sessions'}</h2>
      <div className="card">
        {recent.length ? (
          <table>
            <tbody>
              <tr><th>Activity</th><th>Topic</th><th>When</th></tr>
              {recent.map((h, i) => {
                const t = topicById(h.topicId);
                const label = t?.title ?? (h.topicId.startsWith('natl:')
                  ? h.topicId.slice(5).replace(/^\w/, c => c.toUpperCase()) + ' · National Exam'
                  : '—');
                return (
                  <tr key={i}>
                    <td>{h.type === 'quiz' ? <span className="h-cell-ico"><Target size={13} /> Quiz</span> : <span className="h-cell-ico"><Timer size={13} /> Study</span>}</td>
                    <td>{label}</td>
                    <td>{h.type === 'quiz' ? h.score + '%' : fmtTime(h.sec ?? 0)} · {relTime(h.at)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="empty-state">
            <span className="icon-tile" style={{ ['--tile-accent' as string]: 'var(--accent)', margin: '0 auto var(--space-3)' }}><Sparkles size={24} /></span>
            <h3>{lang === 'am' ? 'ጥናታዊ ጊዜዎች እስካሁን አልተመዘገቡም' : 'No study sessions yet'}</h3>
            <p className="muted" style={{ margin: '0 auto', maxWidth: 380 }}>
              {isNewUser ? tr('noSessions', lang) : (lang === 'am' ? 'አንድ ጥናት ይጀምሩ' : 'Open a topic and your sessions will appear here.')}
            </p>
            <button className="btn btn-primary mt-3" onClick={() => navigate(isNewUser ? '/practice' : '/browse')}>{tr('start', lang)}</button>
          </div>
        )}
      </div>
    </>
  );
}

function relTime(ts: number): string {
  const d = Math.floor((Date.now() - ts) / 1000);
  if (d < 60) return 'just now';
  if (d < 3600) return Math.floor(d / 60) + 'm ago';
  if (d < 86400) return Math.floor(d / 3600) + 'h ago';
  return Math.floor(d / 86400) + 'd ago';
}
