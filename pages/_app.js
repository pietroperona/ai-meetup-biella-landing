// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Invia un evento pageview a Google Tag Manager
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'pageview',
        'page': url
      });
    };

    // Aggiungi l'event listener per il cambio pagina
    router.events.on('routeChangeComplete', handleRouteChange);

    // Rimuovi l'event listener quando il componente viene smontato
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />
}

export default MyApp