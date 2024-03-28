<template>
	<NuxtLayout name="login">
		<div class="h-screen-min flex flex-col justify-between items-center p-8">
			<div></div>
			<h1 class="text-3xl">Outer Space Z</h1>
			<UiCol class="w-full gap-5">
				<UiButton @click="next">start</UiButton>				
			</UiCol>
		</div>
	</NuxtLayout>
</template>
<script setup>
const g = useGame()

async function next() {
	const game = await g.loadJSON()
	if (!game) {
		await g.start()
		useRouter().push('/setup/nickname')
	} else {
		useRouter().push('/cockpit')
	}
}
</script>