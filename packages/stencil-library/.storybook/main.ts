import type { StorybookConfig } from "@stencil/storybook-plugin";


const config: StorybookConfig = {
  "stories": [
    "../src/components/**/*.stories.tsx",
    // "../src/**/*.mdx",
    // "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  "framework": {
    "name": "@stencil/storybook-plugin",
  },
  staticDirs: [{ from: './assets', to: '/assets'}],
};
export default config;