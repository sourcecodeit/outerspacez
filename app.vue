<template>
	<div>
		<div class="app overflow-hidden w-screen h-screen-min" :class="{
	'hidden': !ready		
	}">
			<NuxtPage />
		</div>
		<UiCol v-if="!ready" class="app w-screen h-screen-min justify-center">
			<p class="mb-6">Loading... {{ c }}%</p>
			<div class="mx-10 h-[6px] bg-slate-800">
				<div class="h-[6px] bg-cyan-400 transition-all" :style="`width: ${c}%`"></div>
			</div>
		</UiCol>
	</div>
</template>
<script setup>
const config = useRuntimeConfig()
const ready = ref(false)
const c = ref(0)

const characters = 29;
const ships = 17;
const stars = 3;

const images = []

onMounted(async () => {
	function loadImage(src) {
		return new Promise(resolve => {
			const img = new Image()
			img.onload = resolve
			img.src = src
		})		
	}

	for (let i = 1; i <= characters; i++) { 
		images.push(`/characters/${i}-min.png`)
	}

	for (let i = 1; i <= ships; i++) {
		images.push(`/ships/${i}-min.png`)
	}

	for (let i = 1; i <= stars; i++) {
		images.push(`/stars/${i}.png`)	
	}

	for (let i = 1; i <= config.public.planets; i++) {
		images.push(`/planets/${i}-min.png`)
	}

	for (let i = 0; i < images.length; i++) {
		await loadImage(images[i])
		c.value = Math.round(i / images.length * 100)
	}

	ready.value = true
})
</script>
<style scoped>
.app {
	background-image: url('@/assets/bg/screen2.jpg');
	@apply bg-cover text-white text-center bg-center;
}
</style>