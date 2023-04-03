# dnn-searchbox



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                          | Type      | Default |
| ------------- | ------------- | ------------------------------------ | --------- | ------- |
| `debounced`   | `debounced`   | Debounces the queryChanged by 500ms. | `boolean` | `true`  |
| `placeholder` | `placeholder` | Sets the field placeholder text.     | `string`  | `""`    |
| `query`       | `query`       | Sets the query                       | `string`  | `""`    |


## Events

| Event          | Description                                                                    | Type                  |
| -------------- | ------------------------------------------------------------------------------ | --------------------- |
| `queryChanged` | Fires up each time the search query changes. The data passed is the new query. | `CustomEvent<string>` |


## Dependencies

### Used by

 - [dnn-permissions-grid](../dnn-permissions-grid)

### Graph
```mermaid
graph TD;
  dnn-permissions-grid --> dnn-searchbox
  style dnn-searchbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
