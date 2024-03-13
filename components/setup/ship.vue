<template>
	<div class="flex flex-col items-center relative">
		
		<img :src="`/ships/${index}.png`" class="w-full h-full object-contain m-auto"
			:class="{
				'opacity-50': locked
			}"
		/>
	</div>
</template>
<script setup>
defineProps(['index', 'locked'])
</script>