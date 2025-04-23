import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md?raw";

const meta: Meta = {
    title: "Elements/Searchbox",
    component: "dnn-searchbox",
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    }   
}
export default meta;

const eventsFromNames = actions('queryChanged',);

const Template = (args : {
    debounced: boolean,
    placeholder: string,
    query: string,
}) =>
    html`
        <dnn-searchbox
            ?debounced=${args.debounced}
            placeholder=${args.placeholder}
            query=${args.query}
        />
    `;

type Story = StoryObj;

export const Searchbox: Story = Template.bind({});
Searchbox.args = {
    debounced: true,
    placeholder: "Search",
    query: "",
}