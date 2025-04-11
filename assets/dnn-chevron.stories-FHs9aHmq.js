import{k as s}from"./lit-element-BIeOw4Bz.js";import{t}from"./if-defined-BfYbxOUB.js";import{a as r}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const p=`# dnn-chevron



<!-- Auto Generated Below -->


## Usage

### HTML

\`\`\`html
<dnn-chevron
    expand-text="expand"
    collapse-text="collapse"
    expanded="false">
</dnn-chevron>
\`\`\`


### JSX-TSX

\`\`\`tsx
<dnn-chevron
    expandText="expand"
    collapseText="collapse"
    expanded="false">
</dnn-chevron>
\`\`\`



## Properties

| Property       | Attribute       | Description                      | Type                   | Default      |
| -------------- | --------------- | -------------------------------- | ---------------------- | ------------ |
| \`collapseText\` | \`collapse-text\` | Collapse text for screen readers | \`string \\| undefined\`  | \`"collapse"\` |
| \`expandText\`   | \`expand-text\`   | Expand text for screen readers   | \`string \\| undefined\`  | \`"expand"\`   |
| \`expanded\`     | \`expanded\`      | Is the chevron expanded          | \`boolean \\| undefined\` | \`false\`      |


## Events

| Event     | Description                               | Type               |
| --------- | ----------------------------------------- | ------------------ |
| \`changed\` | Fires up when the expanded status changes | \`CustomEvent<any>\` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,m={title:"Elements/Chevron",component:"dnn-chevron",tags:["autodocs"],parameters:{docs:{description:{component:p}}},argTypes:{expandText:{control:"text"},collapseText:{control:"text"},expanded:{control:"boolean"}}};r("changed");const c=n=>s`
        <dnn-chevron
            expand-text=${t(n.expandText)}
            collapse-text=${t(n.collapseText)}
            ?expanded=${t(n.expanded)}>
        </dnn-chevron>
    `,e=c.bind({});e.args={expandText:"expand",collapseText:"collapse",expanded:!1};var a,o,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => html\`
        <dnn-chevron
            expand-text=\${ifDefined(args.expandText)}
            collapse-text=\${ifDefined(args.collapseText)}
            ?expanded=\${ifDefined(args.expanded)}>
        </dnn-chevron>
    \``,...(d=(o=e.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const f=["Chevron"];export{e as Chevron,f as __namedExportsOrder,m as default};
