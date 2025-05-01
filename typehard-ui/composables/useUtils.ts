import { computed } from 'vue';
export const useUtils = () => {
  const fetchThemes = async () => {
    const themes = useThemes();
    const data = await $fetch('/api/themes');
    themes.value = data;
  };

  const applyTheme = (theme: string) => {
    const themes = useThemes();
    const currentTheme = useCurrentTheme();
    currentTheme.value = themes.value?.[theme];

    const primaryColor = usePrimaryColor();
    const secondaryColor = useSecondaryColor();
    const tertiaryColor = useTertiaryColor();
    primaryColor.value = currentTheme.value?.primary;
    secondaryColor.value = currentTheme.value?.secondary;
    tertiaryColor.value = currentTheme.value?.tertiary;
  };
  return {
    fetchThemes,
    applyTheme,
  };
};
