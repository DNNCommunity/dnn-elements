import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, TemplateResult } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";

const meta: Meta = {
  title: 'Elements/Input',
  component: 'dnn-input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    "allow-show-password":{
      control: 'boolean',
    },
    autocomplete: {
      type: 'string',
    },
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
    min: {
      control: 'number',
    },
    minlength: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    maxlength: {
      control: 'number',
    },
    multiple: {
      control: 'boolean',
    },
    name: {
      control: 'text',
    },
    pattern: {
      control: 'text',
    },
    readonly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    step: {
      control: 'number',
    },
    type: {
      options: ["date", "datetime-local", "email", "number", "password", "tel", "text", "time", "url", "search"],
      control: {
        type: 'select',
      },
    },
    value: {
      control: 'text',
    },
    prefix: {
      control: 'text',
    },
    suffix: {
      control: 'text',
    },
  },
};
export default meta;

const eventsFromNames = actions("valueChange", "valueInput");

function getSlots(args: any): TemplateResult<1>[] {
  const slots: TemplateResult<1>[] = [];
  if (args.prefix){
    slots.push(html`<div slot="prefix">${args.prefix}</div>`);
  }

  if (args.suffix){
    slots.push(html`<div slot="suffix">${args.suffix}</div>`);
  }

  return slots;
}

const Template = (args) =>
    html`
        <dnn-input
          autocomplete=${args.autocomplete=="off" ? nothing : args.autocomplete}
          ?disable-validity-reporting=${args["disable-validity-reporting"]}
          ?disabled=${args.disabled}
          help-text=${ifDefined(args["help-text"])}
          label=${ifDefined(args.label)}
          min=${ifDefined(args.min)}
          minlength=${ifDefined(args.minlength)}
          max=${ifDefined(args.max)}
          maxlength=${ifDefined(args.maxlength)}
          name=${ifDefined(args.name)}
          ?multiple=${ifDefined(args.multiple)}
          pattern=${ifDefined(args.pattern)}
          ?readonly=${ifDefined(args.readonly)}
          ?required=${ifDefined(args.required)}
          step=${ifDefined(args.step)}
          type=${ifDefined(args.type)}
          value=${ifDefined(args.value)}
          ?allow-show-password=${args["allow-show-password"]}
          @valueChange=${e => eventsFromNames.valueChange(e)}
          @valueInput=${e => eventsFromNames.valueInput(e)}
        >
        ${getSlots(args)}
        </dnn-input>
    `;


type Story = StoryObj;

export const Text : Story = Template.bind({});
Text.args = {
  "allow-show-password": false,
  autocomplete: "off",
  disabled: false,
  "disable-validity-reporting": false,
  multiple: false,
  readonly: false,
  required: false,
};

export const Password : Story = Template.bind({});
Password.args = {
  ...Text.args,
  "allow-show-password": true,
  type: "password",
  minlength: 8,
  maxlength: 16,
}

export const Disabled : Story = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithLabelAndHelp : Story = Template.bind({});
WithLabelAndHelp.args = {
  label: "Name",
  "help-text": "What is your name?",
};

export const Number : Story = Template.bind({});
Number.args = {
  type: "number",
  min: 0,
  max: 10,
  step: 0.1,
}

export const Email : Story = Template.bind({});
Email.args = {
  label: "Email",
  "help-text": "What is your email?",
  type: "email",
  multiple: true,
};

export const UsPhoneNumber: Story = Template.bind({});
UsPhoneNumber.args = {
  type: "tel",
  pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
  label: "Telephone",
  "help-text": "Ex: 123-456-7890",
};

export const ReadOnly: Story = Template.bind({});
ReadOnly.args = {
  label: "Read Only",
  "help-text": "Can't touch this!",
  readonly: true,
  value: "Read Only",
};

export const Required: Story = Template.bind({});
Required.args = {
  label: "Required",
  "help-text": "You must enter a value!",
  required: true,
};

export const Amount: Story = Template.bind({});
Amount.args = {
  label: "Amount",
  "help-text": "How much does it cost?",
  type: "number",
  min: 0,
  max: 1000000,
  step: 0.01,
  prefix: "$",
};