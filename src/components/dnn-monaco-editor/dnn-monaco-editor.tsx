import {Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Method, Prop, Watch} from '@stencil/core';
import * as monaco from 'monaco-editor';
import { editor } from 'monaco-editor';
import {escapeCode, unescapeCode} from './utils/code.utils';
import { worker as jsonWorker } from 'monaco-editor/esm/vs/language/json/json.worker.js?worker';
import { worker as cssWorker } from 'monaco-editor/esm/vs/language/css/css.worker.js?worker';
import { worker as htmlWorker } from 'monaco-editor/esm/vs/language/html/html.worker.js?worker';
import { worker as tsWorker } from 'monaco-editor/esm/vs/language/typescript/ts.worker.js?worker';
import { worker as editorWorker } from 'monaco-editor/esm/vs/editor/editor.worker.js?worker';

@Component({
  tag: 'dnn-monaco-editor',
  styleUrl: 'dnn-monaco-editor.scss',
  shadow: true
})
export class DnnMonacoEditor implements ComponentInterface {
  @Element() private el: HTMLDnnMonacoEditorElement;

  /** Sets the monaco editor options, see monaco options. */
  @Prop() options: editor.IStandaloneEditorConstructionOptions;

  /** Event to indicate editor has loaded */
  @Event() editorDidLoad: EventEmitter<void>;

  private editor: monaco.editor.IStandaloneCodeEditor;
  private article!: HTMLElement;
  private aria!: HTMLDivElement;

  private readonly defaultOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
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

  connectedCallback() {
    (self as any).MonacoEnvironment = {
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

    let path = import.meta.url.substring(0, import.meta.url.lastIndexOf('/'));
    path = `${path}/assets/monaco-editor/codicon.ttf`;

    const style = document.createElement('style');
    style.innerText = `@font-face { font-family: 'codicon'; src: url('${path}') format('truetype');}`;
    document.head.appendChild(style);
  }

  componentDidLoad() {
    const slottedCode: HTMLElement = this.el.querySelector(':scope > *:first-of-type');

    this.editor = monaco.editor.create(this.article, {
      value: unescapeCode(slottedCode?.innerHTML.trim() || ''),
      ...this.mergeOptions()
    });

    this.editorDidLoad.emit();
  }

  async disconnectedCallback() {
    await this.dispose();
  }

  private dispose(): Promise<void> {
    if (this.editor === null || this.editor === undefined) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      this.editor.onDidDispose(() => resolve());

      this.editor.getModel()?.dispose();
      this.editor.dispose();
    });
  }

  /** Watch editor option changes */
  @Watch('options')
  onOptionsChange() {
    this.editor?.updateOptions(this.mergeOptions());
  }

  /** Set focus to editor */
  @Method()
  async setFocus() {
    this.editor?.focus();
  }

  /** Update code language editor */
  @Method()
  async updateLanguage(languageId: string) {
    monaco.editor.setModelLanguage(this.editor?.getModel(), languageId);
  }

  /** Get value of the current model attached to this editor. */
  @Method()
  async getValue(){
    return Promise.resolve(escapeCode(this.editor?.getValue()));
  }

  /**
   * Sets a new editor value.
   * @param newValue The new value to set.
   */
  @Method()
  async setValue(newValue: string){
    this.editor?.setValue(unescapeCode(newValue));
  }

  private mergeOptions(): monaco.editor.IStandaloneEditorConstructionOptions {
    return {
      ...this.defaultOptions,
      ariaContainerElement: this.aria,
      ...(this.options || {})
    };
  }

  render() {
    return (
      <Host>
          <article ref={el => this.article = el}></article>
          <div style={{display: 'none'}} ref={el => this.aria = el}></div>
      </Host>
    );
  }
}