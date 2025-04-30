<script setup>
defineProps({
  size: {
    type: String,
    default: 'sm',
  },
})
</script>

<template>
  <NuxtLink
    v-bind="$attrs"
    :class="[
      'inline-block bg-magenta rounded-lg text-white font-medium px-[1.75em] py-[.75em] uppercase',
      {
        'text-sm': size === 'sm',
        'text-base': size === 'base',
      }
    ]"
  >
    <slot />
  </NuxtLink>
</template>
