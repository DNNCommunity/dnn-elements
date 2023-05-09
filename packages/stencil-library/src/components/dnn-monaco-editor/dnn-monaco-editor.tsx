import {Component, Element, h, Host} from '@stencil/core';
import { unescapeCode } from './utils/code.utils';
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
  
  private editor: any;

  async componentWillLoad() {
    await this.loadMonacoEditor();
  }

  componentDidLoad() {
    this.initializeEditor();
  }

  // Remove this
  disconnectedCallback() {
    alert(this.editor);
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
        language: 'typescript',
        theme: 'vs-dark',
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