import { useEffect, useMemo, useRef, useState, type KeyboardEvent as RKeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALL_TOPICS, loadAllLessons, lessonFor } from '../lib/curriculum';

/* Global search — matches title, subject, unit, subtopics, and lesson key
   terms; lessons load lazily. Full keyboard support: ↓/↑ traverse the results
   list, Enter opens the highlighted one, Esc closes. Matches are <mark>
   highlighted and the list is a proper listbox with aria-activedescendant. */

function Hi({ text, q }: { text: string; q: string }) {
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (!q.trim() || i < 0) return <>{text}</>;
  return <>{text.slice(0, i)}<mark>{text.slice(i, i + q.length)}</mark>{text.slice(i + q.length)}</>;
}

export default function SearchBox() {
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [lessonsReady, setLessonsReady] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => { loadAllLessons().then(() => setLessonsReady(true)); }, []);

  const hay = useMemo(() => Object.values(ALL_TOPICS).map(t => ({
    t, s: [t.title, t._subjectTitle, t._unitTitle,
      ...(Array.isArray(t.subtopics) ? t.subtopics.map(String) : []),
      ...(lessonFor(t._id)?.keyTerms ?? []).map(k => k.term + ' ' + k.def),
    ].join(' ').toLowerCase(),
  })), [lessonsReady]);

  const results = q.trim().length < 2 ? [] :
    hay.filter(h => h.s.includes(q.toLowerCase())).slice(0, 12).map(h => h.t);

  useEffect(() => { setActive(-1); }, [q]);
  useEffect(() => {
    if (active >= 0) listRef.current?.children[active]?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (!boxRef.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const go = (tid: string) => { setOpen(false); setQ(''); setActive(-1); navigate('/topic/' + tid); };

  const onKey = (e: RKeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (!results.length) return;
      e.preventDefault();
      setOpen(true);
      const down = e.key === 'ArrowDown';
      setActive(a => a < 0 ? (down ? 0 : results.length - 1) : (a + (down ? 1 : -1) + results.length) % results.length);
    } else if (e.key === 'Enter') {
      if (results.length) go(results[active < 0 ? 0 : active]._id);
    } else if (e.key === 'Escape') {
      setOpen(false); setActive(-1);
    }
  };

  return (
    <div className="searchbox" ref={boxRef}>
      <input
        value={q}
        onChange={e => { setQ(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKey}
        placeholder="Search topics, formulas…" aria-label="Search"
        role="combobox" aria-expanded={open && results.length > 0} aria-controls="searchResults"
        aria-activedescendant={active >= 0 ? `sr-${active}` : undefined}
        autoComplete="off"
      />
      {open && q.trim().length >= 2 && (
        <div className="search-panel" id="searchResults" ref={listRef} role="listbox">
          {results.length === 0 && <div className="search-result muted">No results for "<b>{q}</b>"</div>}
          {results.map((r, i) => (
            <div key={r._id} id={`sr-${i}`} role="option" aria-selected={i === active}
              className={'search-result' + (i === active ? ' sr-active' : '')}
              onMouseEnter={() => setActive(i)} onClick={() => go(r._id)}>
              <span style={{ fontSize: '1.3rem' }}>{r._subjectIcon}</span>
              <div>
                <div className="sr-title"><Hi text={r.title} q={q} /></div>
                <div className="sr-path">{r._subjectTitle} · Grade {r._grade} · <Hi text={r._unitTitle} q={q} /></div>
              </div>
              <span style={{ marginLeft: 'auto' }}>{'★'.repeat(Number(r.difficulty) || 1)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
