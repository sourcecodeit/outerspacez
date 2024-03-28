<template>
  <img :src="`/planets/${planet.imageindex + 1}.png`" :style="`width: ${sizeCss};`" />
</template>

<script setup>
const props = defineProps({
  planet: Object,
  size: {
    type: String,
    default: 'normal'
  }
})

const sizeMap = {
  normal: '80px',
  large: '80%'
}

const sizeCss = computed(() => {
  return sizeMap[props.size]
})
</script>