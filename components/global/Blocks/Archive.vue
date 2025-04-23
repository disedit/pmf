<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'

const props = defineProps({ block: { type: Object, required: true }})

const carouselConfig = {
  itemsToShow: props.block.stacked_slides ? 5 : 3.5,
  wrapAround: !props.block.stacked_slides,
  dir: 'rtl'
}
</script>

<template>
  <section :class="[
    {
      'stacked-slides': props.block.stacked_slides,
      'hoverable-slides': !props.block.stacked_slides
    },
    'my-24'
  ]">
    <h2 v-if="block.heading" class="text-center p-site text-lg font-bold mb-6">{{ block.heading }}</h2>
    <Carousel v-bind="carouselConfig">
      <Slide v-for="poster in block.posters" :key="poster">
        <div>
          <div class="slide-image-container relative flex items-center">
            <NuxtImg
              :src="poster.picture.url"
              width="400"
              class="slide-image"
            />
            <div v-if="poster.hover_heading || poster.hover_heading || poster.hover_details" class="hoverable-info flex flex-col gap-2 bg-gray-500/70 text-white">
              <h4 class="text-lg font-semibold">{{ poster.hover_heading }}</h4>
              <p class="text-md">{{ poster.hover_description }}</p>
              <div class="mt-auto text-md whitespace-nowrap">{{ poster.hover_details }}</div>
            </div>
          </div>
          <h3 class="text-lg font-semibold text-center mt-5 transiton">
            {{ poster.label }}
          </h3>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<style scoped>
.carousel__slide {
  transition: transform 0.5s ease, opacity 0.5s ease;
  position: relative;
  --once-removed-scale: .85;
  --once-removed-shift: 10%;
  --twice-removed-scale: .65;
  --twice-removed-shift: 60%;
  --thrice-removed-scale: .45;
  --thrice-removed-shift: 210%;

  .hoverable-info {
    position: absolute;
    opacity: 0;
    inset: 0;
    direction: ltr;
    padding: 2rem;
    text-align: left;

    div {
      white-space: pre;
    }
  }

  &:hover {
    .hoverable-info {
      opacity: 1;
    }
  }
}

.stacked-slides {
  .slide-image {
    box-shadow: 0 0 2rem rgba(0, 0, 0, .2);
    width: auto;
  }

  .slide-image-container {
    height: 30vw;
  }

  .carousel__slide--active {
    z-index: 40;
  }

  .carousel__slide:not(.carousel__slide--active) {
    transform: scale(var(--thrice-removed-scale)) translateX(var(--thrice-removed-shift));
    z-index: 10;
    opacity: .5;

    h3 {
      opacity: 0;
    }
  }

  .carousel__slide.carousel__slide--next {
    transform: scale(var(--once-removed-scale)) translateX(var(--once-removed-shift));
    z-index: 30;
    opacity: 1;
  }

  .carousel__slide--next + .carousel__slide {
    transform: scale(var(--twice-removed-scale)) translateX(var(--twice-removed-shift));
    z-index: 20;
    opacity: 1;
  }

  .carousel__slide:has(+ .carousel__slide--prev) {
    transform: scale(var(--twice-removed-scale)) translateX(calc(var(--twice-removed-shift) * -1));
    z-index: 20;
    opacity: 1;
  }

  .carousel__slide:has(+ .carousel__slide + .carousel__slide--prev) {
    transform: scale(var(--thrice-removed-scale)) translateX(calc(var(--thrice-removed-shift) * -1));
    z-index: 10;
    opacity: .5;
  }

  .carousel__slide.carousel__slide--prev {
    transform: scale(var(--once-removed-scale)) translateX(calc(var(--once-removed-shift) * -1));
    z-index: 30;
    opacity: 1;
  }
}

.hoverable-slides {
  .slide-image {
    aspect-ratio: 1;
    width: 20vw;
    object-fit: cover;
  }

  .carousel__slide:not(.carousel__slide--active) {
    transform: scale(0.9);
    opacity: .5;
  }
}
</style>