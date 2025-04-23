<script setup>
const props = defineProps({
  media: {
    type: Object,
    required: true,
  },
  sizes: {
    type: String,
    default: '100vw md:800px lg:1200px',
  }
})

const { mediaUrl, localUrl } = useUtils()
const isVideo = computed(() => props.media.mime.startsWith('video/'))
</script>

<template>
  <div class="flex">
    <video
      v-if="isVideo"
      :src="localUrl(media.url)"
      playsinline muted autoplay loop
      class="media-item" />
    <NuxtPicture
      v-else
      format="avif,webp"
      :src="mediaUrl(media.url)"
      :sizes="sizes"
      class="media-item"
      :alt="media.alternativeText || ''"
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