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
      :src="block.background.url"
      class="absolute inset-0 z-[1] w-full h-full"
    />
  </section>
</template>
