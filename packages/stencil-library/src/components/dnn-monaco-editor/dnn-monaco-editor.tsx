import {Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch} from '@stencil/core';
import { escapeCode, unescapeCode } from './utils/code.utils';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { worker as jsonWorker } from 'monaco-editor/esm/vs/language/json/json.worker.js?worker';
import { worker as cssWorker } from 'monaco-editor/esm/vs/language/css/css.worker.js?worker';
import { worker as htmlWorker } from 'monaco-editor/esm/vs/language/html/html.worker.js?worker';
import { worker as tsWorker } from 'monaco-editor/esm/vs/language/typescript/ts.worker.js?worker';
import { worker as editorWorker } from 'monaco-editor/esm/vs/editor/editor.worker.js?worker';

declare const monaco: any;

@Component({
  tag: 'dnn-monaco-editor',
  styleUrl: 'dnn-monaco-editor.scss',
  shadow: true
})
export class DnnMonacoEditor {
  
  @Element() el: HTMLDnnMonacoEditorElement;

  /** Sets the monaco editor options. */
  @Prop() options: editor.IStandaloneEditorConstructionOptions;

  /** Event to indicate editor has loaded */
  @Event() editorDidLoad: EventEmitter<void>;

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

  private mergeOptions(): editor.IStandaloneEditorConstructionOptions {
    return {
      ...this.defaultOptions,
      ...(this.options || {})
    };
  }
  
  private editor: editor.IStandaloneCodeEditor;

  private readonly defaultOptions: editor.IStandaloneEditorConstructionOptions = {
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

  async componentWillLoad() {
    await this.loadMonacoEditor();
  }

  componentDidLoad() {
    this.initializeEditor();
  }

  private getSlottetCode(){
    const slottedCode: HTMLElement = this.el.querySelector(':scope > *:first-of-type');
    return unescapeCode(slottedCode?.innerHTML.trim() || '');
  }

  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve();
      script.onerror = (error) => reject(error);
      document.head.appendChild(script);
    });
  }

  private getFullAssetPath(path: string): string {
    const monacoDir = new URL("assets/monaco-editor", import.meta.url);
    const finalPath = new URL(path, `${monacoDir}/`);
    
    return finalPath.toString();
  }

  private async loadMonacoEditor() {
    await this.loadScript(this.getFullAssetPath("loader.js"));
    await new Promise<void>(resolve => {
      (window as any).require.config({
        paths: { vs: this.getFullAssetPath("") },
      });
      (window as any).require(["vs/editor/editor.main"], () => {
        resolve();
      });
    });
  }

  private initializeEditor() {
    const container = this.el.shadowRoot.querySelector('.editor-container');
    if (container) {
      // Configure worker URLs
      (window as any).MonacoEnvironment = {
        getWorker: function (_moduleId: string, label: string) {
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
        },
      };

      this.editor = (window as any).monaco.editor.create(container as HTMLElement, {
        value: this.getSlottetCode(),
        ...this.mergeOptions(),
      });
    }
  }

  render() {
    return (
      <Host>
        <div class="editor-container"></div>
      </Host>
    );
  }
}