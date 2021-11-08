import { Component, Element, Host, h, Prop, Event, EventEmitter, Method, State } from '@stencil/core';
import cancelIcon from "@material-design-icons/svg/filled/cancel.svg";

@Component({
  tag: 'dnn-modal',
  styleUrl: 'dnn-modal.scss',
  shadow: true
})
export class DnnModal {
  
  @Element() el!: HTMLDnnModalElement;
  
  /**
   * Pass false to remove the backdrop click auto-dismiss feature.
   */
  @Prop() backdropDismiss: boolean = true;

  /**
   * Optionally pass the aria-label text for the close button.
   * Defaults to "Close modal" if not provided.
   */
  @Prop() closeText?: string = "Close modal";

  /**
   * Optionally you can pass false to not show the close button.
   * If you decide to do so, you should either not also prevent dismissal by clicking the backdrop
   * or provide your own dismissal logic in the modal content.
   */
  @Prop() showCloseButton?: boolean = true;

  @State() visible: boolean = false;

  /**
   * Shows the modal
   */
  @Method()
  async show() {
    this.visible = true;
  }

  /**
   * Hides the modal
   */
  @Method()
  async hide() {
    this.visible = false;
  }

  /**
   * Fires when the modal is dismissed.
   */
  @Event() dismissed!: EventEmitter;

  private handleDismiss(){
    this.visible = false;
    this.dismissed.emit();
  }

  private handleBackdropClick(e: MouseEvent): void {
    const element = (e.target as HTMLElement);
    if (element.id === "backdrop" && this.backdropDismiss){
      this.handleDismiss();
    }
  }

  render() {
    return (
      <Host>
        <div id="backdrop"
          class={this.visible ? 'overlay visible' : 'overlay'}
          onClick={e => this.handleBackdropClick(e)}
        >
          <div class="modal">
            {this.showCloseButton &&
              <button
                class="close"
                innerHTML={cancelIcon}
                aria-label={this.closeText}
                onClick={() => this.handleDismiss()}
              />
            }
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
