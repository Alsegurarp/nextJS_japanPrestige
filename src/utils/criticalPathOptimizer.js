// Optimized Critical Path - reduce network waterfall
const preloadCriticalComponents = () => {
  // Use requestIdleCallback to avoid blocking main thread
  const preloadWithPriority = (importFn, priority = 'auto') => {
    if ('requestIdleCallback' in window && priority !== 'high') {
      requestIdleCallback(() => importFn());
    } else {
      // High priority or fallback - load immediately
      importFn();
    }
  };

  // Only preload the most critical components to reduce network requests
  preloadWithPriority(() => import("../pages/Home/Home.jsx"), 'high');
  
  // Lower priority preloads
  preloadWithPriority(() => import("../Componentes/Layout/Navbar/Navbar.jsx"));
};

// Component prefetch utility
const prefetchComponent = (importFn) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => importFn());
  } else {
    setTimeout(() => importFn(), 100);
  }
};

export { preloadCriticalComponents, prefetchComponent };