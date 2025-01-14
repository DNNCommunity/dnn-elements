# dnn-fieldset



<!-- Auto Generated Below -->


## Overview

A custom input component that wraps the html input element is a mobile friendly component that supports a label, some help text and other features.

## Properties

| Property     | Attribute     | Description                                                                  | Type                                                                    | Default     |
| ------------ | ------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------- |
| `disabled`   | `disabled`    | If true, the fieldset will display as disabled.                              | `boolean`                                                               | `undefined` |
| `floatLabel` | `float-label` | If true, the label will float in the container, set false to show it on top. | `boolean`                                                               | `undefined` |
| `focused`    | `focused`     | If true the fieldset will display as focused.                                | `boolean`                                                               | `undefined` |
| `helpText`   | `help-text`   | Can be used to show some help text about this field.                         | `string`                                                                | `undefined` |
| `invalid`    | `invalid`     | If true, the  fieldset will display as invalid.                              | `boolean`                                                               | `undefined` |
| `label`      | `label`       | Sets the text of the fieldset label (caption).                               | `string`                                                                | `undefined` |
| `resizable`  | `resizable`   | Can be set to specify if the fieldset can be resized by the user.            | `"block" \| "both" \| "horizontal" \| "inline" \| "none" \| "vertical"` | `"none"`    |


## Methods

### `disable() => Promise<void>`

Sets the fieldset to a disabled state.

#### Returns

Type: `Promise<void>`



### `enable() => Promise<void>`

Sets the fieldset to an enabled state.

#### Returns

Type: `Promise<void>`



### `pinLabel() => Promise<void>`

Places the label on the top of the container.

#### Returns

Type: `Promise<void>`



### `setBlurred() => Promise<void>`

Unsets the fieldset focused state.

#### Returns

Type: `Promise<void>`



### `setFocused() => Promise<void>`

Sets the fieldset to the focused state.

#### Returns

Type: `Promise<void>`



### `setValidity(valid: boolean, message?: string) => Promise<void>`

Sets the validity of the field.

#### Parameters

| Name      | Type      | Description |
| --------- | --------- | ----------- |
| `valid`   | `boolean` |             |
| `message` | `string`  |             |

#### Returns

Type: `Promise<void>`



### `unpinLabel() => Promise<void>`

Places the label in the vertical middle of the container.

#### Returns

Type: `Promise<void>`




## Slots

| Slot             | Description                                    |
| ---------------- | ---------------------------------------------- |
| `"label-prefix"` | Can be used to inject content before the labe. |
| `"label-suffix"` | Can be used to inject content after the label. |


## CSS Custom Properties

| Name                          | Description                                      |
| ----------------------------- | ------------------------------------------------ |
| `--control-radius`            | Defines the radius for the control corners.      |
| `--danger-color`              | Defines the danger color used for invalid data.  |
| `--fieldset-background-color` | Defines the background color.                    |
| `--fieldset-foreground-color` | Defines the foreground color.                    |
| `--focus-color`               | Defines the color when the component is focused. |


## Dependencies

### Used by

 - [dnn-autocomplete](../dnn-autocomplete)
 - [dnn-color-input](../dnn-color-input)
 - [dnn-example-form](../examples/dnn-example-form)
 - [dnn-input](../dnn-input)
 - [dnn-select](../dnn-select)
 - [dnn-textarea](../dnn-textarea)

### Graph
```mermaid
graph TD;
  dnn-autocomplete --> dnn-fieldset
  dnn-color-input --> dnn-fieldset
  dnn-example-form --> dnn-fieldset
  dnn-input --> dnn-fieldset
  dnn-select --> dnn-fieldset
  dnn-textarea --> dnn-fieldset
  style dnn-fieldset fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
