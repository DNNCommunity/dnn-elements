# dnn-collapsible



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute             | Description                                          | Type      | Default |
| -------------------- | --------------------- | ---------------------------------------------------- | --------- | ------- |
| `expanded`           | `expanded`            | Defines if the panel is expanded or not.             | `boolean` | `false` |
| `transitionDuration` | `transition-duration` | Defines the transition time in ms, defaults to 300ms | `number`  | `300`   |


## Events

| Event                         | Description                                       | Type                |
| ----------------------------- | ------------------------------------------------- | ------------------- |
| `dnnCollapsibleHeightChanged` | Fires whenever the collapsible height has changed | `CustomEvent<void>` |


## Methods

### `updateSize() => Promise<void>`

Updates the component height, use to update after a slot content changes.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
