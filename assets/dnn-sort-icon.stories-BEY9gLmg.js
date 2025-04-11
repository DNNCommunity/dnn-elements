import{k as s}from"./lit-element-BIeOw4Bz.js";import{t as c}from"./if-defined-BfYbxOUB.js";import{a as i}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const a=`# dnn-sort-icon



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
`,D={title:"Elements/Sort Icon",component:"dnn-sort-icon",tags:["autodocs"],parameters:{docs:{description:{component:a}}},argTypes:{sortDirection:{options:["asc","desc","none"],control:{type:"radio"},defaultValue:"none"},color:{control:{type:"color"}},colorHover:{control:{type:"color"}},colorSorted:{control:{type:"color"}}}};i("sortChanged");const d=(e,l)=>s`
            <dnn-sort-icon
                .sortDirection=${c(e.sortDirection)}
            />
        `,n=d.bind({});n.args={sortDirection:"none"};var o,t,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`(args: {
  sortDirection: "asc" | "desc" | "none";
  color: string;
}, context) => {
  return html\`
            <dnn-sort-icon
                .sortDirection=\${ifDefined(args.sortDirection)}
            />
        \`;
}`,...(r=(t=n.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const f=["SortIcon"];export{n as SortIcon,f as __namedExportsOrder,D as default};
