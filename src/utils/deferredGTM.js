// Deferred Google Tag Manager loader to improve TTI
export const loadGTMDeferred = () => {
  // Only load GTM after critical rendering is complete
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      initializeGTM();
    });
  } else {
    setTimeout(() => {
      initializeGTM();
    }, 3000); // Delay GTM load by 3 seconds
  }
};

const initializeGTM = () => {
  // Check if GTM is already loaded
  if (window.dataLayer && window.gtag) {
    return;
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Create and load GTM script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-TPS5Q8CS';
  
  // Add onload handler for monitoring
  script.onload = () => {
    console.debug('GTM loaded successfully');
    
    // Fire initial page view after GTM loads
    if (window.gtag) {
      window.gtag('config', 'GTM-TPS5Q8CS', {
        page_title: document.title,
        page_location: location.href
      });
    }
  };
  
  script.onerror = () => {
    console.warn('Failed to load GTM');
  };

  // Insert GTM script
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(script, firstScript);
  
  // Add GTM noscript fallback
  if (!document.getElementById('gtm-noscript')) {
    const noscript = document.createElement('noscript');
    noscript.id = 'gtm-noscript';
    noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TPS5Q8CS" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
    document.body.insertBefore(noscript, document.body.firstChild);
  }
};

/**
 * Track page views after GTM is loaded
 */
export const trackPageView = (path, title) => {
  if (window.gtag) {
    window.gtag('config', 'GTM-TPS5Q8CS', {
      page_path: path,
      page_title: title
    });
  } else {
    // Queue the event if GTM isn't loaded yet
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: path,
      page_title: title
    });
  }
};