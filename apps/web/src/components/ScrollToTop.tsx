import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/* ScrollToTop & Legacy Hash Migration
   1. Resets scroll position to (0, 0) upon navigating to a new route.
   2. Seamlessly intercepts legacy hash bookmarks (e.g. `/#/topic/...` or `/#/national`)
      and translates them to canonical BrowserRouter paths without page reload. */
export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Intercept legacy hash URLs: #/path -> /path
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      const cleanPath = hash.slice(1);
      window.history.replaceState(null, '', cleanPath);
      navigate(cleanPath, { replace: true });
      return;
    }

    // Scroll window and main content container to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    const view = document.getElementById('view');
    if (view) {
      view.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, search, navigate]);

  return null;
}
