<script setup>
defineProps({ block: { type: Object, required: true }})
</script>

<template>
  <section class="min-h-viewport bg-gray-400 text-white flex items-center justify-center">
    <h1 class="text-2xl font-medium">
      {{ block.title }}
    </h1>
  </section>
</template>
