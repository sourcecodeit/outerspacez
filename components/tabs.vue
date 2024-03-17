<template>
  <div
    class="w-full flex items-center justify-around absolute z-30 bottom-0 left-0 right-0 h-[60px] bg-black bg-opacity-90 border-t-2 border-white border-opacity-10">

    <SvgoCockpit filled class="text-4xl text-white" :class="{ 'opacity-45': active != 'cockpit' }" />
    <SvgoShipyard filled class="text-4xl text-white" :class="{ 'opacity-45': active != 'shipyard' }" />
    <SvgoChart filled class="text-4xl text-white" :class="{ 'opacity-45': active != 'chart' }" />
    <SvgoUser filled class="text-4xl text-white" :class="{ 'opacity-45': active != 'user' }" />
    <SvgoOptions filled class="text-4xl text-white" :class="{ 'opacity-45': active != 'options' }" />
  </div>
</template>

<script lang="ts" setup>
defineProps(['active'])
</script>