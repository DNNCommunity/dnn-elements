import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("locks the Ubuntu Rollup binary to the version required by Stencil", () => {
  const rootPackage = JSON.parse(
    readFileSync(new URL("../../package.json", import.meta.url), "utf8"),
  );
  const lockfile = JSON.parse(
    readFileSync(new URL("../../package-lock.json", import.meta.url), "utf8"),
  );
  const binary = "@rollup/rollup-linux-x64-gnu";
  const stencilVersion =
    lockfile.packages["node_modules/@stencil/core"].optionalDependencies[binary];

  expect(stencilVersion).toBeDefined();
  expect(rootPackage.optionalDependencies[binary]).toBe(stencilVersion);
  expect(lockfile.packages[""].optionalDependencies[binary]).toBe(stencilVersion);
  expect(lockfile.packages[`node_modules/${binary}`].version).toBe(stencilVersion);
});
