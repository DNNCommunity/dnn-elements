import { RuleTester } from "@typescript-eslint/rule-tester";
import * as vitest from "vitest";
import { rule } from "./dnn-input-no-disableValidityReporting";

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

ruleTester.run("dnn-input-no-disableValidityReporting", rule, {
    valid: [
        {
            code: "<dnn-input onValueInput={e => console.log(e)} />",
            languageOptions: jsxParserOptions,
        },
    ],
    invalid: [
        {
            code: "<dnn-input disableValidityReporting></dnn-input>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "dnnInputNoDisableValidityReporting" }],
            output: "<dnn-input ></dnn-input>",
        },
        {
            code: "<dnn-input disableValidityReporting={true}></dnn-input>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "dnnInputNoDisableValidityReporting" }],
            output: "<dnn-input ></dnn-input>",
        },
        {
            code: "<dnn-input disableValidityReporting={false}></dnn-input>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "dnnInputNoDisableValidityReporting" }],
            output: "<dnn-input ></dnn-input>",
        },
    ],
});