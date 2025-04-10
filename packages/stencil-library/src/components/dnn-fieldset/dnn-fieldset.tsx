import { Component, Host, h, Prop, Method, State } from '@stencil/core';

/** A custom input component that wraps the html input element is a mobile friendly component that supports a label, some help text and other features.
 * @slot label-prefix - Can be used to inject content before the labe.
 * @slot label-suffix - Can be used to inject content after the label.
 */
@Component({
  tag: 'dnn-fieldset',
  styleUrl: 'dnn-fieldset.scss',
  shadow: true,
})
export class DnnFieldset {

  /** If true the fieldset will display as focused. */
  @Prop({mutable: true, reflect: true}) focused?: boolean;

  /** If true, the fieldset will display as disabled. */
  @Prop({mutable: true, reflect: true}) disabled?: boolean;

  /** If true, the  fieldset will display as invalid. */
  @Prop({mutable: true, reflect: true}) invalid?: boolean;

  /** Sets the text of the fieldset label (caption). */
  @Prop() label?: string;

  /** If true, the label will float in the container, set false to show it on top. */
  @Prop({mutable: true, reflect: true}) floatLabel?: boolean;

  /** Can be used to show some help text about this field. */
  @Prop() helpText?: string;

  /** Can be set to specify if the fieldset can be resized by the user. */
  @Prop() resizable: "none" | "both" | "horizontal" | "vertical" | "block" | "inline" = "none";

  /** Sets the fieldset to the focused state. */
  @Method()
  async setFocused() {
    this.focused = true;
  }

  /** Unsets the fieldset focused state. */
  @Method()
  async setBlurred() {
    this.focused = false;
  }

  /** Sets the fieldset to a disabled state. */
  @Method()
  async disable() {
    this.disabled = true;
  }

  /** Sets the fieldset to an enabled state. */
  @Method()
  async enable() {
    this.disabled = false;
  }

  /** Places the label on the top of the container. */
  @Method()
  async pinLabel() {
    this.floatLabel = false;
  }

  /** Places the label in the vertical middle of the container. */
  @Method()
  async unpinLabel() {
    this.floatLabel = true;
  }

  /** Sets the validity of the field. */
  @Method()
  async setValidity(valid: boolean, message?: string) {
    this.invalid = !valid;
    this.customValidityMessage = message;
  }

  @State() customValidityMessage?: string;

  private getContainerClasses() {
    const classes: string[] = ["container"];
    if (this.focused) {
      classes.push("focused");
    }

    if (this.disabled)
    {
      classes.push("disabled");
    }

    if (this.invalid){
      classes.push("invalid");
    }

    if (this.floatLabel && !this.focused)
    {
      classes.push("float-label");
    }

    return classes.join(" ");
  }

  render() {
    return (
      <Host>
        <div class={this.getContainerClasses()}>
          {this.label &&
            <label>
              <slot name="label-prefix"></slot>
              {this.label}
              <slot name="label-suffix"></slot>
            </label>
          }
          <div class="resizer" style={{resize: this.resizable, overflow: this.resizable == "none" ? "visible" : "auto"}}>
            <div class="inner-container">
              <slot></slot>
            </div>
          </div>
        </div>
        {this.invalid && this.customValidityMessage &&
          <div class="error-message">
            {this.customValidityMessage}
          </div>
        }
        {!this.invalid &&
          <div class="help-text">{this.helpText}</div>
        }
      </Host>
    );
  }

}
