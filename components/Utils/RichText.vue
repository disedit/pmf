<script setup>
defineProps({
  content: { type: Object, default: null },
})
</script>

<template>
  <div v-if="content" class="rich-text">
    <StrapiBlocksText
      :nodes="content"
    />
  </div>
</template>

<style>
.rich-text {
  a:hover {
    text-decoration: underline;
  }
}
</style>