import {
  addParameters,
  setCustomElements,
} from '@storybook/web-components';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import {version} from '../package.json';
import customElements from '../custom-elements.json';
import {defineCustomElements} from '../loader';

setCustomElements(customElements);
defineCustomElements();

addParameters({
  badgesConfig: {
    [BADGE.DEFAULT]: {
      contrast: '#edeef7',
      color: '#32394D',
      title: version
    },
    [BADGE.STABLE]: {
      contrast: '#00ab6d',
      color: '#ffffff',
      title: 'Stable'
    },
    [BADGE.BETA]: {
      contrast: '#f8ab00',
      color: '#32394D',
      title: 'In Progress'
    }
  },
});

export const parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
  },
  badges: [BADGE.DEFAULT, BADGE.STABLE],
  docs: {
    source: {
      state: 'open',
    },
  },
  options: {
    storySort: (a, b) => a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  backgrounds: {
    default: 'white',
    values: [
      { 
          name: 'white', 
          value: '#ffffff'
      },
      { 
          name: 'grey', 
          value: '#f4f5fa' 
      },
    ],
    grid: {
      disable: true
    }
  },
  viewport: { 
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '360px',
          height: '640px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1600px',
          height: '864px',
        },
      },
    },
    defaultViewport: 'Desktop',
  },
}
