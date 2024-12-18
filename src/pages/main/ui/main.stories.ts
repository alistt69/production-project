import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme";
import { Theme } from "app/providers/theme";
import { Main } from "pages/main";

const meta = {
    title: 'pages/main',
    component: Main,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: []
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};