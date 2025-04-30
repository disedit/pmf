<script setup>
const settings = await useSettings()
</script>

<template>
  <header class="fixed top-0 left-0 right-0 min-h-navbar z-[10000] bg-white">
    <SiteMarquee :duration="settings.data.marquee_speed" background="bg-primary" padding="py-1">
      {{ settings.data.marquee_text }}
    </SiteMarquee>
    <nav class="flex items-center gap-12 py-3 px-site">
      <SiteLogo class="me-auto" />
      <SiteNavMenu :menu="settings.data.menu_items" />
      <SiteNavLanguage class="hidden lg:flex" />
      <SiteNavMobileMenu :menu="settings.data.menu_items" :socials="settings.data.socials" />
    </nav>
  </header>
  <div class="h-navbar" />
</template>

<style>

</style>