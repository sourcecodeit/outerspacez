<template>
  <NuxtLayout name="screen" :title="ship.name">
    <div class="flex flex-col justify-between grow pb-14">
      <div class="flex flex-col justify-start">
        <div class="flex justify-around my-6">
          <UiTab :active="currentTab == 1">Stats</UiTab>
          <UiTab :active="currentTab == 2">Fitting</UiTab>
          <UiTab :active="currentTab == 3">Cargo</UiTab>
        </div>
        <div v-if="currentTab == 1">
          <div class="border-t border-b border-slate-700 py-2">
            <ShipStats :agi="ship.agi" :hull="ship.hull" :cargo="ship.cargo" />
          </div>
          <img :src="`/ships/${game.player.shipIndex + 1}-min.png`" class="w-[80%] object-contain m-auto" />
        </div>
      </div>

      <FuelHull />
    </div>
    <Tabs active='shipyard' />
  </NuxtLayout>

</template>

<script setup>
const g = useGame()
const ships = useShips()
const game = await g.loadJSON()

const ship = ships.value[game.player.shipIndex]

const currentTab = ref(1)
</script>

<style>

</style>