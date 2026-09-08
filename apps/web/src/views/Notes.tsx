import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { ALL_TOPICS } from '../lib/curriculum';
import { EmptyState } from '../components/ui';

const NO_ARR: never[] = [];

export default function Notes() {
  const navigate = useNavigate();
  const notes = useAppStore(s => s.notes);
  const addNote = useAppStore(s => s.addNote);
  const deleteNote = useAppStore(s => s.deleteNote);
  const [draft, setDraft] = useState('');

  const topics = Object.keys(notes).filter(t => notes[t]?.length);

  return (
    <>
      <h1>📒 Notes</h1>
      <div className="card mt-4">
        <h3>🗒 Quick note (general)</h3>
        <textarea className="note-editor" value={draft} rows={2}
          placeholder="Jot something down… (Ctrl+Enter to save)"
          onChange={e => setDraft(e.target.value)}
          onKeyDown={e => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && draft.trim()) { addNote('general', draft.trim()); setDraft(''); }
          }} />
        <button className="btn btn-primary mt-3" onClick={() => { if (draft.trim()) { addNote('general', draft.trim()); setDraft(''); } }}>💾 Save Note</button>
      </div>

      {topics.length === 0 && <div className="mt-4"><EmptyState icon="📒" title="No notes yet" sub="Add topic notes from a topic's Notes tab." /></div>}

      {topics.map(tid => {
        const list = notes[tid] ?? NO_ARR;
        const t = ALL_TOPICS[tid];
        return (
          <div key={tid} className="card mt-3">
            <h3>
              {tid === 'general' ? '🗒 General' : (
                <button style={{ background: 'none', border: 0, color: 'var(--accent)', font: 'inherit', cursor: 'pointer', padding: 0 }}
                  onClick={() => navigate('/topic/' + tid)}>{t?.title ?? tid}</button>
              )}
            </h3>
            {list.map((n, i) => (
              <div key={i} className="spread" style={{ padding: '10px 0', borderTop: '1px solid var(--border)' }}>
                <div>
                  <p style={{ margin: 0 }}>{n.text}</p>
                  <div className="tiny muted mt-2">{new Date(n.at).toLocaleString()}</div>
                </div>
                <button className="icon-btn" aria-label="Delete note" onClick={() => deleteNote(tid, i)}>🗑</button>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}
