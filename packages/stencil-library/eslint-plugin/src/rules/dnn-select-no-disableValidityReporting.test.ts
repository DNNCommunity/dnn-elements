import { RuleTester } from "@typescript-eslint/rule-tester";
import * as vitest from "vitest";
import { rule } from "./dnn-select-no-disableValidityReporting";

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

ruleTester.run("dnn-select-no-disableValidityReporting", rule, {
    valid: [
        {
            code: "<dnn-select onValueInput={e => console.log(e)} />",
            languageOptions: jsxParserOptions,
        },
    ],
    invalid: [
        {
            code: "<dnn-select disableValidityReporting></dnn-select>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "dnnSelectNoDisableValidityReporting" }],
            output: "<dnn-select ></dnn-select>",
        },
        {
            code: "<dnn-select disableValidityReporting={true}></dnn-select>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "dnnSelectNoDisableValidityReporting" }],
            output: "<dnn-select ></dnn-select>",
        },
        {
            code: "<dnn-select disableValidityReporting={false}></dnn-select>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "dnnSelectNoDisableValidityReporting" }],
            output: "<dnn-select ></dnn-select>",
        },
    ],
});