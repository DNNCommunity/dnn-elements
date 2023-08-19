import { html } from "lit";
import { actions } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/web-components';
import readme from './readme.md';

const meta: Meta = {
    title: 'Elements/Richtext',
    component: 'dnn-richtext',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
    argTypes: {
        value: {
            control: "text",
        },
        options: {
            control: "object",
        }
    },
};

export default meta;

const eventsFromNames = actions("onValueChange", "onValueInput");

const Template = (args) =>
    html`
    <dnn-richtext
        value=${args.value}
        .options=${args.options}
        @valueChange=${eventsFromNames.onValueChange}
        @valueInput=${eventsFromNames.onValueInput}
    />
    `;

export const Default = Template.bind({});
Default.args = {
    value: '<h1>Hello World</h1>\n<div class="card">\n    <p>Some text</p>\n</div>\n',
};

export const Basic = Template.bind({});
Basic.args = {
    ...Default.args,
    options: {
        buttons: "bold,italic,underline,strikethrough,eraser,ul,ol,paragraph,superscript,subscript,spellcheck,cut,copy,paste,selectall,copyformat,hr,link",
    },
};

export const Minimal = Template.bind({});
Minimal.args = {
    ...Default.args,
    options: {
        buttons: "bold,italic,underline,",
    },
};