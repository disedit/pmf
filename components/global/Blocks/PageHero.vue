<script setup>
defineProps({ block: { type: Object, required: true }})
</script>

<template>
  <div>
    <section class="sticky top-navbar min-h-viewport bg-gray-400 text-white flex items-center justify-center">
      <h1 class="text-2xl font-medium relative z-[10] p-site text-center leading-tight">
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
    <div class="grid md:grid-cols-2 sticky top-navbar z-[5]">
      <img src="https://pmf.disedit.com/uploads/7f95823ab3182b4c9f5d0e0e9262be76418b0128_58ac056ee6.png" class="h-fill w-auto" />
    </div>
    <div class="grid md:grid-cols-2 sticky top-navbar bg-primary z-[4]">
      <div />
      <div class="min-h-fill">
        djjdj
      </div>
    </div>
  </div>
</template>
