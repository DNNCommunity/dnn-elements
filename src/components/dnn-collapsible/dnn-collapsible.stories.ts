import { html } from "lit-html";
import { Meta } from "@storybook/web-components";
import readme from "./readme.md";

export default {
    title: "Components/Collapsible",
    parameters: {
        notes: readme,
        actions: {
            handles: ['dnnCollapsibleHeightChanged'],
        },
    },
} as Meta;

const Template = (args: { expanded: boolean; transitionDuration: number; }) =>
    html`
        <dnn-collapsible ?expanded=${args.expanded} transition-duration=${args.transitionDuration}>
            <div style="border: 1px solid lightgray">
                <p>This is a test...</p>
            </div>
        </dnn-collapsible>
    `;

export const Collapsible = Template.bind({});
Collapsible.args = {
    expanded: false,
    transitionDuration: 150,
};