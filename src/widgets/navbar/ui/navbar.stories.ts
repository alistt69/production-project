import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './index';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';
import { Theme } from 'app/providers/theme';

const meta = {
  title: 'widgets/navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
