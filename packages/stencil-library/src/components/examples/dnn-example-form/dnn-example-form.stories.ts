import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import readme from "./readme.md";


const meta: Meta = {
    title: 'Examples/Form',
    component: 'dnn-example-form',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
} 
export default meta;

const Template = () =>
    html`
        <dnn-example-form>
        </dnn-example-form>
    `;

type Story = StoryObj;

export const DnnFormExample: Story = Template.bind({});