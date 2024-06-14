import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/web-components-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-actions"),
    getAbsolutePath("@storybook/addon-a11y"),
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook"
  ],
  framework: {
    name: getAbsolutePath("@storybook/web-components-webpack5"),
    options: {},
  },
  staticDirs: [{ from: './assets', to: '/assets'}],
  docs: {},
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
