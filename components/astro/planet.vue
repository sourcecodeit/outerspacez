<template>
  <div class="flex" :class="{
      'opacity-40': !active
    }">
    <div class="flex flex-col items-end text-right">
      <p class="pr-3 text-[20px] uppercase">{{ planet.name }}</p>
      <SvgoPlanetUnderline filled style="width: 100px; height: auto;" class="opacity-50" />
    </div>
    <img :src="`/planets/${planet.imageindex + 1}.png`" class="w-[80px] h-[80px]" />
  </div>
</template>

<script lang="ts" setup>
defineProps(['planet', 'active'])
</script>