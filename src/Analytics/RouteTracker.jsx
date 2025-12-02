import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pushPageView } from './gtm';

export default function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    // fires on initial load + every navigation
    pushPageView(location.pathname + location.search);
  }, [location]);

  return null; // no UI
}