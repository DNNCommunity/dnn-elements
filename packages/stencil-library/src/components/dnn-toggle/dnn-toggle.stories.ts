import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";


const meta: Meta = {
    title: 'Elements/Toggle',
    component: 'dnn-toggle',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
    argTypes: {
        checked: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        background: {
            control: 'color'
        },
        backgroundChecked: {
            control: 'color'
        },
        handleBackground: {
            control: 'color'
        },
        handleBackgroundChecked: {
            control: 'color'
        },
        borderRadius: {
            control: 'text'
        },
        handleBorderRadius: {
            control: 'text'
        },
      },
} 
export default meta;

const eventsFromNames = actions('checkChanged',);

const Template = (args: {
    checked: boolean;
    disabled: boolean;
}, context) =>
    html`
        <dnn-toggle
            ?checked=${ifDefined(args.checked)}
            ?disabled=${ifDefined(args.disabled)}>
        </dnn-toggle>
    `;

type Story = StoryObj;

export const Toggle: Story = Template.bind({});
Toggle.args = {
    checked: false,
    disabled: false,
};