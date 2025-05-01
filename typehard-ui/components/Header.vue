<template>
  <div>
    <h1 :style="{ color: primaryColor }">Header</h1>
  </div>
</template>

<script setup lang="ts">
const primaryColor = usePrimaryColor();
</script>
