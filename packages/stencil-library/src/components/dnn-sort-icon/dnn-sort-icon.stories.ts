import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from "lit";
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md?raw";

const meta: Meta = {
    title: "Elements/Sort Icon",
    component: 'dnn-sort-icon',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
    argTypes: {
        sortDirection: {
            options: ['asc', 'desc', 'none'],
            control: {
                type: 'radio',
            },
            defaultValue: "none",
        },
        color: {
            control: {
                type: 'color'
            }
        },
        colorHover: {
            control: {
                type: 'color'
            }
        },
        colorSorted: {
            control: {
                type: 'color'
            }
        },
    },
} 
export default meta;

const eventsFromNames = actions('sortChanged',);

const Template = (args: {
    sortDirection: "asc" | "desc" | "none",
    color: string;
}, context) =>
    {
        return html`
            <dnn-sort-icon
                .sortDirection=${ifDefined(args.sortDirection)}
            />
        `;
    }

type Story = StoryObj;

export const SortIcon: Story = Template.bind({});
SortIcon.args = {
    sortDirection: "none",
};