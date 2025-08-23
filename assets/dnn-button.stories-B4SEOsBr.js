import{x as g}from"./iframe-CdWsEpAF.js";import{o}from"./if-defined-C22-Y_7E.js";import{o as u}from"./unsafe-html-BuS5HHDf.js";import"./preload-helper-D9Z9MdNV.js";const $=`# dnn-button



<!-- Auto Generated Below -->


## Usage

### HTML

\`\`\`html
<dnn-button
    confirm=""
    confirm-yes-text="Oh Yeah"
    confirm-no-text="No Way"
    confirm-message="Are you sure that you're sure that you're sure?"
>
    Click me!
</dnn-button>
\`\`\`


### JSX-TSX

\`\`\`tsx
<dnn-button 
    confirm=""
    confirmYesText="Oh Yeah"
    confirmNoText="No Way"
    confirmMessage="Are you sure that you're sure that you're sure?"
>
    Click me!
</dnn-button>
\`\`\`



## Properties

| Property         | Attribute          | Description                                                                                                                                                                                                                                                                                                                                                                             | Type                                                 | Default            |
| ---------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------ |
| \`appearance\`     | \`appearance\`       | Defines the look of the button.                                                                                                                                                                                                                                                                                                                                                         | \`"danger" \\| "primary" \\| "secondary" \\| "tertiary"\` | \`'primary'\`        |
| \`confirm\`        | \`confirm\`          | Optionally add a confirmation dialog before firing the action.                                                                                                                                                                                                                                                                                                                          | \`boolean \\| undefined\`                               | \`false\`            |
| \`confirmMessage\` | \`confirm-message\`  | The text of the confirmation message;                                                                                                                                                                                                                                                                                                                                                   | \`string \\| undefined\`                                | \`"Are you sure ?"\` |
| \`confirmNoText\`  | \`confirm-no-text\`  | The text of the no button for confirmation.                                                                                                                                                                                                                                                                                                                                             | \`string \\| undefined\`                                | \`"No"\`             |
| \`confirmYesText\` | \`confirm-yes-text\` | The text of the yes button for confirmation.                                                                                                                                                                                                                                                                                                                                            | \`string \\| undefined\`                                | \`"Yes"\`            |
| \`disabled\`       | \`disabled\`         | Disables the button                                                                                                                                                                                                                                                                                                                                                                     | \`boolean\`                                            | \`false\`            |
| \`formButtonType\` | \`form-button-type\` | <span style="color:red">**[DEPRECATED]**</span> Use type instead. Optional button type, can be either submit, reset or button and defaults to button if not specified. Warning: DNN wraps the whole page in a form, only use this if you are handling form submission manually. Warning: This will be deprecated in the next version and replaced with a new 'type' property.<br/><br/> | \`"button" \\| "reset" \\| "submit"\`                    | \`'button'\`         |
| \`reversed\`       | \`reversed\`         | Optionally reverses the button style.                                                                                                                                                                                                                                                                                                                                                   | \`boolean\`                                            | \`false\`            |
| \`size\`           | \`size\`             | Optionally sets the button size, small normal or large, defaults to normal                                                                                                                                                                                                                                                                                                              | \`"large" \\| "normal" \\| "small" \\| undefined\`        | \`'normal'\`         |
| \`type\`           | \`type\`             | Optional button type, can be either submit, reset or button and defaults to button if not specified. Warning: DNN wraps the whole page in a form, only use this if you are handling form submission manually.                                                                                                                                                                           | \`"button" \\| "reset" \\| "submit"\`                    | \`'button'\`         |


## Events

| Event       | Description                                                  | Type               |
| ----------- | ------------------------------------------------------------ | ------------------ |
| \`canceled\`  | Fires when confirm is true and the user cancels the action.  | \`CustomEvent<any>\` |
| \`confirmed\` | Fires when confirm is true and the user confirms the action. | \`CustomEvent<any>\` |


## Slots

| Slot                      | Description |
| ------------------------- | ----------- |
| \`"Content of the button"\` |             |


## CSS Custom Properties

| Name                 | Description                         |
| -------------------- | ----------------------------------- |
| \`--background-color\` | The background color of the button. |
| \`--border-color\`     | The border color of the button.     |
| \`--border-radius\`    | The border radius of the button.    |
| \`--border-size\`      | The border size of the button.      |
| \`--color\`            | The text color of the button.       |
| \`--padding\`          | The padding of the button.          |


## Dependencies

### Used by

 - [dnn-button](.)
 - [dnn-color-input](../dnn-color-input)
 - [dnn-example-form](../examples/dnn-example-form)
 - [dnn-permissions-grid](../dnn-permissions-grid)

### Depends on

- [dnn-modal](../dnn-modal)
- [dnn-button](.)

### Graph
\`\`\`mermaid
graph TD;
  dnn-button --> dnn-button
  dnn-color-input --> dnn-button
  dnn-example-form --> dnn-button
  dnn-permissions-grid --> dnn-button
  style dnn-button fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,{actions:b}=__STORYBOOK_MODULE_ACTIONS__,v={title:"Elements/Button",component:"dnn-button",tags:["autodocs"],parameters:{docs:{description:{component:$}}},argTypes:{appearance:{options:["primary","danger","secondary","tertiary"],control:{type:"select"}},type:{options:["reset","submit","button"],control:{type:"select"}},reversed:{control:"boolean"},size:{options:["small","normal","large"],control:{type:"select"}},confirm:{control:"boolean"},confirmYesText:{control:"text"},confirmNoText:{control:"text"},confirmMessage:{control:"text"},disabled:{control:"boolean"}}},p=b("onClick","onConfirmed","onCanceled"),r=n=>g`
        <dnn-button
            type=${o(n.type)}
            appearance=${n.appearance??"primary"}
            ?reversed=${n.reversed}
            size=${o(n.size)}
            ?confirm=${n.confirm}
            confirm-yes-text=${o(n.confirmYesText)}
            confirm-no-text=${o(n.confirmNoText)}
            confirm-message=${o(n.confirmMessage)}
            ?disabled=${n.disabled}
            @click=${s=>p.onClick(s)}
            @confirmed=${s=>p.onConfirmed(s)}
            @canceled=${s=>p.onCanceled(s)}
          >
            ${u(n.slot)}
        </dnn-button>
    `,e=r.bind({});e.args={slot:"Click me!",reversed:!1,confirm:!1,disabled:!1};const a=r.bind({});a.args={...e.args,appearance:"secondary"};const t=r.bind({});t.args={...e.args,appearance:"tertiary"};const i=r.bind({});i.args={...e.args,appearance:"danger"};const c=r.bind({});c.args={...e.args,reversed:!0};const m=r.bind({});m.args={...e.args,size:"small"};const d=r.bind({});d.args={...e.args,size:"large"};const f=r.bind({});f.args={...e.args,confirm:!0,confirmYesText:"Oh Yeah",confirmNoText:"No Way",confirmMessage:"Are you sure that you're sure that you're sure?"};const l=r.bind({});l.args={...e.args,disabled:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-button
            type=\${ifDefined(args.type)}
            appearance=\${args.appearance ?? 'primary'}
            ?reversed=\${args.reversed}
            size=\${ifDefined(args.size)}
            ?confirm=\${args.confirm}
            confirm-yes-text=\${ifDefined(args.confirmYesText)}
            confirm-no-text=\${ifDefined(args.confirmNoText)}
            confirm-message=\${ifDefined(args.confirmMessage)}
            ?disabled=\${args.disabled}
            @click=\${e => eventsFromNames.onClick(e)}
            @confirmed=\${e => eventsFromNames.onConfirmed(e)}
            @canceled=\${e => eventsFromNames.onCanceled(e)}
          >
            \${unsafeHTML(args.slot)}
        </dnn-button>
    \``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-button
            type=\${ifDefined(args.type)}
            appearance=\${args.appearance ?? 'primary'}
            ?reversed=\${args.reversed}
            size=\${ifDefined(args.size)}
            ?confirm=\${args.confirm}
            confirm-yes-text=\${ifDefined(args.confirmYesText)}
            confirm-no-text=\${ifDefined(args.confirmNoText)}
            confirm-message=\${ifDefined(args.confirmMessage)}
            ?disabled=\${args.disabled}
            @click=\${e => eventsFromNames.onClick(e)}
            @confirmed=\${e => eventsFromNames.onConfirmed(e)}
            @canceled=\${e => eventsFromNames.onCanceled(e)}
          >
            \${unsafeHTML(args.slot)}
        </dnn-button>
    \``,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-button
            type=\${ifDefined(args.type)}
            appearance=\${args.appearance ?? 'primary'}
            ?reversed=\${args.reversed}
            size=\${ifDefined(args.size)}
            ?confirm=\${args.confirm}
            confirm-yes-text=\${ifDefined(args.confirmYesText)}
            confirm-no-text=\${ifDefined(args.confirmNoText)}
            confirm-message=\${ifDefined(args.confirmMessage)}
            ?disabled=\${args.disabled}
            @click=\${e => eventsFromNames.onClick(e)}
            @confirmed=\${e => eventsFromNames.onConfirmed(e)}
            @canceled=\${e => eventsFromNames.onCanceled(e)}
          >
            \${unsafeHTML(args.slot)}
        </dnn-button>
    \``,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-button
            type=\${ifDefined(args.type)}
            appearance=\${args.appearance ?? 'primary'}
            ?reversed=\${args.reversed}
            size=\${ifDefined(args.size)}
            ?confirm=\${args.confirm}
            confirm-yes-text=\${ifDefined(args.confirmYesText)}
            confirm-no-text=\${ifDefined(args.confirmNoText)}
            confirm-message=\${ifDefined(args.confirmMessage)}
            ?disabled=\${args.disabled}
            @click=\${e => eventsFromNames.onClick(e)}
            @confirmed=\${e => eventsFromNames.onConfirmed(e)}
            @canceled=\${e => eventsFromNames.onCanceled(e)}
          >
            \${unsafeHTML(args.slot)}
        </dnn-button>
    \``,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-button
            type=\${ifDefined(args.type)}
            appearance=\${args.appearance ?? 'primary'}
            ?reversed=\${args.reversed}
            size=\${ifDefined(args.size)}
            ?confirm=\${args.confirm}
            confirm-yes-text=\${ifDefined(args.confirmYesText)}
            confirm-no-text=\${ifDefined(args.confirmNoText)}
            confirm-message=\${ifDefined(args.confirmMessage)}
            ?disabled=\${args.disabled}
            @click=\${e => eventsFromNames.onClick(e)}
            @confirmed=\${e => eventsFromNames.onConfirmed(e)}
            @canceled=\${e => eventsFromNames.onCanceled(e)}
          >
            \${unsafeHTML(args.slot)}
        </dnn-button>
    \``,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-button
            type=\${ifDefined(args.type)}
            appearance=\${args.appearance ?? 'primary'}
            ?reversed=\${args.reversed}
            size=\${ifDefined(args.size)}
            ?confirm=\${args.confirm}
            confirm-yes-text=\${ifDefined(args.confirmYesText)}
            confirm-no-text=\${ifDefined(args.confirmNoText)}
            confirm-message=\${ifDefined(args.confirmMessage)}
            ?disabled=\${args.disabled}
            @click=\${e => eventsFromNames.onClick(e)}
            @confirmed=\${e => eventsFromNames.onConfirmed(e)}
            @canceled=\${e => eventsFromNames.onCanceled(e)}
          >
            \${unsafeHTML(args.slot)}
        </dnn-button>
    \``,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-button
            type=\${ifDefined(args.type)}
            appearance=\${args.appearance ?? 'primary'}
            ?reversed=\${args.reversed}
            size=\${ifDefined(args.size)}
            ?confirm=\${args.confirm}
            confirm-yes-text=\${ifDefined(args.confirmYesText)}
            confirm-no-text=\${ifDefined(args.confirmNoText)}
            confirm-message=\${ifDefined(args.confirmMessage)}
            ?disabled=\${args.disabled}
            @click=\${e => eventsFromNames.onClick(e)}
            @confirmed=\${e => eventsFromNames.onConfirmed(e)}
            @canceled=\${e => eventsFromNames.onCanceled(e)}
          >
            \${unsafeHTML(args.slot)}
        </dnn-button>
    \``,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-button
            type=\${ifDefined(args.type)}
            appearance=\${args.appearance ?? 'primary'}
            ?reversed=\${args.reversed}
            size=\${ifDefined(args.size)}
            ?confirm=\${args.confirm}
            confirm-yes-text=\${ifDefined(args.confirmYesText)}
            confirm-no-text=\${ifDefined(args.confirmNoText)}
            confirm-message=\${ifDefined(args.confirmMessage)}
            ?disabled=\${args.disabled}
            @click=\${e => eventsFromNames.onClick(e)}
            @confirmed=\${e => eventsFromNames.onConfirmed(e)}
            @canceled=\${e => eventsFromNames.onCanceled(e)}
          >
            \${unsafeHTML(args.slot)}
        </dnn-button>
    \``,...f.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-button
            type=\${ifDefined(args.type)}
            appearance=\${args.appearance ?? 'primary'}
            ?reversed=\${args.reversed}
            size=\${ifDefined(args.size)}
            ?confirm=\${args.confirm}
            confirm-yes-text=\${ifDefined(args.confirmYesText)}
            confirm-no-text=\${ifDefined(args.confirmNoText)}
            confirm-message=\${ifDefined(args.confirmMessage)}
            ?disabled=\${args.disabled}
            @click=\${e => eventsFromNames.onClick(e)}
            @confirmed=\${e => eventsFromNames.onConfirmed(e)}
            @canceled=\${e => eventsFromNames.onCanceled(e)}
          >
            \${unsafeHTML(args.slot)}
        </dnn-button>
    \``,...l.parameters?.docs?.source}}};const T=["Primary","Secondary","Tertiary","Danger","Reversed","Small","Large","Confirm","Disabled"];export{f as Confirm,i as Danger,l as Disabled,d as Large,e as Primary,c as Reversed,a as Secondary,m as Small,t as Tertiary,T as __namedExportsOrder,v as default};
