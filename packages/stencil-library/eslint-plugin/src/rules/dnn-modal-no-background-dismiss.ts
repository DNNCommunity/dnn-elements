import { createRule } from "../utils.js";

export const rule = createRule({
    name: "dnn-modal-no-background-dismiss",
    defaultOptions: [],
    meta: {
        docs: {
            description: "Background dismiss is obsolete in dnn-modal",
            recommended: true,
            url: "https://github.com/DNNCommunity/dnn-elements/releases/tag/v0.24.0",
        },
        type: "problem",
        fixable: "code",
        messages: {
            dnnModalNoBackgroundDismiss: "Background dismiss is obsolete in dnn-modal, use preventBackdropDismiss instead."
        },
        schema: [],
    },
    create(context) {
        return {
            JSXElement(node) {
                if (
                    node.openingElement.name.type === "JSXIdentifier" &&
                    node.openingElement.name.name === "dnn-modal"
                ) {
                    const backdropDismissAttr = node.openingElement.attributes.find(attr =>
                        attr.type === "JSXAttribute" &&
                        attr.name.name === "backdropDismiss"
                    );

                    if (backdropDismissAttr?.type === "JSXAttribute") {
                        context.report({
                            node: backdropDismissAttr,
                            messageId: "dnnModalNoBackgroundDismiss",
                            fix(fixer) {
                                const attrValue = backdropDismissAttr.value;
                                const isImplicitTrue = !attrValue;
                                const isExplicitTrue = attrValue &&
                                    attrValue.type === "JSXExpressionContainer" &&
                                    attrValue.expression.type === "Literal" &&
                                    attrValue.expression.value === true;

                                const isExplicitFalse = attrValue &&
                                    attrValue.type === "JSXExpressionContainer" &&
                                    attrValue.expression.type === "Literal" &&
                                    attrValue.expression.value === false;

                                if (isImplicitTrue || isExplicitTrue) {
                                    // Remove attribute entirely
                                    return fixer.remove(backdropDismissAttr);
                                }

                                if (isExplicitFalse) {
                                    // Replace with opposite meaning
                                    return fixer.replaceText(
                                        backdropDismissAttr,
                                        "preventBackdropDismiss"
                                    );
                                }

                                // Default behavior: just remove it
                                return fixer.remove(backdropDismissAttr);
                            },
                        });
                    }
                }
            }
        };
    },
});
