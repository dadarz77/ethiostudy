import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALL_TOPICS, loadAllLessons, lessonFor } from '../lib/curriculum';

/* Global search — port of showSearchResults(): matches title, subject,
   unit, subtopics, and lesson key terms; Enter opens the first hit.
   Lessons load lazily; the haystack upgrades once they're all cached. */
export default function SearchBox() {
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [lessonsReady, setLessonsReady] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => { loadAllLessons().then(() => setLessonsReady(true)); }, []);

  const hay = useMemo(() => Object.values(ALL_TOPICS).map(t => ({
    t, s: [t.title, t._subjectTitle, t._unitTitle,
      ...(Array.isArray(t.subtopics) ? t.subtopics.map(String) : []),
      ...(lessonFor(t._id)?.keyTerms ?? []).map(k => k.term + ' ' + k.def),
    ].join(' ').toLowerCase(),
  })), [lessonsReady]);

  const results = q.trim().length < 2 ? [] :
    hay.filter(h => h.s.includes(q.toLowerCase())).slice(0, 12).map(h => h.t);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (!boxRef.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const go = (tid: string) => { setOpen(false); setQ(''); navigate('/topic/' + tid); };

  return (
    <div className="searchbox" ref={boxRef}>
      <input
        value={q}
        onChange={e => { setQ(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        onKeyDown={e => { if (e.key === 'Enter' && results.length) go(results[0]._id); if (e.key === 'Escape') setOpen(false); }}
        placeholder="Search topics, formulas…" aria-label="Search"
      />
      {open && q.trim().length >= 2 && (
        <div className="search-panel">
          {results.length === 0 && <div className="search-result muted">No results for "<b>{q}</b>"</div>}
          {results.map(r => (
            <div key={r._id} className="search-result" onClick={() => go(r._id)}>
              <span style={{ fontSize: '1.3rem' }}>{r._subjectIcon}</span>
              <div>
                <div className="sr-title">{r.title}</div>
                <div className="sr-path">{r._subjectTitle} · Grade {r._grade} · {r._unitTitle}</div>
              </div>
              <span style={{ marginLeft: 'auto' }}>{'★'.repeat(Number(r.difficulty) || 1)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
