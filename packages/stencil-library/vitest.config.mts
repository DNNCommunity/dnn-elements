import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import stencil from "unplugin-stencil/vite";

// Browser config for Stencil component tests
export default defineConfig({
  test: {
    isolate: false,
    include: ["src/**/*.{spec,test}.ts"],
    exclude: ["node_modules/**/*"],
    globals: true,

    // Use Playwright so Vitest runs against the installed Chrome/Chromium
    // instead of trying to download a broken ChromeDriver binary.
    browser: {
      enabled: true,
      provider: playwright({
        launchOptions: {
          channel: "chrome",
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
      }),
      headless: true,
      instances: [
        {
          browser: "chromium"
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