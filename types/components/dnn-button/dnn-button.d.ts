import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot Content of the button
 */
export declare class DnnButton {
  /**
   * Optional button style,
   * can be either primary, secondary or tertiary and defaults to primary if not specified
   */
  type: 'primary' | 'secondary' | 'tertiary';
  /**
   * Optionally reverses the button style.
   */
  reversed: boolean;
  /**
   * Optionally sets the button size, small normal or large, defaults to normal
   */
  size?: 'small' | 'normal' | 'large';
  /**
   * Optionally add a confirmation dialog before firing the action.
   */
  confirm?: boolean;
  /**
   * The text of the yes button for confirmation.
   */
  confirmYesText?: string;
  /**
   * The text of the no button for confirmation.
   */
  confirmNoText?: string;
  /**
   * The text of the confirmation message;
   */
  confirmMessage?: string;
  /**
   * Disables the button
   */
  disabled: boolean;
  modalVisible: boolean;
  el: HTMLDnnButtonElement;
  private modal;
  /**
   * Fires when confirm is true and the user confirms the action.
  */
  confirmed: EventEmitter;
  /**
   * Fires when confirm is true and the user cancels the action.
   */
  canceled: EventEmitter;
  componentDidLoad(): void;
  private handleConfirm;
  private handleCancel;
  private handleClick;
  private getElementClasses;
  render(): any;
}
