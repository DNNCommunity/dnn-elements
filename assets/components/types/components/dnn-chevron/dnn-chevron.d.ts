import { EventEmitter } from '../../stencil-public-runtime';
export declare class DnnChevron {
  /** Expand text for screen readers */
  expandText?: string;
  /** Collapse text for screen readers */
  collapseText?: string;
  /** Is the chevron expanded */
  expanded?: boolean;
  /** Fires up when the expanded status changes */
  changed: EventEmitter;
  handleExpandedChanged(newValue: boolean): void;
  render(): any;
}
