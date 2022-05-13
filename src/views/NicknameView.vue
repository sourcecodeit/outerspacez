<script setup>
import { useGameStore } from '@/stores/game'
import ScreenView from '../components/ScreenView.vue'

const gameStore = useGameStore();
</script>

<template>
    <screen-view>
        <h1 class="text-white h-20 justify-center flex items-center">Nickname</h1>
        <div class="flex flex-col px-10 text-left mt-20">
            <label>Enter your nickname</label>
            <input type="text" />
        </div>
        <div class="grow"></div>        
    </screen-view>
</template>