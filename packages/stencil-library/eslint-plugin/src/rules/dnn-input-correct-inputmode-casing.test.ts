import { RuleTester } from "@typescript-eslint/rule-tester";
import * as vitest from "vitest";
import { rule } from "./dnn-input-correct-inputmode-casing";

RuleTester.afterAll = vitest.afterAll;
RuleTester.it = vitest.it;
RuleTester.itOnly = vitest.it.only;
RuleTester.describe = vitest.describe;

const ruleTester = new RuleTester();

const jsxParserOptions = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
};

ruleTester.run("dnn-input-correct-inputmode-casing", rule, {
    valid: [
        {
            code: "<dnn-input inputmode=\"numeric\"></dnn-input>",
            languageOptions: jsxParserOptions,
        },
        {
            code: "<DnnInput inputMode=\"numeric\" />",
            languageOptions: jsxParserOptions,
        },
        {
            code: "<dnn-input></dnn-input>",
            languageOptions: jsxParserOptions,
        },
    ],
    invalid: [
        {
            code: "<dnn-input inputMode=\"numeric\"></dnn-input>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "useInputmodeAttribute" }],
            output: "<dnn-input inputmode=\"numeric\"></dnn-input>",
        },
        {
            code: "<dnn-input inputMode={mode}></dnn-input>",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "useInputmodeAttribute" }],
            output: "<dnn-input inputmode={mode}></dnn-input>",
        },
        {
            code: "<DnnInput inputmode=\"numeric\" />",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "useInputModeProperty" }],
            output: "<DnnInput inputMode=\"numeric\" />",
        },
        {
            code: "<DnnInput inputmode={mode} />",
            languageOptions: jsxParserOptions,
            errors: [{ messageId: "useInputModeProperty" }],
            output: "<DnnInput inputMode={mode} />",
        },
    ],
});