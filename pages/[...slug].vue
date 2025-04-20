<script setup>
import { NuxtLink } from '#components'

const settings = await useSettings()
const { find } = useStrapi()
const { locale } = useI18n()
const { slug } = useRoute().params

const { data: results } = await useAsyncData(
  'page',
  () => find('pages', {
    filters: {
      slug: {
        $eq: slug || 'home',
      },
    },
    populate: {
      blocks: {
        populate: '*',
      },
      ctas: {
        populate: '*',
      },
      seo: {
        populate: '*',
      },
    },
    locale: locale.value,
  })
)

if (!results.value.data.length) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

const page = results.value?.data[0]

/* SEO Metatags */
const global = settings.value.data
const title = slug && slug.length > 0 ? page.seo?.title || `${page.title} - ${global.seo?.title}` : global.seo?.title
const description = page.seo?.description || global.seo?.description
const ogImage = page.seo?.og_image?.url || global.seo?.og_image?.url
const keywords = page.seo?.keywords || global.seo?.keywords
useServerSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage,
  twitterCard: 'summary_large_image',
  keywords,
  ogSiteName: global.seo?.title,
  ogType: 'website'
})
useHead({ title })
</script>

<template>
  <main class="min-h-viewport">
    <UtilsDynamicBlocks
      :blocks="page.blocks"
    />
    <UtilsCtas
      v-if="page.ctas && page.ctas.length"
      :ctas="page.ctas"
      class="sticky bottom-0 p-site justify-center"
    />
  </main>
</template>
