import{x as c}from"./lit-element-BTykW0Pr.js";import{o as t}from"./if-defined-rEY2lmWu.js";import{a as f}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const m='# dnn-select\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Properties\n\n| Property       | Attribute      | Description                                                                                                                                 | Type                   | Default     |\n| -------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |\n| `autocomplete` | `autocomplete` | Defines the type of automatic completion the browser can use. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete | `string`               | `"off"`     |\n| `disabled`     | `disabled`     | Defines whether the field is disabled.                                                                                                      | `boolean \\| undefined` | `undefined` |\n| `helpText`     | `help-text`    | Defines the help label displayed under the field.                                                                                           | `string \\| undefined`  | `undefined` |\n| `label`        | `label`        | The label for this input.                                                                                                                   | `string \\| undefined`  | `undefined` |\n| `name`         | `name`         | The name for this input, if used in forms.                                                                                                  | `string \\| undefined`  | `undefined` |\n| `required`     | `required`     | Defines whether the field requires having a value.                                                                                          | `boolean \\| undefined` | `undefined` |\n| `value`        | `value`        | The value of the input.                                                                                                                     | `string`               | `""`        |\n\n\n## Events\n\n| Event         | Description                                                    | Type                  |\n| ------------- | -------------------------------------------------------------- | --------------------- |\n| `valueChange` | Fires when the value has changed and the user exits the input. | `CustomEvent<string>` |\n\n\n## Methods\n\n### `checkValidity() => Promise<ValidityState>`\n\nReports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState\n\n#### Returns\n\nType: `Promise<ValidityState>`\n\n\n\n\n## CSS Custom Properties\n\n| Name                 | Description                                              |\n| -------------------- | -------------------------------------------------------- |\n| `--background-color` | Defines the background color.                            |\n| `--control-radius`   | Defines the radius for the control corners.              |\n| `--danger-color`     | Defines the danger color used for invalid data.          |\n| `--focus-color`      | Defines the color when the component is focused.         |\n| `--foreground-color` | Defines the foreground color.                            |\n| `--input-text-align` | Allows customizing the text alignment of the input text. |\n\n\n## Dependencies\n\n### Used by\n\n - [dnn-example-form](../examples/dnn-example-form)\n\n### Depends on\n\n- [dnn-fieldset](../dnn-fieldset)\n\n### Graph\n```mermaid\ngraph TD;\n  dnn-select --> dnn-fieldset\n  dnn-example-form --> dnn-select\n  style dnn-select fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n',x={title:"Elements/Select",component:"dnn-select",tags:["autodocs"],parameters:{docs:{description:{component:m}}},argTypes:{"disable-validity-reporting":{control:"boolean"},disabled:{control:"boolean"},"help-text":{control:"text"},label:{control:"text"},name:{control:"text"},required:{control:"boolean"},value:{control:"text"}}},h=f("valueChange"),p=e=>c`
        <dnn-select
          ?disable-validity-reporting=${e["disable-validity-reporting"]}
          ?disabled=${e.disabled}
          help-text=${t(e["help-text"])}
          label=${t(e.label)}
          name=${t(e.name)}
          ?required=${t(e.required)}
          value=${t(e.value)}
          @valueChange=${u=>h.valueChange(u)}
        >
          <option value="">-- Select an option --</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </dnn-select>
    `,n=p.bind({});n.args={label:"Option","help-text":"This is a help text",disabled:!1,"disable-validity-reporting":!1,readonly:!1,required:!1};const o=p.bind({});o.args={...n.args,required:!0};var i,a,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => html\`
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
    \``,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var r,s,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`args => html\`
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
    \``,...(d=(s=o.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const $=["Dropdown","Required"];export{n as Dropdown,o as Required,$ as __namedExportsOrder,x as default};
