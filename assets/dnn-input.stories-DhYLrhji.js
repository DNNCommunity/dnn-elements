import{n as e}from"./chunk-BneVvdWh.js";import{_ as t,b as n,v as r}from"./iframe-BqLFqqtI.js";import{n as i,t as a}from"./if-defined-CEWZc3-b.js";var o,s=e((()=>{o='# dnn-input\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Overview\n\nA custom input component that wraps the html input element is a mobile friendly component that supports a label, some help text and other features.\n\n## Properties\n\n| Property                   | Attribute                    | Description                                                                                                                                                                                       | Type                                                                                                                | Default     |\n| -------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `allowShowPassword`        | `allow-show-password`        | If true, enables users to switch between a password and a text field (to view their password).                                                                                                    | `boolean \\| undefined`                                                                                              | `undefined` |\n| `autocomplete`             | `autocomplete`               | Defines the type of auto-completion to use for this field, see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete.                                                         | `string`                                                                                                            | `"off"`     |\n| `disableValidityReporting` | `disable-validity-reporting` | <span style="color:red">**[DEPRECATED]**</span> This control has it\'s own validation reporting, will be removed in v0.25.0<br/><br/>                                                              | `boolean \\| undefined`                                                                                              | `undefined` |\n| `disabled`                 | `disabled`                   | Defines whether the field is disabled.                                                                                                                                                            | `boolean \\| undefined`                                                                                              | `undefined` |\n| `helpText`                 | `help-text`                  | Defines the help label displayed under the field.                                                                                                                                                 | `string \\| undefined`                                                                                               | `undefined` |\n| `inputmode`                | `inputmode`                  | Hints at the type of data that might be entered by the user while editing the element or its contents. This allows a browser to display an appropriate virtual keyboard.                          | `"decimal" \\| "email" \\| "none" \\| "numeric" \\| "search" \\| "tel" \\| "text" \\| "url" \\| undefined`                  | `undefined` |\n| `label`                    | `label`                      | The label for this input.                                                                                                                                                                         | `string \\| undefined`                                                                                               | `undefined` |\n| `max`                      | `max`                        | Defines the maximum allowed value.                                                                                                                                                                | `number \\| string \\| undefined`                                                                                     | `undefined` |\n| `maxlength`                | `maxlength`                  | Defines the maximum amount of charaters.                                                                                                                                                          | `number \\| undefined`                                                                                               | `undefined` |\n| `min`                      | `min`                        | Defines the minimum allowed value.                                                                                                                                                                | `number \\| string \\| undefined`                                                                                     | `undefined` |\n| `minlength`                | `minlength`                  | Defines the minimum amount of charaters.                                                                                                                                                          | `number \\| undefined`                                                                                               | `undefined` |\n| `multiple`                 | `multiple`                   | If true, allows multiple emails to be entered separated by commas.                                                                                                                                | `boolean \\| undefined`                                                                                              | `undefined` |\n| `name`                     | `name`                       | The name for this input when used in forms.                                                                                                                                                       | `string \\| undefined`                                                                                               | `undefined` |\n| `pattern`                  | `pattern`                    | Valid for text, search, url, tel, email, and password, the pattern attribute defines a regular expression that the input\'s value must match in order for the value to pass constraint validation. | `string \\| undefined`                                                                                               | `undefined` |\n| `readonly`                 | `readonly`                   | Defines wheter the defined value is readonly.                                                                                                                                                     | `boolean \\| undefined`                                                                                              | `undefined` |\n| `required`                 | `required`                   | Defines whether the field requires having a value.                                                                                                                                                | `boolean \\| undefined`                                                                                              | `undefined` |\n| `step`                     | `step`                       | Defines the possible steps for numbers and dates/times. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#step                                                             | `number \\| string \\| undefined`                                                                                     | `undefined` |\n| `type`                     | `type`                       | The input type, supports most of html standard input type, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types.                                                       | `"date" \\| "datetime-local" \\| "email" \\| "number" \\| "password" \\| "search" \\| "tel" \\| "text" \\| "time" \\| "url"` | `"text"`    |\n| `value`                    | `value`                      | The value of the input.                                                                                                                                                                           | `number \\| string \\| string[]`                                                                                      | `""`        |\n\n\n## Events\n\n| Event         | Description                                                    | Type                                        |\n| ------------- | -------------------------------------------------------------- | ------------------------------------------- |\n| `valueChange` | Fires when the value has changed and the user exits the input. | `CustomEvent<number \\| string \\| string[]>` |\n| `valueInput`  | Fires when the using is inputing data (on keystrokes).         | `CustomEvent<number \\| string \\| string[]>` |\n\n\n## Methods\n\n### `checkValidity() => Promise<ValidityState>`\n\nReports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState\n\n#### Returns\n\nType: `Promise<ValidityState>`\n\n\n\n### `setCustomValidity(message: string) => Promise<void>`\n\nCan be used to set a custom validity message.\n\n#### Parameters\n\n| Name      | Type     | Description |\n| --------- | -------- | ----------- |\n| `message` | `string` |             |\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot       | Description                                           |\n| ---------- | ----------------------------------------------------- |\n| `"prefix"` | Can be used to inject content before the input field. |\n| `"suffix"` | Can be used to inject content after the input field.  |\n\n\n## CSS Custom Properties\n\n| Name                 | Description                                              |\n| -------------------- | -------------------------------------------------------- |\n| `--background-color` | Defines the background color.                            |\n| `--control-radius`   | Defines the radius for the control corners.              |\n| `--danger-color`     | Defines the danger color used for invalid data.          |\n| `--focus-color`      | Defines the color when the component is focused.         |\n| `--foreground-color` | Defines the foreground color.                            |\n| `--input-text-align` | Allows customizing the text alignment of the input text. |\n\n\n## Dependencies\n\n### Used by\n\n - dnn-example-form\n\n### Depends on\n\n- [dnn-fieldset](../dnn-fieldset)\n\n### Graph\n```mermaid\ngraph TD;\n  dnn-input --> dnn-fieldset\n  dnn-example-form --> dnn-input\n  style dnn-input fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n'}));function c(e){let t=[];return e.prefix&&t.push(n`<div slot="prefix">${e.prefix}</div>`),e.suffix&&t.push(n`<div slot="suffix">${e.suffix}</div>`),t}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{t(),a(),s(),{actions:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Elements/Input`,component:`dnn-input`,tags:[`autodocs`],parameters:{docs:{description:{component:o}}},argTypes:{"allow-show-password":{control:`boolean`},autocomplete:{type:`string`},"disable-validity-reporting":{control:`boolean`},disabled:{control:`boolean`},"help-text":{control:`text`},label:{control:`text`},min:{control:`number`},minlength:{control:`number`},max:{control:`number`},maxlength:{control:`number`},multiple:{control:`boolean`},name:{control:`text`},pattern:{control:`text`},readonly:{control:`boolean`},required:{control:`boolean`},step:{control:`number`},type:{options:[`date`,`datetime-local`,`email`,`number`,`password`,`tel`,`text`,`time`,`url`,`search`],control:{type:`select`}},value:{control:`text`},prefix:{control:`text`},suffix:{control:`text`}}},d=l(`valueChange`,`valueInput`),f=e=>n`
        <dnn-input
          autocomplete=${e.autocomplete==`off`?r:e.autocomplete}
          ?disable-validity-reporting=${e[`disable-validity-reporting`]}
          ?disabled=${e.disabled}
          help-text=${i(e[`help-text`])}
          label=${i(e.label)}
          min=${i(e.min)}
          minlength=${i(e.minlength)}
          max=${i(e.max)}
          maxlength=${i(e.maxlength)}
          name=${i(e.name)}
          ?multiple=${i(e.multiple)}
          pattern=${i(e.pattern)}
          ?readonly=${i(e.readonly)}
          ?required=${i(e.required)}
          step=${i(e.step)}
          type=${i(e.type)}
          value=${i(e.value)}
          ?allow-show-password=${e[`allow-show-password`]}
          @valueChange=${e=>d.valueChange(e)}
          @valueInput=${e=>d.valueInput(e)}
        >
        ${c(e)}
        </dnn-input>
    `,p=f.bind({}),p.args={"allow-show-password":!1,autocomplete:`off`,disabled:!1,"disable-validity-reporting":!1,multiple:!1,readonly:!1,required:!1},m=f.bind({}),m.args={...p.args,"allow-show-password":!0,type:`password`,minlength:8,maxlength:16},h=f.bind({}),h.args={disabled:!0},g=f.bind({}),g.args={label:`Name`,"help-text":`What is your name?`},_=f.bind({}),_.args={type:`number`,min:0,max:10,step:.1},v=f.bind({}),v.args={label:`Email`,"help-text":`What is your email?`,type:`email`,multiple:!0},y=f.bind({}),y.args={type:`tel`,pattern:`[0-9]{3}-[0-9]{3}-[0-9]{4}`,label:`Telephone`,"help-text":`Ex: 123-456-7890`},b=f.bind({}),b.args={label:`Read Only`,"help-text":`Can't touch this!`,readonly:!0,value:`Read Only`},x=f.bind({}),x.args={label:`Required`,"help-text":`You must enter a value!`,required:!0},S=f.bind({}),S.args={label:`Amount`,"help-text":`How much does it cost?`,type:`number`,min:0,max:1e6,step:.01,prefix:`$`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...S.parameters?.docs?.source}}},C=[`Text`,`Password`,`Disabled`,`WithLabelAndHelp`,`Number`,`Email`,`UsPhoneNumber`,`ReadOnly`,`Required`,`Amount`]}))();export{S as Amount,h as Disabled,v as Email,_ as Number,m as Password,b as ReadOnly,x as Required,p as Text,y as UsPhoneNumber,g as WithLabelAndHelp,C as __namedExportsOrder,u as default};