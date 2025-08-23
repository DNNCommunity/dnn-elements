import{x as e}from"./iframe-DVYAyfTZ.js";import{o as r}from"./if-defined-CkpaNtmZ.js";import"./preload-helper-D9Z9MdNV.js";const t=`# dnn-color-picker



<!-- Auto Generated Below -->


## Overview

Color Picker for Dnn

## Usage

### HTML

\`\`\`html
<dnn-color-picker
    color="FFFFFF"
    color-box-height="50%"
>
</dnn-color-picker>
\`\`\`


### JSX-TSX

\`\`\`tsx
<dnn-color-picker
    color="FFFFFF"
    colorBoxHeight="50%"
>
</dnn-color-picker>
\`\`\`



## Properties

| Property         | Attribute          | Description                                                                                | Type     | Default    |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------ | -------- | ---------- |
| \`color\`          | \`color\`            | Sets the initial color, must be a valid 8 character hexadecimal string without the # sign. | \`string\` | \`"FFFFFF"\` |
| \`colorBoxHeight\` | \`color-box-height\` | Sets the width-height ratio of the color picker saturation-lightness box.                  | \`string\` | \`"50%"\`    |


## Events

| Event          | Description                                                     | Type                     |
| -------------- | --------------------------------------------------------------- | ------------------------ |
| \`colorChanged\` | Fires up when the color is changed and emits a ColorInfo object | \`CustomEvent<ColorInfo>\` |


## Dependencies

### Used by

 - [dnn-color-input](../dnn-color-input)

### Graph
\`\`\`mermaid
graph TD;
  dnn-color-input --> dnn-color-picker
  style dnn-color-picker fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,{actions:c}=__STORYBOOK_MODULE_ACTIONS__,p={title:"Elements/Color Picker",component:"dnn-color-picker",tags:["autodocs"],parameters:{docs:{description:{component:t}}},argTypes:{color:{control:"text"},colorBoxHeight:{control:"text"}}};c("colorChanged");const i=n=>e`
        <dnn-color-picker
            color=${r(n.color)}
            color-box-height=${r(n.colorBoxHeight)}>
        </dnn-color-picker>
    `,o=i.bind({});o.args={color:"FFFFFF",colorBoxHeight:"50%"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-color-picker
            color=\${ifDefined(args.color)}
            color-box-height=\${ifDefined(args.colorBoxHeight)}>
        </dnn-color-picker>
    \``,...o.parameters?.docs?.source}}};const d=["ColorPicker"];export{o as ColorPicker,d as __namedExportsOrder,p as default};
