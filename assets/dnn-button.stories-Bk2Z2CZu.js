import{n as e}from"./chunk-BneVvdWh.js";import{_ as t,b as n}from"./iframe-BqLFqqtI.js";import{n as r,t as i}from"./if-defined-CEWZc3-b.js";import{n as a,t as o}from"./unsafe-html-DltFLQuS.js";var s,c=e((()=>{s=`# dnn-button



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
 - dnn-example-form
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
`})),l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{t(),i(),o(),c(),{actions:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Elements/Button`,component:`dnn-button`,tags:[`autodocs`],parameters:{docs:{description:{component:s}}},argTypes:{appearance:{options:[`primary`,`danger`,`secondary`,`tertiary`],control:{type:`select`}},type:{options:[`reset`,`submit`,`button`],control:{type:`select`}},reversed:{control:`boolean`},size:{options:[`small`,`normal`,`large`],control:{type:`select`}},confirm:{control:`boolean`},confirmYesText:{control:`text`},confirmNoText:{control:`text`},confirmMessage:{control:`text`},disabled:{control:`boolean`}}},d=l(`onClick`,`onConfirmed`,`onCanceled`),f=e=>n`
        <dnn-button
            type=${r(e.type)}
            appearance=${e.appearance??`primary`}
            ?reversed=${e.reversed}
            size=${r(e.size)}
            ?confirm=${e.confirm}
            confirm-yes-text=${r(e.confirmYesText)}
            confirm-no-text=${r(e.confirmNoText)}
            confirm-message=${r(e.confirmMessage)}
            ?disabled=${e.disabled}
            @click=${e=>d.onClick(e)}
            @confirmed=${e=>d.onConfirmed(e)}
            @canceled=${e=>d.onCanceled(e)}
          >
            ${a(e.slot)}
        </dnn-button>
    `,p=f.bind({}),p.args={slot:`Click me!`,reversed:!1,confirm:!1,disabled:!1},m=f.bind({}),m.args={...p.args,appearance:`secondary`},h=f.bind({}),h.args={...p.args,appearance:`tertiary`},g=f.bind({}),g.args={...p.args,appearance:`danger`},_=f.bind({}),_.args={...p.args,reversed:!0},v=f.bind({}),v.args={...p.args,size:`small`},y=f.bind({}),y.args={...p.args,size:`large`},b=f.bind({}),b.args={...p.args,confirm:!0,confirmYesText:`Oh Yeah`,confirmNoText:`No Way`,confirmMessage:`Are you sure that you're sure that you're sure?`},x=f.bind({}),x.args={...p.args,disabled:!0},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...x.parameters?.docs?.source}}},S=[`Primary`,`Secondary`,`Tertiary`,`Danger`,`Reversed`,`Small`,`Large`,`Confirm`,`Disabled`]}))();export{b as Confirm,g as Danger,x as Disabled,y as Large,p as Primary,_ as Reversed,m as Secondary,v as Small,h as Tertiary,S as __namedExportsOrder,u as default};