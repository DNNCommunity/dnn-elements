import{k as i}from"./lit-element-BIeOw4Bz.js";import{t}from"./if-defined-BfYbxOUB.js";import{a}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const d=`# dnn-checkbox



<!-- Auto Generated Below -->


## Usage

### HTML

\`\`\`html
<dnn-checkbox
    checked="unchecked"
    name="agree"
    value="1"
    use-intermediate="false">
</dnn-checkbox>
\`\`\`


### JSX-TSX

\`\`\`tsx
<dnn-checkbox
    checked="unchecked"
    name="agree"
    value="1"
    useIntermediate="false">
</dnn-checkbox>
\`\`\`



## Properties

| Property           | Attribute            | Description                                                                                                                                                                                                                                             | Type                                           | Default                                                        |
| ------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------- |
| \`checked\`          | \`checked\`            | Defines if the checkbox is checked (true) or unchecked (false) or in an intermediate state (undefined)                                                                                                                                                  | \`"checked" \\| "intermediate" \\| "unchecked"\`   | \`"unchecked"\`                                                  |
| \`name\`             | \`name\`               | The name to show in the formData (if using forms).                                                                                                                                                                                                      | \`string\`                                       | \`""\`                                                           |
| \`nextStateHandler\` | \`next-state-handler\` | A function that will be called when the checkbox needs to change state and returns the next state. Can be used to customize the order of the states when the component is clicked. Only called if you also use the tri-state feature (useIntermediate). | \`(currentState: CheckedState) => CheckedState\` | \`(currentState) => this.defaultNextStateHandler(currentState)\` |
| \`required\`         | \`required\`           | If true, the checkbox needs to be checked for the form validation to succeed.                                                                                                                                                                           | \`boolean\`                                      | \`false\`                                                        |
| \`requiredMessage\`  | \`required-message\`   | Can be used to customize the validation message when the field is required but not checked.                                                                                                                                                             | \`string\`                                       | \`"The checkbox must be checked"\`                               |
| \`useIntermediate\`  | \`use-intermediate\`   | Defines if clicking the checkbox will go through the intermediate state between checked and unchecked (tri-state)                                                                                                                                       | \`boolean\`                                      | \`false\`                                                        |
| \`value\`            | \`value\`              | The value for this checkbox (not to be confused with its checked state).                                                                                                                                                                                | \`string\`                                       | \`"on"\`                                                         |


## Events

| Event           | Description                                          | Type                                                      |
| --------------- | ---------------------------------------------------- | --------------------------------------------------------- |
| \`checkedchange\` | Fires up when the checkbox checked property changes. | \`CustomEvent<"checked" \\| "intermediate" \\| "unchecked">\` |


## Methods

### \`checkValidity() => Promise<ValidityState>\`

Reports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState

#### Returns

Type: \`Promise<ValidityState>\`




## Slots

| Slot                 | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| \`"checkedicon"\`      | Allows overriding the default checked icon.                |
| \`"intermediateicon"\` | If intermadiate state is used, allows overriding its icon. |
| \`"uncheckedicon"\`    | Allows overriding the unchecked icon.                      |


## CSS Custom Properties

| Name            | Description                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------- |
| \`--focus-color\` | The color to outline the checkbox when hovered or focused, default to the dnn primary color. |


## Dependencies

### Used by

 - [dnn-example-form](../examples/dnn-example-form)
 - [dnn-permissions-grid](../dnn-permissions-grid)

### Graph
\`\`\`mermaid
graph TD;
  dnn-example-form --> dnn-checkbox
  dnn-permissions-grid --> dnn-checkbox
  style dnn-checkbox fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,m={title:"Elements/Checkbox",component:"dnn-checkbox",tags:["autodocs"],parameters:{docs:{description:{Component:d}}},argTypes:{checked:{options:["checked","unchecked","intermediate"],control:"radio"},useIntermediate:{control:"boolean"},value:{control:"text"},required:{control:"boolean"}}};a("checkedchange");const n={args:{checked:"unchecked",useIntermediate:!1,value:"1",required:!1},render:e=>i`
            <dnn-checkbox
                checked=${e.checked}
                ?use-intermediate=${t(e.useIntermediate)}
                value=${e.value}
                ?required=${t(e.required)}
            />
        `};var c,r,o;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    checked: 'unchecked',
    useIntermediate: false,
    value: '1',
    required: false
  },
  render: args => html\`
            <dnn-checkbox
                checked=\${args.checked}
                ?use-intermediate=\${ifDefined(args.useIntermediate)}
                value=\${args.value}
                ?required=\${ifDefined(args.required)}
            />
        \`
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const k=["Checkbox"];export{n as Checkbox,k as __namedExportsOrder,m as default};
