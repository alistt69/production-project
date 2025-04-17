import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme";
import { Theme } from "app/providers/theme";
import { Input } from "./index";

const meta = {
    title: 'shared/input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'primary light'
    },
};

export const PrimaryDark: Story = {
    args: {
        placeholder: 'primary dark'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};