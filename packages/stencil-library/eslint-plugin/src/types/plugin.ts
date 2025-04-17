import type { Linter } from "eslint";
import type { RuleModule } from "@typescript-eslint/utils/ts-eslint";
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

type RulesRecord = Record<string, RuleModule<string, readonly unknown[]>>;

export type Plugin = {
  meta: {
    name: string;
    version: string;
  };
  rules: RulesRecord;
  configs: {
    flat: {
      recommended: FlatConfig.Config[];
    }
  };
};