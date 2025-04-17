import stencil from "@stencil/eslint-plugin";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import dnnElements from "./eslint-plugin";
import storybook from "eslint-plugin-storybook";

export default (tseslint.config(
    //eslint.configs.recommended,
    tseslint.configs.base,
    //tseslint.configs.recommendedTypeChecked,
    stencil.configs.flat.recommended,
    dnnElements.configs.flat.recommended,
    //storybook.configs["flat/recommended"],
    {
        files: [
            "src/**/*.{ts,tsx}",
        ]
    },
    {
        ignores: [
            "node_modules/*",
            "src/stories/**/*",
            "src/**/*.stories.ts",
            "src/**/*.stories.tsx",
            "dist",
            "loader",
            "www",
            "*.js",
            "eslint-plugin/**/*"
        ],
    },
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                projectService: true,
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
            },
        },
    },
    {
        rules: {
            "@typescript-eslint/no-unsafe-return": "off",
            "react/jsx-no-bind": "off",
            "@typescript-eslint/no-deprecated": "off",
            "stencil/strict-boolean-conditions": "off",
            "stencil/ban-exported-const-enums": "off",
        }
    },
));