import { EventEmitter } from '../../stencil-public-runtime';
export declare class DnnSearchbox {
  /**
   * Sets the field placeholder text.
   */
  placeholder?: string;
  /**
   * Debounces the queryChanged by 500ms.
   */
  debounced: boolean;
  /** Sets the query */
  query: string;
  /**
   * Fires up each time the search query changes.
   * The data passed is the new query.
   */
  queryChanged: EventEmitter<string>;
  fireQueryChanged(): void;
  private handleQueryChanged;
  private debouncedHandleQueryChanged;
  render(): any;
}
