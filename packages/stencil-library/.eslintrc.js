module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": ["plugin:@stencil/recommended", "plugin:storybook/recommended"],
  "ignorePatterns":[
    "node_modules/*",
    "src/stories/**/*",
    "src/**/*.stories.tsx",
  ],
  "rules": {
    "react/jsx-no-bind": "off",
    "no-console": "warn"
  }
};