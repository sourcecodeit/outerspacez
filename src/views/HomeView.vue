<script setup>
import { useGameStore } from '@/stores/game'
import ScreenView from '../components/ScreenView.vue'

const gameStore = useGameStore();
</script>

<template>
  <screen-view class="start">
    <h1 class="text-white text-2xl h-20 justify-center flex items-center">Outer Space X</h1>
    <div class="grow"></div>
    <div>
      <router-link 
        to="/continue"
        class="btn h7 text-white flex p-5 mx-5 text-center justify-center"
        :class="{ disabled: !gameStore.hasGames }"
        >
        Continue
      </router-link>
      <router-link 
        to="/start"
        class="btn h7 text-white flex p-5 mx-5 text-center justify-center">
        New adventure
      </router-link>
    </div>
    <div class="h-20"></div>
    <div class="h-10">
      <p class="text-xs">Source Code SRL - Game Division</p>
    </div>
  </screen-view>
</template>
