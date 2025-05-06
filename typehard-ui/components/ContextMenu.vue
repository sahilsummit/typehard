<script setup lang="ts">
import type { ContextMenuItem } from '@nuxt/ui';
import { ThemeName, type Theme } from '~/types/theme';

const currentTheme = useCurrentTheme() as unknown as Ref<ThemeName | null>;
const { transformTheme } = useUtils();
const themes = useThemes() as unknown as Ref<Theme[]>;
const transformedThemes = computed(() => transformTheme(themes.value));

const items = computed(() => [
  [
    {
      label: 'Appearance',
      children: transformedThemes.value,
    },
  ],
  // [
  //   {
  //     label: 'Show Sidebar',
  //     kbds: ['meta', 's'],
  //   },
  //   {
  //     label: 'Show Toolbar',
  //     kbds: ['shift', 'meta', 'd'],
  //   },
  //   {
  //     label: 'Collapse Pinned Tabs',
  //     disabled: true,
  //   },
  // ],
  // [
  //   {
  //     label: 'Refresh the Page',
  //   },
  //   {
  //     label: 'Clear Cookies and Refresh',
  //   },
  //   {
  //     label: 'Clear Cache and Refresh',
  //   },
  //   {
  //     type: 'separator',
  //   },
  //   {
  //     label: 'Developer',
  //     children: [
  //       [
  //         {
  //           label: 'View Source',
  //           kbds: ['meta', 'shift', 'u'],
  //         },
  //         {
  //           label: 'Developer Tools',
  //           kbds: ['option', 'meta', 'i'],
  //         },
  //         {
  //           label: 'Inspect Elements',
  //           kbds: ['option', 'meta', 'c'],
  //         },
  //       ],
  //       [
  //         {
  //           label: 'JavaScript Console',
  //           kbds: ['option', 'meta', 'j'],
  //         },
  //       ],
  //     ],
  //   },
  // ],
]);
</script>

<template>
  <UContextMenu
    :items="items"
    :ui="{
      content: 'w-50',
    }"
  >
    <slot />
  </UContextMenu>
</template>
