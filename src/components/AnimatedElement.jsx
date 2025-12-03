'use client';

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Wrapper component for scroll-based animations
 * Replaces AOS data-aos attributes with GSAP animations
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} props.animation - Animation type (fade-up, fade-down, fade-left, fade-right, etc.)
 * @param {number} props.delay - Animation delay in milliseconds
 * @param {number} props.duration - Animation duration in seconds
 * @param {boolean} props.once - Whether to animate only once
 * @param {string} props.className - Additional CSS classes
 * 
 * @example
 * <AnimatedElement animation="fade-up" delay={100}>
 *   <div>Content to animate</div>
 * </AnimatedElement>
 */
export default function AnimatedElement({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 1,
    once = true,
    className = '',
    ...props
}) {
    const ref = useScrollAnimation({
        animation,
        delay,
        duration,
        once
    });

    return (
        <div ref={ref} className={className} {...props}>
            {children}
        </div>
    );
}
