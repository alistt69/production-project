import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme";
import { StyleDecorator } from "shared/config/storybook/decorators/style";
import { RouterDecorator } from "shared/config/storybook/decorators/router";
import { Theme } from "app/providers/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    RouterDecorator,
    ThemeDecorator(Theme.LIGHT),
  ],
};

export default preview;

