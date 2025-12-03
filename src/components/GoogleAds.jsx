'use client';

import { useEffect } from 'react';

export default function GoogleAds() {
    useEffect(() => {
        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }

        // Load Google Ads script
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16999994743';
        script.async = true;
        document.head.appendChild(script);

        // Configure Google Ads
        script.onload = () => {
            gtag('js', new Date());
            gtag('config', 'AW-16999994743');
        };
    }, []);

    return null;
}
