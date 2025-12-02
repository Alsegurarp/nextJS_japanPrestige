import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useGTMPageView() {
  const location = useLocation();

  useEffect(() => {
    // Wait until window and dataLayer are available
    if (typeof window === "undefined") return;

    // Define standard GA4 pageview data
    const page_location = window.location.href;
    const page_path = location.pathname + location.search;
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
  }, [location]);
}