<script lang="ts" setup>
const appConfig = useAppConfig()

const { metaSymbol } = useShortcuts()

const { toggleContentSearch } = useUIState()
</script>

<template>
  <UHeader
    :links="appConfig.header.links"
    :ui="{ logo: 'flex-shrink-0 font-bold text-xl text-stone-900 flex items-center gap-1.5', left: 'lg:flex-initial', right: 'gap-4', center: 'lg:hidden', wrapper: 'bg-white backdrop-blur-none border-none relative' }"
  >
    <template #logo>
      <NuxtImg src="/logo.png" height="40px" />
      <span style="font-size: 40px;">
        {{ appConfig.app.name }}
      </span>
    </template>

    <template #right>
      <UHeaderLinks
        class="hidden lg:flex category-ul"
        :links="appConfig.header.links"
      />
      <UTooltip
        text="Search"
        :shortcuts="[metaSymbol, 'k']"
      >
        <UButton
          icon="i-ph-magnifying-glass-bold"
          variant="ghost"
          square
          @click="toggleContentSearch()"
        >
          <span class="sr-only">Search</span>
        </UButton>
      </UTooltip>
    </template>
  </UHeader>
</template>
<style>
.category-ul a {
  font-weight: 800;
}
</style>