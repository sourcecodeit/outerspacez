<script setup>
import { reactive } from 'vue';

const props = defineProps(['tabs']);
const emit = defineEmits(['click'])
const state = reactive({ tabs: [ ...props.tabs ] })

const _click = (tab) => {
    state.tabs = state.tabs.map(t => {
        t.active = tab.text == t.text
        return t;
    });
    emit('click', tab.id);
}
</script>
<template>
    <ul class="p-0 m-0 flex w-full">
        <li class="p-0 w-full mx-1" @click="_click(tab)" v-for="tab in state.tabs" :key="tab.text" :class="{ active: tab.active }">{{ tab.text }}</li>
    </ul>
</template>
<style scoped>
li {
    font-family: 'Audiowide', cursive;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 300;
    color: rgba(255, 255, 255, .7);
    list-style-type: none;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 2px;
    cursor: pointer;
    border-image-source: linear-gradient(to left, rgba(74, 143, 202, 0.1), rgba(174, 107, 93, 0.1));
    background: linear-gradient(90deg, rgba(74, 143, 202, 0.1) 0%, rgba(174, 107, 93, 0.1) 100%);
}
li.active {
    color: #fff;
    border-image-source: linear-gradient(to left, rgba(74, 143, 202, 0.5), rgba(174, 107, 93, 0.5));
    background: linear-gradient(90deg, rgba(74, 143, 202, 0.3) 0%, rgba(174, 107, 93, 0.3) 100%);
}
</style>