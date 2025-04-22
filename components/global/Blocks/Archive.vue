<script setup>
import { Splide } from '@splidejs/splide';
import "../../node_modules/@splidejs/splide/dist/css/splide-core.min.css";

defineProps({ block: { type: Object, required: true }})

const scroller = ref(null)

onMounted(() => {
  const splide = new Splide(scroller.value, {
    autoWidth: true,
    autoHeight: true,
    start: 3
  }).mount()
})
</script>

<template>
  <section class="splide" ref="scroller">
    <div :class="['splide__track']">
      <ul :class="['splide__list flex']">
        <li
          v-for="poster in block.posters"
          :key="poster.id"
          class="splide__slide"
        >
          <NuxtImg
            :src="poster.picture.url"
            :alt="poster.picture.alternativeText"
            class="h-[40rem]"
          />
          {{ poster.label }}
        </li>
      </ul>
    </div>
  </section>
</template>
