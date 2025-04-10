import { useEffect } from 'react';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';

export default function CookieBanner() {
  useEffect(() => {
    CookieConsent.init({
      gui_options: {
        consent_modal: {
          layout: 'cloud',
          position: 'bottom center',
        }
      },
      languages: {
        it: {
          consent_modal: {
            title: 'Cookie e Privacy',
            description: 'Utilizziamo cookie tecnici e di analytics per migliorare la tua esperienza. Puoi gestire le tue preferenze qui.',
            primary_btn: {
              text: 'Accetta tutti',
              role: 'accept_all'
            },
            secondary_btn: {
              text: 'Gestisci preferenze',
              role: 'manage_preferences'
            }
          },
          settings_modal: {
            title: 'Preferenze Cookie',
            save_settings_btn: 'Salva impostazioni',
            accept_all_btn: 'Accetta tutti',
            reject_all_btn: 'Rifiuta tutto',
            close_btn_label: 'Chiudi',
            cookie_table_headers: [
              { col1: 'Nome' },
              { col2: 'Dominio' },
              { col3: 'Scadenza' },
              { col4: 'Descrizione' }
            ],
            blocks: [
              {
                title: 'Utilizzo dei cookie 📢',
                description: 'Utilizziamo cookie per garantire le funzionalità di base del sito e migliorare la tua esperienza.'
              },
              {
                title: 'Cookie strettamente necessari',
                description: 'Questi cookie sono essenziali per il corretto funzionamento del sito web.',
                toggle: {
                  value: 'necessary',
                  enabled: true,
                  readonly: true
                }
              },
              {
                title: 'Cookie di Analytics',
                description: 'Ci permettono di capire come interagisci con il sito e migliorare la tua esperienza.',
                toggle: {
                  value: 'analytics',
                  enabled: false,
                  readonly: false
                },
                cookie_table: [
                  {
                    col1: '_ga',
                    col2: 'google.com',
                    col3: '2 anni',
                    col4: 'Cookie di Google Analytics per analisi del traffico'
                  }
                ]
              },
              {
                title: 'Ulteriori informazioni',
                description: 'Per qualsiasi domanda sui nostri cookie, <a href="/privacy-policy">consulta la nostra privacy policy</a>.'
              }
            ]
          }
        }
      },
      // Callback per gestire il consenso
      onConsent: (cookie) => {
        // Gestisci il consenso per GTM e Analytics
        if (cookie.level.includes('analytics')) {
          // Abilita Google Tag Manager
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'event': 'cookie_consent_analytics_accepted'
          });
        }
      }
    });
  }, []);

  return null;
}