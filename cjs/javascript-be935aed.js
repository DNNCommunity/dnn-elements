'use strict';

const typescript = require('./typescript-0de73667.js');
require('./dnn-button.dnn-checkbox.dnn-chevron.dnn-collapsible.dnn-color-picker.dnn-dropzone.dnn-image-cropper.dnn-modal.dnn-monaco-editor.dnn-permissions-grid.dnn-searchbox.dnn-sort-icon.dnn-tab.dnn-tabs.dnn-toggle.dnn-treeview-item.dnn-vertical-overflow-menu.dnn-vertical-splitview-92124ebf.js');
require('./index-32d2a5cf.js');
require('./debounce-1de79bc7.js');

/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var conf = typescript.conf;
var language = {
  defaultToken: "invalid",
  tokenPostfix: ".js",
  keywords: [
    "break",
    "case",
    "catch",
    "class",
    "continue",
    "const",
    "constructor",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "export",
    "extends",
    "false",
    "finally",
    "for",
    "from",
    "function",
    "get",
    "if",
    "import",
    "in",
    "instanceof",
    "let",
    "new",
    "null",
    "return",
    "set",
    "super",
    "switch",
    "symbol",
    "this",
    "throw",
    "true",
    "try",
    "typeof",
    "undefined",
    "var",
    "void",
    "while",
    "with",
    "yield",
    "async",
    "await",
    "of"
  ],
  typeKeywords: [],
  operators: typescript.language.operators,
  symbols: typescript.language.symbols,
  escapes: typescript.language.escapes,
  digits: typescript.language.digits,
  octaldigits: typescript.language.octaldigits,
  binarydigits: typescript.language.binarydigits,
  hexdigits: typescript.language.hexdigits,
  regexpctl: typescript.language.regexpctl,
  regexpesc: typescript.language.regexpesc,
  tokenizer: typescript.language.tokenizer
};

exports.conf = conf;
exports.language = language;

//# sourceMappingURL=javascript-be935aed.js.map