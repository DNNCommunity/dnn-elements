import { html } from "lit-html";
import { Meta } from "@storybook/web-components";
import readme from './readme.md';
import { ifDefined } from "lit-html/directives/if-defined";

export default {
    title: 'Elements/Checkbox',
    component: 'dnn-checkbox',
    parameters: {
        actions: {
            handles: ['checkedchange'],
        },
        notes:  readme,
    },
    argTypes: {
        'checked': {
            options: ['checked', 'unchecked', 'intermediate'],
            control: 'radio',
        },
        'use-intermediate': {
            control: 'boolean',
        },
        'value': {
            control: 'text',
        },
      },
} as Meta;

const Template = (args) =>
    html`
        <dnn-checkbox
            checked=${args.checked}
            ?use-intermediate=${ifDefined(args.useIntermediate)}
            value=${args.value}>
        </dnn-checkbox>
    `;

export const Checkbox = Template.bind({});
Checkbox.args = {
    checked: 'unchecked',
    useIntermediate: false,
    value: '1',
};
