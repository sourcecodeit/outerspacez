<template>
  <NuxtLayout name="screen" :title="system.name">
    <template v-if="ready">
      <div id="planets" class="relative z-20 flex flex-col w-full justify-between items-end px-4">
        <AstroPlanet v-for="p in system.planets" :planet="p" :active="planet.name == p.name" />
      </div>
      <div class="absolute w-screen h-screen-min top-0 left-0 z-0">
        <AstroStar :index="system.star.imageIndex" />
      </div>
    </template>
    <!-- tabs -->
    <Tabs active='chart' />
  </NuxtLayout>
</template>

<script setup lang="ts">
const ready = ref(false)
const g = useGame()
const game = await g.loadJSON()
const system = await g.getPlayerSystem()
const planet = await g.getPlayerPlanet()
ready.value = true
</script>
<style>
#planets {
  height: calc(100vh - 200px);
}
</style>