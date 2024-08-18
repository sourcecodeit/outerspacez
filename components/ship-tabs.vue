<template>
	<div class="flex justify-around my-6">
		<UiTab :active="currentTab == 1" @click="onClick(1)">Stats</UiTab>
		<UiTab :active="currentTab == 2" @click="onClick(2)">Fitting</UiTab>
		<UiTab :active="currentTab == 3" @click="onClick(3)">Cargo</UiTab>
	</div>
</template>
<script setup>
defineProps(['currentTab'])
const emit = defineEmits(['changeTab'])

function onClick(tabIndex) {
	emit('changeTab', tabIndex)
}
</script>