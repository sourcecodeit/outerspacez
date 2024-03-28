<template>
  <div class="flex" :class="{
    'opacity-40': !active
  }">
    <div class="flex flex-col items-end text-right">
      <p class="pr-3 text-[20px] uppercase">{{ planet.name }}</p>
      <SvgoPlanetUnderline filled style="width: 100px; height: auto;" class="opacity-50" />
    </div>
    <AstroPlanet :planet="planet" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  planet: Object,
  active: {
    type: Boolean,
    default: true
  }
})
</script>