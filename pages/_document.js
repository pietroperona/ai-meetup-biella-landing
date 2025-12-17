// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

    return (
      <Html lang="it">
        <Head>
          {/* Font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />

          {/* Meta */}
          <meta name="theme-color" content="#F5F5F5" />

          {/* Icone */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          {/* Google Tag Manager */}
          {GTM_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${GTM_ID}');
                `
              }}
            />
          )}
        </Head>

        <body>
          {/* Google Tag Manager (noscript) */}
          {GTM_ID && (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `
                  <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe>
                `
              }}
            />
          )}
          
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
