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
                                const sourceCode = context.getSourceCode();
                                const checkboxText = sourceCode.getText(node.openingElement);
                                const selfClosing = checkboxText.replace(/>$/, " />");
                                const innerContent = node.children.map(child => sourceCode.getText(child)).join("").trim();

                                // Detect leading indentation of the node
                                const lines = sourceCode.getText(node).split("\n");
                                const firstLine = lines[0];
                                const indentMatch = firstLine.match(/^(\s*)/);
                                const indent = indentMatch?.[1] ?? "";

                                // Build replacement with proper indentation
                                const replacement = [
                                    `${indent}<label>`,
                                    `${indent}  ${selfClosing}`,
                                    `${indent}  ${innerContent}`,
                                    `${indent}</label>`,
                                ].join("\n");

                                return fixer.replaceText(node, replacement);
                            }
                        });
                    }
                }
            }
        };
    },
});
