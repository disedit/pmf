<script setup>
const props = defineProps({ block: { type: Object, required: true }})
const { find } = useStrapi()
const img = useImage()
const { pressDate } = useDate()
const { mediaUrl } = useUtils()

const { data: stories } = await useAsyncData(
  'news',
  () => find('stories', {
    populate: '*',
    sort: ['date:desc', 'publishedAt:desc'],
  })
)
</script>

<template>
  <section class="p-site md:p-8">
    <h2 class="uppercase text-xl font-semibold text-center">
      {{ block.heading }}
    </h2>

    <div class="grid md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-site md:gap-8">
      <article
        v-for="story in stories.data"
        :key="story.id"
        class="story flex aspect-square bg-gray-100 relative bg-cover bg-center"
        :style="{ backgroundImage: story.picture ? `url(${img(mediaUrl(story.picture.url), { width: 800 })})` : null }"
      >
        <a
          :href="story.link"
          target="_blank"
          class="story-info absolute flex flex-col bg-gray-500/70 inset-0 p-6 text-white leading-tight transition"
        >
          <h3 class="font-semibold text-lg mb-2 leading-[1.1]">
            {{ story.title }}
          </h3>
          <p v-if="story.date" class="mt-auto text-base font-medium">
            {{ pressDate(story.date, $i18n.locale) }}
          </p>
          <div class="mt-4">
            <UtilsButton>
              {{ $t('ctas.read') }}
            </UtilsButton>
          </div>
        </a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.story-info {
  opacity: 0;
}

.story:hover .story-info,
.story:focus-within .story-info {
  opacity: 1;
}
</style>