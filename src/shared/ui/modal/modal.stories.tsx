import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme";
import { Theme } from "app/providers/theme";
import { Modal } from "shared/ui/modal/index";

const meta = {
    title: 'shared/modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {
        isOpen: true,
        children: <h1>modal</h1>,
        onClose: () => {},
    }
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: <h1>modal</h1>,
        onClose: () => {},
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};