import type { Preview } from '@storybook/web-components'
import { defineCustomElements } from '../loader';

// Call defineCustomElements to register Stencil components
defineCustomElements();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;