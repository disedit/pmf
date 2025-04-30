<script setup>
defineProps({ block: { type: Object, required: true }})

const img = useImage()
const { mediaUrl } = useUtils()
</script>

<template>
  <section class="page-header">
    <div class="sticky top-navbar min-h-viewport bg-gray-400 text-white flex items-center justify-center">
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
    </div>
    <div v-if="block.poster?.url" class="page-header-poster grid md:grid-cols-2 sticky top-navbar md:z-[5]">
      <UtilsMedia
        :media="block.poster"
        class="h-viewport w-auto"
        sizes="100vw md:400px lg:700px"
      />
    </div>
    <div
      v-if="block.poster?.url"
      class="grid md:grid-cols-2 sticky top-navbar bg-primary md:z-[4] bg-cover"
      :style="{
        backgroundImage: block.poster_background ? `url(${img(mediaUrl(block.poster_background.url), { width: 1400 })})` : null
      }"
    >
      <div />
      <div class="page-header-poster-content min-h-viewport flex items-center">
        <UtilsRichText
          :content="block.poster_content"
          class="text-white p-site"
        />
      </div>
    </div>
  </section>
</template>

<style>
.page-header-poster {
  .media-item {
    width: auto;

    img {
      width: auto;
    }
  }
}

.page-header-poster-content {
  h1, h2, h3, h4 {
    font-size: var(--text-base);
  }

  li {
    font-size: var(--text-lg);
    font-weight: 500;
  }

  :is(h1, h2, h3, h4):not(:first-child) {
    margin-top: 4rem;
  }
}
</style>