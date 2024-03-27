<template>
    <img :src="`/stars/${index + 1}.png`" class="w-[400px] -bottom-[100px] -left-[100px] absolute" />
</template>

<script lang="ts" setup>
defineProps(['index'])
</script>