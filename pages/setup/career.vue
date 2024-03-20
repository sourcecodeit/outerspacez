<template>
	<NuxtLayout name="screen" title="Career" back="/setup/nickname">
		<template #bar-right>
			<UiNext v-if="availablePoints == 0" @click="nextScreen()" />
		</template>
		<div id="particles-js" class="absolute w-screen h-screen z-10 opacity-10 top-0 left-0"></div>
		<canvas id="warp" class="absolute w-screen h-screen z-20"></canvas>
		<UiCol class="gap-4 relative z-30 justify-around h-full mx-6">
			<div class="items-center relative w-full">
				<img src="@/assets/bg/hud-3.png" class="absolute z-0 opacity-20 animate-spin-slow" />
				<UiRow class="top-[50px] relative">
					<MazBtn color="transparent" @click="prev" noPadding>
						<Icon name="tabler:square-rounded-chevrons-left-filled" size="40" />
					</MazBtn>
					<SetupFace :index="faceIndex" size="big" />
					<MazBtn color="transparent" @click="next" noPadding>
						<Icon name="tabler:square-rounded-chevrons-right-filled" size="40" />
					</MazBtn>
				</UiRow>
			</div>
			<p class="uppercase">Available points: {{ availablePoints }}</p>
			<div class="grid grid-cols-2 gap-x-4 gap-y-3 mx-6">
				<SetupStat title="Pilot" v-model="stats.pilot" :max="maxPilot" />
				<SetupStat title="Hacker" v-model="stats.engineer" :max="maxEngineer" />
				<SetupStat title="Engineer" v-model="stats.hacker" :max="maxHacker" />
				<SetupStat title="Trader" v-model="stats.trader" :max="maxTrader" />
			</div>
		</UiCol>
		<div></div>
	</NuxtLayout>
</template>
<script setup>
const g = useGame()
const game = await g.loadJSON()
const faceIndex = ref(game.player.faceIndex)

const stats = ref({...game.player.stats})

const availablePoints = computed(() => {
	return 20 - stats.value.engineer - stats.value.hacker - stats.value.trader - stats.value.pilot
})

const maxPilot = computed(() => {
	return stats.value.pilot + availablePoints.value
})
const maxEngineer = computed(() => {
	return stats.value.engineer + availablePoints.value
})
const maxTrader = computed(() => {
	return stats.value.trader + availablePoints.value
})
const maxHacker = computed(() => {
	return stats.value.hacker + availablePoints.value
})


onMounted(() => {
	particlesJS.load('particles-js', '/stars1.json', function () {
		console.log('callback - particles.js config loaded');
	});	

	// new WarpSpeed('warp', { "speed": 20, "speedAdjFactor": 0.01, "density": 2, "shape": "square", "warpEffect": true, "warpEffectLength": 5, "depthFade": true, "starSize": 5, "backgroundColor": "hsl(263,45%,0%)", "starColor": "#FFFFFF" })
})

const count = 29

function next() {
	faceIndex.value = (faceIndex.value + 1) % (count + 1) || 1
}
function prev() {
	faceIndex.value = faceIndex.value - 1 || (count - 1)
}

async function nextScreen() {
	await g.setStats({ ...stats.value })
	await g.setFaceIndex(faceIndex.value)
	useRouter().push('/setup/ship')
}
</script>