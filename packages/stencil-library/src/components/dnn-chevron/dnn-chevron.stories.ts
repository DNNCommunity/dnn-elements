import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";


const meta : Meta = {
    title: 'Elements/Chevron',
    component: 'dnn-chevron',
    tags: ['autodocs'],
    parameters: {
        docs:{
            description: {
                component: readme
            }
        }
    },
    argTypes: {
        expandText: {
            control: 'text',
        },
        collapseText: {
            control: 'text',
        },
        expanded: {
            control: 'boolean',
          },
        },
} 
export default meta;

const eventsFromNames = actions('changed',);

const Template = (args) =>
    html`
        <dnn-chevron
            expand-text=${ifDefined(args.expandText)}
            collapse-text=${ifDefined(args.collapseText)}
            ?expanded=${ifDefined(args.expanded)}>
        </dnn-chevron>
    `;

type Story = StoryObj;

export const Chevron : Story = Template.bind({});
Chevron.args = {
    expandText: 'expand',
    collapseText: 'collapse',
    expanded: false,
};