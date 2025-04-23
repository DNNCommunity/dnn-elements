import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md?raw";


const meta: Meta = {
    title: 'Elements/Color Picker',
    component: 'dnn-color-picker',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
    argTypes: {
        color: {
            control: 'text',
        },
        colorBoxHeight: {
            control: 'text',
        },
    },
}

export default meta;

const eventsFromNames = actions('colorChanged',)

const Template = (args) =>
    html`
        <dnn-color-picker
            color=${ifDefined(args.color)}
            color-box-height=${ifDefined(args.colorBoxHeight)}>
        </dnn-color-picker>
    `;

type Story = StoryObj;

export const ColorPicker: Story = Template.bind({});
ColorPicker.args = {
    color: 'FFFFFF',
    colorBoxHeight: '50%',
};