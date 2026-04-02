import{n as e}from"./chunk-BneVvdWh.js";import{_ as t,b as n}from"./iframe-BqLFqqtI.js";var r,i=e((()=>{r=`# dnn-searchbox



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
`})),a,o,s,c,l;e((()=>{t(),i(),{actions:a}=__STORYBOOK_MODULE_ACTIONS__,o={title:`Elements/Searchbox`,component:`dnn-searchbox`,tags:[`autodocs`],parameters:{docs:{description:{component:r}}}},a(`queryChanged`),s=e=>n`
        <dnn-searchbox
            ?debounced=${e.debounced}
            placeholder=${e.placeholder}
            query=${e.query}
        />
    `,c=s.bind({}),c.args={debounced:!0,placeholder:`Search`,query:``},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: {
  debounced: boolean;
  placeholder: string;
  query: string;
}) => html\`
        <dnn-searchbox
            ?debounced=\${args.debounced}
            placeholder=\${args.placeholder}
            query=\${args.query}
        />
    \``,...c.parameters?.docs?.source}}},l=[`Searchbox`]}))();export{c as Searchbox,l as __namedExportsOrder,o as default};