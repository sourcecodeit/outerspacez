<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps(['label', 'value'])
const bar = ref(null);


</script>
<template>
    <div class="flex start flex-col text-left">
        <label>{{ props.label }}</label>
        <span>{{ value }}</span>
        <div class="bar-bg w-full relative">
            <div ref="bar" :style="`width: ${value}%`" class="bar absolute top-0 left-0"></div>
        </div>
    </div>
</template>
<style scoped>
.bar-bg {
    height: 6px;
    background: url('@/assets/stats-bar-bg.png');
}
label {
    color: var(--color-label);
    font-size: 9px;
}
.bar {
    height: 6px;
    background: url('@/assets/stats-bar.png');
    transition: all .25s;
}
</style>