import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme";
import { Theme } from "app/providers/theme";
import { About } from "pages/about";
import { StoreDecorator } from "shared/config/storybook/decorators/store";

const meta = {
    title: 'pages/about',
    component: About,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: []
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};