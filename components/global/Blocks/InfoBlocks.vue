<script setup>
defineProps({ block: { type: Object, required: true }})
</script>

<template>
  <section>
    <div
      v-for="card in block.blocks"
      :key="card.id"
      class="info grid grid-cols-2 min-h-[50vh]"
    >
      <div class="info-text p-site md:py-16 md:px-24">
        <h3 class="text-xl font-semibold mb-6">
          {{ card.heading }}
        </h3>
        <UtilsRichText
          :content="card.text"
          class="text-md leading-tight"
        />
      </div>
      <div :class="['relative bg-gray-100 z-[1]', { 'order-first': card.inverted }]">
        <UtilsMedia
          v-if="card.picture"
          :src="card.picture.url"
          class="absolute inset-0 z-[1]"
        />
      </div>
    </div>
  </section>
</template>

