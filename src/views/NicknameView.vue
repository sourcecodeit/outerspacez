<script setup>
import { useGameStore } from '@/stores/game'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import ScreenView from '../components/ScreenView.vue'
import PrevNextBottom from '../components/PrevNextBottom.vue'

const gameStore = useGameStore();
const router = useRouter();
const state = reactive({ nickName: '' })
const next = () => {
    if(state.nickName) {
        const player = { ...gameStore.player };
        player.nickName = state.nickName;
        gameStore.$patch({
            player: player
        });
        router.push('/career');
    }
}
</script>

<template>
    <screen-view>
        <h1 class="text-white h-20 justify-center flex items-center">Setup</h1>
        <div class="flex flex-col px-10 text-left mt-20">
            <label>Enter your nickname</label>
            <input type="text" v-model="state.nickName" />
        </div>
        <prev-next-bottom @next="next()" />
    </screen-view>
</template>