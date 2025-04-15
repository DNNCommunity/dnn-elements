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
                        if (parent && parent.type === "JSXElement") {
                            const parentElement = parent as any; // Cast to access children
                            const innerContent = parentElement.children
                                .map((child: any) => context.sourceCode.getText(child))
                                .join("")
                                .trim();

                            if (innerContent) {
                                context.report({
                                    node: node,
                                    messageId: "noLabelSlotInCheckbox",
                                    fix: (fixer) => {
                                        const checkboxText = context.sourceCode.getText(node);
                                        const fixedText = `<label>\n${checkboxText.replace(innerContent, "").trim()}</dnn-checkbox>\n${innerContent}\n</label>`;
                                        return fixer.replaceText(parent, fixedText);
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
