import { Theme, ThemeProvider } from 'app/providers/theme';
import { Decorator } from '@storybook/react';
import { StoryContext } from '@storybook/types';

export const ThemeDecorator = (theme: Theme): Decorator => {
  return function ThemeDecoratorWrapper(Story, context: StoryContext) {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`root ${theme}`} style={{ width: '100vw', height: '100vh' }}>
          <Story {...context} />
        </div>
      </ThemeProvider>
    );
  };
};
