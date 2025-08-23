// Reverting to .ts as React is no longer part of this version
import type { Preview } from '@storybook/web-components-vite';
import { setCustomElementsManifest } from '@storybook/web-components-vite';
import customElements from '../custom-elements.json';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/addon-docs/blocks';
import React from 'react';
import { h } from '@stencil/core';

// Import the full bundle instead of using the loader
import '../dist/dnn/dnn.esm.js';
setCustomElementsManifest(customElements);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    tags: ["autodocs"],
    docs: {
      page: () => (
        [
          <Title />,
          <Subtitle />,
          <Primary />,
          <Controls />,
          <Stories />,
          <Description />
        ]
      ),
      extractComponentDescription: (component, { notes }) => {
        if (notes) {
          return typeof notes === 'string' ? notes : notes.markdown || notes.text;
        }
        return null;
      },
    },
  },
};

export default preview;