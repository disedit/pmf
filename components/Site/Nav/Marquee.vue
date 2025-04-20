<template>
  <ClientOnly>
    <Vue3Marquee clone :duration="14" class="bg-primary text-white font-medium text-base flex gap-4">
      <span class="flex gap-4">
        <span>
          <slot />
        </span>
        <span>·</span>
      </span>
    </Vue3Marquee>
  </ClientOnly>
</template>
