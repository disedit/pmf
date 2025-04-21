<script setup>
import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const props = defineProps({
  speed: { type: Number, default: 1 },
  gap: { type: Boolean, default: false }
})

const scroller = ref(null)

onMounted(() => {
  const splide = new Splide(scroller.value, {
    type: "loop",
    drag: "free",
    autoWidth: true,
    pagination: false,
    arrows: false,
    pauseOnFocus: false,
    snap: false,
    autoScroll: {
      speed: props.speed,
      pauseOnHover: false,
    },
  }).mount({ AutoScroll })

  splide.on('click', async ({ slide }) => {
    if (!slide.dataset.to) return
    await navigateTo(slide.dataset.to)
  })
})
</script>

<template>
  <section class="splide" ref="scroller">
    <div :class="['splide__track', { 'my-6': gap }]">
      <ul :class="['splide__list flex', { 'gap-6': gap }]">
        <slot />
      </ul>
    </div>
  </section>
</template>