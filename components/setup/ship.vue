<template>
	<div class="flex flex-col items-center">
		<img :src="`/ships/${index}.png`" class="w-full h-full object-contain m-auto" />
	</div>
</template>
<script setup>
defineProps(['index'])
</script>