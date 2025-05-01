<template>
  <div :style="styles" class="h-screen w-screen">
    <slot />
  </div>
</template>

<script setup lang="ts">
const { applyTheme } = useUtils();
const currentTheme = useCurrentTheme();
applyTheme('terminal');
const styles = computed(() => ({
  backgroundColor: currentTheme.value?.background,
  fontFamily: currentTheme.value?.font,
}));
</script>
