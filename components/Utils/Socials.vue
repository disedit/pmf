<script setup>
defineProps({
  socials: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <ul class="flex gap-2 text-md">
    <li v-for="social in socials" :key="social.id">
      <NuxtLink
        :to="social.url"
        :aria-label="social.label"
        target="_blank"
        rel="noopener noreferrer"
        class="
          bg-primary rounded-full h-[1.5em] w-[1.5em] flex items-center justify-center
          hover:bg-white hover:text-primary
        "
      >
        <Icon :name="`fa6-brands:${social.icon}`" />
      </NuxtLink>
    </li>
  </ul>
</template>