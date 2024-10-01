# dnn-chevron



<!-- Auto Generated Below -->


## Usage

### HTML

```html
<dnn-chevron
    expand-text="expand"
    collapse-text="collapse"
    expanded="false">
</dnn-chevron>
```


### JSX-TSX

```tsx
<dnn-chevron
    expandText="expand"
    collapseText="collapse"
    expanded="false">
</dnn-chevron>
```



## Properties

| Property       | Attribute       | Description                      | Type      | Default      |
| -------------- | --------------- | -------------------------------- | --------- | ------------ |
| `collapseText` | `collapse-text` | Collapse text for screen readers | `string`  | `"collapse"` |
| `expandText`   | `expand-text`   | Expand text for screen readers   | `string`  | `"expand"`   |
| `expanded`     | `expanded`      | Is the chevron expanded          | `boolean` | `false`      |


## Events

| Event     | Description                               | Type               |
| --------- | ----------------------------------------- | ------------------ |
| `changed` | Fires up when the expanded status changes | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
