import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';
import { Theme } from 'app/providers/theme';
import { Text, TextTheme } from 'shared/ui/text/index';

const meta = {
  title: 'shared/text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'Text',
  },
};

export const Titled: Story = {
  args: {
    title: 'Title',
  },
};

export const Texted: Story = {
  args: {
    text: 'Text',
  },
};

export const Error: Story = {
  args: {
    title: 'Error',
    theme: TextTheme.ERROR,
  },
};

export const ErrorDark: Story = {
  args: {
    title: 'Error',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
