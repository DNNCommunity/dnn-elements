import type { Linter } from "eslint";
import type { RuleModule } from "@typescript-eslint/utils/ts-eslint";
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

type RulesRecord = Record<string, RuleModule<string, readonly unknown[]>>;

type FlatConfigs = {
  flat?: {
    recommended?: FlatConfig.Config[];
    [key: string]: FlatConfig.Config[] | undefined;
  };
};

export type Plugin = {
  meta?: {
    name: string;
    version: string;
  };
  rules: RulesRecord;
  configs?: {
    recommended?: Linter.Config;
  } & FlatConfigs;
};