<script setup>
defineProps({
  blocks: {
    type: Array,
    required: true,
  },
})

const { componentName } = useUtils()
</script>

<template>
  <Component
    :is="componentName(block.__component)"
    v-for="block in blocks"
    :key="block.id"
    :block="block"
    :id="`${componentName(block.__component)}-${block.id}`"
  />
</template>
