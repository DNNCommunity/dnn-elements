import type { Linter } from "eslint";
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import { rules } from "../rules/index.js";

export const pluginName = "dnn-elements";

export const prefixedRules: Linter.RulesRecord = Object.fromEntries(
  Object.keys(rules).map(ruleName => [
    `${pluginName}/${ruleName}`,
    "error" as const,
  ])
);

/**
 * Creates the flat recommended config array.
 * Accepts the full plugin object so configs can self-reference it,
 * which is the ESLint best practice for plugin identity.
 */
export function createFlatRecommended(plugin: FlatConfig.Plugin): FlatConfig.Config[] {
  return [
    {
      plugins: {
        [pluginName]: plugin,
      },
      rules: prefixedRules,
    },
  ];
}