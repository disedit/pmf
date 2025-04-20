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
      <div :class="['info-picture bg-gray-100', { 'order-first': card.inverted }]">

      </div>
    </div>
  </section>
</template>

