import type { Meta, StoryObj } from "@storybook/react";
import { AppButton, AppButtonSize, AppButtonTheme } from "./index";
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
        theme: AppButtonTheme.CLEAR
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.OUTLINE
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.OUTLINE
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Background: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.BACKGROUND
    }
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.BACKGROUND_INVERTED
    }
};

export const Square: Story = {
    args: {
        children: '<>',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
        square: true
    }
};

export const SquareSizeL: Story = {
    args: {
        children: '<>',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: AppButtonSize.L
    }
};

export const SquareSizeXL: Story = {
    args: {
        children: '<>',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: AppButtonSize.XL
    }
};

export const Disabled: Story = {
    args: {
        children: 'im disabled:(',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
        disabled: true,
    }
};