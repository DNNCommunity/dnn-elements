import type { Meta, StoryObj } from "@storybook/react";
import { defineCustomElements, DnnButton } from "@dnncommunity/dnn-elements-react";
import React from "react";

defineCustomElements();

const meta: Meta<typeof DnnButton> = {
    title: "DnnButton",
    component: DnnButton,
};

export default meta;
type Story = StoryObj<typeof DnnButton>;

export const Primary: Story = {
    render: ({ ...args }) => (
        <DnnButton {...args}>Click Me</DnnButton>
    ),
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