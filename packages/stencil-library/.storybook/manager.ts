import {addons} from '@storybook/addons';
import {create} from '@storybook/theming/create';

const theme = create({
  base: 'dark',

  colorPrimary: '#00A7EA',
  colorSecondary: '#EC3D47',

  // UI
  appBg: '#0b1c24',
  appContentBg: '#0e2936',

  // Typography
  fontBase: '"Muli", sans-serif',

  // Text colors
  textColor: '#a9a9a9',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#edeef7',
  barSelectedColor: '#00A7EA',
  barBg: '#191d26',

  // BRAND
  brandTitle: 'DNN Elements',
  brandImage: 'assets/DNNLogo.svg'
});

addons.setConfig({
  enableShortcuts: false,
  theme,
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true, },
    eject: { hidden: true, },
    copy: { hidden: true, },
    fullscreen: { hidden: true, },
  },
});