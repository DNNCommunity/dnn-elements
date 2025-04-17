import { RuleTester } from "@typescript-eslint/rule-tester";
import * as vitest from "vitest";
import { rule } from "./no-label-slot-in-checkbox.js";

RuleTester.afterAll = vitest.afterAll;
RuleTester.it = vitest.it;
RuleTester.itOnly = vitest.it.only;
RuleTester.describe = vitest.describe;

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
            output: [
                "<label>",
                "  <dnn-checkbox onClick={e => console.log(e)} />",
                "  Something",
                "</label>"
            ].join("\n"),
        },
    ],
});