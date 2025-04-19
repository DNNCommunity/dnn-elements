import { createRule } from "../utils.js";

export const rule = createRule({
    name: "dnn-input-no-disableValidityReporting",
    defaultOptions: [],
    meta: {
        docs: {
            description: "disableValidityReporting is obsolete in dnn-input, no replacement.",
            recommended: true,
            url: "https://github.com/DNNCommunity/dnn-elements/releases/tag/v0.24.0",
        },
        type: "problem",
        fixable: "code",
        messages: {
            dnnInputNoDisableValidityReporting: "disableValidityReporting was remove and the form pattern has it's own built-in validation reporting."
        },
        schema: [],
    },
    create(context) {
        return {
            JSXElement(node) {
                if (
                    node.openingElement.name.type === "JSXIdentifier" &&
                    node.openingElement.name.name === "dnn-input"
                ) {
                    const attribute = node.openingElement.attributes.find(attr =>
                        attr.type === "JSXAttribute" &&
                        attr.name.name === "disableValidityReporting"
                    );

                    if (attribute?.type === "JSXAttribute") {
                        context.report({
                            node: attribute,
                            messageId: "dnnInputNoDisableValidityReporting",
                            fix(fixer) {
                                return fixer.remove(attribute);
                            },
                        });
                    }
                }
            }
        };
    },
});
