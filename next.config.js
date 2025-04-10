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
  
  // Disabilita la generazione statica per le API
  trailingSlash: false,
  
  // Escludi esplicitamente le API dalla generazione statica
  exportPathMap: async function (defaultPathMap) {
    const pathMap = {};
    
    // Copia solo le pagine non-API
    Object.keys(defaultPathMap).forEach(path => {
      if (!path.includes('/api/')) {
        pathMap[path] = defaultPathMap[path];
      }
    });
    
    return pathMap;
  },
  
  // Configurazione per l'ambiente di produzione
  env: {
    NEXT_PUBLIC_DEPLOYMENT: 'production'
  }
}

module.exports = nextConfig