import { RuleTester } from "@typescript-eslint/rule-tester";
import * as vitest from "vitest";
import { rule } from "./dnn-modal-no-background-dismiss";

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

ruleTester.run("dnn-modal-no-background-dismiss", rule, {
    valid: [
        {
            code: "<dnn-modal><p>Test</p></dnn-modal>",
            languageOptions: jsxParserOptions,
        },
        {
            code: "<dnn-modal preventBackgdropDismiss></dnn-modal>",
            languageOptions: jsxParserOptions,
        },
    ],
    invalid: [
        {
            code: "<dnn-modal backgroundDismiss></dnn-modal>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "dnnModalNoBackgroundDismiss" }],
            output: "<dnn-modal ></dnn-modal>",
        },
        {
            code: "<dnn-modal backgroundDismiss={true}></dnn-modal>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "dnnModalNoBackgroundDismiss" }],
            output: "<dnn-modal ></dnn-modal>",
        },
        {
            code: "<dnn-modal backgroundDismiss={false}></dnn-modal>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "dnnModalNoBackgroundDismiss" }],
            output: "<dnn-modal preventBackgroundDismiss></dnn-modal>",
        },
    ],
});