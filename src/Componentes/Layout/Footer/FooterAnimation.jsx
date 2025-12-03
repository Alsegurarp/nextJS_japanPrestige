'use client';

import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FooterAnimation.css';

gsap.registerPlugin(ScrollTrigger);

const FooterAnimation = () => {
    const scopeAnimation = useRef();
    const isAnimating = useRef(false);
    const scrollTriggerRef = useRef(null);
    const hasAnimated = useRef(false);
    const isScrollTriggered = useRef(false);

    useGSAP(() => {
        const section = scopeAnimation.current;
        const letters = document.querySelectorAll('.letter');
        const japonLetters = document.querySelectorAll('.japon-letter');
        const japonContainer = document.querySelector('.japon-container');
        const animatedText = document.querySelector('#animated-text');

        if (!animatedText) {
            console.error('Animated text container not found.');
            return;
        }

        if (!letters.length) {
            console.error('No letters found for PREMIUM animation.');
            return;
        }

        if (!japonLetters.length) {
            console.error('No letters found for JAPÓN animation.');
            return;
        }

        if (!japonContainer) {
            console.error('JAPÓN container not found.');
            return;
        }

        // Configure each letter of PREMIUM
        letters.forEach((letter) => {
            gsap.set(letter, { transformOrigin: 'center center' });
        });

        // Function to execute the animation
        const runAnimation = () => {
            if (isAnimating.current) return;
            isAnimating.current = true;
            isScrollTriggered.current = true;

            // Main timeline
            const mainTimeline = gsap.timeline({
                onComplete: () => {
                    isAnimating.current = false;
                    isScrollTriggered.current = false;
                },
            });

            mainTimeline
                // 1. Animate PREMIUM
                .to(letters, {
                    color: '#f0c051',
                    WebkitTextStroke: '2px #f0c051',
                    rotationY: 180,
                    duration: 0.5,
                    ease: 'power2.inOut',
                    force3D: true,
                    stagger: 0.1,
                })
                // 2. Keep PREMIUM visible
                .to(letters, {
                    color: 'transparent',
                    WebkitTextStroke: '2px #f0c051',
                    rotationY: 0,
                    duration: 0.5,
                    ease: 'power2.inOut',
                    force3D: true,
                    stagger: 0.1,
                    delay: 0.3,
                })
                // 3. Make the JAPÓN container visible
                .to(
                    japonContainer,
                    {
                        opacity: 1,
                        duration: 0.5,
                    },
                    '-=0.2'
                )
                // 4. Animate each JAPÓN letter from top to bottom
                .to(
                    japonLetters,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.out',
                        stagger: 0.06
                    },
                    '-=0.1'
                );
        };

        // Function to reset the animation
        const resetAnimation = () => {
            gsap.set(japonContainer, {
                opacity: 0,
            });
            gsap.set(japonLetters, {
                opacity: 0,
                y: -30,
            });
        };

        // ScrollTrigger that repeats on enter/leave
        scrollTriggerRef.current = ScrollTrigger.create({
            trigger: animatedText,
            start: 'top 80%',
            end: 'bottom bottom',
            onEnter: runAnimation,
            onEnterBack: runAnimation,
            onLeave: resetAnimation,
            onLeaveBack: resetAnimation,
            markers: false,
        });

        // Activate hover effects for PREMIUM
        letters.forEach((letter) => {
            const tl = gsap.timeline({ paused: true });

            tl.to(letter, {
                color: '#f0c051',
                rotationY: 180,
                duration: 1,
                ease: "power4.out",
                force3D: true,
            });

            let isHovering = false;

            letter.addEventListener('mouseenter', () => {
                // Don't trigger hover animation if scroll animation is running
                if (isScrollTriggered.current) return;

                isHovering = true;
                // Play animation nonstop
                if (!tl.isActive()) {
                    tl.play();
                    isHovering = false;
                }
            });


            letter.addEventListener('mouseleave', () => {
                // Don't trigger hover animation if scroll animation is running
                if (isScrollTriggered.current) return;

                isHovering = false;
                // Once animation is done and mouse leaves, reverse it
                tl.eventCallback('onComplete', () => {
                    if (!isHovering) {
                        tl.reverse();
                    }
                });
                // If animation is still playing, let it complete then reverse
                if (tl.isActive()) {
                    // Animation will reverse when it completes (see callback above)
                } else {
                    // Animation already completed, so reverse immediately
                    tl.reverse();
                }
            });
        });

    }, []) //termina gsap

    // Dynamic refresh for lazy loading
    useEffect(() => {
        // Use Intersection Observer to detect when footer comes into view
        // and refresh ScrollTrigger in case content above has loaded
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && scrollTriggerRef.current) {
                        // Refresh ScrollTrigger when footer becomes visible
                        // This recalculates positions after lazy-loaded content
                        ScrollTrigger.refresh();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (scopeAnimation.current) {
            observer.observe(scopeAnimation.current);
        }

        // Listen for window resize and content changes
        const handleResize = () => {
            if (scrollTriggerRef.current) {
                ScrollTrigger.refresh();
            }
        };

        window.addEventListener('resize', handleResize);
        // Also refresh on common lazy-load events
        window.addEventListener('load', handleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    }, []);

    // Función para ejecutar la animación
    return (
        <footer className="text-wrapper" ref={scopeAnimation}>
            <div >
                <div className="container japon-container">
                    {['J', 'A', 'P', 'Ó', 'N'].map((char, index) => (
                        <div key={index + 10}>
                            <span className="japon-letter" key={index}>{char}</span>
                        </div>
                    ))}
                </div>

                <div className="container" id="animated-text">
                    {['P', 'R', 'E', 'M', 'I', 'U', 'M'].map((char, index) => (
                        <div className='div-letter' key={index + 20}>
                            <span className="letter" key={index}>{char}</span>
                        </div>
                    ))}
                    <span className="letterr">®</span>
                </div>
            </div>
        </footer>
    );
};

export default FooterAnimation;