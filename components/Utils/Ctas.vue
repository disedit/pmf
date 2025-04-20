<script setup>
defineProps({
  ctas: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="flex gap-1">
    <UtilsButton
      v-for="cta in ctas"
      :key="cta.id"
      :to="cta.link"
    >
      {{ cta.label }}
    </UtilsButton>
  </div>
</template>

<style>

</style>