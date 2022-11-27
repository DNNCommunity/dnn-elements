import {Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Method, Prop, Watch} from '@stencil/core';
import * as monaco from 'monaco-editor';
import { editor } from 'monaco-editor';
import {escapeCode, unescapeCode} from './utils/code.utils';

@Component({
  tag: 'dnn-monaco-editor',
  styleUrl: 'dnn-monaco-editor.scss',
  shadow: true
})
export class MonacoEditor implements ComponentInterface {
  @Element() private el: HTMLDnnMonacoEditorElement;

  /** Sets the monaco editor options, see monaco options. */
  @Prop() options: editor.IStandaloneEditorConstructionOptions;

  /** Event to indicate editor has loaded */
  @Event() editorDidLoad: EventEmitter<void>;

  private editor: monaco.editor.IStandaloneCodeEditor;

  private div!: HTMLDivElement;

  private readonly defaultOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
    automaticLayout: true,
    language: 'typescript',
    lineNumbers: "on",
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

  componentDidLoad() {
    const slottedCode: HTMLElement = this.el.querySelector(':scope > *:first-of-type');

    this.editor = monaco.editor.create(this.div, {
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

  private mergeOptions(): monaco.editor.IStandaloneEditorConstructionOptions {
    return {
      ...this.defaultOptions,
      ...(this.options || {})
    };
  }

  render() {
    return (
      <Host>
        <article ref={(el) => (this.div = el as HTMLDivElement)}></article>
      </Host>
    );
  }
}