<script setup>
const props = defineProps({
  error: Object
})
</script>

<template>
  <div class="p-site h-[100dvh] flex flex-col font-sans text-base md:text-md gap-site">
    <div class="font-bold text-5xl leading-[1] uppercase">
      <div>{{ error.statusCode }}</div>
      <h1>{{ error.message }}</h1>
    </div>

    <div class="mt-auto">
      <NuxtLink to="/" class="hover:underline">BACK</NuxtLink>
    </div>
  </div>
</template>