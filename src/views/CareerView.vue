<script setup>
import { useRouter } from 'vue-router';
import ScreenView from '../components/ScreenView.vue'
import PrevNextBottom from '../components/PrevNextBottom.vue'
import HudView from '../components/HudView.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const router = useRouter();

const images = [];
for(let i=1; i<=27; i++) {
    images.push(`/static/resources/characters/male/${i}.png`);
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
                <h2 class="text-center">Pirate</h2>
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