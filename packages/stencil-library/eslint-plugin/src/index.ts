import { rules } from "./rules";
import { flatRecommended } from "./configs/recommended";


const { name, version } = require("../../package.json") as {
    name: string;
    version: string;
  };

const plugin = {
    meta: { name, version },
    rules,
    configs: {
        flat: {
            recommended: flatRecommended,
        }
    }
};

export default plugin;