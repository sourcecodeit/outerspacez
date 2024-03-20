<template>
	<NuxtLayout name="login">
		<div class="h-screen flex flex-col justify-between items-center p-8">
			<div></div>
			<h1 class="text-3xl">Outer Space Z</h1>
			<UiCol class="w-full gap-5">
				<UiButton @click="next">start</UiButton>
				<p class="text-xs font-sans opacity-25">Source Code SRL - Game Division</p>
			</UiCol>
		</div>
	</NuxtLayout>
</template>
<script setup>
const game = useGame()

function next() {
	game.start()
	useRouter().push('/setup/nickname')
}
</script>