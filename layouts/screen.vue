<template>
	<UiCol class="screen">
		<UiRow class="mx-6 h-[50px]">
			<div class="w-[60px]">
				<NuxtLink :href="back">
					<div class="w-[60px]" v-if="back">
						<img src="@/assets/ui/chevron.png" class="w-[10px] rotate-180" />
					</div>
				</NuxtLink>
			</div>
			<h2>
				{{ title }}
			</h2>
			<div class="w-[60px]">
				<NuxtLink :href="next">
					<img src="@/assets/ui/arrow-next-box.png" v-if="next" />
				</NuxtLink>
			</div>
		</UiRow>
		<UiCol class="justify-around h-full">
			<slot />
		</UiCol>
	</UiCol>
</template>
<script setup>
defineProps(['next', 'title', 'back'])

useHead({
	htmlAttrs: {
		class: 'dark'
	}
})
</script>
<style scoped>
.screen {
	background-image: url('@/assets/bg/screen.png');
	@apply bg-cover text-white text-center bg-center h-screen py-4;
}
</style>