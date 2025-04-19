import { RuleTester } from "@typescript-eslint/rule-tester";
import * as vitest from "vitest";
import { rule } from "./dnn-searchbox-no-debounced";

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

ruleTester.run("dnn-searchbox-no-debounced", rule, {
    valid: [
        {
            code: "<dnn-searchbox></dnn-searchbox>",
            languageOptions: jsxParserOptions,
        },
        {
            code: "<dnn-searchbox type=\"submit\"></dnn-searchbox>",
            languageOptions: jsxParserOptions,
        },
    ],
    invalid: [
        {
            code: "<dnn-searchbox debounced></dnn-searchbox>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "dnnSearchboxNoDebounced" }],
            output: "<dnn-searchbox ></dnn-searchbox>",
        },
        {
            code: "<dnn-searchbox debounced={false}></dnn-searchbox>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "dnnSearchboxNoDebounced" }],
            output: "<dnn-searchbox debounceTime={0}></dnn-searchbox>",
        },
    ],
});