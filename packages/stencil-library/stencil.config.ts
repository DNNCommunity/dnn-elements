import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'dnn',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: '../../../node_modules/monaco-editor/min/vs/base/browser/ui/codicons/codicon/codicon.ttf',
          dest: 'assets/monaco-editor/codicon.ttf',
        },
      ],
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: '../../../node_modules/monaco-editor/min/vs/base/browser/ui/codicons/codicon/codicon.ttf',
          dest: 'build/assets/monaco-editor/codicon.ttf',
        },
      ],
    },
    reactOutputTarget({
      componentCorePackage: '@dnncommunity/dnn-elements',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
    }),
  ],
  plugins: [
    sass(),
  ],
  sourceMap: true,
};
