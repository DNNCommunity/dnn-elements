/// <reference types="@vitest/browser/providers/webdriverio" />
import { defineConfig } from "vitest/config";
import stencil from "unplugin-stencil/vite";

// Browser config for Stencil component tests
export default defineConfig({
  test: {
    include: ["src/**/*.{spec,test}.ts"],
    exclude: ["node_modules/**/*"],
    globals: true,
    
    // Browser configuration with webdriverio using Firefox
    browser: {
      enabled: true,
      headless: true,
      provider: "webdriverio",
      instances: [
        { 
          browser: "edge"
        }
      ]
    },
    
    testTimeout: 60000,
    hookTimeout: 60000,
    
    // Coverage for Stencil components
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*"],
      exclude: ["**/*.test.ts", "**/*.spec.ts"]
    }
  },
  plugins: [stencil()]
});
