<script setup>
defineProps({ block: { type: Object, required: true }})
</script>

<template>
  <section >
    {{ block }}
  </section>
</template>
