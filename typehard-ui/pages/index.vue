<template>
  <div>
    <h1 :style="{ color: primaryColor }">Home</h1>
    <Header />
    <div :style="{ color: secondaryColor }">
      <NuxtLink to="/test">To Test</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const primaryColor = usePrimaryColor();
const secondaryColor = useSecondaryColor();
const tertiaryColor = useTertiaryColor();
</script>
