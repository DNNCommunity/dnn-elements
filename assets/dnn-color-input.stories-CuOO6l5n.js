import{k as s}from"./lit-element-BIeOw4Bz.js";import{t as o}from"./if-defined-BfYbxOUB.js";import{a as C}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const v='# dnn-color-input\n\n\n\n<!-- Auto Generated Below -->\n\n\n## Overview\n\nA custom input component that allows previewing and changing a color value.\n\n## Properties\n\n| Property           | Attribute            | Description                                                                                         | Type                                                                                                                   | Default                                                                                                                                                             |\n| ------------------ | -------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `color`            | `color`              | Sets the initial color, must be a valid 8 character hexadecimal string without the # sign.          | `string`                                                                                                               | `"000088"`                                                                                                                                                          |\n| `contrastColor`    | `contrast-color`     | Sets the initial contrast color, must be a valid 8 character hexadecimal string without the # sign. | `string`                                                                                                               | `"FFFFFF"`                                                                                                                                                          |\n| `darkColor`        | `dark-color`         | Sets the initial dark color, must be a valid 8 character hexadecimal string without the # sign.     | `string`                                                                                                               | `"0000044"`                                                                                                                                                         |\n| `helpText`         | `help-text`          | Defines the help label displayed under the field.                                                   | `string \\| undefined`                                                                                                  | `undefined`                                                                                                                                                         |\n| `label`            | `label`              | The label for this input.                                                                           | `string \\| undefined`                                                                                                  | `undefined`                                                                                                                                                         |\n| `lightColor`       | `light-color`        | Sets the initial light color, must be a valid 8 character hexadecimal string without the # sign.    | `string`                                                                                                               | `"00000FF"`                                                                                                                                                         |\n| `localization`     | `localization`       | Can be used to customize the text language.                                                         | `{ contrast: string; preview: string; cancel: string; confirm: string; normal: string; light: string; dark: string; }` | `{     contrast: "Contrast",     preview: "Preview",     cancel: "Cancel",     confirm: "Confirm",     normal: "Normal",     light: "Light",     dark: "Dark",   }` |\n| `name`             | `name`               | The name for this input if forms are used.                                                          | `string \\| undefined`                                                                                                  | `undefined`                                                                                                                                                         |\n| `readonly`         | `readonly`           | Disables interacting with the component.                                                            | `boolean \\| undefined`                                                                                                 | `undefined`                                                                                                                                                         |\n| `useContrastColor` | `use-contrast-color` | If true, the picker will allow selecting a contast color too.                                       | `boolean \\| undefined`                                                                                                 | `undefined`                                                                                                                                                         |\n| `useDarkColor`     | `use-dark-color`     | If true, the picker will allow selecting a dark color too.                                          | `boolean \\| undefined`                                                                                                 | `undefined`                                                                                                                                                         |\n| `useLightColor`    | `use-light-color`    | If true, the picker will allow selecting a light color too.                                         | `boolean \\| undefined`                                                                                                 | `undefined`                                                                                                                                                         |\n\n\n## Events\n\n| Event         | Description                                                      | Type                        |\n| ------------- | ---------------------------------------------------------------- | --------------------------- |\n| `colorChange` | Fires when the color was changed and confirmed.                  | `CustomEvent<DnnColorInfo>` |\n| `colorInput`  | Fires live as the user is trying color changes inside the modal. | `CustomEvent<DnnColorInfo>` |\n\n\n## Slots\n\n| Slot       | Description                                           |\n| ---------- | ----------------------------------------------------- |\n| `"prefix"` | Can be used to inject content before the input field. |\n| `"suffix"` | Can be used to inject content after the input field.  |\n\n\n## CSS Custom Properties\n\n| Name                   | Description                                                          |\n| ---------------------- | -------------------------------------------------------------------- |\n| `--background-color`   | Defines the background color.                                        |\n| `--contast-text-align` | Allows customizing the text alignment of the contast indicator text. |\n| `--control-radius`     | Defines the radius for the control corners.                          |\n| `--focus-color`        | Defines the color when the component is focused.                     |\n| `--foreground-color`   | Defines the foreground color.                                        |\n\n\n## Dependencies\n\n### Used by\n\n - [dnn-example-form](../examples/dnn-example-form)\n\n### Depends on\n\n- [dnn-fieldset](../dnn-fieldset)\n- [dnn-modal](../dnn-modal)\n- [dnn-tabs](../dnn-tabs)\n- [dnn-tab](../dnn-tab)\n- [dnn-color-picker](../dnn-color-picker)\n- [dnn-button](../dnn-button)\n\n### Graph\n```mermaid\ngraph TD;\n  dnn-color-input --> dnn-fieldset\n  dnn-color-input --> dnn-modal\n  dnn-color-input --> dnn-tabs\n  dnn-color-input --> dnn-tab\n  dnn-color-input --> dnn-color-picker\n  dnn-color-input --> dnn-button\n  dnn-button --> dnn-modal\n  dnn-button --> dnn-button\n  dnn-example-form --> dnn-color-input\n  style dnn-color-input fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n',N={title:"Elements/Color Input",component:"dnn-color-input",tags:["autodocs"],parameters:{docs:{description:{component:v}}},argTypes:{color:{control:"string"},"contrast-color":{control:"string"},"light-color":{control:"string"},"dark-color":{control:"string"},"help-text":{control:"text"},label:{control:"text"},name:{control:"text"},readonly:{control:"boolean"},localization:{control:"object"},"use-contrast-color":{control:"boolean"},"use-light-color":{control:"boolean"},"use-dark-color":{control:"boolean"},prefix:{control:"text"},suffix:{control:"text"}}},c=C("colorChange","colorInput");function w(n){const e=[];return n.prefix&&e.push(s`<div slot="prefix">${n.prefix}</div>`),n.suffix&&e.push(s`<div slot="suffix">${n.suffix}</div>`),e}const i=n=>s`
        <dnn-color-input
          color=${o(n.color)}
          contrast-color=${o(n["contrast-color"])}
          light-color=${o(n["light-color"])}
          dark-color=${o(n["dark-color"])}
          ?use-contrast-color=${o(n["use-contrast-color"])}
          ?use-light-color=${o(n["use-light-color"])}
          ?use-dark-color=${o(n["use-dark-color"])}
          help-text=${o(n["help-text"])}
          label=${o(n.label)}
          name=${o(n.name)}
          ?readonly=${o(n.readonly)}
          @colorChange=${e=>c.colorChange(e)}
          @colorInput=${e=>c.colorInput(e)}
        >
        ${w(n)}
        </dnn-input>
    `,r=i.bind({});r.args={"allow-show-password":!1,autocomplete:"off",disabled:!1,"disable-validity-reporting":!1,multiple:!1,readonly:!1,required:!1,color:"000088"};const l=i.bind({});l.args={...r.args,"help-text":"Choose a color",label:"Color"};const t=i.bind({});t.args={...r.args,"contrast-color":"FFFFFF",color:"0000AA","use-contrast-color":!0};const a=i.bind({});a.args={...t.args,"light-color":"0000FF","dark-color":"000055","use-light-color":!0,"use-dark-color":!0};var d,f,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => html\`
        <dnn-color-input
          color=\${ifDefined(args.color)}
          contrast-color=\${ifDefined(args["contrast-color"])}
          light-color=\${ifDefined(args["light-color"])}
          dark-color=\${ifDefined(args["dark-color"])}
          ?use-contrast-color=\${ifDefined(args["use-contrast-color"])}
          ?use-light-color=\${ifDefined(args["use-light-color"])}
          ?use-dark-color=\${ifDefined(args["use-dark-color"])}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          name=\${ifDefined(args.name)}
          ?readonly=\${ifDefined(args.readonly)}
          @colorChange=\${e => eventsFromNames.colorChange(e)}
          @colorInput=\${e => eventsFromNames.colorInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var g,h,p;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => html\`
        <dnn-color-input
          color=\${ifDefined(args.color)}
          contrast-color=\${ifDefined(args["contrast-color"])}
          light-color=\${ifDefined(args["light-color"])}
          dark-color=\${ifDefined(args["dark-color"])}
          ?use-contrast-color=\${ifDefined(args["use-contrast-color"])}
          ?use-light-color=\${ifDefined(args["use-light-color"])}
          ?use-dark-color=\${ifDefined(args["use-dark-color"])}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          name=\${ifDefined(args.name)}
          ?readonly=\${ifDefined(args.readonly)}
          @colorChange=\${e => eventsFromNames.colorChange(e)}
          @colorInput=\${e => eventsFromNames.colorInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(p=(h=l.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,$,D;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => html\`
        <dnn-color-input
          color=\${ifDefined(args.color)}
          contrast-color=\${ifDefined(args["contrast-color"])}
          light-color=\${ifDefined(args["light-color"])}
          dark-color=\${ifDefined(args["dark-color"])}
          ?use-contrast-color=\${ifDefined(args["use-contrast-color"])}
          ?use-light-color=\${ifDefined(args["use-light-color"])}
          ?use-dark-color=\${ifDefined(args["use-dark-color"])}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          name=\${ifDefined(args.name)}
          ?readonly=\${ifDefined(args.readonly)}
          @colorChange=\${e => eventsFromNames.colorChange(e)}
          @colorInput=\${e => eventsFromNames.colorInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(D=($=t.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var b,k,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => html\`
        <dnn-color-input
          color=\${ifDefined(args.color)}
          contrast-color=\${ifDefined(args["contrast-color"])}
          light-color=\${ifDefined(args["light-color"])}
          dark-color=\${ifDefined(args["dark-color"])}
          ?use-contrast-color=\${ifDefined(args["use-contrast-color"])}
          ?use-light-color=\${ifDefined(args["use-light-color"])}
          ?use-dark-color=\${ifDefined(args["use-dark-color"])}
          help-text=\${ifDefined(args["help-text"])}
          label=\${ifDefined(args.label)}
          name=\${ifDefined(args.name)}
          ?readonly=\${ifDefined(args.readonly)}
          @colorChange=\${e => eventsFromNames.colorChange(e)}
          @colorInput=\${e => eventsFromNames.colorInput(e)}
        >
        \${getSlots(args)}
        </dnn-input>
    \``,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const A=["Color","WithLabelAndHelp","WithContrast","ColorSystem"];export{r as Color,a as ColorSystem,t as WithContrast,l as WithLabelAndHelp,A as __namedExportsOrder,N as default};
