import { useEffect } from 'react';

const ResourceHints = () => {
  useEffect(() => {
    // Add dns-prefetch for external resources
    const dnsPrefetches = [
      'https://fonts.gstatic.com',
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com'
    ];

    dnsPrefetches.forEach(url => {
      if (!document.querySelector(`link[href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = url;
        document.head.appendChild(link);
      }
    });

    // Add preconnect for critical resources
    const preconnects = [
      'https://fonts.gstatic.com'
    ];

    preconnects.forEach(url => {
      if (!document.querySelector(`link[href="${url}"][rel="preconnect"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

  }, []);

  return null;
};

export default ResourceHints;