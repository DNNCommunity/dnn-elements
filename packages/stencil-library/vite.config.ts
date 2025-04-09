import { defineConfig } from 'vite';
import { resolve } from 'path';
import * as fs from 'fs';
import * as path from 'path';

export default defineConfig({
  plugins: [
    {
      name: 'markdown-loader',
      transform(src, id) {
        if (id.endsWith('.md')) {
          const filePath = path.resolve(id);
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          return `export default ${JSON.stringify(fileContent)}`;
        }
      },
    },
  ],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});