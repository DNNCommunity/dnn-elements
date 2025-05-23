import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md?raw";

const meta: Meta = {
  title: 'Elements/Button',
  component: 'dnn-button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    appearance: {
      options: ['primary', 'danger', 'secondary', 'tertiary'],
      control: {
        type: 'select',
      },
    },
    type: {
      options: ['reset', 'submit', 'button'],
      control: {
        type: 'select',
      },
    },
    reversed: {
      control: 'boolean',
    },
    size: {
        options: ['small', 'normal', 'large'],
        control: {
            type: 'select',
        },
    },
    confirm: {
        control: 'boolean',
    },
    confirmYesText: {
        control: 'text',
    },
    confirmNoText: {
        control: 'text',
    },
    confirmMessage: {
        control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};
export default meta;

const eventsFromNames = actions('onClick', 'onConfirmed', 'onCanceled');

const Template = (args) =>
    html`
        <dnn-button
            type=${ifDefined(args.type)}
            appearance=${args.appearance ?? 'primary'}
            ?reversed=${args.reversed}
            size=${ifDefined(args.size)}
            ?confirm=${args.confirm}
            confirm-yes-text=${ifDefined(args.confirmYesText)}
            confirm-no-text=${ifDefined(args.confirmNoText)}
            confirm-message=${ifDefined(args.confirmMessage)}
            ?disabled=${args.disabled}
            @click=${e => eventsFromNames.onClick(e)}
            @confirmed=${e => eventsFromNames.onConfirmed(e)}
            @canceled=${e => eventsFromNames.onCanceled(e)}
          >
            ${unsafeHTML(args.slot)}
        </dnn-button>
    `;


type Story = StoryObj;

export const Primary : Story = Template.bind({});
Primary.args = {
  slot: 'Click me!',
  reversed: false,
  confirm: false,
  disabled: false,
};

export const Secondary : Story = Template.bind({});
Secondary.args = {
  ...Primary.args,
  appearance: 'secondary',
};

export const Tertiary : Story = Template.bind({});
Tertiary.args = {
  ...Primary.args,
  appearance: 'tertiary',
};

export const Danger : Story = Template.bind({});
Danger.args = {
  ...Primary.args,
  appearance: 'danger',
};

export const Reversed : Story = Template.bind({});
Reversed.args = {
  ...Primary.args,
  reversed: true,
};

export const Small : Story = Template.bind({});
Small.args = {
  ...Primary.args,
  size: "small",
};

export const Large : Story = Template.bind({});
Large.args = {
  ...Primary.args,
  size: "large",
};

export const Confirm : Story = Template.bind({});
Confirm.args = {
  ...Primary.args,
  confirm: true,
  confirmYesText: "Oh Yeah",
  confirmNoText: "No Way",
  confirmMessage: "Are you sure that you're sure that you're sure?",
};

export const Disabled : Story = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};