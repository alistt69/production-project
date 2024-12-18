import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./index";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme";
import { Theme } from "app/providers/theme";

const meta = {
    title: 'shared/link',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        to: '/'
    }
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};