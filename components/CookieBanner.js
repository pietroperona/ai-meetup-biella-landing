import { useEffect } from 'react';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export default function CookieBanner() {
  useEffect(() => {
    // Importazione dinamica per evitare errori server-side
    const loadCookieConsent = async () => {
      try {
        const module = await import('vanilla-cookieconsent');
        const CookieConsent = module.default; // Ottieni l'oggetto default

        console.log("CookieConsent:", CookieConsent); // Aggiungi questa linea

        if (CookieConsent) {
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
        } else {
          console.error('CookieConsent non è stato caricato correttamente.');
        }
      } catch (error) {
        console.error('Errore nel caricamento di CookieConsent:', error);
      }
    };

    loadCookieConsent();
  }, []);

  return null;
}