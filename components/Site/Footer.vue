<script setup>
const settings = await useSettings()
</script>

<template>
  <StrapiBlocksText
    v-if="settings.data.footer_text"
    :key="`footer-${settings.data.locale}`"
    :nodes="settings.data.footer_text"
  />
</template>

<style>

</style>