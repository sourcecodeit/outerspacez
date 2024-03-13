<template>
	<NuxtLayout name="screen" title="Career" back="/setup/nickname" :next="nextPage">
		<div id="particles-js" class="absolute w-screen h-screen z-10 opacity-20"></div>
		<canvas id="warp" class="absolute w-screen h-screen z-20"></canvas>
		<UiCol class="gap-4 relative z-30 justify-around h-full py-10">
			<div class="opacity-70">{{ nickname }}</div>
			<UiCol class="items-center relative h-[320px] overflow-hidden">
				<img src="@/assets/bg/hud-3.png" class="absolute w-[320px] z-0 opacity-20 animate-spin-slow" />
				<UiRow class="top-[40px] relative">
					<img src="@/assets/ui/chevron.png" class="w-[20px] rotate-180" @click="prev" />
					<Face :index="index" />
					<img src="@/assets/ui/chevron.png" class="w-[20px]" @click="next" />
				</UiRow>
			</UiCol>
			<p class="uppercase">Available points: {{ availablePoints }}</p>
			<div class="grid grid-cols-2 gap-x-4 gap-y-8 mx-6">
				<SetupStat title="Body strength" v-model="stats.str" :max="maxStr" />
				<SetupStat title="Intelligence" v-model="stats.int" :max="maxInt" />
				<SetupStat title="Knowledge" v-model="stats.knw" :max="maxKnw" />
				<SetupStat title="Multilingualism" v-model="stats.lng" :max="maxLng" />
			</div>
		</UiCol>
		<div></div>
	</NuxtLayout>
</template>
<script setup>
import { useStorage } from '@vueuse/core'
const nickname = useStorage('nickname')
const index = useStorage('face', () => 1)

const stats = useStorage('stats', () => {
	return {
		str: 1,
		int: 1, 
		knw: 1,
		lng: 1
	}
})

const nextPage = computed(() => {
	return availablePoints.value == 0 ? '/setup/ship' : null
})

const maxStr = computed(() => {
	return stats.value.str + availablePoints.value
})
const maxInt = computed(() => {
	return stats.value.int + availablePoints.value
})
const maxLng = computed(() => {
	return stats.value.lng + availablePoints.value
})
const maxKnw = computed(() => {
	return stats.value.knw + availablePoints.value
})

const availablePoints = computed(() => {
	return 20 - stats.value.int - stats.value.knw - stats.value.lng - stats.value.str
})

onMounted(() => {
	particlesJS.load('particles-js', '/stars1.json', function () {
		console.log('callback - particles.js config loaded');
	});	

	// new WarpSpeed('warp', { "speed": 20, "speedAdjFactor": 0.01, "density": 2, "shape": "square", "warpEffect": true, "warpEffectLength": 5, "depthFade": true, "starSize": 5, "backgroundColor": "hsl(263,45%,0%)", "starColor": "#FFFFFF" })
})

const count = 30

function next() {
	index.value = (index.value + 1) % (count + 1) || 1
}
function prev() {
	index.value = index.value - 1 || (count - 1)
}
</script>