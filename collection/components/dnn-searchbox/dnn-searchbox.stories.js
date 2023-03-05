import { html } from "lit-html";
import readme from "./readme.md";
export default {
  title: "Elements/Searchbox",
  component: "dnn-searchbox",
  parameters: {
    notes: readme,
    actions: {
      handles: ['queryChanged'],
    }
  }
};
const Template = (args) => html `
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
};
//# sourceMappingURL=dnn-searchbox.stories.js.map
