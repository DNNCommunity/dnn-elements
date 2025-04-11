import{k as G}from"./lit-element-BIeOw4Bz.js";import{t as s}from"./if-defined-BfYbxOUB.js";import{a as J}from"./unsafe-html-BgbrHYxl.js";import{a as R}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const U=`# dnn-button



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

| Property         | Attribute          | Description                                                                                                                                                                                                   | Type                                                 | Default            |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------ |
| \`appearance\`     | \`appearance\`       | Defines the look of the button.                                                                                                                                                                               | \`"danger" \\| "primary" \\| "secondary" \\| "tertiary"\` | \`'primary'\`        |
| \`confirm\`        | \`confirm\`          | Optionally add a confirmation dialog before firing the action.                                                                                                                                                | \`boolean \\| undefined\`                               | \`false\`            |
| \`confirmMessage\` | \`confirm-message\`  | The text of the confirmation message;                                                                                                                                                                         | \`string \\| undefined\`                                | \`"Are you sure ?"\` |
| \`confirmNoText\`  | \`confirm-no-text\`  | The text of the no button for confirmation.                                                                                                                                                                   | \`string \\| undefined\`                                | \`"No"\`             |
| \`confirmYesText\` | \`confirm-yes-text\` | The text of the yes button for confirmation.                                                                                                                                                                  | \`string \\| undefined\`                                | \`"Yes"\`            |
| \`disabled\`       | \`disabled\`         | Disables the button                                                                                                                                                                                           | \`boolean\`                                            | \`false\`            |
| \`reversed\`       | \`reversed\`         | Optionally reverses the button style.                                                                                                                                                                         | \`boolean\`                                            | \`false\`            |
| \`size\`           | \`size\`             | Optionally sets the button size, small normal or large, defaults to normal                                                                                                                                    | \`"large" \\| "normal" \\| "small" \\| undefined\`        | \`'normal'\`         |
| \`type\`           | \`type\`             | Optional button type, can be either submit, reset or button and defaults to button if not specified. Warning: DNN wraps the whole page in a form, only use this if you are handling form submission manually. | \`"button" \\| "reset" \\| "submit"\`                    | \`'button'\`         |


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
`,K={title:"Elements/Button",component:"dnn-button",tags:["autodocs"],parameters:{docs:{description:{component:U}}},argTypes:{appearance:{options:["primary","danger","secondary","tertiary"],control:{type:"select"}},formButtonType:{options:["reset","submit","button"],control:{type:"select"}},reversed:{control:"boolean"},size:{options:["small","normal","large"],control:{type:"select"}},confirm:{control:"boolean"},confirmYesText:{control:"text"},confirmNoText:{control:"text"},confirmMessage:{control:"text"},disabled:{control:"boolean"}}},p=R("onClick","onConfirmed","onCanceled"),r=n=>G`
        <dnn-button
            formButtonType=${s(n.formButtonType)}
            appearance=${n.appearance??"primary"}
            ?reversed=${n.reversed}
            size=${s(n.size)}
            ?confirm=${n.confirm}
            confirm-yes-text=${s(n.confirmYesText)}
            confirm-no-text=${s(n.confirmNoText)}
            confirm-message=${s(n.confirmMessage)}
            ?disabled=${n.disabled}
            @click=${o=>p.onClick(o)}
            @confirmed=${o=>p.onConfirmed(o)}
            @canceled=${o=>p.onCanceled(o)}
          >
            ${J(n.slot)}
        </dnn-button>
    `,e=r.bind({});e.args={slot:"Click me!",reversed:!1,confirm:!1,disabled:!1};const a=r.bind({});a.args={...e.args,appearance:"secondary"};const t=r.bind({});t.args={...e.args,appearance:"tertiary"};const i=r.bind({});i.args={...e.args,appearance:"danger"};const m=r.bind({});m.args={...e.args,reversed:!0};const c=r.bind({});c.args={...e.args,size:"small"};const d=r.bind({});d.args={...e.args,size:"large"};const f=r.bind({});f.args={...e.args,confirm:!0,confirmYesText:"Oh Yeah",confirmNoText:"No Way",confirmMessage:"Are you sure that you're sure that you're sure?"};const l=r.bind({});l.args={...e.args,disabled:!0};var g,u,$;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => html\`
        <dnn-button
            formButtonType=\${ifDefined(args.formButtonType)}
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
    \``,...($=(u=e.parameters)==null?void 0:u.docs)==null?void 0:$.source}}};var b,y,T;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => html\`
        <dnn-button
            formButtonType=\${ifDefined(args.formButtonType)}
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
    \``,...(T=(y=a.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,h,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => html\`
        <dnn-button
            formButtonType=\${ifDefined(args.formButtonType)}
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
    \``,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var D,N,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`args => html\`
        <dnn-button
            formButtonType=\${ifDefined(args.formButtonType)}
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
    \``,...(C=(N=i.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var k,F,z;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`args => html\`
        <dnn-button
            formButtonType=\${ifDefined(args.formButtonType)}
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
    \``,...(z=(F=m.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var B,M,S;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`args => html\`
        <dnn-button
            formButtonType=\${ifDefined(args.formButtonType)}
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
    \``,...(S=(M=c.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var Y,L,H;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`args => html\`
        <dnn-button
            formButtonType=\${ifDefined(args.formButtonType)}
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
    \``,...(H=(L=d.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var O,w,A;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`args => html\`
        <dnn-button
            formButtonType=\${ifDefined(args.formButtonType)}
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
    \``,...(A=(w=f.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var E,P,W;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => html\`
        <dnn-button
            formButtonType=\${ifDefined(args.formButtonType)}
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
    \``,...(W=(P=l.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const Q=["Primary","Secondary","Tertiary","Danger","Reversed","Small","Large","Confirm","Disabled"];export{f as Confirm,i as Danger,l as Disabled,d as Large,e as Primary,m as Reversed,a as Secondary,c as Small,t as Tertiary,Q as __namedExportsOrder,K as default};
