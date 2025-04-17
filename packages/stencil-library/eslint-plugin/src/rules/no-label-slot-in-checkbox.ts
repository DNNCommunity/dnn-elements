import { createRule } from "../utils.js";

export const rule = createRule({
    name: "no-label-slot-in-checkbox",
    defaultOptions: [],
    meta: {
        docs: {
            description: "Disallow label slot in checkbox",
            recommended: true,
            url: "https://github.com/DNNCommunity/dnn-elements/releases/tag/v0.24.0",
        },
        type: "problem",
        messages: {
            noLabelSlotInCheckbox: "Label slot is not allowed in dnn-checkbox, wrap dnn-checkbox with a label instead."
        },
        fixable: "code",
        schema: [], // Ensure schema is defined as an empty array or with the appropriate schema definition
    },
    create(context) {
        return {
            JSXElement(node) {
                if (
                    node.openingElement.name.type === "JSXIdentifier" &&
                    node.openingElement.name.name === "dnn-checkbox"
                ) {
                    const innerContent = node.children
                        .map(child => context.sourceCode.getText(child))
                        .join("")
                        .trim();
    
                    if (innerContent) {
                        context.report({
                            node,
                            messageId: "noLabelSlotInCheckbox",
                            fix: fixer => {
                                const sourceCode = context.sourceCode;
                                const checkboxText = sourceCode.getText(node.openingElement);
                                const selfClosing = checkboxText.replace(/>$/, " />");
                                const innerContent = node.children.map(child => sourceCode.getText(child)).join("").trim();

                                return [
                                    fixer.insertTextBefore(node, `<label>\n`),
                                    fixer.replaceText(node, `  ${selfClosing}\n`),
                                    fixer.insertTextAfter(node, `  ${innerContent}\n`),
                                    fixer.insertTextAfter(node, `</label>`),
                                ];
                            }
                        });
                    }
                }
            }
        };
    },
});
