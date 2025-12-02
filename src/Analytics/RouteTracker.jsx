'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pushPageView } from './gtm';

export default function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    // fires on initial load + every navigation
    pushPageView(url);
  }, [pathname, searchParams]);

  return null; // no UI
}