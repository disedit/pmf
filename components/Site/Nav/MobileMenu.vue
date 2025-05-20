<script setup>
import * as focusTrap from 'focus-trap'

defineProps({
  menu: { type: Array, required: true },
  socials: { type: Array, required: true },
})

let trap
const nav = ref()
const menuOpen = ref(false)

const showMenu = () => {
  menuOpen.value = true
  document.documentElement.classList.add('overflow-hidden')
  trap = focusTrap.createFocusTrap(nav.value)
  trap.activate()
}
const hideMenu = () => {
  menuOpen.value = false
  document.documentElement.classList.remove('overflow-hidden')
  trap && trap.deactivate()
}

function toggleMenu() {
  const action = menuOpen.value ? hideMenu : showMenu
  action()
}
</script>

<template>
  <div ref="nav" class="lg:hidden">
    <button
      @click="toggleMenu"
      class="toggle flex h-[2rem] flex-col justify-between p-2"
      aria-label="Menu"
      :aria-expanded="menuOpen ? 'true' : 'false'"
    >
      <div class="line line-1" />
      <div class="line line-2" />
    </button>
    <Transition name="fade">
      <div v-if="menuOpen" class="fixed flex flex-col gap-site justify-evenly top-navbar left-0 right-0 bottom-0 z-[10000] bg-white p-site">
        <ul aria-label="Menu" class="gap-6 font-semibold text-2xl">
          <li v-for="item in menu" :key="item.id" class="leading-[1.1] py-3">
            <NuxtLink :to="item.link" class="py-2" @click="hideMenu">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <SiteNavSocials :socials="socials" />
        <SiteNavLanguage class="flex text-md" />

        <ul class="font-light text-md leading-tight">
          <li>
            <a href="https://potries.org/" target="_blank">
              Ajuntament de Potries
            </a>
          </li>
          <li>
            <a href="https://turisme.potries.org/" target="_blank">
              Turisme Potries
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.line {
  display: block;
  border-top: 2px var(--color-black) solid;
  width: 32px;
  transition: .5s ease;
  flex-shrink: 0;
}

.toggle[aria-expanded='true'] {
  .line-1 {
    transform: translate(0, 270%) rotate(45deg);
    transform-origin: center;
  }

  .line-2 {
    transform: translate(0, -425%) rotate(-45deg);
    transform-origin: center;
  }
}
</style>