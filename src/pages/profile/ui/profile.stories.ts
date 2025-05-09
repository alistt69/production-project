import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';
import { Theme } from 'app/providers/theme';
import { Profile } from 'pages/profile';

const meta = {
  title: 'pages/profile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
