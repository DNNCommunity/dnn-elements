import {Component, Event, EventEmitter, h, Host, Prop, Watch, AttachInternals, State } from '@stencil/core';
import * as monaco from "@timkendrick/monaco-editor";

@Component({
  tag: 'dnn-monaco-editor',
  styleUrl: 'dnn-monaco-editor.scss',
  scoped: true,
  formAssociated: true,
})
export class DnnMonacoEditor {
  /** Defines the language for the editor. */
  @Prop() language: "plaintext" | "bat" | "coffeescript" | "c" | "cpp" | "csharp" | "dockerfile" | "fsharp" | "go" | "handlebars" | "html" | "ini" | "pug" | "java" | "lua" | "markdown" | "msdax" | "objective-c" | "postiats" | "php" | "powershell" | "python" | "r" | "razor" | "ruby" | "swift" | "sql" | "vb" | "xml" | "less" | "scss" | "css" | "yaml" | "sol" | "sb" | "json" | "typescript" | "javascript" = "html";
  @Watch('language')
  languageChanged(newValue: string, oldValue: string) {
    if (newValue != oldValue) {
      monaco.editor.setModelLanguage(this.editor.getModel(), newValue);
    }
  }
  
  /** Sets the code contained in the editor */
  @Prop({mutable: true}) value: string = "";
  @Watch('value')
  valueChanged(newValue: string, oldValue: string) {
    if (newValue != oldValue) {
      this.editor.setValue(newValue);
    }
  }
  
  /** The name of the control to use for forms. */
  @Prop() name?: string;
  
  /** Emits the new value of the content when it is changed. */
  @Event() contentChanged!: EventEmitter<string>;
  
  @AttachInternals() internals!: ElementInternals;
  
  @State() focused = false;
  
  private editorContainer!: HTMLDivElement;
  private editor!: monaco.editor.IStandaloneCodeEditor;
  private textArea!: HTMLTextAreaElement;
  
  componentDidLoad(){
    this.originalValue = this.value;
    this.editor = monaco.editor.create(this.editorContainer, {
      value: this.value,
      language: this.language,
      theme: "vs-dark",
      automaticLayout: true,
    });
    this.setFormValue();
    this.editor.onDidChangeModelContent(() => {
      this.value = this.editor.getValue();
      this.contentChanged.emit(this.value);
      this.setFormValue();
    });

    this.textArea = this.editorContainer.querySelector("textarea")!;
    this.textArea.addEventListener("focus", () => {
      this.focused = true;
    });
    this.textArea.addEventListener("blur", () => this.focused = false);
    this.textArea.addEventListener("focus", () => this.focused = true);
  }

  formResetCallback() {
    this.internals.setValidity({});
    this.value = this.originalValue;
    this.setFormValue();
  }

  private originalValue!: string;

  private focusElement() {
    var element = this.editorContainer.querySelector("textarea")!;
    element.focus();
  }

  private setFormValue() {
    if (this.name != undefined){
      var data = new FormData();
      data.append(this.name, this.value);
      this.internals.setFormValue(data);
    }
  }

  render() {
    return (
      <Host
        tabIndex={this.focused ? -1 : 0}
        onFocus={() => this.focusElement()}
        onBlur={() => this.textArea.blur()}
      >
        <div
          class="editor-container"
          ref={el => this.editorContainer = el!}
        />
      </Host>
    );
  }
}