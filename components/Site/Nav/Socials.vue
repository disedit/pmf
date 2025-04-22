<script setup>
defineProps({
  socials: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <ul class="font-medium text-md">
    <li v-for="social in socials" :key="social.id">
      <NuxtLink
        :to="social.url"
        :aria-label="social.label"
        target="_blank"
        rel="noopener noreferrer"
        class="
         
        "
      >
        {{ social.label }} ↗︎
      </NuxtLink>
    </li>
  </ul>
</template>