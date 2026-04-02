import{n as e}from"./chunk-BneVvdWh.js";import{_ as t,b as n}from"./iframe-BqLFqqtI.js";import{n as r,t as i}from"./if-defined-CEWZc3-b.js";var a,o=e((()=>{a=`# dnn-progress-bar



<!-- Auto Generated Below -->


## Usage

### HTML

\`\`\`html
<dnn-progress-bar
    max="100"
    value="80"
    use-gradient="false"
>
</dnn-progress-bar>
\`\`\`


### JSX-TSX

\`\`\`tsx
<dnn-progress-bar
    max="100"
    value="80"
    useGradient="false"
>
</dnn-progress-bar>
\`\`\`



## Properties

| Property      | Attribute      | Description                                                  | Type      | Default |
| ------------- | -------------- | ------------------------------------------------------------ | --------- | ------- |
| \`max\`         | \`max\`          | Sets the max value for the progress bar.                     | \`number\`  | \`100\`   |
| \`useGradient\` | \`use-gradient\` | Determines if gradient colors will be used for progress bar. | \`boolean\` | \`false\` |
| \`value\`       | \`value\`        | Sets to current value for the progress bar.                  | \`number\`  | \`0\`     |


## CSS Custom Properties

| Name                       | Description                                     |
| -------------------------- | ----------------------------------------------- |
| \`--background-color\`       | The background color of the progress bar.       |
| \`--border-radius\`          | The border radius of the progress bar.          |
| \`--gradient-color-end\`     | The gradient end color of the progress bar.     |
| \`--gradient-color-start\`   | The gradient start color of the progress bar.   |
| \`--gradient-direction\`     | The gradient direction of the progress bar.     |
| \`--height\`                 | The height of the progress bar.                 |
| \`--min-width\`              | The minimum width of the progress bar.          |
| \`--value-background-color\` | The value background color of the progress bar. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`})),s,c,l,u,d;e((()=>{t(),i(),o(),s={title:`Elements/Progress Bar`,component:`dnn-progress-bar`,tags:[`autodocs`],parameters:{docs:{description:{component:a}}},argTypes:{value:{control:`number`},max:{control:`number`},useGradient:{control:`boolean`}}},c=e=>n`
        <dnn-progress-bar
            max=${r(e.max)}
            value=${r(e.value)}
            use-gradient=${r(e.useGradient)}
          >
        </dnn-progress-bar>
    `,l=c.bind({}),l.args={max:`100`,value:`80`,useGradient:!1},u=c.bind({}),u.args={...l.args,useGradient:!0},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-progress-bar
            max=\${ifDefined(args.max)}
            value=\${ifDefined(args.value)}
            use-gradient=\${ifDefined(args.useGradient)}
          >
        </dnn-progress-bar>
    \``,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-progress-bar
            max=\${ifDefined(args.max)}
            value=\${ifDefined(args.value)}
            use-gradient=\${ifDefined(args.useGradient)}
          >
        </dnn-progress-bar>
    \``,...u.parameters?.docs?.source}}},d=[`Default`,`Gradient`]}))();export{l as Default,u as Gradient,d as __namedExportsOrder,s as default};