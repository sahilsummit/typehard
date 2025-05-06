<template>
  <div>
    <UApp>
      <ContextMenu>
        <template #default>
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </template>
      </ContextMenu>
    </UApp>
  </div>
</template>

<script setup lang="ts">
const { fetchThemes } = useUtils();

onBeforeMount(async () => {
  await fetchThemes();
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
