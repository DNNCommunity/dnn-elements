import { EventEmitter } from '../../stencil-public-runtime';
export declare class DnnModal {
  el: HTMLDnnModalElement;
  /**
   * Pass false to remove the backdrop click auto-dismiss feature.
   */
  backdropDismiss: boolean;
  /**
   * Optionally pass the aria-label text for the close button.
   * Defaults to "Close modal" if not provided.
   */
  closeText?: string;
  /**
   * Optionally you can pass false to not show the close button.
   * If you decide to do so, you should either not also prevent dismissal by clicking the backdrop
   * or provide your own dismissal logic in the modal content.
   */
  showCloseButton?: boolean;
  /**
   * Reflects the visible state of the modal.
   */
  visible: boolean;
  /**
   * Shows the modal
   */
  show(): Promise<void>;
  /**
   * Hides the modal
   */
  hide(): Promise<void>;
  /**
   * Fires when the modal is dismissed.
   */
  dismissed: EventEmitter;
  private handleDismiss;
  private handleBackdropClick;
  render(): any;
}
