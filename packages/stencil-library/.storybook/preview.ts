// Reverting to .ts as React is no longer part of this version
import type { Preview } from '@storybook/web-components';
import { setCustomElementsManifest } from '@storybook/web-components';
import { defineCustomElements } from '../loader';
import customElements from '../custom-elements.json';

// Register Stencil components and set the custom elements manifest
defineCustomElements();
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
      extractComponentDescription: (component, { notes }) => {
        if (notes) {
          return typeof notes === 'string' ? notes : notes.markdown || notes.text;
        }
        return null;
      },
      page: (context) => {
        const { story, controls, docs } = context;
        return (
          <>
            {story()}
            {controls()}
            {docs()}
          </>
        );
      },
    },
  },
};

export default preview;