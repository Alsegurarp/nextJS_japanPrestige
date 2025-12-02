import React, { Suspense, useEffect} from 'react';
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './app/router.jsx'; // Fixed path
import useGTMPageView from './components/GTM/useGTMPagePreview';
import { preloadCriticalResources } from './utils/preloadResources.js';
import { prefetchCriticalRoutes, prefetchRouteModules } from './utils/routePrefetching.js';
import { preloadNonCriticalComponents } from './utils/lazyComponents.js';
import { loadGTMDeferred } from './utils/deferredGTM.js';

export default function App() {
  useGTMPageView();

  useEffect(() => {
    preloadCriticalResources();
    
    // Prefetch critical routes for better Speed Index
    prefetchCriticalRoutes();
    
    // Load non-critical resources after initial load
    setTimeout(() => {
      prefetchRouteModules();
      preloadNonCriticalComponents();
      loadGTMDeferred(); // Load GTM after critical rendering
    }, 2000); // Delay to not interfere with initial load
  }, []);

   // ADD THIS NEW useEffect HOOK HERE
  useEffect(() => {
    // Store the original console.warn
    const originalWarn = console.warn;
    
    // Override with a filtered version
    console.warn = (...args) => {
      // Skip only specific image warnings
      if (args[0]?.includes && (
          args[0].includes('img element is missing required "alt" prop')
        )) {
        return;
      }
      
      // Pass through all other warnings
      originalWarn.apply(console, args);
    };
    
    // Restore original on unmount
    return () => {
      console.warn = originalWarn;
    };
  }, []);

  

  return (

    <Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
      <RouterProvider router={router}  />
    </Suspense>
  );
}
