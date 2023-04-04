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
    render: () => <div><DnnButton>Primary</DnnButton></div>,
};