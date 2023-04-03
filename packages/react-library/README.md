# `dnn-elements-react`

A set of DNN pure WebComponents (custom elements) with wrappers for usage in React.

## Usage
In your React project run
`npm install @dnncommunity/dnn-elements-react`
or
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