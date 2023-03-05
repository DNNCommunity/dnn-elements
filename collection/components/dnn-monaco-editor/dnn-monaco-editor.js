import { h, Host } from '@stencil/core';
import * as monaco from 'monaco-editor';
import { escapeCode, unescapeCode } from './utils/code.utils';
import { worker as jsonWorker } from 'monaco-editor/esm/vs/language/json/json.worker.js?worker';
import { worker as cssWorker } from 'monaco-editor/esm/vs/language/css/css.worker.js?worker';
import { worker as htmlWorker } from 'monaco-editor/esm/vs/language/html/html.worker.js?worker';
import { worker as tsWorker } from 'monaco-editor/esm/vs/language/typescript/ts.worker.js?worker';
import { worker as editorWorker } from 'monaco-editor/esm/vs/editor/editor.worker.js?worker';
export class DnnMonacoEditor {
  constructor() {
    this.defaultOptions = {
      automaticLayout: true,
      language: 'typescript',
      lineNumbers: "on",
      fixedOverflowWidgets: true,
      useShadowDOM: true,
      minimap: {
        enabled: true
      },
      readOnly: false,
      roundedSelection: false,
      scrollBeyondLastLine: false,
      theme: 'vs-dark',
      wordWrap: 'wordWrapColumn',
      wordWrapColumn: 80,
      wrappingIndent: "indent",
    };
    this.options = undefined;
    this.loadFontFromLocal = false;
  }
  connectedCallback() {
    self.MonacoEnvironment = {
      getWorker: function (_moduleId, label) {
        if (label === 'json') {
          return jsonWorker;
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
          return cssWorker;
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
          return htmlWorker;
        }
        if (label === 'typescript' || label === 'javascript') {
          return tsWorker;
        }
        return editorWorker;
      }
    };
    let path = 'https://unpkg.com/monaco-editor@0.34.1/min/vs/base/browser/ui/codicons/codicon/codicon.ttf';
    if (this.loadFontFromLocal) {
      path = import.meta.url.substring(0, import.meta.url.lastIndexOf('/'));
      path = `${path}/assets/monaco-editor/codicon.ttf`;
    }
    const style = document.createElement('style');
    style.innerText = `@font-face { font-family: 'codicon'; src: url('${path}') format('truetype');}`;
    document.head.appendChild(style);
  }
  componentDidLoad() {
    const slottedCode = this.el.querySelector(':scope > *:first-of-type');
    this.editor = monaco.editor.create(this.article, Object.assign({ value: unescapeCode((slottedCode === null || slottedCode === void 0 ? void 0 : slottedCode.innerHTML.trim()) || '') }, this.mergeOptions()));
    this.editorDidLoad.emit();
  }
  async disconnectedCallback() {
    await this.dispose();
  }
  dispose() {
    if (this.editor === null || this.editor === undefined) {
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      var _a;
      this.editor.onDidDispose(() => resolve());
      (_a = this.editor.getModel()) === null || _a === void 0 ? void 0 : _a.dispose();
      this.editor.dispose();
    });
  }
  /** Watch editor option changes */
  onOptionsChange() {
    var _a;
    (_a = this.editor) === null || _a === void 0 ? void 0 : _a.updateOptions(this.mergeOptions());
  }
  /** Set focus to editor */
  async setFocus() {
    var _a;
    (_a = this.editor) === null || _a === void 0 ? void 0 : _a.focus();
  }
  /** Update code language editor */
  async updateLanguage(languageId) {
    var _a;
    monaco.editor.setModelLanguage((_a = this.editor) === null || _a === void 0 ? void 0 : _a.getModel(), languageId);
  }
  /** Get value of the current model attached to this editor. */
  async getValue() {
    var _a;
    return Promise.resolve(escapeCode((_a = this.editor) === null || _a === void 0 ? void 0 : _a.getValue()));
  }
  /**
   * Sets a new editor value.
   * @param newValue The new value to set.
   */
  async setValue(newValue) {
    var _a;
    (_a = this.editor) === null || _a === void 0 ? void 0 : _a.setValue(unescapeCode(newValue));
  }
  mergeOptions() {
    return Object.assign(Object.assign(Object.assign({}, this.defaultOptions), { ariaContainerElement: this.aria }), (this.options || {}));
  }
  render() {
    return (h(Host, null, h("article", { ref: el => this.article = el }), h("div", { style: { display: 'none' }, ref: el => this.aria = el })));
  }
  static get is() { return "dnn-monaco-editor"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-monaco-editor.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-monaco-editor.css"]
    };
  }
  static get properties() {
    return {
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "editor.IStandaloneEditorConstructionOptions",
          "resolved": "IStandaloneEditorConstructionOptions",
          "references": {
            "editor": {
              "location": "import",
              "path": "monaco-editor"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets the monaco editor options, see monaco options."
        }
      },
      "loadFontFromLocal": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If set to true, then it is the responsibility of the consumer to have codicon.ttf in their distribution (e.g., ./assets/monaco-editor/codicon.ttf)."
        },
        "attribute": "load-font-from-local",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "editorDidLoad",
        "name": "editorDidLoad",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event to indicate editor has loaded"
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "setFocus": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Set focus to editor",
          "tags": []
        }
      },
      "updateLanguage": {
        "complexType": {
          "signature": "(languageId: string) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Update code language editor",
          "tags": []
        }
      },
      "getValue": {
        "complexType": {
          "signature": "() => Promise<string>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<string>"
        },
        "docs": {
          "text": "Get value of the current model attached to this editor.",
          "tags": []
        }
      },
      "setValue": {
        "complexType": {
          "signature": "(newValue: string) => Promise<void>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "newValue The new value to set."
                }],
              "text": "The new value to set."
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets a new editor value.",
          "tags": [{
              "name": "param",
              "text": "newValue The new value to set."
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "options",
        "methodName": "onOptionsChange"
      }];
  }
}
//# sourceMappingURL=dnn-monaco-editor.js.map
