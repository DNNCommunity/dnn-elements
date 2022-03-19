import { html } from "lit-html";
import { ifDefined } from 'lit-html/directives/if-defined';
import { Meta } from "@storybook/web-components";
import readme from './readme.md';

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
            control: 'boolean',
        },
        'useIntermediate': {
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
            ?checked=${ifDefined(args.checked)}
            ?use-intermediate=${ifDefined(args.useIntermediate)}
            value=${ifDefined(args.value)}>
        </dnn-checkbox>
    `;

export const Checkbox = Template.bind({});
Checkbox.args = {
    checked: false,
    useIntermediate: false,
    value: '1',
};
