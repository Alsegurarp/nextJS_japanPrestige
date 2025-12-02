'use client';

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function useGTMPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Wait until window and dataLayer are available
    if (typeof window === "undefined") return;

    // Define standard GA4 pageview data
    const page_location = window.location.href;
    const page_path = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    const page_title = document.title;
    const page_referrer = document.referrer;

    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];

    // Push pageview event into GTM
    window.dataLayer.push({
      event: "page_view", // ✅ this must match your GTM trigger name
      page_location,
      page_path,
      page_title,
      page_referrer,
    });
  }, [pathname, searchParams]);
}