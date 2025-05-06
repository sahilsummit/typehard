export interface Theme {
  name: string;
  background: string;
  text: string;
  font: string;
  primary: string;
  secondary: string;
  tertiary: string;
  icon: string;
  label: string;
}

export type ThemeMap = Record<string, Theme>;

export enum ThemeName {
  Dark = 'dark',
  Light = 'light',
  Cartoon = 'cartoon',
  Terminal = 'terminal',
  Neon = 'neon',
}
