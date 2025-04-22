<script setup>
defineProps({
  menu: { type: Array, required: true },
})
</script>

<template>
  <ul aria-label="Menu" class="hidden lg:flex gap-6 font-medium text-base">
    <li v-for="item in menu" :key="item.id">
      <NuxtLink :to="item.link" class="hover:underline">
        {{ item.label }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style>

</style>