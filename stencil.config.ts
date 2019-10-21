import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { rules } from '@stencil/eslint-plugin'

export const config: Config = {
  namespace: 'dnn',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass(),
    rules
  ]
};
