import { Component, Element, Host, h, Prop, Event, EventEmitter, Method, State } from '@stencil/core';

@Component({
  tag: 'dnn-modal',
  styleUrl: 'dnn-modal.scss',
  shadow: true
})
export class DnnModal {
  
  @Element() el!: HTMLElement;
  
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

  handleDismiss(){
    this.visible = false;
    this.dismissed.emit();
  }

  handleBackdropClick(e: MouseEvent): void {
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
              <button class="close" aria-label={this.closeText}
                onClick={() => this.handleDismiss()}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg>
              </button>
            }
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
