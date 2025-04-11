import{k as r}from"./lit-element-BIeOw4Bz.js";import{t as o}from"./if-defined-BfYbxOUB.js";import{a as c}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const l=`# dnn-toggle



<!-- Auto Generated Below -->


## Usage

### HTML

\`\`\`html
<dnn-toggle
    checked="true"
    disabled="false"
    name="foo"
    value="on"
>
</dnn-toggle>
\`\`\`


### JSX-TSX

\`\`\`tsx
<dnn-toggle
    checked="true"
    disabled="false"
    name="foo"
    value="on"
>
</dnn-toggle>
\`\`\`



## Properties

| Property   | Attribute  | Description                                     | Type                  | Default     |
| ---------- | ---------- | ----------------------------------------------- | --------------------- | ----------- |
| \`checked\`  | \`checked\`  | If 'true' the toggle is checked (on).           | \`boolean\`             | \`false\`     |
| \`disabled\` | \`disabled\` | If 'true' the toggle is not be interacted with. | \`boolean\`             | \`false\`     |
| \`name\`     | \`name\`     | The field name to use in forms.                 | \`string \\| undefined\` | \`undefined\` |
| \`value\`    | \`value\`    | The value to post when used in forms.           | \`string\`              | \`"on"\`      |


## Events

| Event          | Description                   | Type                                      |
| -------------- | ----------------------------- | ----------------------------------------- |
| \`checkChanged\` | Fires when the toggle changed | \`CustomEvent<DnnToggleChangeEventDetail>\` |


## CSS Custom Properties

| Name                          | Description                            |
| ----------------------------- | -------------------------------------- |
| \`--background\`                | Background of the toggle.              |
| \`--background-checked\`        | Background of the toggle when checked. |
| \`--border-radius\`             | The radius of the background borders.  |
| \`--handle-background\`         | Background of the handle.              |
| \`--handle-background-checked\` | Background of the handle when checked. |
| \`--handle-border-radius\`      | The radius of the handle.              |


## Dependencies

### Used by

 - [dnn-example-form](../examples/dnn-example-form)

### Graph
\`\`\`mermaid
graph TD;
  dnn-example-form --> dnn-toggle
  style dnn-toggle fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,k={title:"Elements/Toggle",component:"dnn-toggle",tags:["autodocs"],parameters:{docs:{description:{component:l}}},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},background:{control:"color"},backgroundChecked:{control:"color"},handleBackground:{control:"color"},handleBackgroundChecked:{control:"color"},borderRadius:{control:"text"},handleBorderRadius:{control:"text"}}};c("checkChanged");const s=(n,g)=>r`
        <dnn-toggle
            ?checked=${o(n.checked)}
            ?disabled=${o(n.disabled)}>
        </dnn-toggle>
    `,e=s.bind({});e.args={checked:!1,disabled:!1};var t,d,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: {
  checked: boolean;
  disabled: boolean;
}, context) => html\`
        <dnn-toggle
            ?checked=\${ifDefined(args.checked)}
            ?disabled=\${ifDefined(args.disabled)}>
        </dnn-toggle>
    \``,...(a=(d=e.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const f=["Toggle"];export{e as Toggle,f as __namedExportsOrder,k as default};
