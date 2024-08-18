<template>
  <NuxtLayout name="screen" :title="ship.name">
    <div class="flex flex-col justify-between grow pb-14">
      <div class="flex flex-col justify-start">
        <ShipTabs :current-tab="currentTab" @change-tab="onChangeTab" />
        <ShipPageShipStatsPanel v-if="currentTab == 1" />
        <ShipPageShipFittingPanel v-if="currentTab == 2" />
      </div>

      <FuelHull v-if="currentTab == 1" />
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

function onChangeTab(tabIndex) {
  currentTab.value = tabIndex
}
</script>

<style>

</style>