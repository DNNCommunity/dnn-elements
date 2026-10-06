import { defineConfig } from "vitest/config";
import stencil from "unplugin-stencil/vite";
import { webdriverio } from "@vitest/browser-webdriverio";

// Browser config for Stencil component tests
export default defineConfig({
  test: {
    isolate: false,
    include: ["src/**/*.{spec,test}.ts"],
    exclude: ["node_modules/**/*"],
    globals: true,
    
    // Browser configuration with webdriverio using Firefox
    browser: {
      enabled: true,
      headless: true,
      provider: webdriverio({
        capabilities: {
          "goog:chromeOptions": {
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
          },
        },
      }),
      instances: [
        {
          browser: "chrome"
        }
      ],
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