<script setup>
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath('/')">
    <img src="~/assets/images/logo.png" alt="Potries Music Fest" class="h-[2rem]">
  </NuxtLink>
</template>
