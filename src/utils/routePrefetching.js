// Route prefetching utility for improved Speed Index and navigation performance
import { router } from '../app/router.jsx';

/**
 * Prefetch critical routes that users are likely to visit
 * This improves Speed Index by reducing navigation delays
 */
export const prefetchCriticalRoutes = () => {
  // Use requestIdleCallback for non-blocking prefetching
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      prefetchRoutes();
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(prefetchRoutes, 100);
  }
};

/**
 * Prefetch routes that are visible or likely to be accessed
 */
const prefetchRoutes = () => {
  const routesToPrefetch = [
    '/contacto',      // High-priority contact page
    '/nosotros',      // About page commonly accessed
    '/viajes-a-japon-desde-mexico', // Main service page
    '/itinerarios',   // Popular itineraries
    '/blog'           // Content section
  ];

  routesToPrefetch.forEach(route => {
    // Use router.navigate with replace: false to prefetch
    try {
      router.navigate(route, { replace: false, state: { prefetch: true } });
    } catch (error) {
      // Silent fail for prefetching to avoid console noise
      console.debug(`Route prefetch failed for ${route}:`, error);
    }
  });
};

/**
 * Prefetch routes when they become visible in viewport
 * Useful for navbar links and CTA buttons
 */
export const prefetchOnVisible = (element, route) => {
  if (!('IntersectionObserver' in window)) {
    return; // Skip prefetching on unsupported browsers
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Prefetch when element is visible
          prefetchRoute(route);
          observer.unobserve(entry.target);
        }
      });
    },
    { 
      rootMargin: '50px', // Start prefetching 50px before visible
      threshold: 0.1 
    }
  );

  if (element) {
    observer.observe(element);
  }
};

/**
 * Prefetch a single route
 */
const prefetchRoute = (route) => {
  try {
    // Create a prefetch link element
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = route;
    link.as = 'document';
    
    // Add to head for prefetching
    document.head.appendChild(link);
    
    // Remove after prefetch completes
    link.onload = () => {
      setTimeout(() => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      }, 1000);
    };
    
    link.onerror = () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  } catch (error) {
    console.debug(`Route prefetch failed for ${route}:`, error);
  }
};

/**
 * Prefetch route modules for faster lazy loading
 */
export const prefetchRouteModules = () => {
  // Use dynamic imports to prefetch route modules
  const modulePromises = [
    import('../pages/Contacto/Contacto.jsx'),
    import('../pages/Nosotros/Nosotros.jsx'),
    import('../pages/Itinerarios/Itinerarios.jsx'),
    import('../pages/Blog/Blog.jsx')
  ];

  // Execute all prefetches in parallel without blocking
  Promise.allSettled(modulePromises).then(results => {
    console.debug(`Prefetched ${results.filter(r => r.status === 'fulfilled').length} route modules`);
  });
};