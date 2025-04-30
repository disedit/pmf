<script setup>
const settings = await useSettings()
const { mediaUrl } = useUtils()
</script>

<template>
  <footer class="footer relative z-[100] text-white text-base">
    <SiteMarquee :duration="settings.data.marquee_speed" background="bg-gray-400" padding="py-2">
      {{ settings.data.footer_marquee }}
    </SiteMarquee>
    <div class="bg-primary p-12 flex flex-col gap-12">
      <div v-for="logos in settings.data.footer_logos" :key="logos.id">
        <h2 class="font-semibold text-mdi mb-6">{{ logos.label }}</h2>
        <div class="flex flex-wrap gap-site md:gap-12 items-center">
          <NuxtImg
            v-for="logo in logos.logos"
            :key="logo.id"
            :src="mediaUrl(logo.url)"
            :alt="logo.alternativeText"
            class="h-[3rem] md:h-[4rem] w-auto"
          />
        </div>
      </div>
    </div>
    <div class="bg-gray-900 footer-grid p-12 gap-12">
      <div class="area-address flex flex-col gap-12 justify-between">
        <a href="http://potries.org/" target="_blank">
          <img
            src="~/assets/images/logo-inverted.png"
            alt="Potries Music Fest"
            class="h-18 md:h-24"
          >
        </a>
        <UtilsRichText
          :key="`footer-${settings.data.locale}`"
          :content="settings.data.footer_text"
        />
        <UtilsSocials
          v-if="settings.data.socials"
          :socials="settings.data.socials"
        />
      </div>
      <div class="area-links leading-loose">
        <ul>
          <li v-for="link in settings.data.footer_links" :key="link.id">
            <NuxtLink
              :to="link.link"
              class="hover:underline"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="area-newsletter">
        <div class="leading-loose">
          Newsletter
        </div>
      </div>
      <div class="area-legal flex xl:justify-end">
        <ul class="flex gap-4 md:gap-6 flex-wrap">
          <li v-for="legal in settings.data.footer_legal" :key="legal.id">
            <NuxtLink
              v-if="legal.link"
              :to="legal.link"
              class="hover:underline"
            >
              {{ legal.label }}
            </NuxtLink>
            <span v-else>
              {{ legal.label }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
    grid-template-areas:
      "newsletter"
      "links"  
      "address"
      "legal";
}

.area-address {
  grid-area: address;
}

.area-links {
  grid-area: links;
}

.area-newsletter {
  grid-area: newsletter;
}

.area-legal {
  grid-area: legal;
  align-self: end;
}

@media (min-width: 48rem) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "newsletter links"
      "address address"
      "legal legal";
  }
}

@media (min-width: 80rem) {
  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "address links newsletter"
      "address legal legal";
  }
}
</style>