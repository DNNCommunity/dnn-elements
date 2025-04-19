import { createRule } from "../utils.js";

export const rule = createRule({
    name: "dnn-searchbox-no-debounced",
    defaultOptions: [],
    meta: {
        docs: {
            description: "debounced prop is obsolete in dnn-searchbox",
            recommended: true,
            url: "https://github.com/DNNCommunity/dnn-elements/releases/tag/v0.27.0",
        },
        type: "problem",
        fixable: "code",
        messages: {
            dnnSearchboxNoDebounced: "debounced prop is obsolete in dnn-searchbox, use debounceTime instead.",
        },
        schema: [],
    },
    create(context) {
        return {
            JSXElement(node) {
                if (
                    node.openingElement.name.type !== "JSXIdentifier" ||
                    node.openingElement.name.name !== "dnn-searchbox"
                ) return;

                const attributes = node.openingElement.attributes;

                const debouncedAttr = attributes.find(attr =>
                    attr.type === "JSXAttribute" &&
                    attr.name.name === "debounced"
                );
                
                if (!debouncedAttr) return;
                if (debouncedAttr?.type !== "JSXAttribute") return;

                // Determine value of debounced (true/false/invalid)
                let debouncedValue = true;
                if (!debouncedAttr.value) {
                    debouncedValue = true;
                } else if (
                    debouncedAttr.value.type === "JSXExpressionContainer" &&
                    debouncedAttr.value.expression.type === "Literal"
                ) {
                    const val = debouncedAttr.value.expression.value;
                    if (typeof val === "boolean") {
                        debouncedValue = val;
                    }
                }

                const debounceTimeAttr = attributes.find(attr =>
                    attr.type === "JSXAttribute" &&
                    attr.name.name === "debounceTime"
                );

                // If we have debounceTime already, only remove debounded.
                if (debounceTimeAttr) {
                    context.report({
                        node: debouncedAttr,
                        messageId: "dnnSearchboxNoDebounced",
                        fix(fixer) {
                            return fixer.remove(debouncedAttr);
                        },
                    });
                    return;
                }

                // If we have no debounceTime, we also only remove it as debounceTime has a 500 default.
                if (debouncedValue === true) {
                    context.report({
                        node: debouncedAttr,
                        messageId: "dnnSearchboxNoDebounced",
                        fix(fixer) {
                            return fixer.remove(debouncedAttr);
                        },
                    });
                    return;
                }

                // If debounded is false, we need to add/update debounceTime to 0.
                if (debouncedValue === false) {
                    context.report({
                        node: debouncedAttr,
                        messageId: "dnnSearchboxNoDebounced",
                        fix(fixer) {
                            return fixer.replaceText(debouncedAttr, "debounceTime={0}");
                        },
                    });
                    return;
                }
            }
        };
    },
});
