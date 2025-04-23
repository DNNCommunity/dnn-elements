import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md?raw";

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
        required: {
            control: 'boolean',
        },
      },
}

const eventsFromNames = actions("checkedchange");

export default meta;

type Story = StoryObj;

export const Checkbox : Story = {
    args:
    {
        checked: 'unchecked',
        useIntermediate: false,
        value: '1',
        required: false,
    },
    render: (args) =>
        html`
            <dnn-checkbox
                checked=${args.checked}
                ?use-intermediate=${ifDefined(args.useIntermediate)}
                value=${args.value}
                ?required=${ifDefined(args.required)}
            />
        `,
};