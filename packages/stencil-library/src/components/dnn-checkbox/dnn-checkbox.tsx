import { Component, Element, Host, h, Prop, Event, EventEmitter, AttachInternals, Watch, State, Listen, Method } from '@stencil/core';
import { CheckedState } from './types';

/**
 * @slot checkedicon - Allows overriding the default checked icon.
 * @slot uncheckedicon - Allows overriding the unchecked icon.
 * @slot intermediateicon - If intermadiate state is used, allows overriding its icon.
 */
@Component({
  tag: 'dnn-checkbox',
  styleUrl: 'dnn-checkbox.scss',
  shadow: true,
  formAssociated: true,
})
export class DnnCheckbox {
  @Element() el!: HTMLDnnCheckboxElement;

  /** Defines if the checkbox is checked (true) or unchecked (false) or in an intermediate state (undefined) */
  @Prop({mutable: true}) checked: CheckedState = "unchecked";

  /** Defines if clicking the checkbox will go through the intermediate state between checked and unchecked (tri-state) */
  @Prop() useIntermediate: boolean = false;

  /** The value for this checkbox (not to be confused with its checked state). */
  @Prop() value: string = "on";

  /** The name to show in the formData (if using forms). */
  @Prop() name = "";

  /** If true, the checkbox needs to be checked for the form validation to succeed. */
  @Prop() required: boolean = false;

  /** A function that will be called when the checkbox needs to change state and returns the next state.
   * Can be used to customize the order of the states when the component is clicked.
   * Only called if you also use the tri-state feature (useIntermediate).
   */
  @Prop() nextStateHandler: (currentState: CheckedState) => CheckedState = (currentState) => this.defaultNextStateHandler(currentState);

  /** Can be used to customize the validation message when the field is required but not checked. */
  @Prop() requiredMessage: string = "The checkbox must be checked";

  /** Fires up when the checkbox checked property changes. */
  @Event() checkedchange!: EventEmitter<"checked" | "unchecked" | "intermediate">;

  @Listen("click", { capture: true })
  handleClick() {
    this.changeState();
  }

  /** Reports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState */
    @Method()
    async checkValidity(): Promise<ValidityState> {
      if (this.required && this.checked != "checked") {
        this.valid = false;
      }
      if (!this.valid) {
        this.internals.setValidity({ valueMissing: true }, this.requiredMessage);
      }
      return this.internals.validity;
    }

  @State() focused = false;
  @State() valid = true;
  
  @AttachInternals() internals!: ElementInternals;
  
  private originalChecked!: CheckedState;
  private button!: HTMLButtonElement;

  componentWillLoad() {
    this.originalChecked = this.checked;
    this.internals.setFormValue(this.checked);
  }

  @Watch("checked")
  handleCheckedChange(newValue: CheckedState, oldValue: CheckedState) {
    if (newValue !== oldValue && this.checked == "checked") {
      var data = new FormData();
      data.append(this.name, this.value);
      this.internals.setFormValue(data);
      this.internals.setValidity({});
      this.valid = true;
    }

    if (newValue != "checked" && this.required) {
      this.valid = false;
      this.internals.setValidity({ valueMissing: true }, this.requiredMessage);
    }
  }

  formResetCallback() {
    this.internals.setValidity({});
    this.checked = this.originalChecked;
  }

  private defaultNextStateHandler(currentState: CheckedState): CheckedState {
    switch (currentState) {
      case "checked":
          return "intermediate";
        case "intermediate":
          return "unchecked";
        case "unchecked":
          return "checked";
    }
  }

  private changeState(): void {
    if (!this.useIntermediate){
      switch (this.checked) {
        case "checked":
          this.checked = "unchecked";
          break;
        case "unchecked":
        case "intermediate":
          this.checked = "checked";
          break;
        default:
          break;
      }
      this.checkedchange.emit(this.checked);
      return;
    }
    
    this.checked = this.nextStateHandler(this.checked);
    this.checkedchange.emit(this.checked);
  }

  private getButtonClasses(): string | { [className: string]: boolean; } | undefined {
    let classes = `icon ${this.checked}`;
    if (!this.valid) {
      classes += " invalid";
    }

    return classes;
  }

  render() {
    return (
      <Host
        tabIndex={this.focused ? -1 : 0}
        onFocus={() => this.button.focus()}
        onBlur={() => this.button.blur()}
      >
        <button
          ref={el => this.button = el!}
          onFocus={() => this.focused = true}
          onBlur={() => this.focused = false}
          class={this.getButtonClasses()}
        >
          <div class="unchecked">
            <slot name="uncheckedicon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
            </slot>
          </div>
          <div class="checked">
            <slot name="checkedicon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </slot>
          </div>
          <div class="intermediate">
            <slot name="intermediateicon">
              <svg class="undefined" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M17,13H7v-2h10V13z"/></g></g></g></svg>
            </slot>
          </div>
        </button>
      </Host>
    );
  }
}
