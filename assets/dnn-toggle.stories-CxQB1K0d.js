import{x as d}from"./iframe-DVYAyfTZ.js";import{o}from"./if-defined-CkpaNtmZ.js";import"./preload-helper-D9Z9MdNV.js";const t=`# dnn-toggle



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
`,{actions:a}=__STORYBOOK_MODULE_ACTIONS__,i={title:"Elements/Toggle",component:"dnn-toggle",tags:["autodocs"],parameters:{docs:{description:{component:t}}},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},background:{control:"color"},backgroundChecked:{control:"color"},handleBackground:{control:"color"},handleBackgroundChecked:{control:"color"},borderRadius:{control:"text"},handleBorderRadius:{control:"text"}}};a("checkChanged");const r=(n,c)=>d`
        <dnn-toggle
            ?checked=${o(n.checked)}
            ?disabled=${o(n.disabled)}>
        </dnn-toggle>
    `,e=r.bind({});e.args={checked:!1,disabled:!1};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: {
  checked: boolean;
  disabled: boolean;
}, context) => html\`
        <dnn-toggle
            ?checked=\${ifDefined(args.checked)}
            ?disabled=\${ifDefined(args.disabled)}>
        </dnn-toggle>
    \``,...e.parameters?.docs?.source}}};const h=["Toggle"];export{e as Toggle,h as __namedExportsOrder,i as default};
