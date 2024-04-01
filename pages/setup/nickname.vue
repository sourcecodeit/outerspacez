<template>
	<NuxtLayout name="screen" title="Nickname">
		<template #bar-right>
			<UiNext v-if="nickname" @click="next()" />
		</template>
		<UiCol class="mx-8 gap-4 pt-20">
			<label>Enter your battle name:</label>
			<input type="text" v-model="nickname" />
		</UiCol>
	</NuxtLayout>
</template>
<script setup>
const g = useGame()
const game = await g.load()
console.log(game.toJSON())
const nickname = ref(game.toJSON().player.nickname)

function next() {
	g.setNickname(nickname.value)
	useRouter().push('/setup/career')
}
</script>