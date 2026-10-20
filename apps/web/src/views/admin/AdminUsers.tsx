import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Download,
  Eye,
  EyeOff,
  Search,
  ShieldCheck,
  ShieldOff,
  Trash2,
} from 'lucide-react';
import {
  fetchProfiles,
  fetchUserProgress,
  profilesToCsv,
  resetUserProgress,
  setUserBanned,
  type AdminProfile,
  type UserProgressDetail,
} from '../../lib/admin';

const PAGE_SIZE = 25;

type StatusFilter = 'all' | 'banned' | 'admins';
type ConfirmAction = { kind: 'ban' | 'unban' | 'reset'; user: AdminProfile } | null;

function fmtDate(iso: string | null): string {
  if (!iso) return 'never';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return 'unknown';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function lastSeenFresh(iso: string | null): 'today' | 'stale' | 'none' {
  if (!iso) return 'none';
  const diff = Date.now() - new Date(iso).getTime();
  if (diff < 24 * 3600 * 1000) return 'today';
  if (diff < 14 * 24 * 3600 * 1000) return 'stale';
  return 'none';
}

export default function AdminUsers() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<StatusFilter>('all');
  const [rows, setRows] = useState<AdminProfile[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [actionError, setActionError] = useState<string | null>(null);

  const [expanded, setExpanded] = useState<string | null>(null);
  const [details, setDetails] = useState<Record<string, UserProgressDetail | null | undefined>>({});
  const [confirm, setConfirm] = useState<ConfirmAction>(null);
  const [reloadTick, setReloadTick] = useState(0);
  const [tick, setTick] = useState(0); // for relative last-seenness

  // Debounced filtered fetch (search + filter changes restart it).
  useEffect(() => {
    let alive = true;
    const handle = setTimeout(() => {
      setLoading(true);
      fetchProfiles({ search, filter, limit: PAGE_SIZE, offset: 0 }).then((r) => {
        if (!alive) return;
        setLoading(false);
        if (r.ok) { setRows(r.data.profiles); setTotal(r.data.total); }
        else { setRows([]); setTotal(0); setActionError(r.error); }
      });
    }, 300);
    return () => { alive = false; clearTimeout(handle); };
  }, [search, filter, reloadTick]);

  // Re-evaluate last-seen freshness dots every 60s.
  useEffect(() => {
    const h = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(h);
  }, []);
  void tick;

  const loadMore = useCallback(() => {
    fetchProfiles({ search, filter, limit: PAGE_SIZE, offset: rows.length }).then((r) => {
      if (!r.ok) { setActionError(r.error); return; }
      setTotal(r.data.total);
      setRows((prev) => {
        const seen = new Set(prev.map((p) => p.id));
        return [...prev, ...r.data.profiles.filter((p) => !seen.has(p.id))];
      });
    });
  }, [search, filter, rows.length]);

  const toggleExpand = useCallback((id: string) => {
    setExpanded((cur) => (cur === id ? null : id));
    if (details[id] === undefined) {
      setDetails((d) => ({ ...d, [id]: null }));
      fetchUserProgress(id).then((r) => setDetails((d) => ({ ...d, [id]: r.ok ? r.data : null })));
    }
  }, [details]);

  const runConfirm = useCallback(async () => {
    if (!confirm) return;
    const { kind, user } = confirm;
    setConfirm(null);
    const res = kind === 'reset'
      ? await resetUserProgress(user.id)
      : await setUserBanned(user.id, kind === 'ban');
    if (!res.ok) setActionError(res.error);
    if (kind === 'ban' || kind === 'unban') {
      // Optimistic flip; the reload tick re-syncs from the server.
      setRows((prev) => prev.map((p) => (p.id === user.id ? { ...p, isBanned: kind === 'ban' } : p)));
    }
    if (kind === 'reset') setDetails((d) => ({ ...d, [user.id]: undefined }));
    setReloadTick((t) => t + 1);
  }, [confirm]);

  const exportCsv = useCallback(() => {
    const csv = profilesToCsv(rows);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ethiostudy-users-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [rows]);

  const confirmCopy = useMemo(() => {
    if (!confirm) return null;
    const name = confirm.user.fullName || 'this user';
    if (confirm.kind === 'reset') {
      return { title: 'Reset study progress?', body: `${name}'s saved progress, notes, bookmarks and streak will be permanently deleted. This cannot be undone.`, action: 'Delete progress', red: true };
    }
    if (confirm.kind === 'ban') {
      return { title: 'Ban this account?', body: `${name} will be signed out at their next session load and locked out of the app until unbanned.`, action: 'Ban user', red: true };
    }
    return { title: 'Remove ban?', body: `${name} will be able to sign in again on their next visit.`, action: 'Unban user', red: false };
  }, [confirm]);

  return (
    <section>
      <div className="admin-search-row">
        <div className="adm-search-field">
          <Search size={15} />
          <input
            type="search"
            className="adm-input adm-search-input"
            placeholder="Search name or school..."
            aria-label="Search users"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="adm-seg" role="tablist" aria-label="User status filter">
          {(['all', 'banned', 'admins'] as StatusFilter[]).map((f) => (
            <button key={f} type="button" className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>
              {f[0].toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <button type="button" className="btn btn-sm" onClick={exportCsv}>
          <Download size={15} /> Export CSV
        </button>
      </div>

      {actionError && <p className="tiny adm-error-line">Action failed: {actionError.replace(/-/g, ' ')}</p>}

      <div className="adm-table-wrap">
        <table className="adm-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Grade</th>
              <th>School</th>
              <th>Joined</th>
              <th>Last seen</th>
              <th>Status</th>
              <th className="adm-th-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <UserRow
                key={p.id}
                p={p}
                expanded={expanded === p.id}
                detail={details[p.id]}
                onToggle={() => toggleExpand(p.id)}
                onBanToggle={() => setConfirm({ kind: p.isBanned ? 'unban' : 'ban', user: p })}
                onReset={() => setConfirm({ kind: 'reset', user: p })}
              />
            ))}
            {!loading && rows.length === 0 && (
              <tr><td colSpan={7} className="adm-empty-row">No users match this view.</td></tr>
            )}
            {loading && rows.length === 0 && (
              <tr><td colSpan={7} className="adm-empty-row">Loading users...</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="spread mt-3">
        <span className="tiny">{rows.length} of {total} shown</span>
        {rows.length < total && (
          <button type="button" className="btn btn-sm" onClick={loadMore}>Load more</button>
        )}
      </div>

      {confirm && confirmCopy && (
        <div className="modal-backdrop" onClick={() => setConfirm(null)} role="dialog" aria-modal="true">
          <div className="modal adm-confirm-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="adm-confirm-title">{confirmCopy.title}</h3>
            <p className="muted mt-3">{confirmCopy.body}</p>
            <div className="spread mt-4">
              <button type="button" className="btn" onClick={() => setConfirm(null)}>Cancel</button>
              <button
                type="button"
                className={'btn ' + (confirmCopy.red ? 'adm-btn-danger' : 'btn-primary')}
                onClick={runConfirm}
              >
                {confirmCopy.action}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function UserRow({ p, expanded, detail, onToggle, onBanToggle, onReset }: {
  p: AdminProfile;
  expanded: boolean;
  detail: UserProgressDetail | null | undefined;
  onToggle: () => void;
  onBanToggle: () => void;
  onReset: () => void;
}) {
  const freshness = lastSeenFresh(p.lastSeen);
  return (
    <>
      <tr className={p.isBanned ? 'adm-row-banned' : ''}>
        <td>
          <span className="adm-user-cell">
            <span className="adm-avatar">{(p.fullName || 'S').slice(0, 2).toUpperCase()}</span>
            <span>
              <b>{p.fullName || 'Unnamed'}</b>
              {p.isAdmin && <span className="adm-chip adm-chip-admin">admin</span>}
            </span>
          </span>
        </td>
        <td>Grade {p.grade}</td>
        <td className="muted">{p.schoolName ?? '--'}</td>
        <td className="muted">{fmtDate(p.createdAt)}</td>
        <td>
          <span className={`adm-dot adm-dot-${freshness}`} aria-hidden="true" />
          <span className="muted">{fmtDate(p.lastSeen)}</span>
        </td>
        <td>
          {p.isBanned
            ? <span className="adm-chip adm-chip-banned">banned</span>
            : <span className="adm-chip adm-chip-ok">active</span>}
        </td>
        <td>
          <span className="adm-actions">
            <button type="button" className="adm-icon-btn" title={expanded ? 'Hide progress' : 'View progress'} aria-label={expanded ? 'Hide progress' : 'View progress'} onClick={onToggle}>
              {expanded ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
            <button type="button" className="adm-icon-btn" title={p.isBanned ? 'Unban user' : 'Ban user'} aria-label={p.isBanned ? 'Unban user' : 'Ban user'} onClick={onBanToggle}>
              {p.isBanned ? <ShieldCheck size={15} /> : <ShieldOff size={15} />}
            </button>
            <button type="button" className="adm-icon-btn adm-icon-btn-danger" title="Reset progress" aria-label="Reset progress" onClick={onReset}>
              <Trash2 size={15} />
            </button>
          </span>
        </td>
      </tr>
      {expanded && (
        <tr className="adm-detail-row">
          <td colSpan={7}>
            {detail === undefined
              ? null
              : detail === null
                ? <span className="tiny">Progress unavailable.</span>
                : (
                  <div className="adm-detail-grid">
                    <span><b>{detail.topicsStarted}</b> topics started</span>
                    <span><b>{detail.quizzesCompleted}</b> quizzes</span>
                    <span><b>{detail.avgScore === null ? '--' : detail.avgScore + '%'}</b> avg score</span>
                    <span><b>{detail.topMastery}%</b> top mastery</span>
                  </div>
                )}
          </td>
        </tr>
      )}
    </>
  );
}
