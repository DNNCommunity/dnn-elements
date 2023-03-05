'use strict';

const dnnButton_dnnCheckbox_dnnChevron_dnnCollapsible_dnnColorPicker_dnnDropzone_dnnImageCropper_dnnModal_dnnMonacoEditor_dnnPermissionsGrid_dnnSearchbox_dnnSortIcon_dnnTab_dnnTabs_dnnToggle_dnnTreeviewItem_dnnVerticalOverflowMenu_dnnVerticalSplitview_entry = require('./dnn-button.dnn-checkbox.dnn-chevron.dnn-collapsible.dnn-color-picker.dnn-dropzone.dnn-image-cropper.dnn-modal.dnn-monaco-editor.dnn-permissions-grid.dnn-searchbox.dnn-sort-icon.dnn-tab.dnn-tabs.dnn-toggle.dnn-treeview-item.dnn-vertical-overflow-menu.dnn-vertical-splitview-92124ebf.js');
require('./index-32d2a5cf.js');
require('./debounce-1de79bc7.js');

/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// src/fillers/monaco-editor-core.ts
var monaco_editor_core_exports = {};
__reExport(monaco_editor_core_exports, dnnButton_dnnCheckbox_dnnChevron_dnnCollapsible_dnnColorPicker_dnnDropzone_dnnImageCropper_dnnModal_dnnMonacoEditor_dnnPermissionsGrid_dnnSearchbox_dnnSortIcon_dnnTab_dnnTabs_dnnToggle_dnnTreeviewItem_dnnVerticalOverflowMenu_dnnVerticalSplitview_entry.monaco_editor_core_star);

// src/basic-languages/yaml/yaml.ts
var conf = {
  comments: {
    lineComment: "#"
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  folding: {
    offSide: true
  },
  onEnterRules: [
    {
      beforeText: /:\s*$/,
      action: {
        indentAction: monaco_editor_core_exports.languages.IndentAction.Indent
      }
    }
  ]
};
var language = {
  tokenPostfix: ".yaml",
  brackets: [
    { token: "delimiter.bracket", open: "{", close: "}" },
    { token: "delimiter.square", open: "[", close: "]" }
  ],
  keywords: ["true", "True", "TRUE", "false", "False", "FALSE", "null", "Null", "Null", "~"],
  numberInteger: /(?:0|[+-]?[0-9]+)/,
  numberFloat: /(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,
  numberOctal: /0o[0-7]+/,
  numberHex: /0x[0-9a-fA-F]+/,
  numberInfinity: /[+-]?\.(?:inf|Inf|INF)/,
  numberNaN: /\.(?:nan|Nan|NAN)/,
  numberDate: /\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,
  escapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
  tokenizer: {
    root: [
      { include: "@whitespace" },
      { include: "@comment" },
      [/%[^ ]+.*$/, "meta.directive"],
      [/---/, "operators.directivesEnd"],
      [/\.{3}/, "operators.documentEnd"],
      [/[-?:](?= )/, "operators"],
      { include: "@anchor" },
      { include: "@tagHandle" },
      { include: "@flowCollections" },
      { include: "@blockStyle" },
      [/@numberInteger(?![ \t]*\S+)/, "number"],
      [/@numberFloat(?![ \t]*\S+)/, "number.float"],
      [/@numberOctal(?![ \t]*\S+)/, "number.octal"],
      [/@numberHex(?![ \t]*\S+)/, "number.hex"],
      [/@numberInfinity(?![ \t]*\S+)/, "number.infinity"],
      [/@numberNaN(?![ \t]*\S+)/, "number.nan"],
      [/@numberDate(?![ \t]*\S+)/, "number.date"],
      [/(".*?"|'.*?'|.*?)([ \t]*)(:)( |$)/, ["type", "white", "operators", "white"]],
      { include: "@flowScalars" },
      [
        /[^#]+/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "string"
          }
        }
      ]
    ],
    object: [
      { include: "@whitespace" },
      { include: "@comment" },
      [/\}/, "@brackets", "@pop"],
      [/,/, "delimiter.comma"],
      [/:(?= )/, "operators"],
      [/(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/, "type"],
      { include: "@flowCollections" },
      { include: "@flowScalars" },
      { include: "@tagHandle" },
      { include: "@anchor" },
      { include: "@flowNumber" },
      [
        /[^\},]+/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "string"
          }
        }
      ]
    ],
    array: [
      { include: "@whitespace" },
      { include: "@comment" },
      [/\]/, "@brackets", "@pop"],
      [/,/, "delimiter.comma"],
      { include: "@flowCollections" },
      { include: "@flowScalars" },
      { include: "@tagHandle" },
      { include: "@anchor" },
      { include: "@flowNumber" },
      [
        /[^\],]+/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "string"
          }
        }
      ]
    ],
    multiString: [[/^( +).+$/, "string", "@multiStringContinued.$1"]],
    multiStringContinued: [
      [
        /^( *).+$/,
        {
          cases: {
            "$1==$S2": "string",
            "@default": { token: "@rematch", next: "@popall" }
          }
        }
      ]
    ],
    whitespace: [[/[ \t\r\n]+/, "white"]],
    comment: [[/#.*$/, "comment"]],
    flowCollections: [
      [/\[/, "@brackets", "@array"],
      [/\{/, "@brackets", "@object"]
    ],
    flowScalars: [
      [/"([^"\\]|\\.)*$/, "string.invalid"],
      [/'([^'\\]|\\.)*$/, "string.invalid"],
      [/'[^']*'/, "string"],
      [/"/, "string", "@doubleQuotedString"]
    ],
    doubleQuotedString: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/"/, "string", "@pop"]
    ],
    blockStyle: [[/[>|][0-9]*[+-]?$/, "operators", "@multiString"]],
    flowNumber: [
      [/@numberInteger(?=[ \t]*[,\]\}])/, "number"],
      [/@numberFloat(?=[ \t]*[,\]\}])/, "number.float"],
      [/@numberOctal(?=[ \t]*[,\]\}])/, "number.octal"],
      [/@numberHex(?=[ \t]*[,\]\}])/, "number.hex"],
      [/@numberInfinity(?=[ \t]*[,\]\}])/, "number.infinity"],
      [/@numberNaN(?=[ \t]*[,\]\}])/, "number.nan"],
      [/@numberDate(?=[ \t]*[,\]\}])/, "number.date"]
    ],
    tagHandle: [[/\![^ ]*/, "tag"]],
    anchor: [[/[&*][^ ]+/, "namespace"]]
  }
};

exports.conf = conf;
exports.language = language;

//# sourceMappingURL=yaml-ff3f818f.js.map