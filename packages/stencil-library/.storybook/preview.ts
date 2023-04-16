import type { Preview } from "@storybook/web-components";
import { defineCustomElements } from "@dnncommunity/dnn-elements/loader";

defineCustomElements();

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
