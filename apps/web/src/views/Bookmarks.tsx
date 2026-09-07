import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { ALL_TOPICS } from '../lib/curriculum';

export default function Bookmarks() {
  const navigate = useNavigate();
  const bookmarks = useAppStore(s => s.bookmarks);
  const removeBookmark = useAppStore(s => s.removeBookmark);

  return (
    <div className="view-inner">
      <h1 className="view-title">🔖 Bookmarks</h1>
      {bookmarks.length === 0 && <p className="muted">Nothing saved yet — tap 🔖 on any topic to save it here.</p>}
      <div className="history-list">
        {bookmarks.map(b => {
          const t = ALL_TOPICS[b.topicId];
          return (
            <div key={b.id} className="history-row">
              <button className="history-link" onClick={() => t && navigate('/topic/' + b.topicId)}>
                <span>{b.kind === 'formula' ? '🧮' : b.kind === 'question' ? '❓' : '📖'}</span>
                <span className="history-title">{b.label}</span>
                <span className="history-meta">{b.sub ?? t?._subjectTitle ?? ''}</span>
                <span className="history-when">{new Date(b.at).toLocaleDateString()}</span>
              </button>
              <button className="icon-btn" aria-label="Remove bookmark" onClick={() => removeBookmark(b.id)}>✕</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
