# dnn-dropzone



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute           | Description                                                                                                                                   | Type                                                                                                 | Default                                                                                                                                                        |
| ------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowCameraMode`   | `allow-camera-mode` | If true, will allow the user to take a snapshot using the device camera. (only works over https).                                             | `boolean`                                                                                            | `false`                                                                                                                                                        |
| `allowedExtensions` | --                  | A list of allowed file extensions. If not specified, any file is allowed. Ex: ["jpg", "jped", "gif", "png"]                                   | `string[]`                                                                                           | `undefined`                                                                                                                                                    |
| `captureQuality`    | `capture-quality`   | Specifies the jpeg quality for when the device camera is used to generate a picture. Needs to be a number between 0 and 1 and defaults to 0.8 | `number`                                                                                             | `0.8`                                                                                                                                                          |
| `resx`              | --                  | Localization strings                                                                                                                          | `{ dragAndDropFile: string; capture: string; or: string; takePicture: string; uploadFile: string; }` | `{     dragAndDropFile: "Drag and drop a file",     capture: "Capture",     or: "or",     takePicture: "Take a picture",     uploadFile: "Upload a file",   }` |


## Events

| Event           | Description                    | Type                  |
| --------------- | ------------------------------ | --------------------- |
| `filesSelected` | Fires when file were selected. | `CustomEvent<File[]>` |


## Dependencies

### Used by

 - [dnn-image-cropper](../dnn-image-cropper)

### Graph
```mermaid
graph TD;
  dnn-image-cropper --> dnn-dropzone
  style dnn-dropzone fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
