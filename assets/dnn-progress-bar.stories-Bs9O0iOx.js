import{b as o}from"./iframe-EVDCHu82.js";import{o as a}from"./if-defined-C5JsQu7Z.js";import"./preload-helper-PPVm8Dsz.js";const t=`# dnn-progress-bar



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
`,g={title:"Elements/Progress Bar",component:"dnn-progress-bar",tags:["autodocs"],parameters:{docs:{description:{component:t}}},argTypes:{value:{control:"number"},max:{control:"number"},useGradient:{control:"boolean"}}},s=n=>o`
        <dnn-progress-bar
            max=${a(n.max)}
            value=${a(n.value)}
            use-gradient=${a(n.useGradient)}
          >
        </dnn-progress-bar>
    `,e=s.bind({});e.args={max:"100",value:"80",useGradient:!1};const r=s.bind({});r.args={...e.args,useGradient:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-progress-bar
            max=\${ifDefined(args.max)}
            value=\${ifDefined(args.value)}
            use-gradient=\${ifDefined(args.useGradient)}
          >
        </dnn-progress-bar>
    \``,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-progress-bar
            max=\${ifDefined(args.max)}
            value=\${ifDefined(args.value)}
            use-gradient=\${ifDefined(args.useGradient)}
          >
        </dnn-progress-bar>
    \``,...r.parameters?.docs?.source}}};const l=["Default","Gradient"];export{e as Default,r as Gradient,l as __namedExportsOrder,g as default};
