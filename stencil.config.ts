import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from "stencil-inline-svg";

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
    inlineSvg(),
  ],
  sourceMap: true
};
