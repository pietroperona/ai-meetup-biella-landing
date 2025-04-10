// next.config.js
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
  }
  
  module.exports = nextConfig