import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        measure: false,
        outline: false,
      }
    },
    "@storybook/addon-a11y",
    "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
export const framework = "@storybook/react";