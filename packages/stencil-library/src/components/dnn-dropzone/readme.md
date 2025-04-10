# dnn-dropzone



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                                                                                                   | Type                        | Default     |
| ------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------- |
| `allowCameraMode`   | `allow-camera-mode`  | If true, will allow the user to take a snapshot using the device camera. (only works over https).                                             | `boolean`                   | `false`     |
| `allowedExtensions` | `allowed-extensions` | A list of allowed file extensions. If not specified, any file is allowed. Ex: ["jpg", "jpeg", "gif", "png"]                                   | `string[] \| undefined`     | `undefined` |
| `captureQuality`    | `capture-quality`    | Specifies the jpeg quality for when the device camera is used to generate a picture. Needs to be a number between 0 and 1 and defaults to 0.8 | `number`                    | `0.8`       |
| `maxFileSize`       | `max-file-size`      | Max file size in bytes.                                                                                                                       | `number \| undefined`       | `undefined` |
| `name`              | `name`               | The name of the field when used in a form.                                                                                                    | `string \| undefined`       | `undefined` |
| `resx`              | `resx`               | Localization strings                                                                                                                          | `DropzoneResx \| undefined` | `undefined` |


## Events

| Event           | Description                    | Type                  |
| --------------- | ------------------------------ | --------------------- |
| `filesSelected` | Fires when file were selected. | `CustomEvent<File[]>` |


## CSS Custom Properties

| Name                      | Description                                          |
| ------------------------- | ---------------------------------------------------- |
| `--border-color`          | The color of the border.                             |
| `--border-radius`         | The radius of the controls borders.                  |
| `--drop-background-color` | The color of the background when a file is dropping. |


## Dependencies

### Used by

 - [dnn-example-form](../examples/dnn-example-form)
 - [dnn-image-cropper](../dnn-image-cropper)

### Graph
```mermaid
graph TD;
  dnn-example-form --> dnn-dropzone
  dnn-image-cropper --> dnn-dropzone
  style dnn-dropzone fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
