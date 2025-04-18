import type { Linter } from "eslint";
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import { rules } from "../rules/index.js";

const pluginName = "dnn-elements";

const prefixedRules: Linter.RulesRecord = Object.fromEntries(
  Object.keys(rules).map(ruleName => [
    `${pluginName}/${ruleName}`,
    "error" as const,
  ])
);

export const flatRecommended: FlatConfig.Config[] = [
  {
    plugins: {
      [pluginName]: {
        rules,
      },
    },
    rules: prefixedRules,
  },
];