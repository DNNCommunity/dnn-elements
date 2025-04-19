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
            dnnModalNoBackgroundDismiss: "Background dismiss is obsolete in dnn-modal, use preventBackgroundDismiss instead."
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
                    const backgroundDismissAttr = node.openingElement.attributes.find(attr =>
                        attr.type === "JSXAttribute" &&
                        attr.name.name === "backgroundDismiss"
                    );

                    if (backgroundDismissAttr) {
                        context.report({
                            node: backgroundDismissAttr,
                            messageId: "dnnModalNoBackgroundDismiss",
                        });
                    }
                }
            }
        };
    },
});
