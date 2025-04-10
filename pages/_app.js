// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CookieBanner from '../components/CookieBanner';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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

  return (
    <>
      <CookieBanner />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp