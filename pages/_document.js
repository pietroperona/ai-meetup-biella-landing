// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

    return (
      <Html lang="it">
        <Head>
          {/* Font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

          {/* CookieConsent CSS */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/cookieconsent@3.1.1/dist/cookieconsent.css"
          />

          {/* Meta */}
          <meta name="theme-color" content="#F5F5F5" />

          {/* GTM e dataLayer init */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function loadGTM() {
                  if (window.gtmInitialized) return;
                  window.gtmInitialized = true;
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer', '${GTM_ID}');
                }
                const originalPush = Array.prototype.push;
                dataLayer.push = function() {
                  originalPush.apply(this, arguments);
                  if (arguments[0]?.event === 'cookie_consent_analytics') {
                    loadGTM();
                  }
                };
                document.addEventListener('DOMContentLoaded', function() {
                  try {
                    const consent = localStorage.getItem('cc_cookie');
                    if (consent) {
                      const parsed = JSON.parse(consent);
                      if (parsed.categories?.includes('analytics')) {
                        loadGTM();
                      }
                    }
                  } catch (e) {
                    console.error('Errore parsing consenso cookie:', e);
                  }
                });
              `
            }}
          />

          {/* Icone */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="canonical" href="https://biella.aimeetup.it" />
        </Head>

        <body>
          {/* GTM fallback */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `
            }}
          />

          <Main />
          <NextScript />

          {/* CookieConsent script + config */}
          <script
            src="https://cdn.jsdelivr.net/npm/cookieconsent@3.1.1/dist/cookieconsent.js"
            onLoad="window.dispatchEvent(new Event('ccReady'))"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('ccReady', function () {
                  const cc = window.initCookieConsent();
                  console.log('✅ Libreria CookieConsent caricata', window.initCookieConsent);
                  cc.run({
                    current_lang: 'it',
                    autoclear_cookies: true,
                    page_scripts: true,
                    languages: {
                      it: {
                        consent_modal: {
                          title: 'Cookie e Privacy',
                          description: 'Usiamo cookie tecnici e analitici per migliorare la tua esperienza.',
                          primary_btn: { text: 'Accetta tutti', role: 'accept_all' },
                          secondary_btn: { text: 'Gestisci preferenze', role: 'settings' }
                        },
                        settings_modal: {
                          title: 'Impostazioni Cookie',
                          save_settings_btn: 'Salva',
                          accept_all_btn: 'Accetta tutti',
                          reject_all_btn: 'Rifiuta tutti',
                          close_btn_label: 'Chiudi',
                          cookie_table_headers: ['Nome', 'Dominio', 'Scadenza', 'Descrizione'],
                          blocks: [
                            {
                              title: 'Uso dei cookie',
                              description: 'Cookie tecnici per il funzionamento del sito.'
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
              `
            }}
          />
        </body>
      </Html>
    );
  }
}