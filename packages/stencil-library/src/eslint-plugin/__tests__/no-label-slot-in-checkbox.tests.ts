import { RuleTester } from "eslint";
import { noLabelSlotInCheckbox } from "../src/rules/no-label-slot-in-checkbox";
const tsParser = require.resolve("@typescript-eslint/parser");

const ruleTester = new RuleTester({
    parser: tsParser,
    parserOptions: {
        ecmaVersion: 2022,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: "module",
    },
});

ruleTester.run("no-label-slot-in-checkbox", noLabelSlotInCheckbox, {
    valid: [
        { code: "<dnn-checkbox></dnn-checkbox>" },
    ],
    invalid: [
        {
            code: "<dnn-checkbox onClick={e => console.log(e)}><label>Label Text</label></dnn-checkbox>",
            errors: [{ messageId: "noLabelSlotInCheckbox" }],
            output: "<label>\n<dnn-checkbox onClick={e => console.log(e)}></dnn-checkbox>\nLabel Text\n</label>",
        },
    ],
});