import{D as B,k as g}from"./lit-element-BIeOw4Bz.js";import{t as n}from"./if-defined-BfYbxOUB.js";import{a as G}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const J='# dnn-input\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Overview\n\nA custom input component that wraps the html input element is a mobile friendly component that supports a label, some help text and other features.\n\n## Properties\n\n| Property                   | Attribute                    | Description                                                                                                                                                                                       | Type                                                                                                                | Default     |\n| -------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `allowShowPassword`        | `allow-show-password`        | If true, enables users to switch between a password and a text field (to view their password).                                                                                                    | `boolean \\| undefined`                                                                                              | `undefined` |\n| `autocomplete`             | `autocomplete`               | Defines the type of auto-completion to use for this field, see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete.                                                         | `string`                                                                                                            | `"off"`     |\n| `disableValidityReporting` | `disable-validity-reporting` | <span style="color:red">**[DEPRECATED]**</span> This control has it\'s own validation reporting, will be removed in v0.25.0<br/><br/>                                                              | `boolean \\| undefined`                                                                                              | `undefined` |\n| `disabled`                 | `disabled`                   | Defines whether the field is disabled.                                                                                                                                                            | `boolean \\| undefined`                                                                                              | `undefined` |\n| `helpText`                 | `help-text`                  | Defines the help label displayed under the field.                                                                                                                                                 | `string \\| undefined`                                                                                               | `undefined` |\n| `inputmode`                | `inputmode`                  | Hints at the type of data that might be entered by the user while editing the element or its contents. This allows a browser to display an appropriate virtual keyboard.                          | `"decimal" \\| "email" \\| "none" \\| "numeric" \\| "search" \\| "tel" \\| "text" \\| "url" \\| undefined`                  | `undefined` |\n| `label`                    | `label`                      | The label for this input.                                                                                                                                                                         | `string \\| undefined`                                                                                               | `undefined` |\n| `max`                      | `max`                        | Defines the maximum allowed value.                                                                                                                                                                | `number \\| string \\| undefined`                                                                                     | `undefined` |\n| `maxlength`                | `maxlength`                  | Defines the maximum amount of charaters.                                                                                                                                                          | `number \\| undefined`                                                                                               | `undefined` |\n| `min`                      | `min`                        | Defines the minimum allowed value.                                                                                                                                                                | `number \\| string \\| undefined`                                                                                     | `undefined` |\n| `minlength`                | `minlength`                  | Defines the minimum amount of charaters.                                                                                                                                                          | `number \\| undefined`                                                                                               | `undefined` |\n| `multiple`                 | `multiple`                   | If true, allows multiple emails to be entered separated by commas.                                                                                                                                | `boolean \\| undefined`                                                                                              | `undefined` |\n| `name`                     | `name`                       | The name for this input when used in forms.                                                                                                                                                       | `string \\| undefined`                                                                                               | `undefined` |\n| `pattern`                  | `pattern`                    | Valid for text, search, url, tel, email, and password, the pattern attribute defines a regular expression that the input\'s value must match in order for the value to pass constraint validation. | `string \\| undefined`                                                                                               | `undefined` |\n| `readonly`                 | `readonly`                   | Defines wheter the defined value is readonly.                                                                                                                                                     | `boolean \\| undefined`                                                                                              | `undefined` |\n| `required`                 | `required`                   | Defines whether the field requires having a value.                                                                                                                                                | `boolean \\| undefined`                                                                                              | `undefined` |\n| `step`                     | `step`                       | Defines the possible steps for numbers and dates/times. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#step                                                             | `number \\| string \\| undefined`                                                                                     | `undefined` |\n| `type`                     | `type`                       | The input type, supports most of html standard input type, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types.                                                       | `"date" \\| "datetime-local" \\| "email" \\| "number" \\| "password" \\| "search" \\| "tel" \\| "text" \\| "time" \\| "url"` | `"text"`    |\n| `value`                    | `value`                      | The value of the input.                                                                                                                                                                           | `number \\| string \\| string[]`                                                                                      | `""`        |\n\n\n## Events\n\n| Event         | Description                                                    | Type                                        |\n| ------------- | -------------------------------------------------------------- | ------------------------------------------- |\n| `valueChange` | Fires when the value has changed and the user exits the input. | `CustomEvent<number \\| string \\| string[]>` |\n| `valueInput`  | Fires when the using is inputing data (on keystrokes).         | `CustomEvent<number \\| string \\| string[]>` |\n\n\n## Methods\n\n### `checkValidity() => Promise<ValidityState>`\n\nReports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState\n\n#### Returns\n\nType: `Promise<ValidityState>`\n\n\n\n### `setCustomValidity(message: string) => Promise<void>`\n\nCan be used to set a custom validity message.\n\n#### Parameters\n\n| Name      | Type     | Description |\n| --------- | -------- | ----------- |\n| `message` | `string` |             |\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot       | Description                                           |\n| ---------- | ----------------------------------------------------- |\n| `"prefix"` | Can be used to inject content before the input field. |\n| `"suffix"` | Can be used to inject content after the input field.  |\n\n\n## CSS Custom Properties\n\n| Name                 | Description                                              |\n| -------------------- | -------------------------------------------------------- |\n| `--background-color` | Defines the background color.                            |\n| `--control-radius`   | Defines the radius for the control corners.              |\n| `--danger-color`     | Defines the danger color used for invalid data.          |\n| `--focus-color`      | Defines the color when the component is focused.         |\n| `--foreground-color` | Defines the foreground color.                            |\n| `--input-text-align` | Allows customizing the text alignment of the input text. |\n\n\n## Dependencies\n\n### Used by\n\n - [dnn-example-form](../examples/dnn-example-form)\n\n### Depends on\n\n- [dnn-fieldset](../dnn-fieldset)\n\n### Graph\n```mermaid\ngraph TD;\n  dnn-input --> dnn-fieldset\n  dnn-example-form --> dnn-input\n  style dnn-input fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n',ee={title:"Elements/Input",component:"dnn-input",tags:["autodocs"],parameters:{docs:{description:{component:J}}},argTypes:{"allow-show-password":{control:"boolean"},autocomplete:{type:"string"},"disable-validity-reporting":{control:"boolean"},disabled:{control:"boolean"},"help-text":{control:"text"},label:{control:"text"},min:{control:"number"},minlength:{control:"number"},max:{control:"number"},maxlength:{control:"number"},multiple:{control:"boolean"},name:{control:"text"},pattern:{control:"text"},readonly:{control:"boolean"},required:{control:"boolean"},step:{control:"number"},type:{options:["date","datetime-local","email","number","password","tel","text","time","url","search"],control:{type:"select"}},value:{control:"text"},prefix:{control:"text"},suffix:{control:"text"}}},h=G("valueChange","valueInput");function Y(e){const t=[];return e.prefix&&t.push(g`<div slot="prefix">${e.prefix}</div>`),e.suffix&&t.push(g`<div slot="suffix">${e.suffix}</div>`),t}const a=e=>g`
        <dnn-input
          autocomplete=${e.autocomplete=="off"?B:e.autocomplete}
          ?disable-validity-reporting=${e["disable-validity-reporting"]}
          ?disabled=${e.disabled}
          help-text=${n(e["help-text"])}
          label=${n(e.label)}
          min=${n(e.min)}
          minlength=${n(e.minlength)}
          max=${n(e.max)}
          maxlength=${n(e.maxlength)}
          name=${n(e.name)}
          ?multiple=${n(e.multiple)}
          pattern=${n(e.pattern)}
          ?readonly=${n(e.readonly)}
          ?required=${n(e.required)}
          step=${n(e.step)}
          type=${n(e.type)}
          value=${n(e.value)}
          ?allow-show-password=${e["allow-show-password"]}
          @valueChange=${t=>h.valueChange(t)}
          @valueInput=${t=>h.valueInput(t)}
        >
        ${Y(e)}
        </dnn-input>
    `,i=a.bind({});i.args={"allow-show-password":!1,autocomplete:"off",disabled:!1,"disable-validity-reporting":!1,multiple:!1,readonly:!1,required:!1};const r=a.bind({});r.args={...i.args,"allow-show-password":!0,type:"password",minlength:8,maxlength:16};const s=a.bind({});s.args={disabled:!0};const l=a.bind({});l.args={label:"Name","help-text":"What is your name?"};const o=a.bind({});o.args={type:"number",min:0,max:10,step:.1};const d=a.bind({});d.args={label:"Email","help-text":"What is your email?",type:"email",multiple:!0};const p=a.bind({});p.args={type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",label:"Telephone","help-text":"Ex: 123-456-7890"};const f=a.bind({});f.args={label:"Read Only","help-text":"Can't touch this!",readonly:!0,value:"Read Only"};const m=a.bind({});m.args={label:"Required","help-text":"You must enter a value!",required:!0};const u=a.bind({});u.args={label:"Amount","help-text":"How much does it cost?",type:"number",min:0,max:1e6,step:.01,prefix:"$"};var $,c,D;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`args => html\`
        <dnn-input
          autocomplete=\${args.autocomplete == "off" ? nothing : args.autocomplete}
          ?disable-validity-reporting=\${args["disable-validity-reporting"]}
          ?disabled=\${args.disabled}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          min=\${ifDefined(args.min)}
          minlength=\${ifDefined(args.minlength)}
          max=\${ifDefined(args.max)}
          maxlength=\${ifDefined(args.maxlength)}
          name=\${ifDefined(args.name)}
          ?multiple=\${ifDefined(args.multiple)}
          pattern=\${ifDefined(args.pattern)}
          ?readonly=\${ifDefined(args.readonly)}
          ?required=\${ifDefined(args.required)}
          step=\${ifDefined(args.step)}
          type=\${ifDefined(args.type)}
          value=\${ifDefined(args.value)}
          ?allow-show-password=\${args["allow-show-password"]}
          @valueChange=\${e => eventsFromNames.valueChange(e)}
          @valueInput=\${e => eventsFromNames.valueInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(D=(c=i.parameters)==null?void 0:c.docs)==null?void 0:D.source}}};var b,v,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => html\`
        <dnn-input
          autocomplete=\${args.autocomplete == "off" ? nothing : args.autocomplete}
          ?disable-validity-reporting=\${args["disable-validity-reporting"]}
          ?disabled=\${args.disabled}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          min=\${ifDefined(args.min)}
          minlength=\${ifDefined(args.minlength)}
          max=\${ifDefined(args.max)}
          maxlength=\${ifDefined(args.maxlength)}
          name=\${ifDefined(args.name)}
          ?multiple=\${ifDefined(args.multiple)}
          pattern=\${ifDefined(args.pattern)}
          ?readonly=\${ifDefined(args.readonly)}
          ?required=\${ifDefined(args.required)}
          step=\${ifDefined(args.step)}
          type=\${ifDefined(args.type)}
          value=\${ifDefined(args.value)}
          ?allow-show-password=\${args["allow-show-password"]}
          @valueChange=\${e => eventsFromNames.valueChange(e)}
          @valueInput=\${e => eventsFromNames.valueInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,w,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => html\`
        <dnn-input
          autocomplete=\${args.autocomplete == "off" ? nothing : args.autocomplete}
          ?disable-validity-reporting=\${args["disable-validity-reporting"]}
          ?disabled=\${args.disabled}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          min=\${ifDefined(args.min)}
          minlength=\${ifDefined(args.minlength)}
          max=\${ifDefined(args.max)}
          maxlength=\${ifDefined(args.maxlength)}
          name=\${ifDefined(args.name)}
          ?multiple=\${ifDefined(args.multiple)}
          pattern=\${ifDefined(args.pattern)}
          ?readonly=\${ifDefined(args.readonly)}
          ?required=\${ifDefined(args.required)}
          step=\${ifDefined(args.step)}
          type=\${ifDefined(args.type)}
          value=\${ifDefined(args.value)}
          ?allow-show-password=\${args["allow-show-password"]}
          @valueChange=\${e => eventsFromNames.valueChange(e)}
          @valueInput=\${e => eventsFromNames.valueInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,q,I;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`args => html\`
        <dnn-input
          autocomplete=\${args.autocomplete == "off" ? nothing : args.autocomplete}
          ?disable-validity-reporting=\${args["disable-validity-reporting"]}
          ?disabled=\${args.disabled}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          min=\${ifDefined(args.min)}
          minlength=\${ifDefined(args.minlength)}
          max=\${ifDefined(args.max)}
          maxlength=\${ifDefined(args.maxlength)}
          name=\${ifDefined(args.name)}
          ?multiple=\${ifDefined(args.multiple)}
          pattern=\${ifDefined(args.pattern)}
          ?readonly=\${ifDefined(args.readonly)}
          ?required=\${ifDefined(args.required)}
          step=\${ifDefined(args.step)}
          type=\${ifDefined(args.type)}
          value=\${ifDefined(args.value)}
          ?allow-show-password=\${args["allow-show-password"]}
          @valueChange=\${e => eventsFromNames.valueChange(e)}
          @valueInput=\${e => eventsFromNames.valueInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(I=(q=l.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var N,F,T;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`args => html\`
        <dnn-input
          autocomplete=\${args.autocomplete == "off" ? nothing : args.autocomplete}
          ?disable-validity-reporting=\${args["disable-validity-reporting"]}
          ?disabled=\${args.disabled}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          min=\${ifDefined(args.min)}
          minlength=\${ifDefined(args.minlength)}
          max=\${ifDefined(args.max)}
          maxlength=\${ifDefined(args.maxlength)}
          name=\${ifDefined(args.name)}
          ?multiple=\${ifDefined(args.multiple)}
          pattern=\${ifDefined(args.pattern)}
          ?readonly=\${ifDefined(args.readonly)}
          ?required=\${ifDefined(args.required)}
          step=\${ifDefined(args.step)}
          type=\${ifDefined(args.type)}
          value=\${ifDefined(args.value)}
          ?allow-show-password=\${args["allow-show-password"]}
          @valueChange=\${e => eventsFromNames.valueChange(e)}
          @valueInput=\${e => eventsFromNames.valueInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(T=(F=o.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var E,P,A;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`args => html\`
        <dnn-input
          autocomplete=\${args.autocomplete == "off" ? nothing : args.autocomplete}
          ?disable-validity-reporting=\${args["disable-validity-reporting"]}
          ?disabled=\${args.disabled}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          min=\${ifDefined(args.min)}
          minlength=\${ifDefined(args.minlength)}
          max=\${ifDefined(args.max)}
          maxlength=\${ifDefined(args.maxlength)}
          name=\${ifDefined(args.name)}
          ?multiple=\${ifDefined(args.multiple)}
          pattern=\${ifDefined(args.pattern)}
          ?readonly=\${ifDefined(args.readonly)}
          ?required=\${ifDefined(args.required)}
          step=\${ifDefined(args.step)}
          type=\${ifDefined(args.type)}
          value=\${ifDefined(args.value)}
          ?allow-show-password=\${args["allow-show-password"]}
          @valueChange=\${e => eventsFromNames.valueChange(e)}
          @valueInput=\${e => eventsFromNames.valueInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var R,k,W;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`args => html\`
        <dnn-input
          autocomplete=\${args.autocomplete == "off" ? nothing : args.autocomplete}
          ?disable-validity-reporting=\${args["disable-validity-reporting"]}
          ?disabled=\${args.disabled}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          min=\${ifDefined(args.min)}
          minlength=\${ifDefined(args.minlength)}
          max=\${ifDefined(args.max)}
          maxlength=\${ifDefined(args.maxlength)}
          name=\${ifDefined(args.name)}
          ?multiple=\${ifDefined(args.multiple)}
          pattern=\${ifDefined(args.pattern)}
          ?readonly=\${ifDefined(args.readonly)}
          ?required=\${ifDefined(args.required)}
          step=\${ifDefined(args.step)}
          type=\${ifDefined(args.type)}
          value=\${ifDefined(args.value)}
          ?allow-show-password=\${args["allow-show-password"]}
          @valueChange=\${e => eventsFromNames.valueChange(e)}
          @valueInput=\${e => eventsFromNames.valueInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(W=(k=p.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var H,U,V;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`args => html\`
        <dnn-input
          autocomplete=\${args.autocomplete == "off" ? nothing : args.autocomplete}
          ?disable-validity-reporting=\${args["disable-validity-reporting"]}
          ?disabled=\${args.disabled}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          min=\${ifDefined(args.min)}
          minlength=\${ifDefined(args.minlength)}
          max=\${ifDefined(args.max)}
          maxlength=\${ifDefined(args.maxlength)}
          name=\${ifDefined(args.name)}
          ?multiple=\${ifDefined(args.multiple)}
          pattern=\${ifDefined(args.pattern)}
          ?readonly=\${ifDefined(args.readonly)}
          ?required=\${ifDefined(args.required)}
          step=\${ifDefined(args.step)}
          type=\${ifDefined(args.type)}
          value=\${ifDefined(args.value)}
          ?allow-show-password=\${args["allow-show-password"]}
          @valueChange=\${e => eventsFromNames.valueChange(e)}
          @valueInput=\${e => eventsFromNames.valueInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(V=(U=f.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var O,z,L;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`args => html\`
        <dnn-input
          autocomplete=\${args.autocomplete == "off" ? nothing : args.autocomplete}
          ?disable-validity-reporting=\${args["disable-validity-reporting"]}
          ?disabled=\${args.disabled}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          min=\${ifDefined(args.min)}
          minlength=\${ifDefined(args.minlength)}
          max=\${ifDefined(args.max)}
          maxlength=\${ifDefined(args.maxlength)}
          name=\${ifDefined(args.name)}
          ?multiple=\${ifDefined(args.multiple)}
          pattern=\${ifDefined(args.pattern)}
          ?readonly=\${ifDefined(args.readonly)}
          ?required=\${ifDefined(args.required)}
          step=\${ifDefined(args.step)}
          type=\${ifDefined(args.type)}
          value=\${ifDefined(args.value)}
          ?allow-show-password=\${args["allow-show-password"]}
          @valueChange=\${e => eventsFromNames.valueChange(e)}
          @valueInput=\${e => eventsFromNames.valueInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(L=(z=m.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var M,j,_;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`args => html\`
        <dnn-input
          autocomplete=\${args.autocomplete == "off" ? nothing : args.autocomplete}
          ?disable-validity-reporting=\${args["disable-validity-reporting"]}
          ?disabled=\${args.disabled}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          min=\${ifDefined(args.min)}
          minlength=\${ifDefined(args.minlength)}
          max=\${ifDefined(args.max)}
          maxlength=\${ifDefined(args.maxlength)}
          name=\${ifDefined(args.name)}
          ?multiple=\${ifDefined(args.multiple)}
          pattern=\${ifDefined(args.pattern)}
          ?readonly=\${ifDefined(args.readonly)}
          ?required=\${ifDefined(args.required)}
          step=\${ifDefined(args.step)}
          type=\${ifDefined(args.type)}
          value=\${ifDefined(args.value)}
          ?allow-show-password=\${args["allow-show-password"]}
          @valueChange=\${e => eventsFromNames.valueChange(e)}
          @valueInput=\${e => eventsFromNames.valueInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(_=(j=u.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};const ne=["Text","Password","Disabled","WithLabelAndHelp","Number","Email","UsPhoneNumber","ReadOnly","Required","Amount"];export{u as Amount,s as Disabled,d as Email,o as Number,r as Password,f as ReadOnly,m as Required,i as Text,p as UsPhoneNumber,l as WithLabelAndHelp,ne as __namedExportsOrder,ee as default};
