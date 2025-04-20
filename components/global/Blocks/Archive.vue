<script setup>
defineProps({ block: { type: Object, required: true }})
</script>

<template>
  <section>
    <pre>{{block}}</pre>
  </section>
</template>
