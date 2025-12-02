// Network Dependency Tree Optimizer
// Reduces critical path length and improves LCP

class NetworkOptimizer {
  constructor() {
    this.criticalResources = new Set();
    this.preloadedModules = new Set();
    this.deferredModules = new Set();
  }

  // Optimize critical resource loading
  preloadCriticalResources() {
    const criticalResourcesConfig = [
      // Critical fonts
      { href: '/assets/fonts/nohemi-regular-webfont.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous', priority: 'high' },
      
      // Critical images (only mobile and desktop for LCP)
      { href: '/Movil-Experiencia-cultural-con-kimono-tradicional.webp', as: 'image', media: '(max-width: 768px)', priority: 'high' },
      { href: '/Experiencia-cultural-con-kimono-tradicional.webp', as: 'image', media: '(min-width: 769px)', priority: 'high' },
    ];

    criticalResourcesConfig.forEach(resource => {
      if (!this.criticalResources.has(resource.href)) {
        this.addPreloadLink(resource);
        this.criticalResources.add(resource.href);
      }
    });
  }

  // Add preload link to document head
  addPreloadLink(resource) {
    if (document.querySelector(`link[href="${resource.href}"]`)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    
    if (resource.type) link.type = resource.type;
    if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin;
    if (resource.media) link.media = resource.media;
    if (resource.priority === 'high') link.fetchPriority = 'high';

    document.head.appendChild(link);
  }

  // Defer non-critical modules using requestIdleCallback
  deferNonCriticalModules() {
    const nonCriticalModules = [
      () => import('../Analytics/gtm.js'),
      () => import('../utils/performanceMonitoring.js'),
      () => import('../components/GTM/useGTMPagePreview.js'),
    ];

    const loadDeferred = (modules) => {
      modules.forEach(moduleLoader => {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            moduleLoader().catch(err => console.warn('Deferred module load failed:', err));
          });
        } else {
          setTimeout(() => {
            moduleLoader().catch(err => console.warn('Deferred module load failed:', err));
          }, 2000);
        }
      });
    };

    // Wait for critical resources to load first
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => loadDeferred(nonCriticalModules));
    } else {
      loadDeferred(nonCriticalModules);
    }
  }

  // Optimize module preloading strategy (production only)
  optimizeModulePreloading() {
    // Only run in production where modules have correct paths
    if (typeof import.meta === 'undefined' || !import.meta.env.PROD) {
      return;
    }
    
    // In production, Vite will generate the correct module paths
    // This method can be enhanced after build to use actual chunk names
    console.log('Module preloading optimization ready for production');
  }

  // Initialize all optimizations
  init() {
    // Run immediately for critical resources
    this.preloadCriticalResources();
    this.optimizeModulePreloading();
    
    // Defer non-critical optimizations
    this.deferNonCriticalModules();
  }
}

// Export singleton instance
export const networkOptimizer = new NetworkOptimizer();

// Auto-initialize when imported (safe for SSR)
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Use requestAnimationFrame to avoid blocking initial render
  requestAnimationFrame(() => {
    networkOptimizer.init();
  });
}