import { EventEmitter } from '../../stencil-public-runtime';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
export declare class DnnMonacoEditor {
  el: HTMLDnnMonacoEditorElement;
  /** Sets the monaco editor options. */
  options: editor.IStandaloneEditorConstructionOptions;
  /** Event to indicate editor has loaded */
  editorDidLoad: EventEmitter<void>;
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
  private editor;
  private readonly defaultOptions;
  componentWillLoad(): Promise<void>;
  componentDidLoad(): void;
  private getSlottetCode;
  private loadScript;
  private getFullAssetPath;
  private loadMonacoEditor;
  private initializeEditor;
  render(): any;
}
