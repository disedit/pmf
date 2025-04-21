<script setup>
defineProps({
  content: { type: Object, default: null },
  underlineLinks: { type: Boolean, default: false },
})
</script>

<template>
  <div v-if="content" :class="['rich-text', { 'underline-links': underlineLinks }]">
    <StrapiBlocksText
      :nodes="content"
    />
  </div>
</template>

<style>
.rich-text {
  &.underline-links a,
  a:hover {
    text-decoration: underline;
  }

  p:not(:last-child) {
    margin-bottom: 1em;
  }
}
</style>