import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot default - The split divider control you want to use.
 * @slot left - The content of the left pane.
 * @slot right - The content of the right pane.
 */
export declare class DnnVerticalSplitview {
  /** The width of the splitter area. */
  splitterWidth: number;
  /** The percentage position of the splitter in the container. */
  splitWidthPercentage: number;
  private splitter;
  private resizeObserver;
  /** Sets the width percentage of the divider */
  setSplitWidthPercentage(newWidth: number): Promise<void>;
  /** Gets the current divider position percentage. */
  getSplitWidthPercentage(): Promise<number>;
  /** Fires when the width of the divider changes. */
  widthChanged: EventEmitter<number>;
  leftWidth: number;
  rightWidth: number;
  element: HTMLDnnVerticalSplitviewElement;
  componentDidLoad(): void;
  private previousTouch;
  private handleMouseDown;
  private handleKeyDown;
  render(): any;
}
