import type { StorybookConfig } from "@storybook/web-components-webpack5";
import CopyWebpackPlugin from "copy-webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
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
  webpackFinal(config, options) {
      config.plugins?.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: "dist",
              to: "assets/components",
            }
          ]
        })
      );
      return config;
  },
};
export default config;
