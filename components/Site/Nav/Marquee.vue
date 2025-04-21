<script setup>
defineProps({
  duration: {
    type: Number,
    default: 4
  }
})
</script>

<template>
  <ClientOnly>
    <Vue3Marquee clone :duration="duration" class="bg-primary text-white font-medium text-base flex">
      <span class="flex">
        <span>
          <slot />
        </span>
        <span class="mx-4">·</span>
      </span>
    </Vue3Marquee>
  </ClientOnly>
</template>
