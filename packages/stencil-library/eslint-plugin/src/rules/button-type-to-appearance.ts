import { createRule } from "../utils.js";

export const rule = createRule({
    name: "button-type-to-appearance",
    defaultOptions: [],
    meta: {
        docs: {
            description: "type property deprecated in favor of appearance",
            recommended: true,
            url: "https://github.com/DNNCommunity/dnn-elements/releases/tag/v0.24.0",
        },
        type: "problem",
        fixable: "code",
        messages: {
            buttonTypeToAppearance: "type property should be replaced with appearance."
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
                            attr.name.name === "type"
                        ) {
                            context.report({
                                node: attr,
                                messageId: "buttonTypeToAppearance",
                                fix: (fixer) => fixer.replaceText(attr.name, "appearance"),
                            });
                        }
                    }
                }
            }
        };
    },
});
