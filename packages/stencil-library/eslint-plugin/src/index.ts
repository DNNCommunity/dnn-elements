import { rules } from "./rules/index.js";
import { recommended, flatRecommended } from "./configs/recommended.js";
import type { Plugin } from "./types/plugin.js";
const { name, version } = require("../../package.json") as {
    name: string;
    version: string;
  };

const plugin: Plugin = {
  meta: { name, version },
  rules,
  configs: {
    recommended,
    flat: {
      recommended: flatRecommended,
    },
  },
};

export default plugin;
