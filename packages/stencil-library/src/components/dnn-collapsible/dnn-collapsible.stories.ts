import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";

const meta: Meta = {
    title: "Elements/Collapsible",
    component: "dnn-collapsible",
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
            type: "boolean",
        },
        transitionDuration: {
            type: "number",
            control: "number",
        },
    }
} 
export default meta;

const eventsFromNames = actions('dnnCollapsibleHeightChanged');

const Template = (args: { expanded: boolean; transitionDuration: number; }) =>
    html`
        <dnn-collapsible ?expanded=${ifDefined(args.expanded)} transition-duration=${ifDefined(args.transitionDuration)}>
            <div style="border: 1px solid lightgray">
                <h1>This title is inside the collapsible</h1>
                <p>Bacon ipsum dolor amet cupim hamburger beef ribs pork belly porchetta shankle swine. Pork belly jowl rump swine corned beef, pancetta kevin cow. Picanha pork chop pork loin corned beef beef prosciutto t-bone short loin bresaola short ribs chicken andouille. Pig leberkas meatball alcatra ribeye meatloaf. Prosciutto shoulder tongue chuck burgdoggen tenderloin, shank sirloin landjaeger doner shankle meatball kevin pork loin ham hock.</p>
            </div>
        </dnn-collapsible>
    `;

type Story = StoryObj;

export const Collapsible: Story = Template.bind({});
Collapsible.args = {
    expanded: false,
    transitionDuration: 150,
};