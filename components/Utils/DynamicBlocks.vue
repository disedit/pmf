<script setup>
defineProps({
  blocks: {
    type: Array,
    required: true,
  },
})

const componentName = (name) => {
  return name
    .split(/[.-]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}
</script>

<template>
  <pre>BLOCKS</pre>
  <Component
    :is="componentName(block.__component)"
    v-for="block in blocks"
    :key="block.id"
    :block="block"
  />
</template>
