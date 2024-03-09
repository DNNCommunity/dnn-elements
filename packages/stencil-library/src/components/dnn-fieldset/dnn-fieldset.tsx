import { Component, Host, h, Prop, Method } from '@stencil/core';

@Component({
  tag: 'dnn-fieldset',
  styleUrl: 'dnn-fieldset.scss',
  shadow: true,
})
export class DnnFieldset {

  /** If true the fieldset will display as focused. */
  @Prop({mutable: true, reflect: true}) focused: boolean;

  /** If true, the fieldset will display as disabled. */
  @Prop({mutable: true, reflect: true}) disabled: boolean;

  /** If true, the  fieldset will display as invalid. */
  @Prop({mutable: true, reflect: true}) invalid: boolean;

  /** Sets the text of the fieldset label (caption). */
  @Prop() label: string;

  /** If true, the label will float in the container, set false to show it on top. */
  @Prop({mutable: true, reflect: true}) floatLabel: boolean;

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

  /** Sets the fieldset to an invalid state. */
  @Method()
  async setInvalid() {
    this.invalid = true;
  }

  /** Sets the fieldset to a valid state. */
  @Method()
  async setValid() {
    this.invalid = false;
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
          <div class="inner-container">
            {this.label &&
                <label>
                  <slot name="label-prefix"></slot>
                  {this.label}
                  <slot name="label-suffix"></slot>
                </label>
            }
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
