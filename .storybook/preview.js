import {
  addParameters,
  setCustomElements,
} from '@storybook/web-components';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import {version} from '../package.json';

import {defineCustomElements} from '../loader';

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
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  badges: [BADGE.DEFAULT, BADGE.STABLE],
  docs: {
    inlineStories: true,
  }
}
