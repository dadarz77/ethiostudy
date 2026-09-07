import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { tr } from '../lib/i18n';

export default function Settings() {
  const settings = useAppStore(s => s.settings);
  const setSetting = useAppStore(s => s.setSetting);
  const resetAll = useAppStore(s => s.resetAll);
  const [confirmReset, setConfirmReset] = useState(false);

  return (
    <div className="view-inner settings-pane">
      <h1 className="view-title">⚙️ {tr('settings', settings.language)}</h1>

      <div className="setting-row">
        <label>Grade</label>
        <div className="btn-row">
          {(['10', '11'] as const).map(g => (
            <button key={g} className={'btn' + (settings.grade === g ? ' btn-primary' : '')} onClick={() => setSetting('grade', g)}>Grade {g}</button>
          ))}
        </div>
      </div>

      <div className="setting-row">
        <label>Language</label>
        <div className="btn-row">
          <button className={'btn' + (settings.language === 'en' ? ' btn-primary' : '')} onClick={() => setSetting('language', 'en')}>English</button>
          <button className={'btn' + (settings.language === 'am' ? ' btn-primary' : '')} onClick={() => setSetting('language', 'am')}>አማርኛ</button>
        </div>
      </div>

      <div className="setting-row">
        <label>Theme</label>
        <div className="btn-row">
          <button className={'btn' + (settings.theme === 'dark' ? ' btn-primary' : '')} onClick={() => setSetting('theme', 'dark')}>🌙 Dark</button>
          <button className={'btn' + (settings.theme === 'light' ? ' btn-primary' : '')} onClick={() => setSetting('theme', 'light')}>☀️ Light</button>
        </div>
      </div>

      <div className="setting-row">
        <label>Quiz length</label>
        <input type="range" min={5} max={20} step={5} value={settings.quizLen}
          onChange={e => setSetting('quizLen', Number(e.target.value))} />
        <span>{settings.quizLen} questions</span>
      </div>

      <div className="setting-row">
        <label>Exam length</label>
        <input type="range" min={10} max={50} step={5} value={settings.examLen}
          onChange={e => setSetting('examLen', Number(e.target.value))} />
        <span>{settings.examLen} questions</span>
      </div>

      <div className="setting-row">
        <label>Sound effects</label>
        <button className="btn" onClick={() => setSetting('sound', !settings.sound)}>{settings.sound ? '🔊 On' : '🔇 Off'}</button>
      </div>

      <hr className="divider" />

      <div className="setting-row danger">
        <label>Reset all progress</label>
        {!confirmReset ? (
          <button className="btn btn-danger" onClick={() => setConfirmReset(true)}>Reset…</button>
        ) : (
          <div className="btn-row">
            <button className="btn btn-danger" onClick={() => { resetAll(); setConfirmReset(false); }}>Yes, wipe everything</button>
            <button className="btn" onClick={() => setConfirmReset(false)}>Cancel</button>
          </div>
        )}
      </div>

      <p className="muted">EthioStudy v2 · offline-ready · your data never leaves this device.</p>
    </div>
  );
}
