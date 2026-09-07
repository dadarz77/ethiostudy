import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { ALL_TOPICS, lessonFor } from '../lib/curriculum';

/** Pick a Topic — random topic with a question bank, filtered by grade/subject */
export default function Practice() {
  const navigate = useNavigate();
  const grade = useAppStore(s => s.settings.grade);
  const [tid, setTid] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);

  const bank = useMemo(() => {
    const all = Object.values(ALL_TOPICS).filter(t => t._grade === grade && lessonFor(t._id)?.questions?.length);
    return all;
  }, [grade]);

  const roll = () => {
    setSpinning(true);
    setTimeout(() => {
      setTid(bank[Math.floor(Math.random() * bank.length)]._id);
      setSpinning(false);
    }, 450);
  };

  const t = tid ? ALL_TOPICS[tid] : null;
  return (
    <div className="view-inner picker">
      <h1 className="view-title">🎲 Pick a Topic</h1>
      <p className="muted">Grade {grade} · {bank.length} topics ready for practice</p>
      <div className={'dice-box' + (spinning ? ' spinning' : '')}>
        {t ? (
          <>
            <div className="dice-subject" style={{ color: t._subjectColor || '#60a5fa' }}>{t._subjectTitle}</div>
            <h2>{t.title}</h2>
            <div className="muted">{t._unitTitle} · {lessonFor(t._id)?.questions?.length} questions</div>
            <div className="btn-row">
              <button className="btn btn-primary btn-big" onClick={() => navigate('/topic/' + t._id)}>Study this topic →</button>
              <button className="btn" onClick={roll}>🎲 Roll again</button>
            </div>
          </>
        ) : (
          <button className="btn btn-primary btn-big" onClick={roll}>🎲 {spinning ? 'Rolling…' : 'Roll the dice'}</button>
        )}
      </div>
    </div>
  );
}
