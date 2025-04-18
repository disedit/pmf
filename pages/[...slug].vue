<script setup>
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
const siteName = global.site_name
const title = slug && slug.length > 0 ? `${page.title} - ${siteName}` : siteName
const description = page.seo_description || global.seo_description
const ogImage = page.seo_media?.url || global.seo_media?.url
const keywords = page.seo_keywords || global.seo_keywords
useServerSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage,
  twitterCard: 'summary_large_image',
  keywords,
  ogSiteName: siteName,
  ogType: 'website'
})
useHead({ title })
</script>

<template>
  <pre>
    {{ page }}
  </pre>
</template>

<style>

</style>