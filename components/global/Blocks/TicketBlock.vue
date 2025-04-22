<script setup>
defineProps({ block: { type: Object, required: true }})
</script>

<template>
  <section class="p-site md:p-24">
    <div class="max-w-[2000px] mx-auto flex flex-col md:flex-row gap-12">
      <SubblocksTicketBlock
        v-for="card in block.blocks"
        :key="card.id"
        :block="card"
      />
    </div>
  </section>
</template>
