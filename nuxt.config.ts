import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/strapi',
    '@nuxtjs/i18n',
    'nuxt-strapi-blocks-renderer',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],

  css: [
    '~/assets/css/main.css',
    './node_modules/@splidejs/splide/dist/css/splide-core.min.css'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  i18n: {
    locales: [
      { code: 'ca', language: 'ca-ES', file: 'ca.js' },
      { code: 'es', language: 'es-ES', file: 'es.js' },
      { code: 'en', language: 'en-US', file: 'en.js' }
    ],
    defaultLocale: 'ca',
    langDir: '',
    baseUrl: 'https://musicfest.potries.org'
  },

  image: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? {
    provider: 'netlify',
    domains: ['pmf.disedit.com']
  } : {
    provider: 'strapi',
    strapi: {
      baseURL: 'https://pmf.disedit.com/'
    }
  },

  googleFonts: {
    families: {
      'DM Sans': {
        wght: '200..900',
        ital: '200..700',
      }
    }
  }
})