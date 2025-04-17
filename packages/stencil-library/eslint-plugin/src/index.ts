import { rules } from "./rules/index.js";
import { flatRecommended } from "./configs/recommended.js";
import type { Plugin } from "./types/plugin.js";
const { name, version } = require("../../package.json") as {
    name: string;
    version: string;
  };

const plugin: Plugin = {
  meta: { name, version },
  rules,
  configs: {
    flat: {
      recommended: flatRecommended,
    },
  },
};

export default plugin;
