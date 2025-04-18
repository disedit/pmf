<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const abbrs = {
  ca: 'VAL',
  es: 'CAS',
  en: 'ENG',
}
</script>

<template>
  <ul aria-label="Idioma" class="flex languages">
    <li v-for="lang in locales" :key="lang.code">
      <NuxtLink
        :to="switchLocalePath(lang.code)"
        :class="{ 'active': locale === lang.code }"
      >
        {{ abbrs[lang.code] }}
      </NuxtLink>
    </li>
  </ul>
</template>