<template>
  <UiRow class="justify-around">
    <UiCol class="gap-2">
      <UiRow class="gap-2 h-[40px]">
        <img src="@/assets/ui/icon-agi.png" class="w-[20px]" />
        <span class="text-xl">{{ agi }}</span>
      </UiRow>
      <h3 class="text-xs text-center text-cyan-300">Agility</h3>
    </UiCol>
    <UiCol class="gap-2">
      <UiRow class="gap-2 h-[40px]">
        <img src="@/assets/ui/icon-hull.png" class="w-[20px]" />
        <span class="text-xl">{{ hull }}</span>
      </UiRow>
      <h3 class="text-xs text-center text-cyan-300">Hull</h3>
    </UiCol>
    <UiCol class="gap-2">
      <UiRow class="gap-2 h-[40px]">
        <img src="@/assets/ui/icon-cargo.png" class="w-[28px]" />
        <span class="text-xl">{{ cargo }}</span>
      </UiRow>
      <h3 class="text-xs text-center text-cyan-300">Cargo</h3>
    </UiCol>
  </UiRow>
</template>

<script lang="ts" setup>
defineProps(['agi', 'hull', 'cargo'])
</script>

<style>

</style>