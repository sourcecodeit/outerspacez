<template>
  <UiCol class="screen">
    <slot />
  </UiCol>
</template>
<style scoped>
.screen {
  background-image: url('@/assets/bg/start.jpg');
  @apply bg-cover text-white text-center bg-center;
}
</style>