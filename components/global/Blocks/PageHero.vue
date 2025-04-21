<script setup>
defineProps({ block: { type: Object, required: true }})
</script>

<template>
  <section class="min-h-viewport bg-gray-400 text-white flex items-center justify-center relative">
    <h1 class="text-2xl font-medium relative z-[10]">
      {{ block.title }}
    </h1>
    <UtilsMedia
      v-if="block.background"
      :media="block.background"
      class="absolute inset-0 z-[1] w-full h-full"
    />
    <div
      v-if="block.overlay"
      class="absolute inset-0 z-[2] bg-black/40"
    />
  </section>
</template>
