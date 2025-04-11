import{k as s}from"./lit-element-BIeOw4Bz.js";import{a}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const d=`# dnn-searchbox



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
`,l={title:"Elements/Searchbox",component:"dnn-searchbox",tags:["autodocs"],parameters:{docs:{description:{component:d}}}};a("queryChanged");const c=n=>s`
        <dnn-searchbox
            ?debounced=${n.debounced}
            placeholder=${n.placeholder}
            query=${n.query}
        />
    `,e=c.bind({});e.args={debounced:!0,placeholder:"Search",query:""};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: {
  debounced: boolean;
  placeholder: string;
  query: string;
}) => html\`
        <dnn-searchbox
            ?debounced=\${args.debounced}
            placeholder=\${args.placeholder}
            query=\${args.query}
        />
    \``,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const u=["Searchbox"];export{e as Searchbox,u as __namedExportsOrder,l as default};
