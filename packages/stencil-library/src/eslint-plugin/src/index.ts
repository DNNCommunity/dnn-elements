import { Linter } from "eslint";
import rules from "./rules";
import configs from "./configs"

const plugin = {
    rules,
    configs,
};

const flatRecommended: Linter.FlatConfig = {
    plugins: {
        "@dnn-elements": plugin,
    },
    rules: configs.recommended.rules,
};

configs.flat = {
    recommended: flatRecommended,
}

export default plugin;