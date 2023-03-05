export const escapeCode = (code) => code === null || code === void 0 ? void 0 : code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
export const unescapeCode = (code) => code === null || code === void 0 ? void 0 : code.replace(/'&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'");
//# sourceMappingURL=code.utils.js.map
