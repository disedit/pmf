<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown'
const props = defineProps({ block: { type: Object, required: true }})

const time = computed(() => {
  const date = new Date(props.block.countdown_to)
  return date.getTime() - new Date().getTime()
})

function transformSlotProps(props) {
  const formattedProps = {}

  Object.entries(props).forEach(([key, value]) => {
    formattedProps[key] = value < 10 ? `0${value}` : String(value)
  })

  return formattedProps
}
</script>

<template>
  <section class="p-site md:py-24 flex flex-col items-center">
    <h2 class="text-xl text-primary font-bold tracking-widest mb-8">
      {{ block.heading }}
    </h2>

    <ClientOnly>
      <VueCountdown :time="time" :transform="transformSlotProps" v-slot="{ days, hours, minutes, seconds }">
        <div class="flex items-end tabular-nums text-3xl text-gray-500">
          <div :class="['number', { 'wider': days >= 100 }]">
            <div class="label">Dias</div>
            <div class="value">{{ days }}</div>
          </div>
          <div class="colon">:</div>
          <div class="number">
            <div class="label">Hores</div>
            <div class="value">{{ hours }}</div>
          </div>
          <div class="colon">:</div>
          <div class="number">
            <div class="label">Minuts</div>
            <div class="value">{{ minutes }}</div>
          </div>
          <div class="colon">:</div>
          <div class="number">
            <div class="label">Segons</div>
            <div class="value">{{ seconds }}</div>
          </div>
        </div>
      </VueCountdown>
    </ClientOnly>
  </section>
</template>

<style scoped>
.number {
  display: flex;
  width: 8rem;
  flex-direction: column;
  align-items: center;

  &.wider {
    width: 9rem;
  }

  .label {
    color: var(--color-gray-400);
    font-size: var(--text-base);
    font-weight: 300;
    margin-bottom: .5em;
  }
}
</style>