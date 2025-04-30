<script setup>
defineProps({ block: { type: Object, required: true }})

const showInfo = ref(false)
</script>

<template>
  <article
    class="ticket-block flex flex-col gap-6 bg-gray-100 text-gray-800 basis-1/2 rounded-xl p-site md:p-10 justify-between"
  >
    <div class="text-md flex flex-col gap-2 leading-tight text-center">
      <h2 class="text-lg font-bold">
        {{ block.title }}
      </h2>
      <button
        v-if="block.info_label"
        @click="showInfo = !showInfo"
        class="cursor-pointer hover:underline flex items-center gap-1 justify-center"
        :aria-expanded="showInfo ? 'true' : 'false'"
        :aria-controls="`${block.id}TicketInfo`"
      >
        <Icon name="carbon:chevron-up" class="icon transition" />
        {{ block.info_label }}
      </button>
      <Transition name="slide">
        <div v-if="block.info_text && showInfo" :id="`${block.id}TicketInfo`" class="text-md text-balance">
          {{ block.info_text }}
        </div>
      </Transition>
      <div v-if="block.price" class="text-lg font-bold">
        {{ block.price }}
      </div>
    </div>
    <div v-if="block.button_label" class="text-center">
      <UtilsButton
        :to="block.button_url"
        size="base"
      >
        {{ block.button_label }}
      </UtilsButton>
    </div>
  </article>
</template>

<style scoped>
.ticket-block button[aria-expanded='true'] .icon {
  transform: scaleY(-1);
}
</style>
