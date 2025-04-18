import { createRule } from "../utils.js";

export const rule = createRule({
    name: "no-label-slot-in-checkbox",
    defaultOptions: [],
    meta: {
        docs: {
            description: "Disallow default slot in dnn-checkbox; all children must have a named slot",
            recommended: true,
            url: "https://github.com/DNNCommunity/dnn-elements/releases/tag/v0.24.0",
        },
        type: "problem",
        messages: {
            noDefaultSlotInCheckbox: "All children of dnn-checkbox must have a named slot. Default slot is not allowed."
        },
        schema: [],
    },
    create(context) {
        return {
            JSXElement(node) {
                if (
                    node.openingElement.name.type === "JSXIdentifier" &&
                    node.openingElement.name.name === "dnn-checkbox"
                ) {
                    for (const child of node.children) {
                        if (
                            child.type === "JSXText" && child.value.trim() !== ""
                        ) {
                            context.report({
                                node: child,
                                messageId: "noDefaultSlotInCheckbox",
                            });
                        } else if (
                            child.type === "JSXElement" &&
                            child.openingElement.attributes.every(attr =>
                                !(attr.type === "JSXAttribute" && attr.name.name === "slot")
                            )
                        ) {
                            context.report({
                                node: child,
                                messageId: "noDefaultSlotInCheckbox",
                            });
                        }
                    }
                }
            }
        };
    },
});
