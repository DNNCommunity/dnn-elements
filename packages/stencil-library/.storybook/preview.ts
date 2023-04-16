import type { Preview } from "@storybook/web-components";
import { defineCustomElements } from "@dnncommunity/dnn-elements/loader";
import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../custom-elements.json";

defineCustomElements();
setCustomElementsManifest(customElements);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
