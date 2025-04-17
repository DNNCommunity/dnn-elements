import { rules } from "./rules";

const plugin = {
    configs: {
        get recommended() {
            return recommended;
        }
    }
}
const recommended = {
    plugins: {
        "dnn-elements": plugin,
    },
    rules,
};

export default plugin;