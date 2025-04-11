import{k as l}from"./lit-element-BIeOw4Bz.js";import{t as a}from"./if-defined-BfYbxOUB.js";const m=`# dnn-progress-bar



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
`,b={title:"Elements/Progress Bar",component:"dnn-progress-bar",tags:["autodocs"],parameters:{docs:{description:{component:m}}},argTypes:{value:{control:"number"},max:{control:"number"},useGradient:{control:"boolean"}}},g=n=>l`
        <dnn-progress-bar
            max=${a(n.max)}
            value=${a(n.value)}
            use-gradient=${a(n.useGradient)}
          >
        </dnn-progress-bar>
    `,e=g.bind({});e.args={max:"100",value:"80",useGradient:!1};const r=g.bind({});r.args={...e.args,useGradient:!0};var s,o,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => html\`
        <dnn-progress-bar
            max=\${ifDefined(args.max)}
            value=\${ifDefined(args.value)}
            use-gradient=\${ifDefined(args.useGradient)}
          >
        </dnn-progress-bar>
    \``,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var i,d,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => html\`
        <dnn-progress-bar
            max=\${ifDefined(args.max)}
            value=\${ifDefined(args.value)}
            use-gradient=\${ifDefined(args.useGradient)}
          >
        </dnn-progress-bar>
    \``,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const f=["Default","Gradient"];export{e as Default,r as Gradient,f as __namedExportsOrder,b as default};
