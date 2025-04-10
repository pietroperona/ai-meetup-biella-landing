window.addEventListener('load', function () {
    const cc = window.initCookieConsent();
  
    cc.run({
      current_lang: 'it',
      autoclear_cookies: true,
      page_scripts: true,
      languages: {
        it: {
          consent_modal: {
            title: 'Cookie e Privacy',
            description: 'Usiamo cookie tecnici e analitici per migliorare la tua esperienza.',
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
                title: 'Uso dei cookie',
                description: 'Utilizziamo i cookie per migliorare il sito e i servizi.'
              },
              {
                title: 'Cookie analitici',
                description: 'Ci aiutano a capire come viene usato il sito.',
                toggle: {
                  value: 'analytics',
                  enabled: false,
                  readonly: false
                }
              }
            ]
          }
        }
      },
      onAccept: function (cookie) {
        if (cookie.categories.includes('analytics')) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'cookie_consent_analytics' });
        }
      }
    });
  });