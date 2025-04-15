import { noLabelSlotInCheckbox } from "./rules/no-label-slot-in-checkbox";

export const rules = {
    "no-label-slot-in-checkbox": noLabelSlotInCheckbox
};

const plugin = {
    rules,
    configs: {
        recommended: {
            plugins: ["@dnn-community/eslint-plugin"],
            rules: {
                "@dnn-community/no-label-slot-in-checkbox": "error"
            }
        }
    }
}

export default plugin;