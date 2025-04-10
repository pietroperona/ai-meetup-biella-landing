// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// ✅ Importa i CSS globali
import '../styles/globals.css';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

// ✅ Import dinamico del banner client-only
import dynamic from 'next/dynamic';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Tracciamento GTM solo se analytics è accettato
    const handleRouteChange = (url) => {
      try {
        const consentCookie = localStorage.getItem('cc_cookie');
        const consent = consentCookie ? JSON.parse(consentCookie) : null;

        const analyticsAccepted = consent && consent.categories?.includes('analytics');

        if (analyticsAccepted && window.dataLayer) {
          window.dataLayer.push({
            event: 'pageview',
            page: url
          });
        }
      } catch (error) {
        console.error('Errore nel controllo del consenso per il pageview:', error);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;