import { html } from "lit-html";
import { ifDefined } from 'lit-html/directives/if-defined';
import { Meta } from "@storybook/web-components";
import { injectStyles } from "../../../.storybook/utilities";
import readme from './readme.md';

export default {
    title: 'Elements/Toggle',
    component: 'dnn-toggle',
    parameters: {
        actions: {
            handles: ['checkChanged'],
        },
        notes:  readme,
    },
    argTypes: {
        'checked': {
            control: 'boolean',
        },
        'disabled': {
            control: 'boolean',
        },
        '--background': {
            control: 'color'
        },
        '--background-checked': {
            control: 'color'
        },
        '--handle-background': {
            control: 'color'
        },
        '--handle-background-checked': {
            control: 'color'
        },
        '--border-radius': {
            control: 'text'
        },
        '--handle-border-radius': {
            control: 'text'
        },
      },
} as Meta;

const Template = (args: {
    checked: boolean;
    disabled: boolean;
}, context) =>
    html`
        <dnn-toggle
            style=${ifDefined(injectStyles(args, context))}
            ?checked=${ifDefined(args.checked)}
            ?disabled=${ifDefined(args.disabled)}>
        </dnn-toggle>
    `;

export const Toggle = Template.bind({});
Toggle.args = {
    checked: false,
    disabled: false,
};
