# `dnn-elements-react`
This is a collection of pure web components (custom elements) for use within DNN Platform or custom extensions for DNN. These can even be used in projects outside of the DNN purview, though some are unique for the DNN experience. The web components in `dnn-elements-react` are framework specific to React. For framework agnostic web components, you can use `dnn-elements`.

## Usage
### npm
`npm install @dnncommunity/dnn-elements-react`

### yarn
`yarn add @dnncommunity/dnn-elements-react`

```
// App.tsx
import { DnnButton, defineCustomElements } from '@dnncommunity/dnn-elements-react';

defineCustomElements();

function App() {
    return (
        <div className="App>
            <DnnButton type="secondary">Secondary Button</DnnButton>
        </div>
    );
}
```