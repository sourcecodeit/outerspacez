<template>
	<div class="border-cyan-500 border-opacity-50 rounded-full w-[240px] overflow-hidden border-[8px]">
		<div class="bg-gradient-to-r from-cyan-500 ">
			<img :src="`/characters/${index}.png`" class="w-full h-full object-fill" />
		</div>
	</div>
</template>
<script setup>
defineProps(['index'])
</script>