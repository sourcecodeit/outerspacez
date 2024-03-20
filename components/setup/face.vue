<template>
	<div class="border-cyan-500 border-opacity-50 rounded-full overflow-hidden border-[8px]">
		<div class="bg-gradient-to-r from-cyan-500 ">
			<img :src="`/characters/${index + 1}.png`" class="object-cover" :class="{
	'w-[200px] h-[200px]': size != 'small',
	'w-[80px] h-[80px]': size == 'small',
			}" />
		</div>
	</div>
</template>
<script setup>
defineProps({
	index: Number,
	size: {
		type: String,
		default: 'small'
	}
})


</script>