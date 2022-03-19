import { html } from "lit-html";
import { ifDefined } from 'lit-html/directives/if-defined';
import { Meta } from "@storybook/web-components";
import readme from './readme.md';

export default {
    title: 'Elements/Color Picker',
    component: 'dnn-color-picker',
    parameters: {
        actions: {
            handles: ['colorChanged'],
        },
        notes:  readme,
    },
    argTypes: {
        'color': {
            control: 'text',
        },
        'colorBoxHeight': {
            control: 'text',
        },
        },
} as Meta;

const Template = (args) =>
    html`
        <dnn-color-picker
            color=${ifDefined(args.color)}
            color-box-height=${ifDefined(args.colorBoxHeight)}>
        </dnn-color-picker>
    `;

export const ColorPicker = Template.bind({});
ColorPicker.args = {
    color: 'FFFFFF',
    colorBoxHeight: '50%',
};
