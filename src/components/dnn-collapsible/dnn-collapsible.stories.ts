import { html } from "lit-html";
import { ifDefined } from 'lit-html/directives/if-defined';
import { Meta } from "@storybook/web-components";
import readme from "./readme.md";

export default {
    title: "Elements/Collapsible",
    component: "dnn-collapsible",
    parameters: {
        notes: readme,
        actions: {
            handles: ['dnnCollapsibleHeightChanged'],
        },
    },
    argTypes: {
        expanded: {
            type: "boolean",
        },
        transitionDuration: {
            type: "number",
        },
        'transition-duration': {
            type: "number",
            control: "number",
        }
    }
} as Meta;

const Template = (args: { expanded: boolean; transitionDuration: number; }) =>
    html`
        <dnn-collapsible ?expanded=${ifDefined(args.expanded)} transition-duration=${ifDefined(args.transitionDuration)}>
            <div style="border: 1px solid lightgray">
                <h1>This title is inside the collapsible</h1>
                <p>Bacon ipsum dolor amet cupim hamburger beef ribs pork belly porchetta shankle swine. Pork belly jowl rump swine corned beef, pancetta kevin cow. Picanha pork chop pork loin corned beef beef prosciutto t-bone short loin bresaola short ribs chicken andouille. Pig leberkas meatball alcatra ribeye meatloaf. Prosciutto shoulder tongue chuck burgdoggen tenderloin, shank sirloin landjaeger doner shankle meatball kevin pork loin ham hock.</p>
            </div>
        </dnn-collapsible>
    `;

export const Collapsible = Template.bind({});
Collapsible.args = {
    expanded: false,
    transitionDuration: 150,
};