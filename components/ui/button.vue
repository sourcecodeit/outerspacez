<template>
	<div class="button relative" @click="handleClick">
		<img src="@/assets/bg/button-bg.png" class="absolute top-0 left-0 right-0 bottom-0 z-0" />
		<slot></slot>
	</div>
</template>
<script setup>
const props = defineProps(['to'])

function handleClick() {
	if (props.to) {
		navigateTo(props.to)
	}
}
</script>