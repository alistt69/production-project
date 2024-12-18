import type { Meta, StoryObj } from "@storybook/react";
import { AppButton, AppThemeButton } from "./index";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme";
import { Theme } from "app/providers/theme";

const meta = {
    title: 'shared/button',
    component: AppButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: AppThemeButton.CLEAR
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: AppThemeButton.OUTLINE
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: AppThemeButton.OUTLINE
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};