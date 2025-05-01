<template>
  <div>
    <h1>Test</h1>
    <NuxtLink to="/">To Home</NuxtLink>
    {{ themes }}
  </div>
</template>

<script setup lang="ts">
const themes = useThemes();

</script>