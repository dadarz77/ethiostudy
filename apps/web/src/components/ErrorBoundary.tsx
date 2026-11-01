import { Component, type ReactNode, type ErrorInfo } from 'react';
import { reportError } from '../lib/observability';

interface Props {
  children: ReactNode;
  /** Optional: custom fallback UI. Receives the error for display. */
  fallback?: (error: Error, reset: () => void) => ReactNode;
}

interface State {
  error: Error | null;
  /** Short fingerprint shown to the student so "what's your error code?" works. */
  code: string | null;
}

/**
 * Route-level ErrorBoundary — catches render/component errors so the entire
 * app doesn't crash white. Shows a friendly recovery card with a "Try again"
 * button that resets the boundary.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, code: null };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Reaches Supabase error_log; queues locally if the student is offline.
    const code = reportError(error, {
      source: 'react.render',
      event: 'render_error',
      ctx: { componentStack: info.componentStack?.slice(0, 300) },
    });
    this.setState({ code });
    // Keep the console line: it is the only signal if reporting is unavailable.
    console.error('[EthioStudy] Uncaught render error:', error, info.componentStack);
  }

  reset = () => this.setState({ error: null, code: null });

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (error) {
      if (fallback) return fallback(error, this.reset);

      return (
        <div className="card" style={{
          textAlign: 'center',
          padding: '48px 24px',
          margin: '24px auto',
          maxWidth: 480,
          borderColor: 'var(--danger)',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>⚠️</div>
          <h2 style={{ margin: '0 0 8px', color: 'var(--danger)' }}>Something went wrong</h2>
          <p className="muted" style={{ margin: '0 0 20px' }}>
            This view ran into an unexpected error. Your study progress is safe — it's saved locally.
          </p>
          {this.state.code && (
            <p className="muted" style={{ margin: '0 0 12px', fontSize: '0.75rem' }}>
              Error code <code style={{ letterSpacing: '0.08em' }}>{this.state.code}</code>
              {' '}— this report was sent automatically. Mention the code when asking for help.
            </p>
          )}
          <details style={{ marginBottom: 20, textAlign: 'left', fontSize: '0.75rem', color: 'var(--fg-3)' }}>
            <summary style={{ cursor: 'pointer', marginBottom: 6 }}>Error details</summary>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{error.message}</pre>
          </details>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={this.reset}>↺ Try again</button>
            <button className="btn" onClick={() => window.location.href = '/'}>🏠 Go to Dashboard</button>
          </div>
        </div>
      );
    }

    return children;
  }
}
