// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#F5F5F5" />
        
        {/* Favicon e icone */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://biella.aimeetup.it" />
        
        {/* Meta tag per crawler AI */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="ai-index" content="allow" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Meta tag per SEO avanzato */}
        <meta name="geo.region" content="IT-BI" />
        <meta name="geo.placename" content="Biella" />
        <meta name="geo.position" content="45.5629;8.0583" />
        <meta name="ICBM" content="45.5629, 8.0583" />
        
        {/* Supporto multi-lingua per il futuro */}
        <link rel="alternate" hreflang="it" href="https://biella.aimeetup.it" />
        <link rel="alternate" hreflang="x-default" href="https://biella.aimeetup.it" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}