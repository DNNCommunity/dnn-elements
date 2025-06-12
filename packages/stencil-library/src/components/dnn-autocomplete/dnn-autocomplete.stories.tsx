import type { Meta, StoryObj } from "@stencil/storybook-plugin";
import { h } from '@stencil/core';
import { DnnAutocomplete } from "./dnn-autocomplete";
import readme from "./readme.md?raw";

const meta: Meta<DnnAutocomplete> = {
  title: 'Elements/AutoComplete',
  component: DnnAutocomplete,
  parameters: {
    description: {
      component: readme,
    },
    title: {
      component: "Test",
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    helpText: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    preloadThresholdPixels:{
      control: 'number',
    },
    renderSuggestion: {
      control: 'object',
    },
    required: {
      control: 'boolean',
    },
    suggestions: {
      control: 'object',
    },
    totalSuggestions: {
      control: 'number',
    },
    value: {
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<DnnAutocomplete>;

export const Primary : Story = {
  args: {
    label: 'AutoComplete',
  },
  render: props => <dnn-autocomplete {...props} />,
};

export const Disabled: Story = {
  args: {
    label: "AutoComplete",
    disabled: true
  },

  render: props => <dnn-autocomplete {...props} />
};