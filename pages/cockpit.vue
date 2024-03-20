<template>
  <NuxtLayout name="screen">
    <UiRow
      class="absolute z-30 items-center top-0 left-0 right-0 bg-black bg-opacity-70 py-2 px-2 border-b-2 border-white border-opacity-10">
      <h3 class="text-sm text-cyan-300">{{ player.money }}£</h3>
      <h3 class="text-sm absolute left-0 top-2 right-0 text-center">{{ planet.name }}</h3>
      <h3></h3>
      <img :src="`/characters/${player.faceIndex + 1}.png`"
        class="w-[80px] rounded-full absolute top-2 right-2 shadow-lg border-2 border-white" />
    </UiRow>

    <!-- planet -->
    <div class="w-full absolute z-0 top-[20%] left-0">
      <img :src="`/planets/${planet.imageindex + 1}.png`" class="w-[150%] max-w-[2000px]" />
    </div>

    <!-- cockpit top-->
    <div class="w-full absolute z-20 -top-[130px] left-0">
      <img src="@/assets/ship/cockpit-top.png" class="w-full" />
    </div>

    <div id="glass" class="w-screen h-screen absolute z-10 top-0 left-0"></div>

    <!-- cockpit bottom-->
    <div class="w-full absolute z-20 -bottom-[40px] left-0">
      <img src="@/assets/ship/cockpit-bottom.png" class="w-full" />
    </div>

    <!-- tabs -->
    <Tabs active='cockpit' />
  </NuxtLayout>
</template>

<script setup>
const g = useGame()
const game = await g.loadJSON()
const player = game.player
const planet = await g.getPlayerPlanet()
</script>

<style scoped>
#glass {
  background: linear-gradient(159.71deg, rgba(0, 0, 0, 0.25) 2.83%, rgba(100, 242, 242, 0.23) 91.97%);
}
</style>