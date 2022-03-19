# dnn-modal



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                                                                                                                                                                         | Type      | Default         |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------------- |
| `backdropDismiss` | `backdrop-dismiss`  | Pass false to remove the backdrop click auto-dismiss feature.                                                                                                                                                       | `boolean` | `true`          |
| `closeText`       | `close-text`        | Optionally pass the aria-label text for the close button. Defaults to "Close modal" if not provided.                                                                                                                | `string`  | `"Close modal"` |
| `showCloseButton` | `show-close-button` | Optionally you can pass false to not show the close button. If you decide to do so, you should either not also prevent dismissal by clicking the backdrop or provide your own dismissal logic in the modal content. | `boolean` | `true`          |
| `visible`         | `visible`           | Reflects the visible state of the modal.                                                                                                                                                                            | `boolean` | `false`         |


## Events

| Event       | Description                        | Type               |
| ----------- | ---------------------------------- | ------------------ |
| `dismissed` | Fires when the modal is dismissed. | `CustomEvent<any>` |


## Methods

### `hide() => Promise<void>`

Hides the modal

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Shows the modal

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [dnn-button](../dnn-button)
 - [dnn-image-cropper](../dnn-image-cropper)

### Graph
```mermaid
graph TD;
  dnn-button --> dnn-modal
  dnn-image-cropper --> dnn-modal
  style dnn-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
