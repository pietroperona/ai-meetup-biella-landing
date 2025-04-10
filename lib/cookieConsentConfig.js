const cookieConsentConfig = {
    current_lang: 'it',
    autoclear_cookies: true,
    page_scripts: true,
  
    gui_options: {
      consent_modal: {
        layout: 'cloud',
        position: 'bottom center',
        transition: 'slide',
        swap_buttons: false
      },
      settings_modal: {
        layout: 'box',
        position: 'left',
        transition: 'slide'
      }
    },
  
    languages: {
      it: {
        consent_modal: {
          title: 'Cookie e Privacy',
          description: 'Utilizziamo cookie tecnici e di analytics per migliorare la tua esperienza.',
          primary_btn: {
            text: 'Accetta tutti',
            role: 'accept_all'
          },
          secondary_btn: {
            text: 'Gestisci preferenze',
            role: 'settings'
          }
        },
        settings_modal: {
          title: 'Impostazioni Cookie',
          save_settings_btn: 'Salva impostazioni',
          accept_all_btn: 'Accetta tutti',
          reject_all_btn: 'Rifiuta tutti',
          close_btn_label: 'Chiudi',
          cookie_table_headers: ['Nome', 'Dominio', 'Scadenza', 'Descrizione'],
          blocks: [
            {
              title: 'Utilizzo dei cookie',
              description: 'Utilizziamo i cookie per garantire le funzionalità di base del sito.'
            },
            {
              title: 'Cookie strettamente necessari',
              description: 'Essenziali per il funzionamento del sito.',
              toggle: {
                value: 'necessary',
                enabled: true,
                readonly: true
              }
            },
            {
              title: 'Cookie analitici',
              description: 'Ci aiutano a migliorare le prestazioni.',
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
                  col4: 'Google Analytics: distingue gli utenti',
                },
                {
                  col1: '_gid',
                  col2: 'google.com',
                  col3: '24 ore',
                  col4: 'Google Analytics: distingue gli utenti',
                }
              ]
            }
          ]
        }
      }
    },
  
    onAccept(cookie) {
      if (cookie.categories?.includes('analytics')) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'cookie_consent_analytics' });
      }
    }
  };
  
  export default cookieConsentConfig;