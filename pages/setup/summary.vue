<template>
	<NuxtLayout name="screen" title="Summary" back="/setup/ship">
		<div id="particles-js" class="absolute w-screen h-screen-min z-0 opacity-20 top-0 left-0"></div>
		
			<div class="items-center relative flex justify-center z-20">
				<img src="@/assets/ui/modal.png" class="absolute z-0 top-[20px] left-[50%] w-[280px] -ml-[140px]" />
				<div
					class="border-cyan-500 border-opacity-50 rounded-full overflow-hidden border-[4px] absolute top-0 right-10 z-30">
					<div class="bg-gradient-to-r from-cyan-500">
						<img :src="`/characters/${faceIndex + 1}.png`" class="w-[80px] h-[80px] object-cover" />
					</div>
				</div>
				<SetupShip :index="shipIndex" class="w-[90%]" />
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
			<div class="h-[100px]"></div>
			<UiCol class="px-6 absolute bottom-6 left-0 right-0">
				<NuxtLink to="/cockpit">
					<div class="relative h-[50px] flex flex-col justify-center">
						<img src="@/assets/ui/button-bg.png" class="w-full h-full object-fill absolute top-0 right-0" />
						CONFIRM
					</div>
				</NuxtLink>
			</UiCol>
		
	</NuxtLayout>
</template>
<script setup>
const g = useGame()
const game = await g.loadJSON()

const ships = useShips()
const shipIndex = game.player.shipIndex
const faceIndex = game.player.faceIndex
const nickname = game.player.nickName

console.log(shipIndex)

onMounted(() => {
	particlesJS.load('particles-js', '/stars1.json', function () {
		console.log('callback - particles.js config loaded');
	});
})

</script>