import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, TemplateResult } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";

const meta: Meta = {
  title: 'Elements/Textarea',
  component: 'dnn-textarea',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    autocomplete: {
      type: 'string',
    },
    disabled: {
      control: 'boolean',
    },
    "help-text": {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    minlength: {
      control: 'number',
    },
    maxlength: {
      control: 'number',
    },
    name: {
      control: 'text',
    },
    readonly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
  },
};
export default meta;

const eventsFromNames = actions("valueChange", "valueInput");

const Template = (args) =>
    html`
        <dnn-textarea
          autocomplete=${args.autocomplete=="off" ? nothing : args.autocomplete}
          ?disabled=${args.disabled}
          help-text=${ifDefined(args["help-text"])}
          label=${ifDefined(args.label)}
          minlength=${ifDefined(args.minlength)}
          maxlength=${ifDefined(args.maxlength)}
          name=${ifDefined(args.name)}
          ?readonly=${ifDefined(args.readonly)}
          ?required=${ifDefined(args.required)}
          value=${ifDefined(args.value)}
          @valueChange=${e => eventsFromNames.valueChange(e)}
          @valueInput=${e => eventsFromNames.valueInput(e)}
        >
        </dnn-input>
    `;


type Story = StoryObj;

export const Text : Story = Template.bind({});
Text.args = {
  autocomplete: "off",
  disabled: false,
  readonly: false,
  required: false,
};