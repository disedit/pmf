export const useSettings = async () => {
  const nuxtApp = useNuxtApp()
  const { findOne } = useStrapi()
  const { locale } = useI18n()
  const { data: settings } = await useAsyncData(
    'settings',
    () => findOne('setting', {
      populate: '*',
      locale: locale.value,
    }),
    {
      watch: [locale],
      dedupe: 'defer',
      getCachedData (key) {
        return nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key]
      }
    }
  )

  return settings
}
