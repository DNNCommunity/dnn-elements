import { rules } from "./rules";
import { recommended, flatRecommended } from "./configs/recommended";
import type { Plugin } from "./types/plugin";
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
