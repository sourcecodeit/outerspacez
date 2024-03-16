<template>
	<NuxtLayout name="screen" title="Summary">
		<div id="particles-js" class="absolute w-screen h-screen z-10 opacity-20 top-0 left-0"></div>
		<div class="items-center relative flex justify-center z-20">
			<img src="@/assets/ui/modal.png" class="absolute z-0 top-0 left-[50%] w-[240px] -ml-[120px]" />
			<div class="border-cyan-500 border-opacity-50 rounded-full overflow-hidden border-[4px] absolute top-0 right-10 z-30">
				<div class="bg-gradient-to-r from-cyan-500">
					<img :src="`/characters/${faceIndex}.png`" class="w-[80px] h-[80px] object-cover" />
				</div>
			</div>
			<SetupShip :index="shipIndex" v-if="shipIndex" class="w-[260px]" />
		</div>
		<div class="h-[200px]">

		</div>
	</NuxtLayout>
</template>
<script setup>
import { useStorage } from '@vueuse/core'

const shipIndex = useStorage('ship')
const faceIndex = useStorage('face')

onMounted(() => {
	particlesJS.load('particles-js', '/stars1.json', function () {
		console.log('callback - particles.js config loaded');
	});
})

</script>