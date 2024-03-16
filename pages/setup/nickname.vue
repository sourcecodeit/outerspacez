<template>
	<NuxtLayout name="screen" :next="next" title="Nickname">
		<UiCol class="mx-8 gap-4 pb-20">
			<label>Enter your battle name:</label>
			<input type="text" v-model="nickname" />
		</UiCol>
	</NuxtLayout>
</template>
<script setup>
import { useStorage } from '@vueuse/core'

const nickname = useStorage('nickname')

const next = computed(() => {
	return nickname.value ? '/setup/career' : null
})
</script>