import { RuleTester } from "@typescript-eslint/rule-tester";
import * as vitest from "vitest";
import { rule } from "./button-formButtonType-to-type";

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

ruleTester.run("button-formButtonType-to-type", rule, {
    valid: [
        {
            code: "<dnn-button></dnn-button>",
            languageOptions: jsxParserOptions,
        },
        {
            code: "<dnn-button type=\"submit\"></dnn-button>",
            languageOptions: jsxParserOptions,
        },
    ],
    invalid: [
        {
            code: "<dnn-button formButtonType=\"submit\"></dnn-button>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "formButtonTypeToType" }],
            output: "<dnn-button type=\"submit\"></dnn-button>",
        },
    ],
});