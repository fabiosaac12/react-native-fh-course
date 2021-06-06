import { createContext } from 'react';
import { Theme, ThemeName } from '../../models/Theme';

type ContextProps = {
  theme: Theme;
  setTheme: (themeName: ThemeName) => void;
};

export const ThemeContext = createContext({} as ContextProps);
