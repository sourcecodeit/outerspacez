<template>
  <NuxtLayout name="screen">
    <UiCol class="absolute z-20 items-center top-[80px] left-0 right-0">
      <h3>{{ player.nickname }}</h3>
      <img :src="`/characters/${player.face}.png`" class="w-[80px] rounded-full border-2 border-cyan-500" />
    </UiCol>

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