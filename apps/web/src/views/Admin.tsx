import { useSearchParams } from 'react-router-dom';
import { AdminLayout } from './admin/AdminLayout';
import AdminOverview from './admin/AdminOverview';
import AdminUsers from './admin/AdminUsers';
import AdminEngagement from './admin/AdminEngagement';
import AdminContent from './admin/AdminContent';
import type { AdminTab } from '../lib/admin';

/* /admin - lazy route. Tab is carried in the URL (?tab=... two-way bound),
   all console chrome/the access guard lives in AdminLayout. */

const TABS: AdminTab[] = ['overview', 'users', 'engagement', 'content'];

function tabFrom(params: URLSearchParams): AdminTab {
  const t = params.get('tab');
  return (TABS as string[]).includes(t ?? '') ? (t as AdminTab) : 'overview';
}

export default function Admin() {
  const [params, setParams] = useSearchParams();
  const tab = tabFrom(params);

  const setTab = (next: AdminTab) => {
    const q = new URLSearchParams(params);
    q.set('tab', next);
    setParams(q, { replace: true });
  };

  return (
    <AdminLayout active={tab} onSelect={setTab}>
      {tab === 'users' && <AdminUsers />}
      {tab === 'engagement' && <AdminEngagement />}
      {tab === 'content' && <AdminContent />}
      {tab === 'overview' && <AdminOverview />}
    </AdminLayout>
  );
}
