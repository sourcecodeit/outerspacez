<template>
	<NuxtLayout name="screen" title="Summary" back="/setup/ship">
		<template v-if="hasShip && hasFace">
			<div id="particles-js" class="absolute w-screen h-screen z-0 opacity-20 top-0 left-0"></div>
			<div class="items-center relative flex justify-center z-20">
				<img src="@/assets/ui/modal.png" class="absolute z-0 top-0 left-[50%] w-[240px] -ml-[120px]" />
				<div v-if="hasFace"
					class="border-cyan-500 border-opacity-50 rounded-full overflow-hidden border-[4px] absolute top-0 right-10 z-30">
					<div class="bg-gradient-to-r from-cyan-500">
						<img :src="`/characters/${faceIndex}.png`" class="w-[80px] h-[80px] object-cover" />
					</div>
				</div>
				<SetupShip :index="shipIndex + 1" v-if="hasShip" class="w-[260px]" />
			</div>
			<UiCol class="gap-5">
				<div>
					<h2 class="text-3xl">{{ ships[shipIndex].name }}</h2>
					<h3 class="text-xs opacity-65">Space Ship</h3>
				</div>
				<div>
					<h2 class="text-xl">{{ nickname }}</h2>
					<h3 class="text-xs opacity-65">Nickname</h3>
				</div>
			</UiCol>
			<UiCol class="px-6">
				<div class="relative h-[46px] flex flex-col justify-center">
					<img src="@/assets/ui/button-bg.png" class="w-full h-full object-fill absolute top-0 right-0" />
					CONFIRM
				</div>
			</UiCol>
		</template>
	</NuxtLayout>
</template>
<script setup>
import { useStorage } from '@vueuse/core'

const ships = useShips()
const statsData = await useStorage('stats')

const stats = computed(() => {
	if (statsData.value) {
		return JSON.parse(statsData.value)
	}
	return {}
})

const shipIndex = parseInt(useStorage('ship').value)
const faceIndex = parseInt(useStorage('face').value)
const nickname = useStorage('nickname')

const hasShip = computed(() => shipIndex != undefined)
const hasFace = computed(() => faceIndex != undefined)

onMounted(() => {
	particlesJS.load('particles-js', '/stars1.json', function () {
		console.log('callback - particles.js config loaded');
	});
})

</script>