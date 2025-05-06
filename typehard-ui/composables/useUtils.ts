import type { Ref } from 'vue';
import { ThemeName, type Theme, type ThemeMap } from '~/types/theme';

export const useUtils = () => {
  const fetchThemes = async () => {
    const themes = useThemes() as unknown as Ref<ThemeMap | null>;
    const data = await $fetch<ThemeMap>('/api/themes');
    themes.value = data;
  };

  const applyTheme = (theme: ThemeName) => {
    const themes = useThemes() as unknown as Ref<ThemeMap | null>;
    const currentTheme = useCurrentTheme() as unknown as Ref<Theme | null>;
    currentTheme.value = themes.value?.[theme] || null;

    const primaryColor = usePrimaryColor() as Ref<string | null>;
    const secondaryColor = useSecondaryColor() as Ref<string | null>;
    const tertiaryColor = useTertiaryColor() as Ref<string | null>;
    primaryColor.value = currentTheme.value?.primary || null;
    secondaryColor.value = currentTheme.value?.secondary || null;
    tertiaryColor.value = currentTheme.value?.tertiary || null;
  };

  const transformTheme = (themeObject: Theme[]) => {
    const currentTheme = useCurrentTheme() as unknown as Ref<Theme | null>;
    return Object.entries(themeObject ?? {}).map(([key, value]) => {
      const { name, label, icon } = value;
      const contextMenuItem = {
        label: label,
        icon: icon,
        onSelect: () => applyTheme(name as ThemeName),
        type: 'checkbox' as const,
        checked: name === currentTheme.value?.name,
      };
      return contextMenuItem;
    });
  };
  return {
    fetchThemes,
    applyTheme,
    transformTheme,
  };
};
