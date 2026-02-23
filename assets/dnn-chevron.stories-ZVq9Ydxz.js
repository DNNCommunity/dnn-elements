import{b as a}from"./iframe-CDvZgNwq.js";import{o as t}from"./if-defined-BziqozOC.js";import"./preload-helper-PPVm8Dsz.js";const o=`# dnn-chevron



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
`,{actions:d}=__STORYBOOK_MODULE_ACTIONS__,x={title:"Elements/Chevron",component:"dnn-chevron",tags:["autodocs"],parameters:{docs:{description:{component:o}}},argTypes:{expandText:{control:"text"},collapseText:{control:"text"},expanded:{control:"boolean"}}};d("changed");const s=n=>a`
        <dnn-chevron
            expand-text=${t(n.expandText)}
            collapse-text=${t(n.collapseText)}
            ?expanded=${t(n.expanded)}>
        </dnn-chevron>
    `,e=s.bind({});e.args={expandText:"expand",collapseText:"collapse",expanded:!1};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-chevron
            expand-text=\${ifDefined(args.expandText)}
            collapse-text=\${ifDefined(args.collapseText)}
            ?expanded=\${ifDefined(args.expanded)}>
        </dnn-chevron>
    \``,...e.parameters?.docs?.source}}};const l=["Chevron"];export{e as Chevron,l as __namedExportsOrder,x as default};
