import { RuleTester } from "@typescript-eslint/rule-tester";
import { rule } from "./no-label-slot-in-checkbox.js";

const ruleTester = new RuleTester();

// Define a reusable configuration for JSX parser options
const jsxParserOptions = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
};

ruleTester.run("no-label-slot-in-checkbox", rule, {
    valid: [
        {
            code: "<dnn-checkbox></dnn-checkbox>",
            languageOptions: jsxParserOptions,
        },
    ],
    invalid: [
        {
            code: "<dnn-checkbox onClick={e => console.log(e)}>Something</dnn-checkbox>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "noLabelSlotInCheckbox" }],
            output: "<label>\n<dnn-checkbox onClick={e => console.log(e)} />\nSomething\n</label>",
        },
    ],
});