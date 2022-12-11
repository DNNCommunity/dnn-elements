import { promises as fs } from 'fs';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { JsonDocs } from '@stencil/core/internal';

async function generateCustomElementsJson(docsData: JsonDocs) {
  const jsonData = {
    version: "1.0.0",
    modules: docsData.components.map((component) => ({
      kind: "javascript-module",
      path: component.filePath,
      declarations: [
        {
          kind: "class",
          name: component.fileName,
          tagName: component.tag,
          description: component.docs,

          attributes: component.props
            .filter((prop) => prop.attr)
            .map((prop) => ({
              name: prop.attr,
              type: {
                text: prop.type,
              },
              description: prop.docs,
              default: prop.default,
              required: prop.required,
            })),

          members: [
            ...component.props
            .filter((prop) => !prop.attr)
            .map((prop) => ({
              kind: "field",
              name: prop.name,
              type: {
                text: prop.type
              },
              description: prop.docs,
              default: prop.default,
              required: prop.required,
            })),

            ...component.methods.map((method) => ({
              kind: "method",
              name: method.name,
              description: method.docs,
              signature: method.signature,
            })),
          ],

          events: component.events.map((event) => ({
            name: event.event,
            type: {
              text: event.detail,
            },
            description: event.docs,
          })),

          slots: component.slots.map((slot) => ({
            name: slot.name === '' ? " " : slot.name,
            description: slot.docs,
          })),

          cssProperties: component.styles
            .filter((style) => style.annotation === 'prop')
            .map((style) => ({
              name: style.name,
              description: style.docs,
            })),
          
          cssParts: component.parts.map((part) => ({
            name: part.name,
            description: part.docs,
          })),
        },
      ]
    })),
  };

  await fs.writeFile(
    './custom-elements.json',
    JSON.stringify(jsonData, null, 2),
  );
}

export const config: Config = {
  namespace: 'dnn',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: '../node_modules/monaco-editor/min/vs/base/browser/ui/codicons/codicon/codicon.ttf',
          dest: 'assets/monaco-editor/codicon.ttf',
        },
      ],
    },
    {
      type: 'docs-readme'
    },
    { 
      type: 'docs-custom',
      generator: generateCustomElementsJson
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: '../node_modules/monaco-editor/min/vs/base/browser/ui/codicons/codicon/codicon.ttf',
          dest: 'build/assets/monaco-editor/codicon.ttf',
        },
      ],
    }
  ],
  plugins: [
    sass(),
  ],
  sourceMap: true,
  buildEs5: "prod",
};
