<template>
  <NuxtLayout name="screen" :title="`system: ${system.name}`">
    <template v-if="ready">
      <div id="planets" class="relative z-20 flex flex-col w-full justify-start gap-10 items-end px-4" :class="{
        'blur': modal
      }">
        <AstroChartPlanet v-for="p in system.planets" :planet="p" :active="planet.name == p.name"
          @click="modalPlanet(p)" />
      </div>
      <div class="absolute w-screen h-screen-min top-0 left-0 z-0">
        <AstroStar :index="system.star.imageIndex" />
      </div>
      <Transition>

      </Transition>
    </template>
    <MazBackdrop :modelValue="modal" :persistent="true" :noCloseOnEscKey="true">
      <div class="text-white w-screen h-screen-min items-center py-20 flex flex-col justify-between">
        <UiCol>
          <AstroPlanet :planet="clickedPlanet" size="large" class="m-auto" />
          <h2 class="text-xl text-center">Travel to:
            <span class="text-cyan-400">
              {{ clickedPlanet.name }}
            </span>
          </h2>
          <p class="flex justify-center mt-2 text-2xl gap-1 items-center">
            <span class="text-orange-500">
              <SvgoFlame />
            </span>
            <span class="text-lg">2.000</span>
          </p>
        </UiCol>
        <UiCol class="w-full gap-1">
          <UiButton>Travel</UiButton>
          <UiButton @click="cancelPlanet()">Cancel</UiButton>
        </UiCol>

      </div>
    </MazBackdrop>
    <!-- tabs -->
    <Tabs active='chart' />
  </NuxtLayout>
</template>

<script setup lang="ts">
const ready = ref(false)
const modal = ref(false)
const modal2 = ref(true)
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