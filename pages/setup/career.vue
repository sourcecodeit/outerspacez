<template>
	<NuxtLayout name="screen" title="Career" back="/setup/nickname" :next="nextPage">
		<div id="particles-js" class="absolute w-screen h-screen z-10 opacity-10 top-0 left-0"></div>
		<canvas id="warp" class="absolute w-screen h-screen z-20"></canvas>
		<UiCol class="gap-4 relative z-30 justify-around h-full mx-6">
			<div class="items-center relative w-full">
				<img src="@/assets/bg/hud-3.png" class="absolute z-0 opacity-20 animate-spin-slow" />
				<UiRow class="top-[50px] relative">
					<MazBtn color="transparent" @click="prev" noPadding>
						<Icon name="tabler:square-rounded-chevrons-left-filled" size="40" />
					</MazBtn>
					<SetupFace :index="index" />
					<MazBtn color="transparent" @click="next" noPadding>
						<Icon name="tabler:square-rounded-chevrons-right-filled" size="40" />
					</MazBtn>
				</UiRow>
			</div>
			<p class="uppercase">Available points: {{ availablePoints }}</p>
			<div class="grid grid-cols-2 gap-x-4 gap-y-3 mx-6">
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

const count = 29

function next() {
	index.value = (index.value + 1) % (count + 1) || 1
}
function prev() {
	index.value = index.value - 1 || (count - 1)
}
</script>