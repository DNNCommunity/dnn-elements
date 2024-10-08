# dnn-sort-icon



<!-- Auto Generated Below -->


## Usage

### HTML

```html
<dnn-sort-icon
    sort-direction="asc">
</dnn-sort-icon>
```


### JSX-TSX

```tsx
<dnn-sort-icon
    sortDirection="asc">
</dnn-sort-icon>
```



## Properties

| Property        | Attribute        | Description                        | Type                        | Default  |
| --------------- | ---------------- | ---------------------------------- | --------------------------- | -------- |
| `sortDirection` | `sort-direction` | Defines the current sort direction | `"asc" \| "desc" \| "none"` | `"none"` |


## Events

| Event         | Description                       | Type                                     |
| ------------- | --------------------------------- | ---------------------------------------- |
| `sortChanged` | Emitted when the sort is changed. | `CustomEvent<"asc" \| "desc" \| "none">` |


## CSS Custom Properties

| Name             | Description                             |
| ---------------- | --------------------------------------- |
| `--color`        | Normal Color of the inactive sort icon. |
| `--color-hover`  | Color of the icons when hovered.        |
| `--color-sorted` | Color of the sorted sort icon.          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
