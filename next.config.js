/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['it'],
    defaultLocale: 'it',
  },
  images: {
    domains: [],
  },
  poweredByHeader: false,
  // Aggiungi questa configurazione per escludere le API routes dalla generazione statica
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // Rimuovi le API routes dal pathMap
    const pathMap = { ...defaultPathMap };
    delete pathMap['/api/subscribe'];
    return pathMap;
  }
}

module.exports = nextConfig