<template>
	<NuxtLayout name="screen" title="Ship selection" back="/setup/career" next="/setup/summary">
		<div id="particles-js" class="absolute w-screen h-screen z-10 opacity-20"></div>
		<canvas id="warp" class="absolute w-screen h-screen z-20"></canvas>
		<UiCol class="gap-4 relative z-30 justify-around h-full py-10 mx-6">
			<UiCol class="items-center relative">
				<img src="@/assets/bg/hud-3.png" class="absolute w-[320px] z-0 opacity-20 animate-spin-slow" />
				<UiRow class="top-[40px] relative">
					<img src="@/assets/ui/chevron.png" class="w-[20px] rotate-180" @click="prev" />
					<SetupShip :index="index" />
					<img src="@/assets/ui/chevron.png" class="w-[20px]" @click="next" />
				</UiRow>
			</UiCol>
			<div>
				<h3>Stats</h3>
			</div>
		</UiCol>
		<div></div>
	</NuxtLayout>
</template>
<script setup>
import { useStorage } from '@vueuse/core'
const nickname = useStorage('nickname')
const index = useStorage('ship', () => 1)

onMounted(() => {
	particlesJS.load('particles-js', '/stars1.json', function () {
		console.log('callback - particles.js config loaded');
	});
})

const count = 17

function next() {
	index.value = (index.value + 1) % (count + 1) || 1
}
function prev() {
	index.value = index.value - 1 || (count - 1)
}
</script>