import type { Linter } from "eslint";
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import { rules } from "../rules";

// 🔁 Dynamically generate rule names with prefix
const pluginName = "dnn-elements";

const prefixedRules: Linter.RulesRecord = Object.fromEntries(
  Object.keys(rules).map(ruleName => [
    `${pluginName}/${ruleName}`,
    "error" as const,
  ])
);

// ✅ Classic config (extends-based)
export const recommended: Linter.Config = {
  plugins: [pluginName],
  rules: prefixedRules,
};

// ✅ Flat config (for modern eslint.config.js)
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
