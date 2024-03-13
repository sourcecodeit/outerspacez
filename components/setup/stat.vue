<template>
  <UiCol class="text-left">
    <h3 class="text-xs opacity-60 text-center">{{ title }}</h3>
    <!--<span class="font-bold">{{ value }}</span>
    <div class="w-full h-2 bg-black bg-opacity-60">
      <span class="block bg-cyan-500 h-2" :style="`width: ${value}%`" />
    </div>-->
    <div class="py-4">
      <!-- <MazSlider v-model="model" :min="0" :max="10" />-->
      <MazInputNumber v-model="model" placeholder="Enter number" :min="0" :max="max" size="md"
      class="w-full"
        />
    </div>
  </UiCol>
</template>

<script setup>
const props = defineProps(['title', 'max'])
const model = defineModel({ required: true })

</script>