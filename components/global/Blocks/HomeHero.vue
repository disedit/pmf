<script setup>
import { UtilsRichText } from '#components';

defineProps({ block: { type: Object, required: true }})

const img = useImage()
</script>

<template>
  <section>
    <UtilsDraggableMarquee :gap="block.gap" :speed="block.speed">
      <li
        v-for="slide in block.blocks"
        :key="slide.id"
        :class="[
          'splide__slide item relative flex bg-gray-200 h-viewport w-[67vh] shrink-0 items-center p-site text-lg bg-cover bg-center',
          { 'cursor-pointer': !!slide.link }
        ]"
        :data-to="slide.link"
        :style="{ backgroundImage: slide.background ? `url(${img(slide.background.url, { width: 800 })})` : null }"
      >
        <UtilsRichText
          :content="slide.text"
          class="text relative transition z-[2] text-white mix-blend-difference"
        />
      </li>
    </UtilsDraggableMarquee>
  </section>
</template>

<style scoped>
.item {
  .text {
    opacity: 0;
  }

  &:hover {
    .text {
      opacity: 1;
    }
  }
}
</style>