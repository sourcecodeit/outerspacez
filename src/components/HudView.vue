<script setup>
import hud1 from '@/assets/hud-1.png';
import hud2 from '@/assets/hud-2.png';
import { ref, onMounted } from 'vue'

const hud = ref(null)

onMounted(() => {
  hud.value.style.height = `${hud.value.clientWidth}px`;
})
</script>
<template>
    <div id="hud" ref="hud" class="relative">
        <img :src="hud1" alt="" class="hud1 absolute top-0" />
        <img :src="hud2" alt="" class="hud2 absolute top-0" />
        <slot></slot>
    </div>
</template>
<style scoped>
    #hud {
        overflow: hidden;;
    }
    img {
        width: 100%;
    }
    .hud1 {
        animation: fade1 4s linear infinite alternate, rotation 300s infinite linear;
    }
    .hud2 {
        opacity: 0;
        animation: fade2 4s linear infinite alternate, rotation 300s infinite reverse linear;
    }

    @keyframes fade1 {
        from { opacity: 0; }
        to { opacity: .5; } 
    }
    @keyframes fade2 {
        from { opacity: .5; }
        to { opacity: 0; } 
    }
    @keyframes rotation {
        from { transform: rotate(0); }
        to { transform: rotate(360deg); }
    }
</style>