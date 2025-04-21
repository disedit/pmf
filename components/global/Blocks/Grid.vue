<script setup>
const props = defineProps({ block: { type: Object, required: true }})
const img = useImage()

const selectedFilter = ref(null)

const filteredConcerts = computed(() => {
  if (!selectedFilter.value) return props.block.concerts
  return props.block.concerts.filter(concert => concert.filter_value === selectedFilter.value)
})

const { humanDate, humanTime } = useDate()
</script>

<template>
  <section class="p-site md:p-8">
    <h2 class="uppercase text-xl font-semibold text-center">
      {{ block.heading }}
    </h2>

    <UtilsFilter
      v-if="block.filters"
      :filters="block.filters"
      v-model="selectedFilter"
      class="my-12"
    />

    <div class="grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-site md:gap-8">
      <article
        v-for="concert in filteredConcerts"
        :key="concert.id"
        class="concert flex aspect-square bg-gray-100 relative bg-cover bg-center"
        :style="{ backgroundImage: concert.picture ? `url(${img(concert.picture.url, { width: 800 })})` : null }"
      >
        <a
          :href="concert.cta_url"
          target="_blank"
          class="concert-info absolute flex flex-col bg-black/25 inset-0 p-6 text-white leading-tight transition"
        >
          <h3 class="font-semibold text-lg mb-2">
            {{ concert.artist }}
          </h3>
          <p class="text-base md:text-md">
            {{ humanDate(concert.date, $i18n.locale) }}
          </p>
          <p class="text-base md:text-md">
            {{ humanTime(concert.date, $i18n.locale) }}
          </p>
          <p class="text-base md:text-md">
            {{ concert.venue }}
          </p>
          <div class="mt-auto">
            <UtilsButton>
              {{ concert.cta_label || $t('ctas.tickets') }}
            </UtilsButton>
          </div>
        </a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.concert-info {
  opacity: 0;
}

.concert:focus-within {
  outline: 3px solid var(--color-primary);
  outline-offset: 3px;
}

.concert:hover .concert-info,
.concert:focus-within .concert-info {
  opacity: 1;
}
</style>