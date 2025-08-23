import { defineConfig } from "vitest/config";

// Node config for ESLint plugin tests
export default defineConfig({
  test: {
    include: ["eslint-plugin/src/**/*.test.ts"],
    exclude: ["node_modules/**/*"],
    globals: true,
    environment: "node",
    
    // Coverage for ESLint plugin
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["eslint-plugin/src/**/*"],
      exclude: ["**/*.test.ts", "**/*.spec.ts"]
    }
  }
});
