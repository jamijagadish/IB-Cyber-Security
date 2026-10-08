import { useEffect } from 'react';

/**
 * ScrollToTop
 * 
 * Reusable global scroll manager.
 * - Disables browser manual scroll-restoration bugs during route/page changes.
 * - Watches active route/page identifier and smoothly resets scroll to 0,0.
 * - Prevents layout flashing and ensures new page views always start clean at the top.
 */
export default function ScrollToTop({ routeKey }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Prevent browser restoration glitches during transitions
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // When the route/detail page changes, reset scroll to top immediately
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [routeKey]);

  return null;
}
