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
        on: {
          'blocks.home-hero': {
            populate: {
              'blocks': {
                populate: ['background']
              }
            }
          },
          'blocks.page-hero': {
            populate: '*'
          },
          'blocks.info-blocks': {
            populate: {
              'blocks': {
                populate: ['picture']
              }
            }
          },
          'blocks.grid': {
            populate: {
              'concerts': {
                populate: ['picture']
              }
            }
          },
          'blocks.faq': {
            populate: ['items','picture']
          },
          'blocks.ticket-block': {
            populate: ['blocks']
          },
          'blocks.archive': {
            populate: {
              'posters': {
                populate: ['picture']
              }
            }
          },
          'blocks.spacer': {
            populate: '*'
          },
          'blocks.posters': {
            populate: ['posters']
          }
        },
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
  <main class="min-h-viewport bg-white">
    <UtilsDynamicBlocks
      :blocks="page.blocks"
    />
    <UtilsCtas
      v-if="page.ctas && page.ctas.length"
      :ctas="page.ctas"
      class="sticky bottom-0 p-site justify-center z-[1000]"
    />
    <UtilsSideTitles
      :blocks="page.blocks"
    />
  </main>
</template>
