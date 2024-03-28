<template>
	<NuxtLayout name="login">
		<div class="h-screen-min flex flex-col justify-between items-center p-8">
			<div></div>
			<h1 class="text-3xl">Outer Space Z</h1>
			<UiCol class="w-full gap-5">
				<UiButton @click="newGame">New game</UiButton>
				<UiButton @click="continueGame" v-if="hasGame">Continue</UiButton>
			</UiCol>
		</div>
	</NuxtLayout>
</template>
<script setup>
const g = useGame()
const game = await g.loadJSON()
const hasGame = !!game

async function newGame() {
	await g.start()
	useRouter().push('/setup/nickname')
}

async function continueGame() {
	useRouter().push('/cockpit')
}
</script>