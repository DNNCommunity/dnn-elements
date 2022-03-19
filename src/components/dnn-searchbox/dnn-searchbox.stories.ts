import { html } from "lit-html";
import { Meta } from "@storybook/web-components";
import readme from "./readme.md";

export default {
    title: "Elements/Searchbox",
    parameters: {
        notes: readme,
        actions: {
            handles: ['queryChanged'],
        }
    }
} as Meta;

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

export const Searchbox = Template.bind({});
Searchbox.args = {
    debounced: true,
    placeholder: "Search",
    query: "",
}