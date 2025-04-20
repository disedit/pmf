<script setup>
const props = defineProps({
  filters: {
    type: String,
    required: true,
  },
})

const value = defineModel()

const filters = computed(() => {
  return props.filters.split('\n').map((filter) => {
    const [value, label] = filter.split(',')
    return { value, label }
  })
 })
</script>

<template>
  <ul class="filter flex flex-wrap justify-center text-md">
    <li>
      <button @click="value = null" :class="{ active: value === null }">
        {{ $t('filters.all') }}
      </button>
    </li>
    <li
      v-for="filter in filters"
      :key="filter.value"
    >
      <button @click="value = filter.value" :class="{ active: value === filter.value }">
        {{ filter.label }}
      </button>
    </li>
  </ul>
</template>

<style scoped>
.filter {
  line-height: .8;

  li:not(:last-child) {
    border-right: 2px solid var(--color-black);
  }

  button {
    cursor: pointer;
    padding: 0 1em;
    line-height: .5;
  }

  .active {
    font-weight: 600;
    color: var(--color-primary);
  }
}
</style>