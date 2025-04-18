import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/strapi',
    '@nuxtjs/i18n',
    'nuxt-strapi-blocks-renderer'
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  i18n: {
    locales: [
      { code: 'ca', language: 'ca-ES' },
      { code: 'es', language: 'es-ES' },
      { code: 'en', language: 'en-US' }
    ],
    defaultLocale: 'ca',
  }
})