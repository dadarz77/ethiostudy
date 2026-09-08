import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { tr } from '../lib/i18n';

export default function Settings() {
  const settings = useAppStore(s => s.settings);
  const setSetting = useAppStore(s => s.setSetting);
  const resetAll = useAppStore(s => s.resetAll);
  const [confirmReset, setConfirmReset] = useState(false);

  return (
    <>
      <h1>⚙️ {tr('settings', settings.language)}</h1>

      <div className="card mt-4">
        <h3>🎓 Grade</h3>
        <div className="row">
          {(['10', '11'] as const).map(g => (
            <button key={g} className={'btn' + (settings.grade === g ? ' btn-primary' : '')} onClick={() => setSetting('grade', g)}>Grade {g}</button>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>🌐 Language · ቋንቋ</h3>
        <div className="row">
          <button className={'btn' + (settings.language === 'en' ? ' btn-primary' : '')} onClick={() => setSetting('language', 'en')}>English</button>
          <button className={'btn' + (settings.language === 'am' ? ' btn-primary' : '')} onClick={() => setSetting('language', 'am')}>አማርኛ</button>
        </div>
      </div>

      <div className="card">
        <h3>🎨 Theme</h3>
        <div className="row">
          <button className={'btn' + (settings.theme === 'dark' ? ' btn-primary' : '')} onClick={() => setSetting('theme', 'dark')}>🌙 Dark</button>
          <button className={'btn' + (settings.theme === 'light' ? ' btn-primary' : '')} onClick={() => setSetting('theme', 'light')}>☀️ Light</button>
        </div>
      </div>

      <div className="card">
        <h3>🧪 Quiz & exam</h3>
        <div className="spread" style={{ marginBottom: 10 }}>
          <span>Quiz length</span><b>{settings.quizLen} questions</b>
        </div>
        <input type="range" min={5} max={20} step={5} value={settings.quizLen} style={{ width: '100%' }}
          onChange={e => setSetting('quizLen', Number(e.target.value))} />
        <div className="spread" style={{ margin: '18px 0 10px' }}>
          <span>Exam length</span><b>{settings.examLen} questions</b>
        </div>
        <input type="range" min={10} max={50} step={5} value={settings.examLen} style={{ width: '100%' }}
          onChange={e => setSetting('examLen', Number(e.target.value))} />
      </div>

      <div className="card">
        <div className="spread">
          <div><h3 style={{ margin: 0 }}>🔊 Sound effects</h3><p className="tiny muted" style={{ margin: '4px 0 0' }}>Click sounds on correct answers.</p></div>
          <button className="btn" onClick={() => setSetting('sound', !settings.sound)}>{settings.sound ? '🔊 On' : '🔇 Off'}</button>
        </div>
      </div>

      <div className="card" style={{ borderColor: 'rgba(251,113,133,.35)' }}>
        <h3>⚠️ Danger zone</h3>
        <p className="tiny muted">This clears all study history, scores, bookmarks and notes. This cannot be undone.</p>
        {!confirmReset ? (
          <button className="btn btn-danger" onClick={() => setConfirmReset(true)}>Reset everything…</button>
        ) : (
          <div className="row">
            <button className="btn btn-danger" onClick={() => { resetAll(); setConfirmReset(false); }}>Yes, wipe everything</button>
            <button className="btn" onClick={() => setConfirmReset(false)}>Cancel</button>
          </div>
        )}
      </div>

      <p className="tiny muted mt-4">EthioStudy v2 · offline-ready · your data never leaves this device.</p>
    </>
  );
}
