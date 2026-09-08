import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { ALL_TOPICS } from '../lib/curriculum';
import { EmptyState } from '../components/ui';

export default function Bookmarks() {
  const navigate = useNavigate();
  const bookmarks = useAppStore(s => s.bookmarks);
  const removeBookmark = useAppStore(s => s.removeBookmark);

  return (
    <>
      <h1>🔖 Bookmarks</h1>
      {bookmarks.length === 0 ? (
        <div className="mt-4"><EmptyState icon="🔖" title="Nothing saved yet" sub="Tap 🔖 on any topic to save it here." /></div>
      ) : (
        <div className="grid mt-4">
          {bookmarks.map(b => {
            const t = ALL_TOPICS[b.topicId];
            return (
              <div key={b.id} className="card card-hover curriculum-card topic-path-card">
                <div className="spread">
                  <button style={{ textAlign: 'left', background: 'none', border: 0, cursor: 'pointer', color: 'inherit' }}
                    onClick={() => t && navigate('/topic/' + b.topicId)}>
                    <div style={{ fontWeight: 700 }}>{b.kind === 'formula' ? '🧮' : b.kind === 'question' ? '❓' : '📖'} {b.label}</div>
                    <div className="tiny muted mt-2">{b.sub ?? t?._subjectTitle ?? ''} · saved {new Date(b.at).toLocaleDateString()}</div>
                  </button>
                  <button className="icon-btn" aria-label="Remove bookmark" onClick={() => removeBookmark(b.id)}>✕</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
