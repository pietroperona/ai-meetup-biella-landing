// components/GoogleTagManager.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function GoogleTagManager() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'pageview',
        'page': url
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
}