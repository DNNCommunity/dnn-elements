import type { StorybookConfig } from "@storybook/web-components-webpack5";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
  ],
  framework: {
    name: "@storybook/web-components-webpack5",
    options: {},
  },
  staticDirs: [{ from: './assets', to: '/assets'}],
  docs: {
    autodocs: "tag",
  },
};
export default config;
