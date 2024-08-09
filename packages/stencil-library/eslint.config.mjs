import { Linter } from 'eslint';
import typescriptEslintParser from '@typescript-eslint/parser';

/** @type {Linter.Config} */
const config = {
    languageOptions: {
        parser: typescriptEslintParser,
        parserOptions: {
            project: "./tsconfig.json",
        }
    },
    plugins: ["@typescript-eslint"],
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