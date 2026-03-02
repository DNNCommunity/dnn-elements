import{b as s}from"./iframe-mofKu0_g.js";import{o as n}from"./if-defined-BCYi6Oyr.js";import{o as t}from"./unsafe-html-BEmSXqFW.js";import"./preload-helper-PPVm8Dsz.js";const i=`# dnn-modal



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                  | Description                                                                                                                                                                                                                                                                                                                                                                                               | Type                   | Default         |
| ------------------------ | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------------- |
| \`backdropDismiss\`        | \`backdrop-dismiss\`         | <span style="color:red">**[DEPRECATED]**</span> boolean props should always default to being false per html specs, use preventBackdropDismiss instead, will be removed in v0.28.0. Pass false to remove the backdrop click auto-dismiss feature.<br/><br/>                                                                                                                                                | \`boolean \\| undefined\` | \`undefined\`     |
| \`closeText\`              | \`close-text\`               | Optionally pass the aria-label text for the close button. Defaults to "Close modal" if not provided.                                                                                                                                                                                                                                                                                                      | \`string \\| undefined\`  | \`"Close modal"\` |
| \`hideCloseButton\`        | \`hide-close-button\`        | Optionally you can pass true to not show the close button. If you decide to do so, you should either not also prevent dismissal by clicking the backdrop or provide your own dismissal logic in the modal content.                                                                                                                                                                                        | \`boolean\`              | \`false\`         |
| \`preventBackdropDismiss\` | \`prevent-backdrop-dismiss\` | Pass true to remove the backdrop click auto-dismiss feature. Defaults to false.                                                                                                                                                                                                                                                                                                                           | \`boolean \\| undefined\` | \`false\`         |
| \`resizable\`              | \`resizable\`                | If set to true, the modal becomes resizable.                                                                                                                                                                                                                                                                                                                                                              | \`boolean \\| undefined\` | \`false\`         |
| \`showCloseButton\`        | \`show-close-button\`        | <span style="color:red">**[DEPRECATED]**</span> boolean props should always default to being false per html specs, use hideCloseButton instead, will be removed in v0.28.0. Optionally you can pass false to not show the close button. If you decide to do so, you should either not also prevent dismissal by clicking the backdrop or provide your own dismissal logic in the modal content.<br/><br/> | \`boolean \\| undefined\` | \`undefined\`     |
| \`visible\`                | \`visible\`                  | Reflects the visible state of the modal.                                                                                                                                                                                                                                                                                                                                                                  | \`boolean\`              | \`false\`         |


## Events

| Event       | Description                        | Type               |
| ----------- | ---------------------------------- | ------------------ |
| \`dismissed\` | Fires when the modal is dismissed. | \`CustomEvent<any>\` |


## Methods

### \`hide() => Promise<void>\`

Hides the modal

#### Returns

Type: \`Promise<void>\`



### \`show() => Promise<void>\`

Shows the modal

#### Returns

Type: \`Promise<void>\`




## CSS Custom Properties

| Name          | Description                      |
| ------------- | -------------------------------- |
| \`--max-width\` | The maximum width of the module. |


## Dependencies

### Used by

 - [dnn-button](../dnn-button)
 - [dnn-color-input](../dnn-color-input)
 - [dnn-image-cropper](../dnn-image-cropper)

### Graph
\`\`\`mermaid
graph TD;
  dnn-button --> dnn-modal
  dnn-color-input --> dnn-modal
  dnn-image-cropper --> dnn-modal
  style dnn-modal fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,{actions:d}=__STORYBOOK_MODULE_ACTIONS__,m={title:"Elements/Modal",component:"dnn-modal",tags:["autodocs"],parameters:{docs:{description:{component:i}}},argTypes:{preventBackdropDismiss:{control:"boolean"},closeText:{control:"text"},hideCloseButton:{control:"boolean"},visible:{control:"boolean"}}};d("dismissed");const l=e=>s`
        <dnn-modal
            ?prevent-backdrop-dismiss=${n(e.preventBackdropDismiss)}
            close-text=${n(e.closeText)}
            ?hide-close-button=${n(e.hideCloseButton)}
            ?visible=${n(e.visible)}>
            ${t(e.slot)}
        </dnn-modal>
    `,o=l.bind({});o.args={backdropDismiss:!0,closeText:"Close modal",showCloseButton:!0,visible:!0,slot:`<h1>Welcome to the DNN Modal</h1>
        <p>This is a modal component that can be used to display content to the user.</p>`};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-modal
            ?prevent-backdrop-dismiss=\${ifDefined(args.preventBackdropDismiss)}
            close-text=\${ifDefined(args.closeText)}
            ?hide-close-button=\${ifDefined(args.hideCloseButton)}
            ?visible=\${ifDefined(args.visible)}>
            \${unsafeHTML(args.slot)}
        </dnn-modal>
    \``,...o.parameters?.docs?.source}}};const u=["Modal"];export{o as Modal,u as __namedExportsOrder,m as default};
