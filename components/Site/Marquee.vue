<script setup>
defineProps({
  duration: {
    type: Number,
    default: 4
  },
  background: {
    type: String,
    default: ''
  },
  padding: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <ClientOnly>
    <Vue3Marquee clone :duration="duration" :class="[background, 'text-white font-medium text-base flex']">
      <span :class="['flex', padding]">
        <span>
          <slot />
        </span>
        <span class="mx-4">·</span>
      </span>
    </Vue3Marquee>
  </ClientOnly>
</template>
