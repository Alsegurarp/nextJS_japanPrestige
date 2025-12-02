// Utility for preloading critical resources in React Router DOM app
export const preloadImage = (src, priority = 'high') => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  if (priority === 'high') {
    link.fetchPriority = 'high';
  }
  
  // Avoid duplicate preloads
  const existing = document.querySelector(`link[href="${src}"]`);
  if (!existing) {
    document.head.appendChild(link);
  }
};

export const preloadRoute = (routePath) => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = routePath;
  
  const existing = document.querySelector(`link[href="${routePath}"]`);
  if (!existing) {
    document.head.appendChild(link);
  }
};

// Preload critical resources for LCP optimization
export const preloadCriticalResources = () => {
  // Preload hero images with high priority
  preloadImage('/Experiencia-cultural-con-kimono-tradicional.webp', 'high');
  preloadImage('/Tablet-Experiencia-cultural-con-kimono-tradicional.webp', 'high');
  preloadImage('/Movil-Experiencia-cultural-con-kimono-tradicional.webp', 'high');
  
  // Preload commonly visited routes
  preloadRoute('/viajes-a-japon-desde-mexico');
  preloadRoute('/contacto');
  preloadRoute('/nosotros');
};

// Hook for React components
export const useResourcePreload = () => {
  const preloadImageResource = (src, priority = 'high') => preloadImage(src, priority);
  const preloadRouteResource = (routePath) => preloadRoute(routePath);
  
  return { preloadImageResource, preloadRouteResource };
};