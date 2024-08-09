import { Linter } from 'eslint';

/** @type {Linter.Config} */
const config = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    parserOptions: {
        project: "./tsconfig.json",
    },
    extends: [
        "plugin:@stencil-community/recommended",
        "plugin:storybook/recommended",
    ],
    ignorePatterns: [
        "node_modules/*",
        "src/stories/**/*",
        "src/**/*.stories.tsx",
        "dist",
        "loader",
        "www",
    ],
    rules: {
        "react/jsx-no-bind": "off",
        "no-console": "warn",
    },
};

export default config;