import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { editor } from 'monaco-editor';
export declare class DnnMonacoEditor implements ComponentInterface {
  private el;
  /** Sets the monaco editor options, see monaco options. */
  options: editor.IStandaloneEditorConstructionOptions;
  /** Sets whether or not the codicon font is loaded from local. */
  /** Default is false and the font will be loaded from https://unpkg.com/browse/@dnncommunity/dnn-elements@0.16.0-beta.4/dist/dnn/assets/monaco-editor/codicon.ttf */
  /** If set to true, then it is the responsibility of the consumer to have codicon.ttf in their distribution (e.g., ./assets/monaco-editor/codicon.ttf). */
  loadFontFromLocal: boolean;
  /** Event to indicate editor has loaded */
  editorDidLoad: EventEmitter<void>;
  private editor;
  private article;
  private aria;
  private readonly defaultOptions;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): Promise<void>;
  private dispose;
  /** Watch editor option changes */
  onOptionsChange(): void;
  /** Set focus to editor */
  setFocus(): Promise<void>;
  /** Update code language editor */
  updateLanguage(languageId: string): Promise<void>;
  /** Get value of the current model attached to this editor. */
  getValue(): Promise<string>;
  /**
   * Sets a new editor value.
   * @param newValue The new value to set.
   */
  setValue(newValue: string): Promise<void>;
  private mergeOptions;
  render(): any;
}
