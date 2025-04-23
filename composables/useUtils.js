export const useUtils = () => {
  const runtimeConfig = useRuntimeConfig()

  return {
    mediaUrl: (path) => {
      return runtimeConfig.public.strapi.url + path
    },
    localUrl: (path) => {
      return runtimeConfig.public.strapi.url + path
    },
    componentName: (name) => {
      return name
        .split(/[.-]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
    }
  }
}
