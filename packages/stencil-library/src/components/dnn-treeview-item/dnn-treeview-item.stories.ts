import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import readme from "./readme.md";
import exp from 'constants';


const meta: Meta = {
    title: "Elements/Treeview Item",
    component: "dnn-treeview-item",
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
    argTypes: {
        expanded: {
            control: "boolean",
        },
    },
} 
export default meta;

const Template = (args: {
    expanded: boolean,
}) =>
    html`
        <dnn-treeview-item
            ?expanded=${ifDefined(args.expanded)}
        >
            <span>Root Item</span>
            <dnn-treeview-item slot="children">
                <span>Child 1</span>
            </dnn-treeview-item>
            <dnn-treeview-item slot="children">
                <span>Child 2</span>
            </dnn-treeview-item>
            <dnn-treeview-item slot="children">
                <span>Child 3</span>
            </dnn-treeview-item>
        </dnn-treeview-item>
    `;

type Story = StoryObj;

export const TreeviewItem: Story = Template.bind({});
TreeviewItem.args = {
    expanded: false,
}