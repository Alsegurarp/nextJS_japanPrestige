import React, { useState, useEffect, useRef } from 'react';

/**
 * WhenVisible component - Renders children only when they enter the viewport
 * Uses IntersectionObserver for performance-optimized visibility detection
 * 
 * @param {React.ReactNode} children - Content to render when visible
 * @param {React.ReactNode} placeholder - Placeholder content (maintains layout)
 * @param {string} rootMargin - IntersectionObserver rootMargin (default: '100px')
 * @param {number} threshold - IntersectionObserver threshold (default: 0)
 */


const WhenVisible = ({ 
  children, 
  placeholder = null, 
  rootMargin = '100px', 
  threshold = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasBeenVisible) {
          setIsVisible(true);
          setHasBeenVisible(true);
          // Once visible, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [rootMargin, threshold, hasBeenVisible]);

  return (
    <div ref={elementRef}>
      {isVisible || hasBeenVisible ? children : placeholder}
    </div>
  );
};

export default WhenVisible;