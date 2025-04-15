import type { Linter } from "eslint";
import recommended from "./recommended";

export default {
    recommended,
    /** Will be populated from main entry file to keep backward compatible. */
    flat: {} as Record<string, Linter.FlatConfig>,
};