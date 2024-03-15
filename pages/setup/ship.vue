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
						<SetupShip :index="index + 1" :locked="isLocked" />
						<MazBtn color="transparent" @click="next" noPadding>
							<Icon name="tabler:square-rounded-chevrons-right-filled" size="40" />
						</MazBtn>
					</UiRow>
				</UiRow>
			</div>
			<h2>{{ ships[index].name }}</h2>
			<UiCol class="border-t border-slate-800 border-b py-4 justify-around bg-black bg-opacity-15 gap-10">
				<div class="grid grid-cols-2">
					<div class="gap-2 justify-center flex items-center">
						<img src="@/assets/ui/shield-slots.svg" class="w-[40px]" />
						<h2 class="text-3xl">{{ shield_slots }}</h2>
						<h3 class="text-xs opacity-80">Shield<br />slots</h3>
					</div>
					<div class="gap-2 justify-center flex items-center">
						<img src="@/assets/ui/weapon-slots.svg" class="w-[30px]" />
						<h2 class="text-3xl">{{ weapon_slots }}</h2>
						<h3 class="text-xs opacity-80">Weapon<br />slots</h3>
					</div>
					</div>
					<UiRow class="justify-around">
						<UiCol class="gap-2">
							<UiRow class="gap-2">
								<img src="@/assets/ui/icon-agi.png" class="w-[20px]" />
								<span class="text-xl">{{ agi }}</span>
							</UiRow>
							<h3 class="text-xs text-center text-cyan-300">Agility</h3>
						</UiCol>
						<UiCol class="gap-2">
							<UiRow class="gap-2">
								<img src="@/assets/ui/icon-hull.png" class="w-[20px]" />
								<span class="text-xl">{{ hull }}</span>
							</UiRow>
							<h3 class="text-xs text-center text-cyan-300">Hull</h3>
						</UiCol>

						<UiCol class="gap-2">
							<UiRow class="gap-2">
								<img src="@/assets/ui/icon-cargo.png" class="w-[20px]" />
								<span class="text-xl">{{ cargo }}</span>
							</UiRow>
							<h3 class="text-xs text-center text-cyan-300">Cargo</h3>
						</UiCol>
					</UiRow>
			</UiCol>
		</UiCol>
		<div></div>
	</NuxtLayout>
</template>
<script setup>
import { useStorage } from '@vueuse/core'

const ships = useShips()

const index = useStorage('ship', () => 0)

onMounted(() => {
	particlesJS.load('particles-js', '/stars1.json', function () {
		console.log('callback - particles.js config loaded');
	});
})

const isLocked = computed(() => {
	return index.value > 2
})

function next() {
	console.log(index.value, (index.value + 1) % ships.value.length)
	index.value = (index.value + 1) % ships.value.length
}
function prev() {
	console.log(index.value, (index.value + ships.value.length - 1) % ships.value.length)
	index.value = (index.value + ships.value.length - 1) % ships.value.length
}

const nextPage = computed(() => {
	return isLocked.value ? null : '/setup/summary'
})

const agi = computed(() => {
	return isLocked.value ? '?' : ships.value[index.value].agi
})

const hull = computed(() => {
	return isLocked.value ? '?' : ships.value[index.value].hull
})

const cargo = computed(() => {
	return isLocked.value ? '?' : ships.value[index.value].cargo
})

const shield_slots = computed(() => {
	return isLocked.value ? '?' : ships.value[index.value].shield_slots
})

const weapon_slots = computed(() => {
	return isLocked.value ? '?' : ships.value[index.value].weapon_slots
})
</script>