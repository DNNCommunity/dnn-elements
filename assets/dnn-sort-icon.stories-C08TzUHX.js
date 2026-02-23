import{b as t}from"./iframe-CDvZgNwq.js";import{o as r}from"./if-defined-BziqozOC.js";import"./preload-helper-PPVm8Dsz.js";const e=`# dnn-sort-icon



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
`,{actions:s}=__STORYBOOK_MODULE_ACTIONS__,p={title:"Elements/Sort Icon",component:"dnn-sort-icon",tags:["autodocs"],parameters:{docs:{description:{component:e}}},argTypes:{sortDirection:{options:["asc","desc","none"],control:{type:"radio"},defaultValue:"none"},color:{control:{type:"color"}},colorHover:{control:{type:"color"}},colorSorted:{control:{type:"color"}}}};s("sortChanged");const c=(o,i)=>t`
            <dnn-sort-icon
                .sortDirection=${r(o.sortDirection)}
            />
        `,n=c.bind({});n.args={sortDirection:"none"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: {
  sortDirection: "asc" | "desc" | "none";
  color: string;
}, context) => {
  return html\`
            <dnn-sort-icon
                .sortDirection=\${ifDefined(args.sortDirection)}
            />
        \`;
}`,...n.parameters?.docs?.source}}};const m=["SortIcon"];export{n as SortIcon,m as __namedExportsOrder,p as default};
