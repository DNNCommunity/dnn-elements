import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,d as n}from"./iframe-DlVo5KJr.js";import{n as r,t as i}from"./if-defined-B02m1_RW.js";var a;function o(){return(o=e((()=>{a=`# dnn-select



<!-- Auto Generated Below -->


## Overview

A custom select component that wraps the html select element is a mobile friendly component that supports a label, some help text and other features.

## Properties

| Property       | Attribute      | Description                                                                                                                                 | Type                   | Default     |
| -------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| \`autocomplete\` | \`autocomplete\` | Defines the type of automatic completion the browser can use. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete | \`string\`               | \`"off"\`     |
| \`disabled\`     | \`disabled\`     | Defines whether the field is disabled.                                                                                                      | \`boolean \\| undefined\` | \`undefined\` |
| \`helpText\`     | \`help-text\`    | Defines the help label displayed under the field.                                                                                           | \`string \\| undefined\`  | \`undefined\` |
| \`label\`        | \`label\`        | The label for this input.                                                                                                                   | \`string \\| undefined\`  | \`undefined\` |
| \`name\`         | \`name\`         | The name for this input, if used in forms.                                                                                                  | \`string \\| undefined\`  | \`undefined\` |
| \`required\`     | \`required\`     | Defines whether the field requires having a value.                                                                                          | \`boolean \\| undefined\` | \`undefined\` |
| \`value\`        | \`value\`        | The value of the input.                                                                                                                     | \`string\`               | \`""\`        |


## Events

| Event         | Description                                                    | Type                  |
| ------------- | -------------------------------------------------------------- | --------------------- |
| \`valueChange\` | Fires when the value has changed and the user exits the input. | \`CustomEvent<string>\` |


## Methods

### \`checkValidity() => Promise<ValidityState>\`

Reports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState

#### Returns

Type: \`Promise<ValidityState>\`




## Slots

| Slot | Description                        |
| ---- | ---------------------------------- |
|      | The options to show in the select. |


## CSS Custom Properties

| Name                 | Description                                              |
| -------------------- | -------------------------------------------------------- |
| \`--background-color\` | Defines the background color.                            |
| \`--control-radius\`   | Defines the radius for the control corners.              |
| \`--danger-color\`     | Defines the danger color used for invalid data.          |
| \`--focus-color\`      | Defines the color when the component is focused.         |
| \`--foreground-color\` | Defines the foreground color.                            |
| \`--input-text-align\` | Allows customizing the text alignment of the input text. |


## Dependencies

### Used by

 - dnn-example-form

### Depends on

- [dnn-fieldset](../dnn-fieldset)

### Graph
\`\`\`mermaid
graph TD;
  dnn-select --> dnn-fieldset
  dnn-example-form --> dnn-select
  style dnn-select fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`})))()}var s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),i(),o(),{actions:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Elements/Select`,component:`dnn-select`,tags:[`autodocs`],parameters:{docs:{description:{component:a}}},argTypes:{"disable-validity-reporting":{control:`boolean`},disabled:{control:`boolean`},"help-text":{control:`text`},label:{control:`text`},name:{control:`text`},required:{control:`boolean`},value:{control:`text`}}},l=s(`valueChange`),u=e=>n`
        <dnn-select
          ?disable-validity-reporting=${e[`disable-validity-reporting`]}
          ?disabled=${e.disabled}
          help-text=${r(e[`help-text`])}
          label=${r(e.label)}
          name=${r(e.name)}
          ?required=${r(e.required)}
          value=${r(e.value)}
          @valueChange=${e=>l.valueChange(e)}
        >
          <option value="">-- Select an option --</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </dnn-select>
    `,d=u.bind({}),d.args={label:`Option`,"help-text":`This is a help text`,disabled:!1,"disable-validity-reporting":!1,readonly:!1,required:!1},f=u.bind({}),f.args={...d.args,required:!0},p=[`Dropdown`,`Required`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-select
          ?disable-validity-reporting=\${args["disable-validity-reporting"]}
          ?disabled=\${args.disabled}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          name=\${ifDefined(args.name)}
          ?required=\${ifDefined(args.required)}
          value=\${ifDefined(args.value)}
          @valueChange=\${e => eventsFromNames.valueChange(e)}
        >
          <option value="">-- Select an option --</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </dnn-select>
    \``,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-select
          ?disable-validity-reporting=\${args["disable-validity-reporting"]}
          ?disabled=\${args.disabled}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          name=\${ifDefined(args.name)}
          ?required=\${ifDefined(args.required)}
          value=\${ifDefined(args.value)}
          @valueChange=\${e => eventsFromNames.valueChange(e)}
        >
          <option value="">-- Select an option --</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </dnn-select>
    \``,...f.parameters?.docs?.source}}}})))()}m();export{d as Dropdown,f as Required,p as __namedExportsOrder,c as default};