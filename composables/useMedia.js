export const useMedia = () => {
  const runtimeConfig = useRuntimeConfig()

  return {
    mediaUrl: (path) => {
      return runtimeConfig.public.strapi.url + path
    }
  }
}
