import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import readme from "./readme.md";


const meta: Meta = {
    title: 'Elements/Tab',
    component: 'dnn-tab',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
    argTypes: {
        'tab-title': {
            control: 'text',
        },
    }
} 
export default meta;

const Template = (args) =>
    html`
        <dnn-tab
            tab-title=${ifDefined(args.tabTitle)}>
        </dnn-tab>
    `;

type Story = StoryObj;

export const Tab: Story = Template.bind({});
Tab.args = {
    tabTitle: 'My Tab',
};