import { Component, Element, Host, h, Prop, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'dnn-modal',
  styleUrl: 'dnn-modal.scss',
  shadow: true
})
export class DnnModal {
  
  @Element() el!: HTMLDnnModalElement;
  
  /**
   * @deprecated boolean props should always default to being false per html specs, use preventBackdropDismiss instead, will be removed in v0.28.0.
   * Pass false to remove the backdrop click auto-dismiss feature.
   */
   
  @Prop() backdropDismiss?: boolean;

  /**
   * Pass true to remove the backdrop click auto-dismiss feature.
   * Defaults to false.
   */
  @Prop({mutable: true, reflect: true}) preventBackdropDismiss?: boolean = false;

  /**
   * Optionally pass the aria-label text for the close button.
   * Defaults to "Close modal" if not provided.
   */
  @Prop() closeText?: string = "Close modal";

  /**
   * If set to true, the modal becomes resizable.
   */
  @Prop() resizable?: boolean = false;

  /**
   * @deprecated boolean props should always default to being false per html specs, use hideCloseButton instead, will be removed in v0.28.0.
   * Optionally you can pass false to not show the close button.
   * If you decide to do so, you should either not also prevent dismissal by clicking the backdrop
   * or provide your own dismissal logic in the modal content.
   */
   
  @Prop() showCloseButton?: boolean;

  /**
   * Optionally you can pass true to not show the close button.
   * If you decide to do so, you should either not also prevent dismissal by clicking the backdrop
   * or provide your own dismissal logic in the modal content.
   */
  @Prop({mutable: true, reflect: true}) hideCloseButton: boolean = false;

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

 componentWillLoad() {
   if (this.backdropDismiss != undefined) {
    // eslint-disable-next-line no-console
    console.warn("The 'backdropDismiss' prop is deprecated. Use 'preventBackdropDismiss' instead.");
    this.preventBackdropDismiss = !this.backdropDismiss;
  }

  if (this.showCloseButton != undefined) {
    // eslint-disable-next-line no-console
    console.warn("The 'showCloseButton' prop is deprecated. Use 'hideCloseButton' instead.");
    this.hideCloseButton = !this.showCloseButton;
  }
 }
 
 componentDidLoad() {
   this.seDrag?.addEventListener("mousedown", this.handleResizeMouseDown);
   addEventListener("mouseup", this.handleResizeMouseUp);
  }

  
  disconnectedCallback() {
    this.seDrag?.removeEventListener("mousedown", this.handleResizeMouseDown);
    removeEventListener("mouseup", this.handleResizeMouseUp);
  }
  
  
  
  private modal!: HTMLDivElement;
  private seDrag!: HTMLDivElement;
  private mouseX = 0;
  private mouseY = 0;
  private w = 0;
  private h = 0;
  private handleDismiss(){
    this.visible = false;
    this.dismissed.emit();
  }

  // FOR BACKDROP CLICK
  private handleBackdropClick(e: MouseEvent): void {
    const element = (e.target as HTMLElement);
    if (element.id === "backdrop" && !this.preventBackdropDismiss){
      this.handleDismiss();
    }
  }


  // FOR RESIZING
  private handleResizeMouseMove = (ev:MouseEvent ) => {
    
    // deviding by two because the modal is centered. 
    const dx = (ev.clientX - this.mouseX) * 2;
    const dy = (ev.clientY - this.mouseY) * 2;

    this.modal.style.width = `${this.w + dx}px`;
    this.modal.style.height = `${this.h + dy}px`;
  }


  private handleResizeMouseDown = (ev: MouseEvent) => {
    addEventListener("mousemove", this.handleResizeMouseMove)
    this.mouseX = ev.clientX;
    this.mouseY = ev.clientY;

    const modalStyles = getComputedStyle(this.modal);
    
    this.w = parseInt(modalStyles.width, 10);
    this.h = parseInt(modalStyles.height, 10);
  
  }

  private handleResizeMouseUp = () => {
    removeEventListener("mousemove", this.handleResizeMouseMove)
  }
  
  

  render() {
    return (
      <Host>
        <div id="backdrop"
          class={this.visible ? 'overlay visible' : 'overlay'}
          onClick={e => this.handleBackdropClick(e)}
        >
          <div class="modal" ref={el=>this.modal = el!}> 
            {!this.hideCloseButton &&
              <button
                class="close"
                aria-label={this.closeText}
                onClick={() => this.handleDismiss()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
              </button>
            }
            <div class="content">
              <slot></slot>
            </div>
            { this.resizable && <div class='se' ref={el=>this.seDrag = el!}></div>}
          </div>
        </div>
      </Host>
    );
  }
}


