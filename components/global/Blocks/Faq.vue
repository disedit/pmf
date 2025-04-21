<script setup>
defineProps({ block: { type: Object, required: true }})

const active = ref(null)

const setActive = (id) => {
  active.value = active.value === id ? null : id
}
</script>

<template>
  <section class="bg-primary grid md:grid-cols-2 text-white">
    <div class="p-site md:p-12">
      <h2 class="text-xl font-semibold mb-4">
        {{ block.title }}
      </h2>
      <ul>
        <li
          v-for="item in block.items"
          :key="item.id"
        >
          <button
            class="flex font-bold text-md justify-between w-full py-3 cursor-pointer text-left"
            @click="setActive(item.id)"
          >
            <h3>
              {{ item.heading }}
            </h3>
            <span>
              {{ active === item.id ? '-' : '+' }}
            </span>
          </button>
          <Transition name="slide">
            <div v-if="active === item.id" class="md:hidden text-base">
              <UtilsRichText :content="item.content" />
            </div>
          </Transition>
        </li>
      </ul>
    </div>
    <div class="bg-black relative">
      <Transition name="fade">
        <div v-if="active" class="bg-black absolute inset-0 hidden md:block z-[2]">
          <template
            v-for="item in block.items"
            :key="item.id"
          >
            <Transition name="fade">
              <div
                v-if="active === item.id"
                class="absolute inset-0 text-md p-site md:p-8"
              >
                <UtilsRichText :content="item.content" class="w-[95%]" />
              </div>
            </Transition>
          </template>
        </div>
      </Transition>
      <UtilsMedia
        v-if="block.picture"
        :media="block.picture"
        class="absolute inset-0 z-[1]"
      />
    </div>
  </section>
</template>
