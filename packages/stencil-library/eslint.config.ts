import stencil from "@stencil/eslint-plugin";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import dnnElements from "./eslint-plugin";
import storybook from "eslint-plugin-storybook";

export default (tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    stencil.configs.flat.recommended,
    dnnElements.configs.flat.recommended,
    storybook.configs["flat/recommended"],
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
            "eslint-plugin/**/*",
            "**/*.spec.ts",
            ".storybook/**/*",
            "eslint.config.ts",
        ],
    },
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                projectService: true,
                project: 'tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
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
            "@typescript-eslint/no-unsafe-member-access": "off",
            "prefer-const": "off",
            "no-var": "off",
            "@typescript-eslint/no-unnecessary-type-assertion": "off",
            "@typescript-eslint/no-unsafe-call": "off",
            "@typescript-eslint/no-unsafe-argument": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-misused-promises": "off",
            "@typescript-eslint/no-floating-promises": "off",
            "@typescript-eslint/require-await": "off",
            "stencil/ban-default-true": "off",
            "no-case-declarations": "off",
            "@typescript-eslint/no-base-to-string": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-unused-expressions": "off",
            "no-fallthrough": "off",
        }
    },
));
