<template>
	<a class="uppercase px-4 py-2 rounded-lg" :class="{
		'bg-slate-700 bg-opacity-50': active,
	}">
		<slot />
	</a>
</template>
<script setup>
defineProps(['active'])
</script>