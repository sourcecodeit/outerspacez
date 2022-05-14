<script setup>
import { useRouter } from 'vue-router';
import ScreenView from '../components/ScreenView.vue'
import PrevNextBottom from '../components/PrevNextBottom.vue'
import HudView from '../components/HudView.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const router = useRouter();

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
                <carousel :items-to-show="1.5">
                    <slide v-for="slide in 10" :key="slide">
                    {{ slide }}
                    </slide>

                    <template #addons>
                    <navigation />
                    <pagination />
                    </template>
                </carousel>
            </hud-view>
        </div>
        <prev-next-bottom @prev="prev()" @next="next()" />
    </screen-view>
</template>
<style scoped>

</style>