// .storybook/preview.ts
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/style';
import { StoreDecorator } from '../../src/shared/config/storybook/decorators/store';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/theme';
import { Theme } from '../../src/app/providers/theme';
import { fn } from '@storybook/test';

const preview = {
  decorators: [StyleDecorator, StoreDecorator(), ThemeDecorator(Theme.LIGHT)],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onChange: { action: 'changed' },
  },
  args: {
    onClick: fn(),
  },
};

export default preview;
