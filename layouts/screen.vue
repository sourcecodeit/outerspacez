<template>
	<ClientOnly>
		<UiCol class="screen h-screen-min">
			<UiRow class="mx-6 h-[50px] relative z-40" v-if="title">
				<div class="w-[60px]">
					<MazBtn color="transparent" :to="back" noPadding v-if="back">
						<img src="@/assets/ui/chevron.png" class="w-[10px] rotate-180" />
					</MazBtn>
				</div>
				<h2>
					{{ title }}
				</h2>
				<div class="w-[60px]">
					<slot name="bar-right" />
				</div>
			</UiRow>
			<UiCol class="h-full" :class="{ 'justify-around': vCenter }">
				<slot />
			</UiCol>
		</UiCol>
	</ClientOnly>
</template>
<script setup>
const props = defineProps(['next', 'title', 'back', 'center'])

useHead({
	htmlAttrs: {
		class: 'dark'
	}
})

const vCenter = computed(() => {
	return props.center != undefined || props.center === true
})
</script>
<style scoped>
.screen {
	background-image: url('@/assets/bg/screen2.jpg');
	@apply bg-cover text-white text-center bg-center py-4;
}
</style>