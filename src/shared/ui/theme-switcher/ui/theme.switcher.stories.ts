import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./index";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme";
import { Theme } from "app/providers/theme";

const meta = {
    title: 'shared/theme-switcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],

};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};