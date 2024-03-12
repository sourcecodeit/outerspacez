<template>
  <UiCol class="text-left">
    <h3 class="text-xs opacity-60 mb-2">{{ title }}</h3>
    <!--<span class="font-bold">{{ value }}</span>
    <div class="w-full h-2 bg-black bg-opacity-60">
      <span class="block bg-cyan-500 h-2" :style="`width: ${value}%`" />
    </div>-->
    <div class="py-4 px-2">
      <MazSlider v-model="sliderValue" :min="0" :max="100" />
    </div>
  </UiCol>
</template>

<script setup>
const props = defineProps(['title', 'value'])
const sliderValue = ref(0)
</script>