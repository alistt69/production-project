import React from 'react';
import { Theme, ThemeProvider } from 'app/providers/theme';

export const ThemeDecorator = (theme: Theme) => {
  return function ThemeWrapper(Story: React.ComponentType) {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`root ${theme}`} style={{ width: `100vw`, height: `100vh` }}>
          <Story />
        </div>
      </ThemeProvider>
    );
  };
};