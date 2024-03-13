<template>
	<NuxtLayout name="screen" title="Ship selection" back="/setup/career" :next="nextPage">
		<div id="particles-js" class="absolute w-screen h-screen z-10 opacity-20"></div>
		<canvas id="warp" class="absolute w-screen h-screen z-20"></canvas>
		<UiCol class="gap-4 relative z-30 justify-around h-full mx-6">
			<div class="items-center relative">
				<img src="@/assets/bg/hud-3.png" class="absolute z-0 opacity-20 animate-spin-slow" />
				<UiRow class="gap-4">
					<UiRow class="top-[40px] relative">
						<MazBtn color="transparent" @click="prev" noPadding>
							<Icon name="tabler:square-rounded-chevrons-left-filled" size="40" />
						</MazBtn>
						<SetupShip :index="index" :locked="isLocked(index)" />
						<MazBtn color="transparent" @click="next" noPadding>
							<Icon name="tabler:square-rounded-chevrons-right-filled" size="40" />
						</MazBtn>
					</UiRow>
				</UiRow>
			</div>
			<UiRow class="border-t border-slate-800 border-b py-4 justify-around">
				<UiCol class="gap-2">
					<UiRow class="gap-2">
						<img src="@/assets/ui/icon-agi.png" class="w-[20px]" />
						<span class="text-xl">80</span>
					</UiRow>
					<h3 class="text-xs text-center text-cyan-300">Agility</h3>
				</UiCol>
				<UiCol class="gap-2">
					<UiRow class="gap-2">
						<img src="@/assets/ui/icon-hull.png" class="w-[20px]" />
						<span class="text-xl">80</span>
					</UiRow>
					<h3 class="text-xs text-center text-cyan-300">Hull</h3>
				</UiCol>

				<UiCol class="gap-2">
					<UiRow class="gap-2">
						<img src="@/assets/ui/icon-cargo.png" class="w-[20px]" />
						<span class="text-xl">80</span>
					</UiRow>
					<h3 class="text-xs text-center text-cyan-300">Cargo</h3>
				</UiCol>
			</UiRow>
		</UiCol>
		<div></div>
	</NuxtLayout>
</template>
<script setup>
import { useStorage } from '@vueuse/core'
const index = useStorage('ship', () => 1)

onMounted(() => {
	particlesJS.load('particles-js', '/stars1.json', function () {
		console.log('callback - particles.js config loaded');
	});
})

function isLocked(index) {
	return index > 2
}

const count = 17

function next() {
	index.value = (index.value + 1) % (count + 1) || 1
}
function prev() {
	index.value = index.value - 1 || (count - 1)
}

const nextPage = computed(() => {
	return isLocked(index.value) ? null : '/setup/summary'
})
</script>