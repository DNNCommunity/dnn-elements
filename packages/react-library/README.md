# DNN Elements React

React wrapper components for DNN Elements using the latest Stencil React Output Target.

## Installation

```bash
npm install @dnncommunity/dnn-elements-react
```

## Usage

### Basic Setup

```tsx
import React, { useEffect } from 'react';
import { defineCustomElements } from '@dnncommunity/dnn-elements-react';

// Call this once in your app's main component or index file
function App() {
  useEffect(() => {
    defineCustomElements();
  }, []);

  return (
    <div>
      {/* Your app content */}
    </div>
  );
}
```

### Using Components

```tsx
import React, { useState } from 'react';
import { DnnButton, DnnInput, DnnCheckbox } from '@dnncommunity/dnn-elements-react';

function MyComponent() {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <DnnButton
        onClick={() => console.log('Button clicked!')}
      >
        Click me
      </DnnButton>

      <DnnInput 
        label="Your Name"
        helpText="Enter your name..."
        value={inputValue}
        onValueChange={(e) => setInputValue(e.detail)}
      />

      <DnnCheckbox 
        label="Agree to terms"
        checked={checked}
        onCheckedChange={(e) => setChecked(e.detail)}
      />
    </div>
  );
}
```

## TypeScript Support

This package includes full TypeScript definitions for all components with proper prop types and event handlers.

## Testing

A test React application is available in the `test-app/` directory to verify component functionality.

This is a collection of pure web components (custom elements) for use within DNN Platform or custom extensions for DNN. These can even be used in projects outside of the DNN purview, though some are unique for the DNN experience. The web components in `dnn-elements-react` are framework specific to React. For framework agnostic web components, you can use `dnn-elements`.