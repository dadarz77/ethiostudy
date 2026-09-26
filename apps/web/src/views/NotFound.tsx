import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="card mt-4" style={{ textAlign: 'center', padding: '64px 24px', maxWidth: 640, margin: '40px auto' }}>
      <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>🧭</div>
      <h1>Page Not Found</h1>
      <p className="muted mt-2" style={{ maxWidth: 460, margin: '12px auto 24px', fontSize: '1.05rem', lineHeight: 1.6 }}>
        The link you followed might be broken, or the page may have been moved.
      </p>

      <div className="row" style={{ justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          🏠 Dashboard
        </button>
        <button className="btn" onClick={() => navigate('/browse')}>
          📚 Browse Topics
        </button>
        <button className="btn" onClick={() => navigate('/national')}>
          🇪🇹 National Exams
        </button>
      </div>

      <p className="tiny muted mt-4">
        Tip: You can use the search bar at the top to find any formula, topic, or exam paper.
      </p>
    </div>
  );
}
