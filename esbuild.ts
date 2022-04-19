#!/usr/bin/env node

const esbuild = require('esbuild');
const path = require('path');
const {copyFileSync} = require('fs');

const ROOT = path.join(process.cwd(), 'node_modules/monaco-editor/esm/vs');
const WORKERS = path.join(process.cwd(), 'workers');
const WWW = path.join(process.cwd(), 'www', 'build');

esbuild
  .build({
    entryPoints: {
      'editor.worker': `${ROOT}/editor/editor.worker.js`,
      'json.worker': `${ROOT}/language/json/json.worker.js`,
      'css.worker': `${ROOT}/language/css/css.worker.js`,
      'html.worker': `${ROOT}/language/html/html.worker.js`,
      'ts.worker': `${ROOT}/language/typescript/ts.worker.js`
    },
    entryNames: '[name]',
    outdir: WORKERS,
    bundle: true,
    sourcemap: false,
    minify: true,
    target: ['esnext']
  })
  .then(() => {
    console.log('esbuild complete');
    copyFileSync(`${WORKERS}/editor.worker.js`, `${WWW}/editor.worker.js`);
    copyFileSync(`${WORKERS}/json.worker.js`, `${WWW}/json.worker.js`);
    copyFileSync(`${WORKERS}/css.worker.js`, `${WWW}/css.worker.js`);
    copyFileSync(`${WORKERS}/html.worker.js`, `${WWW}/html.worker.js`);
    copyFileSync(`${WORKERS}/ts.worker.js`, `${WWW}/ts.worker.js`);
  })
  .catch(() => process.exit(1));
