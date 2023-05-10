import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";

const meta : Meta = {
    title: 'Elements/Checkbox',
    component: 'dnn-checkbox',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                Component: readme,
            }
        }
    },
    argTypes: {        
        checked: {
            options: ['checked', 'unchecked', 'intermediate'],
            control: 'radio',
        },
        useIntermediate: {
            control: 'boolean',
        },
        value: {
            control: 'text',
        },
      },
}

const eventsFromNames = actions("checkedchange");

export default meta;

const Template = (args) =>
    html`
        <dnn-checkbox
            checked=${args.checked}
            ?use-intermediate=${ifDefined(args.useIntermediate)}
            value=${args.value}>
        </dnn-checkbox>
    `;

type Story = StoryObj;

export const Checkbox : Story = Template.bind({});
Checkbox.args = {
    checked: 'unchecked',
    useIntermediate: false,
    value: '1',
};