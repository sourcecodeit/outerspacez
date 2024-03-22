<template>
  <NuxtLayout name="screen">
    <div class="absolute w-screen h-screen top-0 left-0">
      <img src="/stars/1.png" class="w-[200px] -bottom-[0px] -left-[40px] absolute" />
    </div>

    <!-- tabs -->
    <Tabs active='chart' />
  </NuxtLayout>
</template>

<script setup>
const g = useGame()
const game = await g.loadJSON()
const player = game.player
const planet = await g.getPlayerPlanet()
</script>