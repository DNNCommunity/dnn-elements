import{n as e}from"./chunk-BneVvdWh.js";import{_ as t,b as n}from"./iframe-BqLFqqtI.js";import{n as r,t as i}from"./if-defined-CEWZc3-b.js";var a,o=e((()=>{a=`# dnn-toggle



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

 - dnn-example-form

### Graph
\`\`\`mermaid
graph TD;
  dnn-example-form --> dnn-toggle
  style dnn-toggle fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`})),s,c,l,u,d;e((()=>{t(),i(),o(),{actions:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Elements/Toggle`,component:`dnn-toggle`,tags:[`autodocs`],parameters:{docs:{description:{component:a}}},argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`},background:{control:`color`},backgroundChecked:{control:`color`},handleBackground:{control:`color`},handleBackgroundChecked:{control:`color`},borderRadius:{control:`text`},handleBorderRadius:{control:`text`}}},s(`checkChanged`),l=(e,t)=>n`
        <dnn-toggle
            ?checked=${r(e.checked)}
            ?disabled=${r(e.disabled)}>
        </dnn-toggle>
    `,u=l.bind({}),u.args={checked:!1,disabled:!1},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: {
  checked: boolean;
  disabled: boolean;
}, context) => html\`
        <dnn-toggle
            ?checked=\${ifDefined(args.checked)}
            ?disabled=\${ifDefined(args.disabled)}>
        </dnn-toggle>
    \``,...u.parameters?.docs?.source}}},d=[`Toggle`]}))();export{u as Toggle,d as __namedExportsOrder,c as default};