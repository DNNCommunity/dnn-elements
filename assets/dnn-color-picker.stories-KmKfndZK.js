import{n as e}from"./chunk-BneVvdWh.js";import{_ as t,b as n}from"./iframe-BqLFqqtI.js";import{n as r,t as i}from"./if-defined-CEWZc3-b.js";var a,o=e((()=>{a=`# dnn-color-picker



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
`})),s,c,l,u,d;e((()=>{t(),i(),o(),{actions:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Elements/Color Picker`,component:`dnn-color-picker`,tags:[`autodocs`],parameters:{docs:{description:{component:a}}},argTypes:{color:{control:`text`},colorBoxHeight:{control:`text`}}},s(`colorChanged`),l=e=>n`
        <dnn-color-picker
            color=${r(e.color)}
            color-box-height=${r(e.colorBoxHeight)}>
        </dnn-color-picker>
    `,u=l.bind({}),u.args={color:`FFFFFF`,colorBoxHeight:`50%`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-color-picker
            color=\${ifDefined(args.color)}
            color-box-height=\${ifDefined(args.colorBoxHeight)}>
        </dnn-color-picker>
    \``,...u.parameters?.docs?.source}}},d=[`ColorPicker`]}))();export{u as ColorPicker,d as __namedExportsOrder,c as default};