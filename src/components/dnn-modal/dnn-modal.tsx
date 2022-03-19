import { Component, Element, Host, h, Prop, Event, EventEmitter, Method } from '@stencil/core';

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

  /**
   * Reflects the visible state of the modal.
   */
  @Prop({mutable: true, reflect: true}) visible: boolean = false;

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
                aria-label={this.closeText}
                onClick={() => this.handleDismiss()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
              </button>
            }
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
