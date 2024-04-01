<template>
  <NuxtLayout name="screen" :title="ship.name">
    <div class="flex flex-col justify-start">
      <MazTabs v-model="currentTab" no-elevation>
        <MazTabsBar :items="tabs" size="sm" />

        <MazTabsContent>
          <MazTabsContentItem :tab="1" class="py-4">
            <div class="border-t border-b border-slate-700 py-2">
              <ShipStats :agi="ship.agi" :hull="ship.hull" :cargo="ship.cargo" />
            </div>
            <img :src="`/ships/${game.player.shipIndex + 1}.png`" class="w-full h-full object-contain" />
          </MazTabsContentItem>
          <MazTabsContentItem :tab="2" class="maz-py-4">
            Tab 2
          </MazTabsContentItem>
          <MazTabsContentItem :tab="3" class="maz-py-4">
            Tab 3
          </MazTabsContentItem>
        </MazTabsContent>
      </MazTabs>
    </div>
    <Tabs active='shipyard' />
  </NuxtLayout>

</template>

<script setup>
const g = useGame()
const ships = useShips()
const game = await g.loadJSON()

const ship = ships.value[game.player.shipIndex]


const tabs = [
  { label: 'STATS' },
  { label: 'FITTING' },
  { label: 'CARGO' },
]
const currentTab = ref(1)


</script>

<style>

</style>