import { useEffect } from 'react';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export default function CookieBanner() {
  useEffect(() => {
    // Importazione dinamica per evitare errori server-side
    const loadCookieConsent = async () => {
      try {
        const CookieConsent = await import('vanilla-cookieconsent');
        
        CookieConsent.init({
          guiOptions: {
            consentModal: {
              layout: 'cloud',
              position: 'bottom center',
            }
          },
          languages: {
            it: {
              consentModal: {
                title: 'Cookie e Privacy',
                description: 'Utilizziamo cookie tecnici e di analytics per migliorare la tua esperienza.',
                primaryBtn: {
                  text: 'Accetta tutti',
                  role: 'accept_all'
                },
                secondaryBtn: {
                  text: 'Gestisci preferenze',
                  role: 'manage_preferences'
                }
              }
            }
          }
        });
      } catch (error) {
        console.error('Errore nel caricamento di CookieConsent:', error);
      }
    };

    loadCookieConsent();
  }, []);

  return null;
}