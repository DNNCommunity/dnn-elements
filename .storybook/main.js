module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        measure: false,
        outline: false,
      }
    },
    "@storybook/addon-notes/register",
    "@storybook/addon-a11y",
    "@geometricpanda/storybook-addon-badges"
  ],
  "framework": "@storybook/web-components",
  staticDirs: ['../dist']
}