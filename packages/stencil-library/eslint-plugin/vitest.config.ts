/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ["eslint-plugin/src/**/*.test.ts"],
        globals: true,
        environment: "node",
    }
})