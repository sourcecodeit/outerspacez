<template>
	<NuxtLayout name="screen" title="Career" back="/setup/nickname" next="/">
		<div id="particles-js" class="absolute w-screen h-screen z-10 opacity-20"></div>
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
			<div class="grid grid-cols-2 gap-x-4 gap-y-8 mx-6">
				<SetupStat title="Body strength" value="20" />
				<SetupStat title="Intelligence" value="60" />
				<SetupStat title="Knowledge" value="20" />
				<SetupStat title="Multilingualism" value="20" />
			</div>
		</UiCol>
		<div></div>
	</NuxtLayout>
</template>
<script setup>
import { useStorage } from '@vueuse/core'

const nickname = useStorage('nickname')
const index = useStorage('face', () => 1)

onMounted(() => {
	particlesJS.load('particles-js', '/stars1.json', function () {
		console.log('callback - particles.js config loaded');
	});	
})

const count = 30

function next() {
	index.value = (index.value + 1) % (count + 1) || 1
}
function prev() {
	index.value = index.value - 1 || (count - 1)
}
</script>