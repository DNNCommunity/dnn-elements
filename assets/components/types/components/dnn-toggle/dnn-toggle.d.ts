import { EventEmitter } from "../../stencil-public-runtime";
import { DnnToggleChangeEventDetail } from "./toggle-interface";
export declare class DnnToggle {
  element: HTMLDnnToggleElement;
  /** If 'true' the toggle is checked (on). */
  checked: boolean;
  /** If 'true' the toggle is not be interacted with. */
  disabled: boolean;
  /** Fires when the toggle changed */
  checkChanged: EventEmitter<DnnToggleChangeEventDetail>;
  checkedChanged(isChecked: boolean): void;
  render(): any;
}
