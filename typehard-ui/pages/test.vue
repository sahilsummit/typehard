<template>
  <div>
    <h1 :style="{ color: primaryColor }">Test</h1>
    <Header />
    <div :style="{ color: secondaryColor }">
      <NuxtLink to="/">To Home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'terminal',
});

const primaryColor = usePrimaryColor();
const secondaryColor = useSecondaryColor();
const tertiaryColor = useTertiaryColor();
</script>
