import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { ALL_TOPICS } from '../lib/curriculum';

export default function Notes() {
  const navigate = useNavigate();
  const notes = useAppStore(s => s.notes);
  const addNote = useAppStore(s => s.addNote);
  const deleteNote = useAppStore(s => s.deleteNote);
  const [draft, setDraft] = useState('');

  const topics = Object.keys(notes).filter(t => notes[t]?.length);

  return (
    <div className="view-inner">
      <h1 className="view-title">📒 Notes</h1>
      <form className="note-compose" onSubmit={e => {
        e.preventDefault();
        const text = draft.trim();
        if (!text) return;
        addNote('general', text);
        setDraft('');
      }}>
        <textarea value={draft} onChange={e => setDraft(e.target.value)} rows={2} placeholder="Quick note (general)…" />
        <button className="btn btn-primary" type="submit">Save</button>
      </form>

      {topics.length === 0 && <p className="muted">No notes yet. Add topic notes from a topic's Notes tab.</p>}
      {topics.map(tid => (
        <section key={tid} className="notes-group">
          <h2 className="section-title">
            {tid === 'general' ? '🗒 General' : (
              <button className="history-link" onClick={() => navigate('/topic/' + tid)}>{ALL_TOPICS[tid]?.title ?? tid}</button>
            )}
          </h2>
          {notes[tid].map((n, i) => (
            <div key={i} className="note-card">
              <p>{n.text}</p>
              <div className="note-foot">
                <span>{new Date(n.at).toLocaleString()}</span>
                <button className="icon-btn" onClick={() => deleteNote(tid, i)}>🗑</button>
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
