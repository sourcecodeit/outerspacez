<template>
  <MazDialog v-model="isOptionsOpen" noClose>
    <div class="flex flex-col justify-center gap-5">
      <UiButton @click="restart()">Restart</UiButton>
      <UiButton @click="isOptionsOpen = false">Cancel</UiButton>
    </div>
  </MazDialog>

  <div
    class="w-full flex items-center justify-around absolute z-30 bottom-0 left-0 right-0 h-[60px] bg-black bg-opacity-50 border-t-2 border-white border-opacity-10">

    <NuxtLink to="/cockpit">
      <SvgoCockpit filled class="text-4xl text-white" :class="{ 'opacity-45': active != 'cockpit' }" />
    </NuxtLink>
    <NuxtLink to="/shipyard">
      <SvgoShipyard filled class="text-4xl text-white" :class="{ 'opacity-45': active != 'shipyard' }" />
    </NuxtLink>
    <NuxtLink to="/chart">
      <SvgoChart filled class="text-4xl text-white" :class="{ 'opacity-45': active != 'chart' }" />
    </NuxtLink>
    <SvgoMarket filled class="text-4xl text-white" :class="{ 'opacity-45': active != 'market' }" />
    <SvgoUser filled class="text-4xl text-white" :class="{ 'opacity-45': active != 'user' }" />
    <SvgoOptions @click="isOptionsOpen=true" filled class="text-4xl text-white"
      :class="{ 'opacity-45': active != 'options' }" />
  </div>
</template>

<script lang="ts" setup>
defineProps(['active'])

const isOptionsOpen = ref(false)

function restart() {
  isOptionsOpen.value = false
  useRouter().push('/')
}
</script>