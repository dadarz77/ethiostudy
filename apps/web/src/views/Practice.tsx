import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { CURRICULUM, ALL_TOPICS, loadLesson, subjectsFor, type Grade } from '../lib/curriculum';
import { weakTopicIds } from '../lib/scoring';
import { Chip } from '../components/ui';

/* Practice — v1's picker-hero + mode cards + filter-box, all real classes. */
export default function Practice() {
  const navigate = useNavigate();
  const s = useAppStore();
  const grade = s.settings.grade;
  const progress = s.progress;
  const [selGrade, setSelGrade] = useState<Grade>(grade as Grade);
  const [selSubject, setSelSubject] = useState('all');
  const [selUnit, setSelUnit] = useState('all');
  const [selMode, setSelMode] = useState<'smart' | 'random'>('smart');

  const pick = () => {
    let pool = Object.values(ALL_TOPICS).filter(t =>
      t._grade === selGrade &&
      (selSubject === 'all' || t._subject === selSubject) &&
      (selUnit === 'all' || t._unit === selUnit));
    if (selMode === 'smart') {
      const weak = new Set(weakTopicIds(CURRICULUM as never, progress, s.weakMap, selGrade, selSubject === 'all' ? null : selSubject, 50).map(w => w.tid));
      const weakPool = pool.filter(t => weak.has(t._id));
      if (weakPool.length) pool = weakPool;
    }
    if (!pool.length) return;
    const t = pool[Math.floor(Math.random() * pool.length)];
    loadLesson(t._id).then(l => { if (l) navigate('/topic/' + t._id); });
  };

  const subj = selSubject !== 'all' ? subjectsFor(selGrade).find(x => x.key === selSubject) : null;

  return (
    <>
      <div className="picker-hero">
        <span className="picker-dice">🎲</span>
        <h1 style={{ fontSize: '2rem' }}>Random Topic Picker</h1>
        <p className="muted">Pick a smart topic tailored to what you need — or go fully random.</p>
        <button className="picker-btn mt-4" onClick={pick}>🎲 PICK A TOPIC</button>
      </div>

      <div className="filter-box mt-4">
        <div>
          <label>Grade</label>
          <select value={selGrade} onChange={e => { setSelGrade(e.target.value as Grade); setSelSubject('all'); setSelUnit('all'); }}>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
          </select>
        </div>
        <div>
          <label>Subject</label>
          <select value={selSubject} onChange={e => { setSelSubject(e.target.value); setSelUnit('all'); }}>
            <option value="all">All subjects</option>
            {subjectsFor(selGrade).map(({ key, s }) => <option key={key} value={key}>{s.icon} {s.title}</option>)}
          </select>
        </div>
        <div>
          <label>Unit</label>
          <select value={selUnit} onChange={e => setSelUnit(e.target.value)}>
            <option value="all">All units</option>
            {subj?.s.units.map((u, i) => <option key={u.id} value={u.id}>Unit {i + 1}: {u.title}</option>)}
          </select>
        </div>
        <div>
          <label>Mode</label>
          <select value={selMode} onChange={e => setSelMode(e.target.value as 'smart' | 'random')}>
            <option value="smart">🧠 Smart (prioritize weak)</option>
            <option value="random">🎲 Fully random</option>
          </select>
        </div>
      </div>

      <div className="grid grid-3 mt-4">
        <button className="card card-hover mode-card" onClick={() => navigate('/exam')}>
          <div className="mode-ico" style={{ fontSize: '1.8rem' }}>📝</div>
          <h3 style={{ margin: '8px 0 4px' }}>Practice Exam</h3>
          <p className="tiny muted" style={{ margin: 0 }}>Mixed questions across a whole subject, timed.</p>
        </button>
        <button className="card card-hover mode-card" onClick={() => navigate('/browse')}>
          <div className="mode-ico" style={{ fontSize: '1.8rem' }}>📚</div>
          <h3 style={{ margin: '8px 0 4px' }}>Browse Curriculum</h3>
          <p className="tiny muted" style={{ margin: 0 }}>Manually select a topic and study.</p>
        </button>
        <button className="card card-hover mode-card" onClick={() => navigate('/progress')}>
          <div className="mode-ico" style={{ fontSize: '1.8rem' }}>🔥</div>
          <h3 style={{ margin: '8px 0 4px' }}>Weak Topics</h3>
          <p className="tiny muted" style={{ margin: 0 }}>Study topics where mastery is low.</p>
        </button>
      </div>

      {(() => {
        const weak = weakTopicIds(CURRICULUM as never, progress, s.weakMap, selGrade, null, 5)
          .map(w => ALL_TOPICS[w.tid]).filter(Boolean);
        if (!weak.length) return null;
        return (
          <div className="card mt-4">
            <h3>🔥 Needs attention <Chip text="smart picks" cls="chip-subject" /></h3>
            <div className="row mt-3" style={{ flexWrap: 'wrap', gap: 8 }}>
              {weak.map(t => (
                <button key={t._id} className="btn btn-sm" onClick={() => navigate('/topic/' + t._id)}>{t.title}</button>
              ))}
            </div>
          </div>
        );
      })()}
    </>
  );
}
