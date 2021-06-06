import React, { FC, useState, useEffect } from 'react';
import { themes } from './themes';
import { Theme, ThemeName } from '../../models/Theme';
import { ThemeContext } from './ThemeContext';
import { AppState, Appearance } from 'react-native';

export const ThemeProvider: FC = ({ children }) => {
  const [theme, _setTheme] = useState<Theme>(
    themes[Appearance.getColorScheme() || 'light'],
  );

  const setTheme = (themeName: ThemeName) => _setTheme(themes[themeName]);

  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state === 'active') setTheme(Appearance.getColorScheme() || 'light');
    });
  }, []);

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
