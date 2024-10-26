# dnn-select



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute                    | Description                                                                                                                                 | Type      | Default     |
| -------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `autocomplete`             | `autocomplete`               | Defines the type of automatic completion the browser can use. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete | `string`  | `"off"`     |
| `disableValidityReporting` | `disable-validity-reporting` | <span style="color:red">**[DEPRECATED]**</span> This control has its own validatin reporting, will be removed in v0.25.0<br/><br/>          | `boolean` | `undefined` |
| `disabled`                 | `disabled`                   | Defines whether the field is disabled.                                                                                                      | `boolean` | `undefined` |
| `helpText`                 | `help-text`                  | Defines the help label displayed under the field.                                                                                           | `string`  | `undefined` |
| `label`                    | `label`                      | The label for this input.                                                                                                                   | `string`  | `undefined` |
| `name`                     | `name`                       | The name for this input, if used in forms.                                                                                                  | `string`  | `undefined` |
| `required`                 | `required`                   | Defines whether the field requires having a value.                                                                                          | `boolean` | `undefined` |
| `value`                    | `value`                      | The value of the input.                                                                                                                     | `string`  | `undefined` |


## Events

| Event         | Description                                                    | Type                  |
| ------------- | -------------------------------------------------------------- | --------------------- |
| `valueChange` | Fires when the value has changed and the user exits the input. | `CustomEvent<string>` |


## Methods

### `checkValidity() => Promise<ValidityState>`

Reports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState

#### Returns

Type: `Promise<ValidityState>`




## CSS Custom Properties

| Name                 | Description                                              |
| -------------------- | -------------------------------------------------------- |
| `--background`       | Defines the background color.                            |
| `--control-radius`   | Defines the radius for the control corners.              |
| `--danger-color`     | Defines the danger color used for invalid data.          |
| `--focus-color`      | Defines the color when the component is focused.         |
| `--foreground`       | Defines the foreground color.                            |
| `--input-text-align` | Allows customizing the text alignment of the input text. |


## Dependencies

### Used by

 - [dnn-example-form](../examples/dnn-example-form)

### Depends on

- [dnn-fieldset](../dnn-fieldset)

### Graph
```mermaid
graph TD;
  dnn-select --> dnn-fieldset
  dnn-example-form --> dnn-select
  style dnn-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
