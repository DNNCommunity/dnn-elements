import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, TemplateResult } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";

const meta: Meta = {
  title: 'Elements/Select',
  component: 'dnn-select',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    "disable-validity-reporting": {
      control: 'boolean',
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
    name: {
      control: 'text',
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

const eventsFromNames = actions("valueChange");

const Template = (args) =>
    html`
        <dnn-select
          ?disable-validity-reporting=${args["disable-validity-reporting"]}
          ?disabled=${args.disabled}
          help-text=${ifDefined(args["help-text"])}
          label=${ifDefined(args.label)}
          name=${ifDefined(args.name)}
          ?required=${ifDefined(args.required)}
          value=${ifDefined(args.value)}
          @valueChange=${e => eventsFromNames.valueChange(e)}
        >
          <option value="">-- Select an option --</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </dnn-select>
    `;


type Story = StoryObj;

export const Dropdown : Story = Template.bind({});
Dropdown.args = {
  label: "Option",
  "help-text": "This is a help text",
  disabled: false,
  "disable-validity-reporting": false,
  readonly: false,
  required: false,
};

export const Required : Story = Template.bind({});
Required.args = {
  ...Dropdown.args,
  required: true,
}
