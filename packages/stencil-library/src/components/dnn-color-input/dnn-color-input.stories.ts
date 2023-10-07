import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, TemplateResult } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";

const meta: Meta = {
  title: 'Elements/Color Input',
  component: 'dnn-color-input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    "color":{
      control: 'string',
    },
    "contrast-color":{
      control: 'string',
    },
    "light-color":{
      control: 'string',
    },
    "dark-color":{
      control: 'string',
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
    readonly: {
      control: 'boolean',
    },
    localization: {
      control: 'object',
    },
    "use-contrast-color": {
      control: 'boolean',
    },
    "use-light-color": {
      control: 'boolean',
    },
    "use-dark-color": {
      control: 'boolean',
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

const eventsFromNames = actions("colorChange", "colorInput");

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
        <dnn-color-input
          color=${ifDefined(args.color)}
          contrast-color=${ifDefined(args["contrast-color"])}
          light-color=${ifDefined(args["light-color"])}
          dark-color=${ifDefined(args["dark-color"])}
          ?use-contrast-color=${ifDefined(args["use-contrast-color"])}
          ?use-light-color=${ifDefined(args["use-light-color"])}
          ?use-dark-color=${ifDefined(args["use-dark-color"])}
          help-text=${ifDefined(args["help-text"])}
          label=${ifDefined(args.label)}
          name=${ifDefined(args.name)}
          ?readonly=${ifDefined(args.readonly)}
          @colorChange=${e => eventsFromNames.colorChange(e)}
          @colorInput=${e => eventsFromNames.colorInput(e)}
        >
        ${getSlots(args)}
        </dnn-input>
    `;


type Story = StoryObj;

export const Color : Story = Template.bind({});
Color.args = {
  "allow-show-password": false,
  autocomplete: "off",
  disabled: false,
  "disable-validity-reporting": false,
  multiple: false,
  readonly: false,
  required: false,
  color: "000088",
};

export const WithLabelAndHelp : Story = Template.bind({});
WithLabelAndHelp.args = {
  ...Color.args,
  "help-text": "Choose a color",
  label: "Color",
};

export const WithContrast : Story = Template.bind({});
WithContrast.args = {
  ...Color.args,
  "contrast-color": "FFFFFF",
  "color": "0000AA",
  "use-contrast-color": true,
};

export const ColorSystem : Story = Template.bind({});
ColorSystem.args = {
  ...WithContrast.args,
  "light-color": "0000FF",
  "dark-color": "000055",
  "use-light-color": true,
  "use-dark-color": true,
};