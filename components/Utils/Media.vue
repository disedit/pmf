<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex">
    <NuxtPicture
      format="avif,webp"
      :src="src"
      class="media-item"
    />
  </div>
</template>

<style>
  .media-item {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
</style>