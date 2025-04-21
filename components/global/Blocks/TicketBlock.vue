<script setup>
defineProps({ block: { type: Object, required: true }})
</script>

<template>
  <section class="p-site md:p-24">
    <div class="max-w-[2000px] mx-auto flex flex-col md:flex-row gap-12">
      <article
        v-for="card in block.blocks"
        :key="card.id"
        class="flex flex-col bg-gray-100 text-white basis-1/2 rounded-xl p-site md:p-10"
      >
        <div class="text-lg font-bold leading-tight my-6 md:my-10 text-center">
          <h2>
            {{ card.title }}
          </h2>
          <div v-if="card.price">
            {{ card.price }}
          </div>
        </div>
        <div v-if="card.button_label" class="text-center">
          <UtilsButton
            :to="card.button_url"
          >
            {{ card.button_label }}
          </UtilsButton>
        </div>
      </article>
    </div>
  </section>
</template>
