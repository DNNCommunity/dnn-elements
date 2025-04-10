import { Component, Element, Host, h, Prop, State, Event, EventEmitter, AttachInternals } from '@stencil/core';

/**
 * @slot Content of the button
 */
@Component({
  tag: 'dnn-button',
  styleUrl: 'dnn-button.scss',
  shadow: true,
  formAssociated: true,
})
export class DnnButton {

  /**
   * Optional button style,
   * @deprecated This property will be reused in the next version to represent the type of button like "submit" or "reset". Use the appearance property instead.
   */
  @Prop() type: 'primary' | 'danger' | 'secondary' | 'tertiary' = 'primary';

  /**
   * Defines the look of the button.
   */
  @Prop() appearance: 'primary' | 'danger' | 'secondary' | 'tertiary' = 'primary';

  /**
   * Optional button type,
   * can be either submit, reset or button and defaults to button if not specified.
   * Warning: DNN wraps the whole page in a form, only use this if you are handling
   * form submission manually.
   * Warning: This will be deprecated in the next version and replaced with a new 'type' property.
   */
  @Prop() formButtonType: 'submit' | 'reset' | 'button' = 'button';

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

  /** 
   * Fires when confirm is true and the user confirms the action.
  */
  @Event({
    bubbles: true,
    cancelable: true,
    composed: true
  }) confirmed!: EventEmitter;

  /**
   * Fires when confirm is true and the user cancels the action.
   */
  @Event({bubbles: true}) canceled!: EventEmitter;

  @State() focused = false;
  @State() modalVisible = false;

  @Element() el!: HTMLDnnButtonElement;

  @AttachInternals() internals!: ElementInternals;

  private button!: HTMLButtonElement;
  private modal!: HTMLDnnModalElement;

  componentDidLoad(){
    this.modal = this.el.shadowRoot!.querySelector('dnn-modal')!;
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
      return;
    }

    if (this.formButtonType === 'submit')
    {
      var form = this.internals.form;
      if (form){
        var validity = form.checkValidity();
        if (validity){
          const submitButton = document.createElement('button');
          submitButton.type = 'submit';
          submitButton.style.display = 'none';
          form.appendChild(submitButton);
          submitButton.click();
          form.removeChild(submitButton);
        }
        else
        {
          var formControls = form.elements;
          for (let i = 0; i < formControls.length; i++){
            var control = formControls[i] as HTMLFormElement;
            try{
              if ('checkValidity' in control && typeof control['checkValidity'] === 'function') {
                control.checkValidity();
              }
            }
            catch(e){
              // eslint-disable-next-line no-console
              console.error(e, control);
            }
          }
          var elementToScrollTo = form.querySelector(':invalid');
          if (elementToScrollTo){
            elementToScrollTo.scrollIntoView({behavior: 'smooth', block: 'center'});
            if ('focus' in elementToScrollTo && typeof elementToScrollTo['focus'] === 'function') {
              elementToScrollTo.focus();
            }
          }
        }
      }
    }
    if (this.formButtonType === 'reset')
    {
      var form = this.internals.form;
      if (form){
        var resetButton = document.createElement('button');
        resetButton.type = 'reset';
        resetButton.style.display = 'none';
        form.appendChild(resetButton);
        resetButton.click();
        form.removeChild(resetButton);
      }
    }
  }

  private getElementClasses(): string | { [className: string]: boolean; } {
    const classes: string[] = [];
    classes.push(this.appearance);
    if (this.reversed){
      classes.push('reversed');
    }
    if (this.size !== 'normal' && this.size !== undefined){
      classes.push(this.size);
    }
    if (this.disabled) {
      classes.push('disabled');
    } 
    return classes.join(' ');
  }

  render() {
    return (
      <Host
        class={this.getElementClasses()}
        tabIndex={this.focused ? -1 : 0}
        onFocus={() => this.button.focus()}
        onBlur={() => this.button.blur()}
      >
        <button
          ref={el => this.button = el!}
          class="button"
          onClick={() => this.handleClick()}
          disabled={this.disabled}
          onFocus={() => this.focused = true}
          onBlur={() => this.focused = false}
        >
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
                <dnn-button appearance='primary' reversed style={{margin: '5px'}} onClick={() => this.handleCancel()}>{this.confirmNoText}</dnn-button>
                <dnn-button appearance='primary' style={{margin: '5px'}} onClick={() => this.handleConfirm()}>{this.confirmYesText}</dnn-button>
              </div>
            </dnn-modal>
          }
      </Host>
    );
  }
}
