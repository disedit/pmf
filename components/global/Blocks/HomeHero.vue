<script setup>
import { UtilsRichText } from '#components';

defineProps({ block: { type: Object, required: true }})
</script>

<template>
  <section>
    <UtilsDraggableMarquee :gap="block.gap">
      <li
        v-for="slide in block.blocks"
        :key="slide.id"
        class="splide__slide item flex bg-gray-200 h-viewport w-[67vh] shrink-0 items-center p-site text-lg"
        :data-to="slide.link"
      >
        <UtilsRichText
          :content="slide.text"
          class="text mix-blend-diffderence transition"
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