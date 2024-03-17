<template>
  <NuxtLayout name="screen">
    <UiRow class="absolute z-30 items-center top-0 left-0 right-0 bg-black bg-opacity-70 py-2 px-2">
      <h3 class="text-sm text-cyan-300">1.000£</h3>
      <h3 class="text-sm absolute left-0 top-2 right-0 text-center">MARS XII</h3>
      <h3></h3>
      <img :src="`/characters/${player.face}.png`"
        class="w-[80px] rounded-full absolute top-2 right-2 shadow-lg border-2 border-white" />
    </UiRow>

    <!-- planet -->
    <div class="w-full absolute z-0 top-[20%] left-0">
      <img src="/planets/1.png" class="w-[150%] max-w-[2000px]" />
    </div>

    <!-- cockpit top-->
    <div class="w-full absolute z-20 -top-[130px] left-0">
      <img src="@/assets/ship/cockpit-top.png" class="w-full" />
    </div>

    <div id="glass" class="w-screen h-screen absolute z-10 top-0 left-0"></div>

    <!-- cockpit bottom-->
    <div class="w-full absolute z-20 -bottom-[60px] left-0">
      <img src="@/assets/ship/cockpit-bottom.png" class="w-full" />
    </div>

    <!-- tabs -->
    <Tabs active='cockpit' />
  </NuxtLayout>
</template>

<script setup>
const player = usePlayer()
</script>

<style scoped>
#glass {
  background: linear-gradient(159.71deg, rgba(0, 0, 0, 0.25) 2.83%, rgba(100, 242, 242, 0.23) 91.97%);
}
</style>