<template>
	<img :src="`/characters/male/${index}.png`" class="rounded-full w-[240px]" />
</template>
<script setup>
defineProps(['index'])
</script>