<script setup>
defineProps({
  content: { type: Object, default: null },
  prose: { type: Boolean, default: false },
})
</script>

<template>
  <div v-if="content" :class="['rich-text', { prose }]">
    <StrapiBlocksText
      :nodes="content"
    />
  </div>
</template>

<style>
.rich-text {
  &.prose a,
  a:hover {
    text-decoration: underline;
  }

  &.prose {
    p:not(:last-child) {
      margin-bottom: 1em;
    }
  }
}
</style>