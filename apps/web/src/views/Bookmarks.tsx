import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { ALL_TOPICS } from '../lib/curriculum';
import { EmptyState } from '../components/ui';
import { loadNatItems, getCachedNatItems, type NatItem } from '../lib/national';

export default function Bookmarks() {
  const navigate = useNavigate();
  const bookmarks = useAppStore(s => s.bookmarks);
  const removeBookmark = useAppStore(s => s.removeBookmark);
  const [natItems, setNatItems] = useState<NatItem[]>(() => getCachedNatItems());
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [preview, setPreview] = useState<NatItem | null>(null);

  const hasNatlBookmarks = bookmarks.some(b => b.kind === 'question' && b.topicId.startsWith('natl:'));

  useEffect(() => {
    if (!hasNatlBookmarks || natItems.length > 0) return;
    let active = true;
    loadNatItems().then(items => {
      if (active) setNatItems(items);
    }).catch(err => {
      console.error('Failed to load national exam bookmarks', err);
    });
    return () => { active = false; };
  }, [hasNatlBookmarks, natItems.length]);

  const openPreview = async (natlId: string) => {
    let list = natItems;
    if (list.length === 0) {
      list = await loadNatItems();
      setNatItems(list);
    }
    const item = list.find(it => it.id === natlId) ?? null;
    if (!item) return;
    setPreview(item);
    dialogRef.current?.showModal();
  };

  const closePreview = () => {
    dialogRef.current?.close();
    setPreview(null);
  };

  return (
    <>
      <h1>🔖 Bookmarks</h1>

      {/* National exam question preview modal */}
      <dialog ref={dialogRef} className="card" style={{ maxWidth: 560, width: '90vw', padding: 24, borderRadius: 12, border: '1px solid var(--border)' }}
        onClick={e => { if (e.target === dialogRef.current) closePreview(); }}>
        {preview && (
          <>
            <div className="spread" style={{ marginBottom: 12 }}>
              <span className="tiny chip chip-subject">{preview.subject} · {preview.year} E.C.</span>
              <button className="icon-btn" aria-label="Close preview" onClick={closePreview}>✕</button>
            </div>
            <p style={{ fontWeight: 600, marginBottom: 12 }}>{preview.q}</p>
            <ol type="A" style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {preview.options.map((opt, i) => (
                <li key={i} style={{ padding: '6px 10px', borderRadius: 6, background: i === preview.answer ? 'color-mix(in srgb, var(--success) 18%, transparent)' : 'var(--card-2)', fontWeight: i === preview.answer ? 700 : undefined }}>
                  {opt}{i === preview.answer ? ' ✓' : ''}
                </li>
              ))}
            </ol>
            {preview.explanation && (
              <p className="tiny muted mt-3" style={{ borderTop: '1px solid var(--border)', paddingTop: 10 }}>
                💡 {preview.explanation}
              </p>
            )}
            <div className="row mt-4" style={{ justifyContent: 'flex-end', gap: 8 }}>
              <button className="btn btn-sm" onClick={() => { closePreview(); navigate('/national'); }}>Open in National Exams →</button>
              <button className="btn btn-sm btn-primary" onClick={closePreview}>Done</button>
            </div>
          </>
        )}
      </dialog>

      {bookmarks.length === 0 ? (
        <div className="mt-4"><EmptyState icon="🔖" title="Nothing saved yet" sub="Tap 🔖 on any topic to save it here."
          action={{ label: 'Explore Topics to Bookmark →', onClick: () => navigate('/browse') }} /></div>
      ) : (
        <div className="grid mt-4">
          {bookmarks.map(b => {
            const t = ALL_TOPICS[b.topicId];
            const isNatlQ = b.kind === 'question' && b.topicId.startsWith('natl:');
            return (
              <div key={b.id} className="card card-hover curriculum-card topic-path-card">
                <div className="spread">
                  <button style={{ textAlign: 'left', background: 'none', border: 0, cursor: 'pointer', color: 'inherit' }}
                    onClick={() => {
                      if (isNatlQ) {
                        /* Extract item id — bookmark id is "natl:<itemId>" */
                        void openPreview(b.id.replace(/^natl:/, ''));
                      } else if (b.kind === 'question') {
                        if (t) { navigate('/topic/' + b.topicId); }
                      } else {
                        if (t) { navigate('/topic/' + b.topicId); }
                      }
                    }}>
                    <div style={{ fontWeight: 700 }}>{b.kind === 'formula' ? '🧮' : b.kind === 'question' ? '❓' : '📖'} {b.label}</div>
                    <div className="tiny muted mt-2">
                      {b.sub ?? t?._subjectTitle ?? ''} · saved {new Date(b.at).toLocaleDateString()}
                      {isNatlQ && <span className="chip chip-subject" style={{ marginLeft: 8 }}>National Exam Q</span>}
                    </div>
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
