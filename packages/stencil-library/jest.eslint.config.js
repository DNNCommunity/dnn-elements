module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["<rootDir>/src/eslint-plugin/**/*.tests.ts"],
    transform: {
        "^.+\\.ts$": ["ts-jest", { tsconfig: "<rootDir>/src/eslint-plugin/tsconfig.json" }],
    }
}