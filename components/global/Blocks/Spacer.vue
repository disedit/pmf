<script setup>
defineProps({ block: { type: Object, required: true }})
</script>

<template>
  <div :style="{ height: block.height }" />
</template>
