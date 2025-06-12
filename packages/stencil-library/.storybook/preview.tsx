import { type Preview } from "@stencil/storybook-plugin";
import { Title, Subtitle, Description, Primary, Controls, Stories} from "@storybook/addon-docs/blocks";
import { h } from "@stencil/core";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      source: {
        excludeDecorators: true,
      },
      page: () => [
          <Title />,
          <Subtitle />,
          <Primary />,
          <Controls />,
          <Stories />,
          <Description />,
      ],
      extractComponentDescription: (component, { notes }) => {
        if (notes) {
          return typeof notes === "string" ? notes : notes.markdown || notes.text;
        }
        return null;
      },
    },
  },
};

export default preview;
