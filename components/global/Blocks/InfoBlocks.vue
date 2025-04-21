<script setup>
defineProps({ block: { type: Object, required: true }})
</script>

<template>
  <section class="py-site md:py-18">
    <article
      v-for="card in block.blocks"
      :key="card.id"
      :id="card.anchor_id"
      class="info grid md:grid-cols-2 md:min-h-[50vh]"
    >
      <div
        :class="[
          'info-text p-site pe-12 md:py-16 md:px-24',
          { 'md:text-right': !card.inverted },
        ]">
        <h3 class="text-xl font-semibold mb-6">
          {{ card.heading }}
        </h3>
        <UtilsRichText
          :content="card.text"
          class="text-md leading-tight"
          prose
        />
      </div>
      <div :class="[
        'relative bg-gray-100 z-[1] order-first min-h-[40vh] md:min-h-auto',
        { 'md:order-first': card.inverted, 'md:order-last': !card.inverted },
      ]">
        <UtilsMedia
          v-if="card.picture"
          :media="card.picture"
          class="absolute inset-0 z-[1]"
        />
      </div>
    </article>
  </section>
</template>

