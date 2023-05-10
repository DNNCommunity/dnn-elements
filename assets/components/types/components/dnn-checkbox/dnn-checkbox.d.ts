import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot - The label for the checkbox.
 * @slot checkedicon - Allows overriding the default checked icon.
 * @slot uncheckedicon - Allows overriding the unchecked icon.
 * @slot intermediateicon - If intermadiate state is used, allows overriding its icon.
 */
export declare class DnnCheckbox {
  el: HTMLDnnCheckboxElement;
  /** Defines if the checkbox is checked (true) or unchecked (false) or in an intermediate state (undefined) */
  checked: "checked" | "unchecked" | "intermediate";
  /** Defines if clicking the checkbox will go through the intermediate state between checked and unchecked (tri-state) */
  useIntermediate: boolean;
  /** The value for this checkbox (not to be confused with its checked state). */
  value: string;
  /** Fires up when the checkbox checked property changes. */
  checkedchange: EventEmitter<"checked" | "unchecked" | "intermediate">;
  private changeState;
  render(): any;
}
