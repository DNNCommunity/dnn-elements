import type { Meta, StoryObj } from "@storybook/react";
import { defineCustomElements, DnnButton } from "@dnncommunity/dnn-elements-react";
import React from "react";

defineCustomElements();

const meta: Meta<typeof DnnButton> = {
    title: "DnnButton",
    component: DnnButton,
    argTypes: {
        type: {
            options: ["primary", "secondary", "tertiary"],
            control: { type: "inline-radio" },
        },
        reversed: {
            options: [true, false],
            control: { type: "boolean" },
        },
        size: {
            options: ["small", "normal", "large"],
            control: { type: "inline-radio" },
        },
        confirm: {
            options: [true, false],
            control: { type: "boolean" },
        },
        confirmYesText: {
            if: { arg: "confirm" },
            control: { type: "text" },
        },
        confirmNoText: {
            if: { arg: "confirm" },
            control: { type: "text" },
        },
        confirmMessage: {
            if: { arg: "confirm" },
            control: { type: "text" },
        },
        disabled: {
            options: [true, false],
            control: { type: "boolean" },
        },
        onClick: {
            action: "clicked",
        },
        onConfirmed: {
            action: "confirmed",
        },
        onCanceled: {
            action: "canceled",
        },
    },
};

export default meta;
type Story = StoryObj<typeof DnnButton>;

export const Primary: Story = {
    args: {
        type: "primary",
        reversed: false,
        size: "normal",
        confirm: false,
        disabled: false,
    },
    render: ({ ...args }) => (
        <DnnButton {...args}>Click Me</DnnButton>
    ),
};

export const Secondary: Story = {
    args: {
        type: "secondary",
        reversed: false,
        size: "normal",
        confirm: false,
        disabled: false,
    },
    render: ({ ...args }) => (
        <DnnButton {...args}>Click Me</DnnButton>
    ),
};

export const Confirm: Story = {
    args: {
        type: "secondary",
        reversed: false,
        size: "normal",
        confirm: true,
        confirmMessage: "Are you sure?",
        confirmYesText: "Yes",
        confirmNoText: "No",
        disabled: false,
    },
    render: ({ ...args }) => (
        <DnnButton {...args}>Click Me</DnnButton>
    ),
};

export const Reversed: Story = {
    args: {
        type: "primary",
        reversed: true,
        size: "normal",
        confirm: false,
        disabled: false,
    },
    render: ({ ...args }) => (
        <DnnButton {...args}>Click Me</DnnButton>
    ),
};

export const Disabled: Story = {
    args: {
        type: "primary",
        reversed: false,
        size: "normal",
        confirm: false,
        disabled: true,
    },
    render: ({ ...args }) => (
        <DnnButton {...args}>Click Me</DnnButton>
    ),
};