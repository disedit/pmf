<script setup>
defineProps({ block: { type: Object, required: true }})
</script>

<template>
  <div class="bg-amber-300">
    {{ block }}
  </div>
</template>

<style>

</style>