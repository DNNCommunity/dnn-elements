import { createRequire } from "node:module";
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import { rules } from "./rules/index.js";
import { createFlatRecommended } from "./configs/recommended.js";

const require = createRequire(import.meta.url);
const { name, version } = require("../../package.json") as {
    name: string;
    version: string;
  };

const plugin: FlatConfig.Plugin = {
    meta: { name, version },
    rules,
    configs: {},
};

// Attach configs after plugin creation so they can self-reference the full plugin object.
const flatRecommended = createFlatRecommended(plugin);

plugin.configs = {
    // Primary config key (matches eslint/tseslint convention)
    recommended: flatRecommended,
    // Flat config key (ecosystem convention for plugins that also have legacy configs)
    "flat/recommended": flatRecommended,
};

// Legacy nested access (kept for backward compatibility with configs.flat.recommended)
const pluginWithLegacyConfigs = plugin as typeof plugin & {
    configs: typeof plugin.configs & {
        flat: { recommended: typeof flatRecommended };
    };
};
pluginWithLegacyConfigs.configs.flat = { recommended: flatRecommended };

export default pluginWithLegacyConfigs;