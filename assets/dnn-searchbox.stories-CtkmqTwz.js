import{x as r}from"./iframe-DVYAyfTZ.js";import"./preload-helper-D9Z9MdNV.js";const t=`# dnn-searchbox



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                         | Type                  | Default |
| -------------- | --------------- | ------------------------------------------------------------------- | --------------------- | ------- |
| \`debounceTime\` | \`debounce-time\` | How many milliseconds to wait before firing the queryChanged event. | \`number\`              | \`500\`   |
| \`placeholder\`  | \`placeholder\`   | Sets the field placeholder text.                                    | \`string \\| undefined\` | \`""\`    |
| \`query\`        | \`query\`         | Sets the query                                                      | \`string\`              | \`""\`    |


## Events

| Event          | Description                                                                    | Type                  |
| -------------- | ------------------------------------------------------------------------------ | --------------------- |
| \`queryChanged\` | Fires up each time the search query changes. The data passed is the new query. | \`CustomEvent<string>\` |


## Dependencies

### Used by

 - [dnn-permissions-grid](../dnn-permissions-grid)

### Graph
\`\`\`mermaid
graph TD;
  dnn-permissions-grid --> dnn-searchbox
  style dnn-searchbox fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,{actions:o}=__STORYBOOK_MODULE_ACTIONS__,c={title:"Elements/Searchbox",component:"dnn-searchbox",tags:["autodocs"],parameters:{docs:{description:{component:t}}}};o("queryChanged");const s=n=>r`
        <dnn-searchbox
            ?debounced=${n.debounced}
            placeholder=${n.placeholder}
            query=${n.query}
        />
    `,e=s.bind({});e.args={debounced:!0,placeholder:"Search",query:""};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: {
  debounced: boolean;
  placeholder: string;
  query: string;
}) => html\`
        <dnn-searchbox
            ?debounced=\${args.debounced}
            placeholder=\${args.placeholder}
            query=\${args.query}
        />
    \``,...e.parameters?.docs?.source}}};const i=["Searchbox"];export{e as Searchbox,i as __namedExportsOrder,c as default};
