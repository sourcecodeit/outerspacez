<template>
	<div class="flex flex-col items-center relative">
		<Icon name="ic:twotone-lock" size="80" class="absolute z-10 top-[50%] -mt-[40px]" v-if="locked" />
		<img :src="`/ships/${index + 1}.png`" class="w-full h-full object-contain m-auto" :class="{
				'opacity-50': locked
			}" />
	</div>
</template>
<script setup>
defineProps(['index', 'locked'])
</script>