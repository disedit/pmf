<script setup>
const props = defineProps({
  blocks: {
    type: Array,
    required: true,
  },
})

const { componentName } = useUtils()
const elements = reactive({})

onMounted(() => {
  props.blocks.forEach(item => {
    const title = item.side_title || item.title || item.heading
    if (!title) return
    const blockId = item.anchor_id || componentName(item.__component) + '-' + item.id
    elements[blockId] = {
      visible: false,
      observer: new IntersectionObserver(observe, {rootMargin: '-50%'}),
      title
    }
    const target = document.querySelector(`#${blockId}`)
    if (target) elements[blockId].observer.observe(target)
  })
})

function observe(entires) {
  return entires.forEach((entry) => {
    if (entry.isIntersecting) {
      elements[entry.target.id].visible = true
    } else {
      elements[entry.target.id].visible = false
    }
  })
}

const visibleElement = computed(() => {
  let firstVisible = null
  Object.entries(elements).forEach(([key, value]) => {
    if (value.visible) {
      firstVisible = value.title
    }
  })
  return firstVisible
})
</script>

<template>
  <div class="strip-titles fixed right-0">
    <span>{{visibleElement}}</span>
  </div>
</template>

<style scoped>
.strip-titles {
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  mix-blend-mode: exclusion;
  color: #fff;
}

span {
  writing-mode: vertical-lr;
  text-orientation: mixed;
  transform: rotate(180deg);
  transform-origin: center;
  padding: .5em;
  font-size: var(--text-sm);
  font-weight: 500;
  
}
</style>