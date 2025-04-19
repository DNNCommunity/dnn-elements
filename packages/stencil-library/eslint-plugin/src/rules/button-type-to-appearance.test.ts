import { RuleTester } from "@typescript-eslint/rule-tester";
import * as vitest from "vitest";
import { rule } from "./button-type-to-appearance";

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

ruleTester.run("button-type-to-appearance", rule, {
    valid: [
        {
            code: "<dnn-button></dnn-button>",
            languageOptions: jsxParserOptions,
        },
        {
            code: "<dnn-button appearance=\"secondary\"></dnn-button>",
            languageOptions: jsxParserOptions,
        },
    ],
    invalid: [
        {
            code: "<dnn-button type=\"primary\"></dnn-button>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "buttonTypeToAppearance" }],
            output: "<dnn-button appearance=\"primary\"></dnn-button>",
        },
    ],
});