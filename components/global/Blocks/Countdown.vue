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
    <h2 class="text-xl text-primary font-bold tracking-widest mb-8 leading-[1.1] text-center">
      {{ block.heading }}
    </h2>

    <ClientOnly>
      <VueCountdown :time="time" :transform="transformSlotProps" v-slot="{ days, hours, minutes, seconds }">
        <div class="flex items-end tabular-nums text-xl md:text-3xl text-gray-500">
          <div :class="['number w-[2em]', { 'w-[9em]': days >= 100 }]">
            <div class="label">{{ $t('countdown.days') }}</div>
            <div class="value">{{ days }}</div>
          </div>
          <div class="colon">:</div>
          <div class="number w-[2em]">
            <div class="label">{{ $t('countdown.hours') }}</div>
            <div class="value">{{ hours }}</div>
          </div>
          <div class="colon">:</div>
          <div class="number w-[2em]">
            <div class="label">{{ $t('countdown.minutes') }}</div>
            <div class="value">{{ minutes }}</div>
          </div>
          <div class="colon">:</div>
          <div class="number w-[2em]">
            <div class="label">{{ $t('countdown.seconds') }}</div>
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
  flex-direction: column;
  align-items: center;

  .label {
    color: var(--color-gray-400);
    font-size: var(--text-base);
    font-weight: 300;
    margin-bottom: .5em;
  }
}
</style>