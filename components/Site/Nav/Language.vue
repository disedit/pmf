<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const abbrs = {
  ca: 'VLC',
  es: 'CAS',
  en: 'ENG',
}
</script>

<template>
  <ul aria-label="Idioma / Language" class="flex language text-sm font-light">
    <li v-for="lang in locales" :key="lang.code">
      <NuxtLink
        :to="switchLocalePath(lang.code)"
        :class="['hover:underline', { 'font-semibold': locale === lang.code }]"
      >
        {{ abbrs[lang.code] }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.language li:not(:last-child)::after {
  content: '/';
  margin-inline: .25em;
}
</style>