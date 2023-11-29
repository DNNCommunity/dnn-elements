# `dnn-elements`
This is a collection of pure web components (custom elements) for use within DNN Platform or custom extensions for DNN. These can even be used in projects outside of the DNN purview, though some are unique for the DNN experience. The web components in `dnn-elements` are framework agnostic. For framework specific web components (e.g., React), you can use `dnn-elements-<framework>` (currently `dnn-element-react` is the only framework specific version, but there are plans to support Angular soon).

## Usage
### npm
`npm install @dnncommunity/dnn-elements`

### yarn
`yarn add @dnncommunity/dnn-elements`

```
// my-component.tsx
import '@dnncommunity/dnn-elements';

render() {
    return (
        <Host>
            <dnn-button type="secondary">Secondary Button</dnn-button>
        </Host>
    );
}
```