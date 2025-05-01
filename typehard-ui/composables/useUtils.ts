export const useUtils = () => {
  const fetchThemes = async () => {
    const themes = useThemes();
    const data = await $fetch('/api/themes')
    themes.value = data;
  }

  return {
    fetchThemes,
  }
}