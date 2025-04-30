<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  htmlAttrs: { lang: head.value.htmlAttrs.lang, dir: head.value.htmlAttrs.dir },
  meta: [
    { name: 'theme-color', content: '#E11147' },
    { name: 'msapplication-TileColor', content: '#E11147' },
    { name: 'apple-mobile-web-app-title', content: 'Potries Music Fest' },
    ...head.value.meta
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicons/site.webmanifest' },
    ...head.value.link
  ]
})
</script>

<template>
  <div class="bg-white">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#000" />
    <SiteNav />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>
