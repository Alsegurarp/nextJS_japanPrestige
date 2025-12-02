// Performance monitoring for critical path optimization
import { useEffect } from 'react';

const usePerformanceMonitoring = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor LCP
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lcpEntry = entries[entries.length - 1];
      
      console.log('🎯 LCP Time:', lcpEntry.startTime.toFixed(2) + 'ms');
      
      // Track if LCP is from Hero component
      if (lcpEntry.element?.className?.includes('hero')) {
        console.log('✅ LCP from Hero component');
      }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor critical path timings
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      console.log('📊 Critical Path Metrics:');
      console.log(`  DOM Content Loaded: ${navigation.domContentLoadedEventEnd}ms`);
      console.log(`  Load Complete: ${navigation.loadEventEnd}ms`);
      
      // Check for router loading time
      const routerMarks = performance.getEntriesByName('router-loaded');
      if (routerMarks.length) {
        console.log(`  Router Loaded: ${routerMarks[0].startTime}ms`);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

// Mark critical points
const markCriticalPoint = (name) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.mark(name);
  }
};

export { usePerformanceMonitoring, markCriticalPoint };