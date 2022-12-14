import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light_theme',
  DARK = 'dark_theme',
}

export interface ThemeContext {
  theme?: Theme
  setTheme?(theme: Theme): void;
}

// eslint-disable-next-line no-redeclare
export const ThemeContext = createContext<ThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
