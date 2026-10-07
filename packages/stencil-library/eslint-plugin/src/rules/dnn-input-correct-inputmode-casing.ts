import { createRule } from "../utils.js";

export const rule = createRule({
    name: "dnn-input-correct-inputmode-casing",
    defaultOptions: [],
    meta: {
        docs: {
            description: "Use inputmode for dnn-input attributes and inputMode for DnnInput props",
            recommended: true,
            url: "https://github.com/DNNCommunity/dnn-elements/releases/tag/v0.28.0",
        },
        type: "problem",
        fixable: "code",
        messages: {
            useInputmodeAttribute: "Use the standard inputmode attribute on dnn-input.",
            useInputModeProperty: "Use the standard inputMode property on DnnInput.",
        },
        schema: [],
    },
    create(context) {
        return {
            JSXElement(node) {
                if (node.openingElement.name.type !== "JSXIdentifier") {
                    return;
                }

                const elementName = node.openingElement.name.name;

                for (const attr of node.openingElement.attributes) {
                    if (attr.type !== "JSXAttribute") {
                        continue;
                    }

                    if (elementName === "dnn-input" && attr.name.name === "inputMode") {
                        context.report({
                            node: attr,
                            messageId: "useInputmodeAttribute",
                            fix: fixer => fixer.replaceText(attr.name, "inputmode"),
                        });
                    }

                    if (elementName === "DnnInput" && attr.name.name === "inputmode") {
                        context.report({
                            node: attr,
                            messageId: "useInputModeProperty",
                            fix: fixer => fixer.replaceText(attr.name, "inputMode"),
                        });
                    }
                }
            }
        };
    },
});