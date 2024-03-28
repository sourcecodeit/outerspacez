<template>
  <NuxtLayout name="screen" :title="`system: ${system.name}`">
    <template v-if="ready">
      <div id="planets" class="relative z-20 flex flex-col w-full justify-start gap-10 items-end px-4" :class="{
        'blur': modal
      }">
        <AstroChartPlanet v-for="p in system.planets" :planet="p" :active="planet.name == p.name"
          @click="modalPlanet(p)" />
      </div>
      <div class="absolute w-screen h-screen-min top-0 left-0 z-0" :class="{
    'blur': modal
  }">
        <AstroStar :index="system.star.imageIndex" />
      </div>
      <Transition>
        <div class="absolute w-screen items-center py-20
        top-0 bottom-0 left-0 z-50 bg-black bg-opacity-40 flex flex-col justify-between" v-if="modal && clickedPlanet">
          <UiCol>
            <AstroPlanet :planet="clickedPlanet" size="large" class="m-auto" />
            <h2 class="text-xl">{{ clickedPlanet.name }}</h2>
          </UiCol>
          <UiCol class="w-full gap-1">
            <UiButton>Continue</UiButton>
            <UiButton @click="cancelPlanet()">Cancel</UiButton>
          </UiCol>

        </div>
      </Transition>
    </template>
    <!-- tabs -->
    <Tabs active='chart' />
  </NuxtLayout>
</template>

<script setup lang="ts">
const ready = ref(false)
const modal = ref(false)
const g = useGame()
const system = await g.getPlayerSystem()
const planet = await g.getPlayerPlanet()
const clickedPlanet = ref()
ready.value = true

function modalPlanet(p) {
  if (p.name == planet.name) {
    return
  }
  clickedPlanet.value = p
  modal.value = true 
}

function cancelPlanet() {  
  clickedPlanet.value = null
  modal.value = false
}
</script>
<style>
#planets {
  height: calc(100vh - 200px);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>