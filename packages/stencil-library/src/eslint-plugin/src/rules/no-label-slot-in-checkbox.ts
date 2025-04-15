import type { Rule } from 'eslint';
import type { JSXOpeningElement } from "estree-jsx";

export const noLabelSlotInCheckbox: Rule.RuleModule = {
    meta: {
        type: "problem",
        docs: {
            description: "Disallow label slot in checkbox",
            recommended: true,
            url: "https://github.com/DNNCommunity/dnn-elements/releases/tag/v0.24.0",
        },
        messages: {
            noLabelSlotInCheckbox: "Label slot is not allowed in dnn-checkbox, wrap dnn-checkbox with a label instead."
        },
        fixable: "code",
    },
    create(context: Rule.RuleContext): Rule.RuleListener {
        return {
            JSXOpeningElement(node: Rule.Node) {
                if (node.type === "JSXOpeningElement") {
                    const jsxNode = node as JSXOpeningElement;
                    if (jsxNode.name.type === "JSXIdentifier" && jsxNode.name.name === "dnn-checkbox") {
                        const parent = context.getAncestors().find(ancestor => ancestor.type === "JSXElement");
                        if (parent) {
                            const hasLabel = parent.children.some(child => {
                                return child.type === "JSXElement" &&
                                    child.openingElement.name.type === "JSXIdentifier" &&
                                    child.openingElement.name.name === "label";
                            });
                            if (hasLabel) {
                                context.report({
                                    node: node,
                                    messageId: "noLabelSlotInCheckbox",
                                    fix: (fixer) => {
                                        if (parent && parent.type === "JSXElement" && Array.isArray(parent.children)) {
                                            const label = parent.children.find(child => 
                                                child &&
                                                child.type === "JSXElement" &&
                                                child.openingElement &&
                                                child.openingElement.name &&
                                                child.openingElement.name.type === "JSXIdentifier" &&
                                                child.openingElement.name.name === "label");

                                            if (label && label.type === "JSXElement") {
                                                const labelText = context.sourceCode.getText(label).replace(/<label>|<\/label>/g, '').trim();
                                                const checkboxText = context.sourceCode.getText(node);

                                                // Combine the label text and checkbox into a label wrapper with multiline formatting
                                                const fixedText = `<label>\n${labelText}\n${checkboxText}</dnn-checkbox>\n</label>`;

                                                return fixer.replaceText(parent, fixedText);
                                            }
                                        }

                                        return null;
                                    }
                                });
                            }
                        }
                    }
                }
            }
        };
    }
};
