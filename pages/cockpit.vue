<template>
  <NuxtLayout name="screen">
    <UiRow class="absolute z-20 items-center top-0 left-0 right-0 bg-black bg-opacity-70 py-2 px-2">
      <h3 class="text-sm text-cyan-300">1.000£</h3>
      <h3 class="text-sm absolute left-0 top-2 right-0 text-center">MARS XII</h3>
      <h3></h3>
      <img :src="`/characters/${player.face}.png`"
        class="w-[80px] rounded-full absolute top-2 right-2 shadow-lg border-2 border-white" />
    </UiRow>

    <!-- cockpit top-->
    <div class="w-full absolute z-10 -top-[130px] left-0">
      <img src="@/assets/ship/cockpit-top.png" class="w-full" />
    </div>

    <!-- planet -->
    <div class="w-full absolute z-0 top-[20%] left-0">
      <img src="/planets/1.png" class="w-[200%] max-w-[2000px]" />
    </div>

    <!-- cockpit bottom-->
    <div class="w-full absolute z-10 -bottom-[100px] left-0">
      <img src="@/assets/ship/cockpit-bottom.png" class="w-full" />
    </div>
  </NuxtLayout>
</template>

<script setup>
const player = usePlayer()
</script>