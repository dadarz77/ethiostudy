import { useEffect, useState } from 'react';
import { Wifi, WifiOff } from 'lucide-react';

export function OfflineIndicator() {
  const [online, setOnline] = useState(() => typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const onOnline = () => setOnline(true);
    const onOffline = () => setOnline(false);

    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);

    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  return (
    <div
      className={`offline-pill ${online ? 'is-online' : 'is-offline'}`}
      title={online ? 'Connected · All lessons & exams cached offline' : 'Offline Mode · All 52 lessons & exams work without internet'}
      role="status"
      aria-live="polite"
    >
      {online ? (
        <>
          <span className="status-dot green" />
          <Wifi size={13} className="pill-icon" />
          <span className="pill-label">Offline Ready</span>
        </>
      ) : (
        <>
          <span className="status-dot amber" />
          <WifiOff size={13} className="pill-icon" />
          <span className="pill-label">Offline Mode</span>
        </>
      )}
    </div>
  );
}
