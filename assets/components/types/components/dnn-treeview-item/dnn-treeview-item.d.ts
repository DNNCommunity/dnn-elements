import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot - The content of this node.
 * @slot children - The content nested under this node.
*/
export declare class DnnTreeviewItem {
  private expander;
  el: HTMLDnnTreeviewItemElement;
  /** Defines if the current node is expanded.  */
  expanded: boolean;
  /** Fires when the user expands a node. */
  userExpanded: EventEmitter<void>;
  /** Fires when the user collapses a node. */
  userCollapsed: EventEmitter<void>;
  /** Manages state for whether or not item has children. */
  hasChildren: boolean;
  /** Watch expanded Prop */
  watchExpanded(expanded: boolean): void;
  private childElement;
  private collapsible;
  componentDidLoad(): void;
  private toggleCollapse;
  render(): any;
}
export interface ExpandedToggledEvent {
  state: "expanded" | "collapsed";
  height: number;
}
