import{n as e}from"./chunk-BneVvdWh.js";import{_ as t,b as n}from"./iframe-BqLFqqtI.js";import{n as r,t as i}from"./if-defined-CEWZc3-b.js";var a,o=e((()=>{a=`# dnn-chevron



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
`})),s,c,l,u,d;e((()=>{t(),i(),o(),{actions:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Elements/Chevron`,component:`dnn-chevron`,tags:[`autodocs`],parameters:{docs:{description:{component:a}}},argTypes:{expandText:{control:`text`},collapseText:{control:`text`},expanded:{control:`boolean`}}},s(`changed`),l=e=>n`
        <dnn-chevron
            expand-text=${r(e.expandText)}
            collapse-text=${r(e.collapseText)}
            ?expanded=${r(e.expanded)}>
        </dnn-chevron>
    `,u=l.bind({}),u.args={expandText:`expand`,collapseText:`collapse`,expanded:!1},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-chevron
            expand-text=\${ifDefined(args.expandText)}
            collapse-text=\${ifDefined(args.collapseText)}
            ?expanded=\${ifDefined(args.expanded)}>
        </dnn-chevron>
    \``,...u.parameters?.docs?.source}}},d=[`Chevron`]}))();export{u as Chevron,d as __namedExportsOrder,c as default};