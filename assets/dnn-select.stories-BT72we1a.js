import{n as e}from"./chunk-BneVvdWh.js";import{_ as t,b as n}from"./iframe-BqLFqqtI.js";import{n as r,t as i}from"./if-defined-CEWZc3-b.js";var a,o=e((()=>{a='# dnn-select\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property       | Attribute      | Description                                                                                                                                 | Type                   | Default     |\n| -------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |\n| `autocomplete` | `autocomplete` | Defines the type of automatic completion the browser can use. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete | `string`               | `"off"`     |\n| `disabled`     | `disabled`     | Defines whether the field is disabled.                                                                                                      | `boolean \\| undefined` | `undefined` |\n| `helpText`     | `help-text`    | Defines the help label displayed under the field.                                                                                           | `string \\| undefined`  | `undefined` |\n| `label`        | `label`        | The label for this input.                                                                                                                   | `string \\| undefined`  | `undefined` |\n| `name`         | `name`         | The name for this input, if used in forms.                                                                                                  | `string \\| undefined`  | `undefined` |\n| `required`     | `required`     | Defines whether the field requires having a value.                                                                                          | `boolean \\| undefined` | `undefined` |\n| `value`        | `value`        | The value of the input.                                                                                                                     | `string`               | `""`        |\n\n\n## Events\n\n| Event         | Description                                                    | Type                  |\n| ------------- | -------------------------------------------------------------- | --------------------- |\n| `valueChange` | Fires when the value has changed and the user exits the input. | `CustomEvent<string>` |\n\n\n## Methods\n\n### `checkValidity() => Promise<ValidityState>`\n\nReports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState\n\n#### Returns\n\nType: `Promise<ValidityState>`\n\n\n\n\n## CSS Custom Properties\n\n| Name                 | Description                                              |\n| -------------------- | -------------------------------------------------------- |\n| `--background-color` | Defines the background color.                            |\n| `--control-radius`   | Defines the radius for the control corners.              |\n| `--danger-color`     | Defines the danger color used for invalid data.          |\n| `--focus-color`      | Defines the color when the component is focused.         |\n| `--foreground-color` | Defines the foreground color.                            |\n| `--input-text-align` | Allows customizing the text alignment of the input text. |\n\n\n## Dependencies\n\n### Used by\n\n - dnn-example-form\n\n### Depends on\n\n- [dnn-fieldset](../dnn-fieldset)\n\n### Graph\n```mermaid\ngraph TD;\n  dnn-select --> dnn-fieldset\n  dnn-example-form --> dnn-select\n  style dnn-select fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n'})),s,c,l,u,d,f,p;e((()=>{t(),i(),o(),{actions:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Elements/Select`,component:`dnn-select`,tags:[`autodocs`],parameters:{docs:{description:{component:a}}},argTypes:{"disable-validity-reporting":{control:`boolean`},disabled:{control:`boolean`},"help-text":{control:`text`},label:{control:`text`},name:{control:`text`},required:{control:`boolean`},value:{control:`text`}}},l=s(`valueChange`),u=e=>n`
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
    `,d=u.bind({}),d.args={label:`Option`,"help-text":`This is a help text`,disabled:!1,"disable-validity-reporting":!1,readonly:!1,required:!1},f=u.bind({}),f.args={...d.args,required:!0},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => html\`
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
    \``,...f.parameters?.docs?.source}}},p=[`Dropdown`,`Required`]}))();export{d as Dropdown,f as Required,p as __namedExportsOrder,c as default};