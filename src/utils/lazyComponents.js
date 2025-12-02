// Dynamic component loader for reducing initial bundle size
import { lazy } from 'react';

/**
 * Lazy load components that are not critical for initial paint
 * This reduces the main bundle size and improves TTI
 */

// Non-critical page components - load on demand
export const LazyContacto = lazy(() => 
  import('../pages/Contacto/Contacto.jsx')
);

export const LazyNosotros = lazy(() => 
  import('../pages/Nosotros/Nosotros.jsx')
);

export const LazyBlog = lazy(() => 
  import('../pages/Blog/Blog.jsx')
);

export const LazyFaqs = lazy(() => 
  import('../pages/Faqs/Faqs.jsx')
);

export const LazyItinerarios = lazy(() => 
  import('../pages/Itinerarios/Itinerarios.jsx')
);

export const LazyHotelesInicio = lazy(() => 
  import('../pages/Hoteles/HotelesInicio/HotelesInicio.jsx')
);

export const LazyAvisoPrivacidad = lazy(() => 
  import('../pages/AvisoPrivacidad/AvisoPrivacidad.jsx')
);

// Critical components - load immediately
export const Home = lazy(() => 
  import('../pages/Home/Home.jsx')
);

// Non-critical features that can be loaded later
export const LazyScrollToTop = lazy(() => 
  import('../components/ScrollToTop.jsx')
);

/**
 * Preload components when they become likely to be needed
 */
export const preloadComponent = (componentImport) => {
  // Use requestIdleCallback to preload during idle time
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      componentImport();
    });
  } else {
    setTimeout(() => {
      componentImport();
    }, 100);
  }
};

/**
 * Preload non-critical components after initial load
 */
export const preloadNonCriticalComponents = () => {
  const preloadDelay = 3000; // Wait 3 seconds after initial load
  
  setTimeout(() => {
    // Preload components that are likely to be accessed
    preloadComponent(() => import('../pages/Contacto/Contacto.jsx'));
    preloadComponent(() => import('../pages/Nosotros/Nosotros.jsx'));
    preloadComponent(() => import('../pages/Itinerarios/Itinerarios.jsx'));
  }, preloadDelay);
  
  // Preload less critical components even later
  setTimeout(() => {
    preloadComponent(() => import('../pages/Blog/Blog.jsx'));
    preloadComponent(() => import('../pages/Faqs/Faqs.jsx'));
    preloadComponent(() => import('../pages/Hoteles/HotelesInicio/HotelesInicio.jsx'));
  }, preloadDelay + 2000);
};