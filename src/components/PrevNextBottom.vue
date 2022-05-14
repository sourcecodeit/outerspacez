<script setup>
import nextAudioWav from '@/assets/audio/effects/digi_beep.wav';

const props = defineProps(['onNext', 'onPrev']);
var nextAudio = new Audio(nextAudioWav);

const _onNext = () => {
    nextAudio.play();
    props.onNext();
}

const _onPrev = () => {
    nextAudio.play();
    props.onPrev();
}

</script>
<template>
    <div class="fixed bottom-3 w-screen">
        <button v-if="onPrev" @click="_onPrev" class="absolute prev block left-3"></button>
        <button v-if="onNext" @click="_onNext" class="absolute next block right-3"></button>
    </div>
</template>
<style scoped>
div {
    height: 46px;
}
.next, .prev {
    appearance: none;
    background: url('@/assets/arrow-next-box.png') no-repeat;
    background-size: contain;
    width:77px;
    height: 46px;
}
.prev {
    transform: rotate(180deg);
}
</style>