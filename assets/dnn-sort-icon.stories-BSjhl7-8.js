import{n as e}from"./chunk-BneVvdWh.js";import{_ as t,b as n}from"./iframe-BqLFqqtI.js";import{n as r,t as i}from"./if-defined-CEWZc3-b.js";var a,o=e((()=>{a=`# dnn-sort-icon



<!-- Auto Generated Below -->


## Usage

### HTML

\`\`\`html
<dnn-sort-icon
    sort-direction="asc">
</dnn-sort-icon>
\`\`\`


### JSX-TSX

\`\`\`tsx
<dnn-sort-icon
    sortDirection="asc">
</dnn-sort-icon>
\`\`\`



## Properties

| Property        | Attribute        | Description                        | Type                        | Default  |
| --------------- | ---------------- | ---------------------------------- | --------------------------- | -------- |
| \`sortDirection\` | \`sort-direction\` | Defines the current sort direction | \`"asc" \\| "desc" \\| "none"\` | \`"none"\` |


## Events

| Event         | Description                       | Type                                     |
| ------------- | --------------------------------- | ---------------------------------------- |
| \`sortChanged\` | Emitted when the sort is changed. | \`CustomEvent<"asc" \\| "desc" \\| "none">\` |


## CSS Custom Properties

| Name             | Description                             |
| ---------------- | --------------------------------------- |
| \`--color\`        | Normal Color of the inactive sort icon. |
| \`--color-hover\`  | Color of the icons when hovered.        |
| \`--color-sorted\` | Color of the sorted sort icon.          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`})),s,c,l,u,d;e((()=>{t(),i(),o(),{actions:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Elements/Sort Icon`,component:`dnn-sort-icon`,tags:[`autodocs`],parameters:{docs:{description:{component:a}}},argTypes:{sortDirection:{options:[`asc`,`desc`,`none`],control:{type:`radio`},defaultValue:`none`},color:{control:{type:`color`}},colorHover:{control:{type:`color`}},colorSorted:{control:{type:`color`}}}},s(`sortChanged`),l=(e,t)=>n`
            <dnn-sort-icon
                .sortDirection=${r(e.sortDirection)}
            />
        `,u=l.bind({}),u.args={sortDirection:`none`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: {
  sortDirection: "asc" | "desc" | "none";
  color: string;
}, context) => {
  return html\`
            <dnn-sort-icon
                .sortDirection=\${ifDefined(args.sortDirection)}
            />
        \`;
}`,...u.parameters?.docs?.source}}},d=[`SortIcon`]}))();export{u as SortIcon,d as __namedExportsOrder,c as default};