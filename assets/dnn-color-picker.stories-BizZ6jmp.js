import{x as i}from"./lit-element-BTykW0Pr.js";import{o as r}from"./if-defined-rEY2lmWu.js";import{a as l}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const s=`# dnn-color-picker



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
`,g={title:"Elements/Color Picker",component:"dnn-color-picker",tags:["autodocs"],parameters:{docs:{description:{component:s}}},argTypes:{color:{control:"text"},colorBoxHeight:{control:"text"}}};l("colorChanged");const a=n=>i`
        <dnn-color-picker
            color=${r(n.color)}
            color-box-height=${r(n.colorBoxHeight)}>
        </dnn-color-picker>
    `,o=a.bind({});o.args={color:"FFFFFF",colorBoxHeight:"50%"};var e,t,c;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`args => html\`
        <dnn-color-picker
            color=\${ifDefined(args.color)}
            color-box-height=\${ifDefined(args.colorBoxHeight)}>
        </dnn-color-picker>
    \``,...(c=(t=o.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const F=["ColorPicker"];export{o as ColorPicker,F as __namedExportsOrder,g as default};
