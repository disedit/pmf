export const useUtils = () => {
  const runtimeConfig = useRuntimeConfig()

  return {
    componentName: (name) => {
      return name
        .split(/[.-]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
    }
  }
}
