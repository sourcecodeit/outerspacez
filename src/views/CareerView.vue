<script setup>
import { useRouter } from 'vue-router';
import { reactive } from 'vue'
import ScreenView from '../components/ScreenView.vue'
import PrevNextBottom from '../components/PrevNextBottom.vue'
import HudView from '../components/HudView.vue';
import TabsView from '../components/TabsView.vue';
import StatView from '../components/StatView.vue';
import config from '../config';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const router = useRouter();
const state = reactive({ tabs: [
    { text: 'Pirate', active: true, id: 'pirate' }, { text: 'Trader', id: 'trader' }, { text: 'Engineer', id: 'engineer' }
], career: config.jobs.pirate });

const images = [];
for(let i=1; i<=27; i++) {
    images.push(`/static/resources/characters/male/${i}.png`);
}

function setCareer(id) {
    state.career = config.jobs[id];
}

const prev = () => {
    router.go(-1);
}
const next = () => {}

</script>

<template>
    <screen-view>
        <h1 class="text-white h-20 justify-center flex items-center">Career</h1>
        <div class="flex flex-col px-10 text-left">
            <hud-view class="relative">
                <carousel :items-to-show="1" class="top-10">
                    <slide v-for="image in images" :key="image">
                        <div class="pic">
                            <img :src="image" alt="" />
                        </div>                        
                    </slide>

                    <template #addons>
                    <navigation />
                    </template>
                </carousel>
            </hud-view>
            <div class="flex text-center flex-col mt-3">
                <tabs-view :tabs="state.tabs" @click="setCareer"></tabs-view>
                <div class="mt-5 grid grid-cols-2 gap-4">
                    <stat-view 
                        label="Body strength" 
                        :value="state.career.bodyStrength" />
                    <stat-view 
                        label="Mental focus" 
                        :value="state.career.mentalConcentration" />
                    <stat-view 
                        label="Knowledge" 
                        :value="state.career.extensiveKnowledge" />
                    <stat-view 
                        label="Multilingualism" 
                        :value="state.career.multilingualism" />
                </div>
            </div>
        </div>
        <prev-next-bottom @prev="prev()" @next="next()" />
    </screen-view>
</template>
<style scoped>
.pic {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    overflow: hidden;
}
</style>