<template>
  <NuxtLayout name="screen">
    <h2>{{ player.nickname }}</h2>
    <img :src="`/characters/${player.face}.png`" class="w-[80px] rounded-full border-2 border-cyan-500" />
  </NuxtLayout>
</template>

<script setup>
const player = usePlayer()
</script>

<style>

</style>