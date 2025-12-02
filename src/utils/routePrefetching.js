// Route prefetching utility for improved Speed Index and navigation performance
// In Next.js, prefetching is handled automatically by the Link component and router.prefetch.
// This file is kept for compatibility but operations are no-ops or adapted.

/**
 * Prefetch critical routes that users are likely to visit
 * This improves Speed Index by reducing navigation delays
 */
export const prefetchCriticalRoutes = () => {
  // No-op in Next.js as it handles viewport prefetching
};

/**
 * Prefetch routes when they become visible in viewport
 * Useful for navbar links and CTA buttons
 */
export const prefetchOnVisible = (element, route) => {
  // No-op
};

/**
 * Prefetch route modules for faster lazy loading
 */
export const prefetchRouteModules = () => {
  // No-op
};