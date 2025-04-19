import { createRule } from "../utils.js";

export const rule = createRule({
    name: "button-formButtonType-to-type",
    defaultOptions: [],
    meta: {
        docs: {
            description: "Change formButtonType prop to type in dnn-button",
            recommended: true,
            url: "https://github.com/DNNCommunity/dnn-elements/releases/tag/v0.27.0",
        },
        type: "problem",
        fixable: "code",
        messages: {
            formButtonTypeToType: "formButtonType prop is deprecated. Use type instead.",
        },
        schema: [],
    },
    create(context) {
        return {
            JSXElement(node) {
                if (
                    node.openingElement.name.type === "JSXIdentifier" &&
                    node.openingElement.name.name === "dnn-button"
                ) {
                    for (const attr of node.openingElement.attributes) {
                        if (
                            attr.type === "JSXAttribute" &&
                            attr.name.name === "formButtonType"
                        ) {
                            context.report({
                                node: attr,
                                messageId: "formButtonTypeToType",
                                fix: (fixer) => fixer.replaceText(attr.name, "type"),
                            });
                        }
                    }
                }
            }
        };
    },
});
