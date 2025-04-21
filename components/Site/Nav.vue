<script setup>
const settings = await useSettings()
</script>

<template>
  <header>
    <SiteNavMarquee :duration="settings.data.marquee_speed">
      {{ settings.data.marquee_text }}
    </SiteNavMarquee>
    <nav class="flex items-center gap-12 py-3 px-site">
      <SiteLogo class="me-auto" />
      <SiteNavMenu :menu="settings.data.menu_items" />
      <SiteNavLanguage />
    </nav>
  </header>
</template>

<style>

</style>