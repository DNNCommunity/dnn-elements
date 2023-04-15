import { Component, Element, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

/**
 * @slot Content of the button
 */
@Component({
  tag: 'dnn-button',
  styleUrl: 'dnn-button.scss',
  shadow: true
})
export class DnnButton {

  /**
   * Optional button style,
   * can be either primary, secondary or tertiary and defaults to primary if not specified
   */
  @Prop() type: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * Optionally reverses the button style.
   */
  @Prop() reversed: boolean = false;

  /**
   * Optionally sets the button size, small normal or large, defaults to normal
   */
  @Prop() size?: 'small' | 'normal' | 'large' = 'normal';

  /**
   * Optionally add a confirmation dialog before firing the action.
   */
  @Prop() confirm?: boolean = false;

  /**
   * The text of the yes button for confirmation.
   */
  @Prop() confirmYesText?: string = "Yes";

  /**
   * The text of the no button for confirmation.
   */
  @Prop() confirmNoText?: string = "No";

  /**
   * The text of the confirmation message;
   */
  @Prop() confirmMessage?: string = "Are you sure ?";
  
  /**
   * Disables the button
   */
  @Prop() disabled: boolean = false;

  @State() modalVisible: boolean = false;

  @Element() el!: HTMLDnnButtonElement;

  private modal!: HTMLDnnModalElement;

  /** 
   * Fires when confirm is true and the user confirms the action.
  */
  @Event({
    bubbles: true,
    cancelable: true,
    composed: true
  }) confirmed: EventEmitter;

  /**
   * Fires when confirm is true and the user cancels the action.
   */
  @Event({bubbles: true}) canceled: EventEmitter;

  componentDidLoad(){
    this.modal = this.el.shadowRoot.querySelector('dnn-modal');
  }

  private handleConfirm(){
    this.modal.hide();
    this.modalVisible = false;
    this.confirmed.emit();
  }

  private handleCancel(){
    this.modal.hide();
    this.modalVisible = false;
    this.canceled.emit();
  }
  
  private handleClick(): void {
    if (this.confirm && !this.modalVisible){
      this.modal.show();
      this.modalVisible = true;
    }
  }

  private getElementClasses(): string | { [className: string]: boolean; } {
    const classes: string[] = [];
    classes.push(this.type);
    if (this.reversed){
      classes.push('reversed');
    }
    if (this.size !== 'normal'){
      classes.push(this.size);
    }
    return classes.join(' ');
  }

  render() {
    return (
      <Host class={this.getElementClasses()} disabled={this.disabled} style={{'pointer-events': this.disabled ? 'none' : 'all'}}>
        <button class="button" onClick={() => this.handleClick()} disabled={this.disabled}>
          <slot></slot>
        </button>
        {this.confirm &&
            <dnn-modal showCloseButton={false} backdropDismiss={false}>
              <p>{this.confirmMessage}</p>
              <div style={
                {
                  display: 'flex',
                  justifyContent: 'flex-end'
                }
              }>
                <dnn-button type='primary' style={{margin: '5px'}} onClick={() => this.handleConfirm()}>{this.confirmYesText}</dnn-button>
                <dnn-button type='secondary' style={{margin: '5px'}} onClick={() => this.handleCancel()}>{this.confirmNoText}</dnn-button>
              </div>
            </dnn-modal>
          }
      </Host>
    );
  }
}
