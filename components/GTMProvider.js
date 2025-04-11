// components/GTMProvider.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function GTMProvider() {
  const router = useRouter();

  useEffect(() => {
    // Funzione per inizializzare Google Tag Manager
    const initGTM = () => {
      if (window.gtmInitialized) return;
      
      const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
      if (!GTM_ID) {
        console.warn('GTM ID non configurato. Configura NEXT_PUBLIC_GTM_ID nelle variabili d\'ambiente.');
        return;
      }

      window.gtmInitialized = true;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        'event': 'gtm.js'
      });

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);
    };

    // Inizializza GTM al caricamento
    initGTM();

    // Gestisci il cambio di pagina
    const handleRouteChange = (url) => {
      if (window.dataLayer) {
        window.dataLayer.push({
          'event': 'pageview',
          'page': url
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return null;
}

export default GTMProvider;