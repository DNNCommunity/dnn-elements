import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import readme from "./readme.md?raw";

const meta: Meta = {
  title: 'Elements/Progress Bar',
  component: 'dnn-progress-bar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    value: {
        control: 'number',
    },
    max: {
        control: 'number',
    },
    useGradient: {
        control: 'boolean',
    },
  },
};
export default meta;

const Template = (args) =>
    html`
        <dnn-progress-bar
            max=${ifDefined(args.max)}
            value=${ifDefined(args.value)}
            use-gradient=${ifDefined(args.useGradient)}
          >
        </dnn-progress-bar>
    `;


type Story = StoryObj;

export const Default : Story = Template.bind({});
Default.args = {
  max: '100',
  value: '80',
  useGradient: false,
};

export const Gradient : Story = Template.bind({});
Gradient.args = {
  ...Default.args,
  useGradient: true,
};
