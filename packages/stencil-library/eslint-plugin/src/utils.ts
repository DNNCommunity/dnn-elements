import { ESLintUtils } from "@typescript-eslint/utils";

export interface TypedLintingRuleDocs {
    description: string;
    recommended?: boolean;
    requiresTyepeChecking?: boolean;
};

export const createRule = ESLintUtils.RuleCreator<TypedLintingRuleDocs>(
    name => `https://github.com/DNNCommunity/dnn-elements/tree/main/packages/stencil-library/eslint-plugin/docs/${name}.md`
);