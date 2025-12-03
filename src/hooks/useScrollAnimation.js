'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom hook for scroll-based animations using GSAP
 * @param {Object} options - Animation configuration
 * @param {string} options.animation - Animation type: 'fade-up', 'fade-down', 'fade-left', 'fade-right'
 * @param {number} options.delay - Animation delay in milliseconds (default: 0)
 * @param {number} options.duration - Animation duration in seconds (default: 1)
 * @param {boolean} options.once - Whether animation should trigger only once (default: true)
 * @param {number} options.offset - Scroll trigger offset (default: 100)
 * @returns {Object} ref - React ref to attach to the element
 */
export function useScrollAnimation({
    animation = 'fade-up',
    delay = 0,
    duration = 1,
    once = true,
    offset = 100
} = {}) {
    const ref = useRef(null);

    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined' || !ref.current) return;

        const element = ref.current;

        // Define initial state based on animation type
        const animationConfig = {
            'fade-up': { y: 50, opacity: 0 },
            'fade-down': { y: -50, opacity: 0 },
            'fade-left': { x: 50, opacity: 0 },
            'fade-right': { x: -50, opacity: 0 },
            'fade': { opacity: 0 },
            'zoom-in': { scale: 0.8, opacity: 0 },
            'zoom-out': { scale: 1.2, opacity: 0 }
        };

        const initialState = animationConfig[animation] || animationConfig['fade-up'];

        // Set initial state
        gsap.set(element, initialState);

        // Create animation
        const animation_instance = gsap.to(element, {
            ...Object.keys(initialState).reduce((acc, key) => {
                acc[key] = key === 'opacity' ? 1 : 0;
                return acc;
            }, {}),
            opacity: 1,
            duration: duration,
            delay: delay / 1000, // Convert ms to seconds
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: `top bottom-=${offset}`,
                toggleActions: once ? 'play none none none' : 'play none none reverse',
                markers: false // Set to true for debugging
            }
        });

        // Cleanup
        return () => {
            animation_instance.kill();
            if (ScrollTrigger.getById(element)) {
                ScrollTrigger.getById(element).kill();
            }
        };
    }, [animation, delay, duration, once, offset]);

    return ref;
}
