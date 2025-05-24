<script setup>
defineProps({ block: { type: Object, required: true }})

const img = useImage()
const { mediaUrl } = useUtils()
</script>

<template>
  <section class="marquee-scroller">
    <UtilsDraggableMarquee :gap="block.gap" :speed="block.speed">
      <li
        v-for="slide in block.blocks"
        :key="slide.id"
        :class="[
          'splide__slide item relative flex bg-gray-200 h-viewport w-[67vh] shrink-0 items-center p-site text-md bg-cover bg-center',
          { 'cursor-pointer': !!slide.link }
        ]"
        :data-to="slide.link"
        :style="{ backgroundImage: slide.background ? `url(${img(mediaUrl(slide.background.url), { width: 800 })})` : null }"
      >
        <UtilsRichText
          :content="slide.text"
          class="text relative transition z-[2] text-white mix-blend-difference"
        />
      </li>
    </UtilsDraggableMarquee>
  </section>
</template>

<style>
.marquee-scroller {
  .item {
    .text {
      opacity: 0;

      p {
        line-height: 1.25;
      }

      h2, b, strong {
        font-weight: 700;
      }
    }

    &:hover {
      .text {
        opacity: 1;
      }
    }
  }
}

.splide__slide {
  margin-left: -10px !important;
}

@media (hover: none) {
  .marquee-scroller {
    .item {
      .text {
        opacity: 1;
      }
    }
  }
}
</style>