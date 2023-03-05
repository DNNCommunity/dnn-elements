import { EventEmitter } from '../../stencil-public-runtime';
export declare class DnnCollapsible {
  el: HTMLDnnCollapsibleElement;
  /** Defines if the panel is expanded or not. */
  expanded: boolean;
  /** Defines the transition time in ms, defaults to 150ms */
  transitionDuration?: number;
  /** Fires whenever the collapsible height has changed */
  dnnCollapsibleHeightChanged: EventEmitter<void>;
  handleHeightChanged(): void;
  /**
   * Updates the component height, use to update after a slot content changes.
   */
  updateSize(): Promise<void>;
  handledExpandedChanged(expanded: boolean): void;
  private container;
  componentDidLoad(): void;
  render(): any;
}
