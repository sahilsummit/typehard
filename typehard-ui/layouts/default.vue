<template>
  <div :style="styles" class="h-screen w-screen">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ThemeName, type Theme } from '~/types/theme';
const { applyTheme } = useUtils();
applyTheme(ThemeName.Dark);

const currentTheme = useCurrentTheme() as unknown as Ref<Theme | null>;
const styles = computed(() => ({
  backgroundColor: currentTheme.value?.background,
  fontFamily: currentTheme.value?.font,
}));
</script>
