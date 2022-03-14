import { html } from "lit-html";
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { Meta } from "@storybook/web-components";
import readme from './readme.md';

export default {
    title: 'Forms/Button',
    component: 'dnn-button',
    parameters: {
        actions: {
            handles: ['confirmed', 'canceled'],
        },
        notes:  readme,
    },
    argTypes: {
        type: {
          options: ['primary', 'secondary', 'tertiary'],
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
      args: {
        type: 'primary',
        reversed: false,
        size: 'medium',
        confirm: true,
        confirmYesText: 'Yes',
        confirmNoText: 'No',
        confirmMessage: 'Are you sure?',
        ' ': `Click Me!`,
        disabled: false,
      },
} as Meta;

const Template = (args) =>
    html`
        <dnn-button
            type=${ifDefined(args.type)}
            ?reversed=${ifDefined(args.reversed)}
            size=${ifDefined(args.size)}
            ?confirm=${ifDefined(args.confirm)}
            confirm-yes-text=${ifDefined(args.confirmYesText)}
            confirm-no-text=${ifDefined(args.confirmNoText)}
            confirm-message=${ifDefined(args.confirmMessage)}
            ?disabled=${ifDefined(args.disabled)}>
            ${unsafeHTML(args[' '])}
        </dnn-button>
    `;

export const Default = Template.bind({});
Default.args = {
    type: 'primary',
    reversed: false,
    size: 'medium',
    confirm: true,
    confirmYesText: 'Yes',
    confirmNoText: 'No',
    confirmMessage: 'Are you sure?',
    disabled: false,
};
